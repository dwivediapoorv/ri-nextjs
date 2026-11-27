import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24">
      <h1 className="display h-hero">Page not found</h1>
      <p className="mt-6 text-xl text-slate">That page does not exist. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/services" className="btn btn-ghost">Services</Link>
        <Link href="/contact" className="btn btn-ghost">Free store check</Link>
      </div>
    </section>
  );
}
