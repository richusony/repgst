import { BriefcaseBusiness, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { Logo } from "@/src/components/ui/Logo";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Security", "Integrations"] },
  { title: "Company", links: ["About", "Careers", "Partners", "Contact"] },
  { title: "Resources", links: ["GST Guides", "Blog", "Help Center", "API Docs"] },
  { title: "Legal", links: ["Privacy", "Terms", "Compliance", "DPA"] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Enterprise-grade GST compliance for teams that need accurate books,
              cleaner returns, and confidence at scale.
            </p>
            <div className="mt-6 flex gap-3">
              {[Send, BriefcaseBusiness, MessageCircle].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  aria-label="Social profile"
                  className="grid size-10 place-items-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-slate-950">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-slate-500 transition hover:text-indigo-600"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RepGST. All rights reserved.</p>
          <p>Built for modern compliance teams.</p>
        </div>
      </Container>
    </footer>
  );
}
