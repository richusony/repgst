"use client";

import { Check, Crown, Minus } from "lucide-react";
import { useState } from "react";
import { CTASection } from "@/src/components/sections/CTASection";
import { FAQSection } from "@/src/components/sections/FAQSection";
import { Button, LinkButton } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Container } from "@/src/components/ui/Container";

const plans = [
  {
    name: "Starter",
    monthly: "Rs. 499",
    yearly: "Rs. 399",
    description: "Simple compliance for new businesses.",
    features: ["1 Company", "5 Users", "1000 invoices/month", "Dashboard", "GST Summary"],
  },
  {
    name: "Growth",
    monthly: "Rs. 1499",
    yearly: "Rs. 1199",
    description: "Advanced control for growing teams.",
    features: ["5 Companies", "25 Users", "10000 invoices/month", "Advanced Reports", "Audit Logs", "Priority Support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    description: "Tailored scale for complex operations.",
    features: ["Unlimited", "Dedicated Support", "API Integrations", "SSO"],
  },
];

const comparison = [
  ["Companies", "1", "5", "Unlimited"],
  ["Users", "5", "25", "Unlimited"],
  ["Monthly invoices", "1000", "10000", "Custom"],
  ["Audit logs", "-", "Included", "Advanced"],
  ["API access", "-", "-", "Included"],
  ["Support", "Standard", "Priority", "Dedicated"],
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Pricing</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Simple Pricing for Every Business
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start lean, scale into advanced controls, and move to enterprise when
              integrations and dedicated support matter most.
            </p>
            <div className="mt-8 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
              <Button
                type="button"
                variant={!yearly ? "primary" : "ghost"}
                className="min-h-10 px-5"
                onClick={() => setYearly(false)}
              >
                Monthly
              </Button>
              <Button
                type="button"
                variant={yearly ? "primary" : "ghost"}
                className="min-h-10 px-5"
                onClick={() => setYearly(true)}
              >
                Yearly
              </Button>
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`p-6 ${plan.highlighted ? "border-indigo-300 ring-4 ring-indigo-100" : ""}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950">{plan.name}</h2>
                  {plan.highlighted ? <Crown className="size-5 text-indigo-600" /> : null}
                </div>
                <p className="mt-4 text-4xl font-black text-slate-950">
                  {yearly ? plan.yearly : plan.monthly}
                  {plan.name !== "Enterprise" ? <span className="text-base font-semibold text-slate-500">/month</span> : null}
                </p>
                <p className="mt-3 text-slate-600">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <Check className="size-4 text-emerald-500" /> {feature}
                    </li>
                  ))}
                </ul>
                <LinkButton href="/register" className="mt-8 w-full" variant={plan.highlighted ? "primary" : "secondary"}>
                  Get Started
                </LinkButton>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-20">
        <Container>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Compare plans
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  {["Feature", "Starter", "Growth", "Enterprise"].map((head) => (
                    <th key={head} className="px-5 py-4 font-black">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200">
                    {row.map((cell, idx) => (
                      <td key={idx} className="px-5 py-4 text-slate-700">
                        {cell === "-" ? <Minus className="size-4 text-slate-300" /> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}
