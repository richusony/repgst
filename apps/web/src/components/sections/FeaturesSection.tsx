import { Building2, ClipboardList, FileText, LockKeyhole, ReceiptText, ShieldCheck } from "lucide-react";
import { Card } from "@/src/components/ui/Card";
import { Container } from "@/src/components/ui/Container";
import { MotionItem, MotionSection } from "./Motion";

const features = [
  { title: "Invoice Management", description: "Generate sales and purchase invoices effortlessly.", icon: ReceiptText },
  { title: "GST Automation", description: "Automatically calculate CGST, SGST and IGST.", icon: ShieldCheck },
  { title: "Return Management", description: "Generate GSTR summaries quickly.", icon: FileText },
  { title: "Multi-Company Support", description: "Manage multiple organizations securely.", icon: Building2 },
  { title: "Role Based Access", description: "Admins, accountants and auditors.", icon: LockKeyhole },
  { title: "Audit Logs", description: "Complete traceability of activities.", icon: ClipboardList },
];

export function FeaturesSection() {
  return (
    <MotionSection className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <MotionItem className="mx-auto max-w-3xl text-center">
          <p id="features" className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Features</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Everything your compliance team needs.
          </h2>
        </MotionItem>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <MotionItem key={feature.title}>
              <Card className="h-full p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
                <div className="grid size-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </Card>
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
