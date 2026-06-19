import { Check, Crown } from "lucide-react";
import { Card } from "@/src/components/ui/Card";
import { LinkButton } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { MotionItem, MotionSection } from "./Motion";

const plans = [
  { name: "Starter", price: "Rs. 499", description: "For lean teams getting organized.", features: ["1 Company", "5 Users", "GST Summary"] },
  { name: "Growth", price: "Rs. 1499", description: "For businesses scaling compliance.", features: ["5 Companies", "Audit Logs", "Priority Support"], highlighted: true },
  { name: "Enterprise", price: "Custom", description: "For multi-entity finance teams.", features: ["Unlimited", "API Integrations", "SSO"] },
];

export function PricingPreviewSection() {
  return (
    <MotionSection className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <MotionItem className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Plans that fit every growth stage.
          </h2>
        </MotionItem>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <MotionItem key={plan.name}>
              <Card className={`h-full p-6 ${plan.highlighted ? "border-indigo-300 ring-4 ring-indigo-100" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-slate-950">{plan.name}</h3>
                  {plan.highlighted ? <Crown className="size-5 text-indigo-600" /> : null}
                </div>
                <p className="mt-4 text-4xl font-black text-slate-950">{plan.price}</p>
                <p className="mt-3 text-slate-600">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <Check className="size-4 text-emerald-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionItem>
          ))}
        </div>
        <MotionItem className="mt-10 text-center">
          <LinkButton href="/pricing">View Pricing</LinkButton>
        </MotionItem>
      </Container>
    </MotionSection>
  );
}
