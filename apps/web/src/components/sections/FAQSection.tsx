"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "@/src/components/ui/Container";

const faqs = [
  ["Does RepGST support CGST, SGST, and IGST?", "Yes. RepGST calculates GST components based on place of supply, party state, invoice type, and item tax configuration."],
  ["Can I manage multiple companies?", "Yes. Growth and Enterprise plans support multiple organizations with separate users, roles, and records."],
  ["Can accountants and auditors collaborate?", "Yes. Role based access lets you invite admins, accountants, and auditors with scoped permissions."],
  ["Does RepGST generate GSTR summaries?", "RepGST prepares structured summaries for return review, reconciliation, and filing workflows."],
  ["Is my data secure?", "Data is protected with modern access controls, audit logs, and enterprise security practices."],
  ["Can I upgrade later?", "Yes. You can move between plans as invoice volume, companies, and compliance needs grow."],
];

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Answers before you start.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="rounded-2xl border border-slate-200 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-950"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {question}
                <ChevronDown className={`size-5 shrink-0 text-slate-400 transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              {open === index ? <p className="px-5 pb-5 leading-7 text-slate-600">{answer}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
