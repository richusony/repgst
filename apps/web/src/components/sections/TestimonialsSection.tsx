import { Star } from "lucide-react";
import { Card } from "@/src/components/ui/Card";
import { Container } from "@/src/components/ui/Container";
import { MotionItem, MotionSection } from "./Motion";

const testimonials = [
  { name: "Arjun Menon", role: "Finance Manager", quote: "RepGST gave our finance team a single source of truth for invoicing, ITC tracking, and return readiness." },
  { name: "Priya Sharma", role: "CA", quote: "The audit trail and role controls make client collaboration dramatically cleaner during filing season." },
  { name: "Rahul Nair", role: "Business Owner", quote: "I can see sales, purchases, and GST payable without waiting for month-end spreadsheets." },
];

export function TestimonialsSection() {
  return (
    <MotionSection className="bg-white py-20 sm:py-24">
      <Container>
        <MotionItem className="mx-auto max-w-3xl text-center">
          <p id="testimonials" className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">Testimonials</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Trusted by teams that cannot afford compliance guesswork.
          </h2>
        </MotionItem>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <MotionItem key={item.name}>
              <Card className="h-full p-6">
                <div className="flex gap-1 text-amber-400" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
                <div className="mt-6">
                  <p className="font-black text-slate-950">{item.name}</p>
                  <p className="text-sm font-semibold text-slate-500">{item.role}</p>
                </div>
              </Card>
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
