/**
 * Plain GET form: works without JavaScript and hands the store URL to /contact.
 */
export function AuditForm({ id = "store" }: { id?: string }) {
  return (
    <form action="/contact" method="get" className="w-full">
      <label htmlFor={id} className="sr-only">
        Your store URL
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center rounded-xl border-2 border-ink bg-white pl-4 shadow-[6px_6px_0_0_var(--color-ultra)] focus-within:border-ultra focus-within:bg-mark/40">
          <span aria-hidden className="select-none text-slate">
            https://
          </span>
          <input
            id={id}
            name="store"
            type="text"
            inputMode="url"
            autoComplete="url"
            required
            placeholder="yourstore.com"
            className="min-w-0 flex-1 bg-transparent px-1 py-4 text-lg outline-none placeholder:text-slate/60"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-ultra px-6 py-4 text-lg font-semibold text-white border-2 border-ink shadow-[6px_6px_0_0_var(--color-ink)] btn-pop hover:bg-ink sm:ml-2"
        >
          Request free audit
        </button>
      </div>
    </form>
  );
}
