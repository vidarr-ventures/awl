import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const ASSET_ROOT = path.join(ROOT, "public", "awl-assets");
const CONTENT_ROOT = path.join(ROOT, "src", "content", "ingested");

const SOURCES = {
  home: "https://adoptionswithlove.org/",
  "areas-we-service": "https://adoptionswithlove.org/areas-we-service",
  "make-an-adoption-plan": "https://adoptionswithlove.org/make-an-adoption-plan",
  "free-services-for-birthmothers": "https://adoptionswithlove.org/free-services-for-birthmothers",
  "contact-us": "https://adoptionswithlove.org/contact-us",
  "texas-adoption": "https://adoptionswithlove.org/location/texas-adoption",
  "florida-adoption": "https://adoptionswithlove.org/location/florida-adoption",
  "georgia-adoption": "https://adoptionswithlove.org/location/georgia-adoption",
  "north-carolina-adoption": "https://adoptionswithlove.org/location/north-carolina-adoption",
  "ohio-adoption": "https://adoptionswithlove.org/location/ohio-adoption"
};

const MAIN_SELECTORS = [
  "main",
  "article",
  ".entry-content",
  ".site-content",
  "#content",
  ".elementor",
  ".elementor-location-single",
  "body"
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function isMeaningfulText(text) {
  const cleaned = cleanText(text);
  if (!cleaned) return false;
  if (/^\d+(\s*years?)?$/i.test(cleaned)) return false;
  return cleaned.length >= 15;
}

function normalizeDisplay(text) {
  const cleaned = cleanText(text);
  return cleaned.replace(/^(call|text)\s*:?\s*/i, "").trim();
}

function normalizeLink(href) {
  if (!href) return undefined;
  return href.replace(/^tel:/i, "").replace(/^sms:/i, "").replace(/^\/\/+/, "");
}

function uniqueFilename(url) {
  const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8);
  const parsed = new URL(url);
  const base = path.basename(parsed.pathname).split("?")[0] || "image";
  const safe = base.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `${hash}-${safe}`;
}

async function downloadImage(url, outDir) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = uniqueFilename(url);
    const outPath = path.join(outDir, filename);
    await fs.promises.writeFile(outPath, buffer);
    return `/awl-assets/${path.basename(outDir)}/${filename}`;
  } catch (error) {
    console.warn(`Failed to download ${url}:`, error.message);
    return null;
  }
}

function extractBackgroundUrls(styleValue) {
  const urls = [];
  const regex = /url\(([^)]+)\)/g;
  let match = regex.exec(styleValue);
  while (match) {
    const raw = match[1].replace(/['\"]/g, "").trim();
    if (raw) urls.push(raw);
    match = regex.exec(styleValue);
  }
  return urls;
}

function extractImageCandidates($, root) {
  const images = [];

  root.find("img").each((_, el) => {
    const src = $(el).attr("src");
    if (src) images.push({ url: src, alt: $(el).attr("alt") || undefined });
  });

  root.find("source").each((_, el) => {
    const srcset = $(el).attr("srcset");
    if (!srcset) return;
    const first = srcset.split(",")[0]?.trim().split(" ")[0];
    if (first) images.push({ url: first });
  });

  root.find("[style]").each((_, el) => {
    const style = $(el).attr("style") || "";
    extractBackgroundUrls(style).forEach((url) => images.push({ url }));
  });

  return images;
}

function pickMain($) {
  for (const selector of MAIN_SELECTORS) {
    const node = $(selector).first();
    if (node.length) return node;
  }
  return $("body");
}

function extractSections($, root) {
  const sections = [];
  let current = { heading: undefined, paragraphs: [], list: [], ctas: [], images: [] };

  const pushSection = () => {
    const hasContent =
      current.paragraphs.length ||
      current.list.length ||
      current.ctas.length ||
      current.images.length;
    if (hasContent) sections.push(current);
    current = { heading: undefined, paragraphs: [], list: [], ctas: [], images: [] };
  };

  root.find("h2, h3, p, ul, ol, a, img, .elementor-text-editor, .elementor-widget-text-editor").each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    const $el = $(el);

    if (tag === "h2" || tag === "h3") {
      pushSection();
      current.heading = cleanText($el.text());
      return;
    }

    if (tag === "p" || $el.hasClass("elementor-text-editor") || $el.hasClass("elementor-widget-text-editor")) {
      const text = cleanText($el.text());
      if (isMeaningfulText(text)) current.paragraphs.push(text);
      return;
    }

    if (tag === "ul" || tag === "ol") {
      const items = [];
      $el.find("li").each((_, li) => {
        const text = cleanText($(li).text());
        if (isMeaningfulText(text)) items.push(text);
      });
      if (items.length) current.list.push(...items);
      return;
    }

    if (tag === "a") {
      const label = cleanText($el.text());
      const href = $el.attr("href");
      if (label && href && (/(call|text|contact|learn more|adoption|family|plan)/i.test(label) || /tel:|sms:|mailto:/.test(href))) {
        current.ctas.push({ label, href });
      }
      return;
    }

    if (tag === "img") {
      const src = $el.attr("src");
      if (src) current.images.push({ url: src, alt: $el.attr("alt") || undefined });
    }
  });

  pushSection();

  return sections;
}

