export function AuditForm({ id, dark }: { id?: string; dark?: boolean }) {
  return (
    <form action="/contact" method="get" className="max-w-xl" id={id}>
      <label htmlFor={`${id ?? "audit"}-store`} className="sr-only">
        Your store URL
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id ?? "audit"}-store`}
          name="store"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="yourstore.com"
          className={`min-w-0 flex-1 rounded-xl border-2 px-4 py-3.5 text-lg focus:border-volt focus:outline-none ${
            dark ? "border-white bg-white text-ink" : "border-ink bg-white"
          }`}
        />
        <button type="submit" className={`btn ${dark ? "bg-lemon text-ink hover:bg-white" : "btn-primary"}`}>
          Get my free store check
        </button>
      </div>
      <p className={`mt-3 text-sm ${dark ? "text-white/70" : "text-slate"}`}>
        No call, no card. A written note in 2 working days.
      </p>
    </form>
  );
}
