export type CTA = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt?: string;
  originUrl?: string;
};

export type Section = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  ctas?: CTA[];
  images?: ImageAsset[];
};

export type Hero = {
  title?: string;
  subtitle?: string;
  description?: string;
  ctas?: CTA[];
  image?: ImageAsset | null;
};

export type PageContent = {
  slug: string;
  url: string;
  title?: string;
  h1?: string;
  description?: string;
  hero?: Hero;
  sections: Section[];
  images?: ImageAsset[];
};

export type SiteContent = {
  name: string;
  phone?: string;
  phoneLink?: string;
  text?: string;
  textLink?: string;
  email?: string;
  tollFree?: string;
  address?: string;
};
