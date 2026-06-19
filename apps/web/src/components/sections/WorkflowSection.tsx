import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { MotionItem, MotionSection } from "./Motion";

const steps = ["Create Company", "Add Parties", "Create Invoices", "Track Taxes", "Generate Returns", "Stay Compliant"];

export function WorkflowSection() {
  return (
    <MotionSection className="bg-white py-20 sm:py-24">
      <Container>
        <MotionItem className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">Workflow</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            From setup to returns without the operational drag.
          </h2>
        </MotionItem>
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {steps.map((step, index) => (
            <MotionItem key={step} className="relative">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/5">
                <span className="text-sm font-black text-indigo-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{step}</h3>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-slate-300 lg:block" />
              ) : null}
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
