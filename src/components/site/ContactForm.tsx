export function ContactForm() {
  return (
    <form className="section-card space-y-4">
      <h2 className="text-2xl font-semibold text-ink-900">Contact Form</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-ink-700">
          First Name
          <input
            type="text"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm font-semibold text-ink-700">
          Last Name
          <input
            type="text"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm font-semibold text-ink-700">
          Phone
          <input
            type="tel"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm font-semibold text-ink-700">
          Email
          <input
            type="email"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-3 py-2"
          />
        </label>
      </div>
      <label className="text-sm font-semibold text-ink-700">
        Questions/Comments
        <textarea
          className="mt-2 w-full rounded-lg border border-sand-200 bg-white px-3 py-2"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-sand-50"
      >
        Submit
      </button>
    </form>
  );
}
