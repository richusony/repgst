import { Clock3, Scale, Sparkles } from "lucide-react";
import { Card } from "@/src/components/ui/Card";
import { Container } from "@/src/components/ui/Container";
import { MotionItem, MotionSection } from "./Motion";

const benefits = [
  { title: "Save Time", description: "Automate recurring compliance work and close each month faster.", icon: Clock3 },
  { title: "Reduce Errors", description: "Centralized tax logic and validation help prevent costly rework.", icon: Scale },
  { title: "Scale Confidently", description: "Add companies, users, and workflows without losing control.", icon: Sparkles },
];

export function BenefitsSection() {
  return (
    <MotionSection className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <MotionItem className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Why RepGST</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Built for precision, speed, and trust.
          </h2>
        </MotionItem>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <MotionItem key={benefit.title}>
              <Card className="h-full border-white/10 bg-white/5 p-6 text-white shadow-none">
                <div className="grid size-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <benefit.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
              </Card>
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
