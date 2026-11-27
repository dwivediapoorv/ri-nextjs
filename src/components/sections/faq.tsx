import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/lib/services";

export function FaqSection({ items, title = "Questions before you send your URL" }: { items: Faq[]; title?: string }) {
  return (
    <section className="wrap pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-6">
        <h2 className="display h-section max-w-[14ch]">{title}</h2>
        <div>
          <Accordion className="w-full">
            {items.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-dashed">
                <AccordionTrigger className="cursor-pointer py-4 text-lg font-bold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-slate">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-slate">
            Still unsure?{" "}
            <Link href="/contact" className="font-semibold text-volt hover:underline">
              Send us your store URL
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