function extractSiteContacts($) {
  const telAnchor = $("a[href^='tel:']").first();
  const smsAnchor = $("a[href^='sms:']").first();
  const mailAnchor = $("a[href^='mailto:']").first();

  const phoneLink = normalizeLink(telAnchor.attr("href"));
  const textLink = normalizeLink(smsAnchor.attr("href"));

  const phone = normalizeDisplay(telAnchor.text() || phoneLink || "");
  const text = normalizeDisplay(smsAnchor.text() || textLink || "");
  const email = mailAnchor.attr("href")?.replace("mailto:", "");

  return {
    phone,
    phoneLink,
    text,
    textLink,
    email
  };
}

async function ingestPage(slug, url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) {
    throw new Error(`${url} -> HTTP ${res.status}`);
  }
  const html = await res.text();
  const $ = cheerio.load(html);

  const main = pickMain($).clone();
  main.find("header, nav, footer, script, style, noscript").remove();

  const h1 = cleanText(main.find("h1").first().text() || $("h1").first().text());
  const title = cleanText($("title").first().text());
  const description = cleanText($("meta[name='description']").attr("content") || "");

  const sectionData = extractSections($, main);
  const imageCandidates = extractImageCandidates($, main);

  const assetDir = path.join(ASSET_ROOT, slug);
  ensureDir(assetDir);

  const downloadedImages = [];
  for (const img of imageCandidates) {
    if (!img.url) continue;
    const absolute = img.url.startsWith("http") ? img.url : new URL(img.url, url).href;
    const local = await downloadImage(absolute, assetDir);
    if (local) downloadedImages.push({ src: local, alt: img.alt, originUrl: absolute });
  }

  const heroImage = downloadedImages[0];

  const pageContent = {
    slug,
    url,
    title: title || h1,
    h1,
    description,
    hero: {
      title: h1 || title,
      subtitle: undefined,
      description: description || sectionData[0]?.paragraphs?.[0],
      ctas: sectionData[0]?.ctas || [],
      image: heroImage || null
    },
    sections: sectionData.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs,
      list: section.list,
      ctas: section.ctas,
      images: section.images ? section.images.map((img) => {
        const url = img.url.startsWith("http") ? img.url : new URL(img.url, url).href;
        const filename = uniqueFilename(url);
        const localPath = `/awl-assets/${slug}/${filename}`;
        return { src: localPath, alt: img.alt, originUrl: url };
      }) : []
    })),
    images: downloadedImages
  };

  const outPath = path.join(CONTENT_ROOT, `${slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(pageContent, null, 2));

  return { html, pageContent };
}

async function run() {
  ensureDir(ASSET_ROOT);
  ensureDir(CONTENT_ROOT);

  const results = [];

  for (const [slug, url] of Object.entries(SOURCES)) {
    console.log(`Ingesting ${slug}...`);
    const { html } = await ingestPage(slug, url);
    results.push({ slug, html });
  }

  const contacts = results.map((result) => extractSiteContacts(cheerio.load(result.html)));
  const contact = contacts.reduce(
    (acc, current) => ({
      phone: acc.phone || current.phone,
      phoneLink: acc.phoneLink || current.phoneLink,
      text: acc.text || current.text,
      textLink: acc.textLink || current.textLink,
      email: acc.email || current.email
    }),
    { phone: undefined, phoneLink: undefined, text: undefined, textLink: undefined, email: undefined }
  );

  const site = {
    name: "Adoptions With Love",
    phone: contact.phone || "",
    phoneLink: contact.phoneLink || "",
    text: contact.text || "",
    textLink: contact.textLink || "",
    email: contact.email || "",
    tollFree: "",
    address: ""
  };

  fs.writeFileSync(path.join(CONTENT_ROOT, "site.json"), JSON.stringify(site, null, 2));

  console.log("Ingest complete.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
