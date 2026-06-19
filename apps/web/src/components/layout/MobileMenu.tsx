"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, LinkButton } from "@/src/components/ui/Button";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="secondary"
        className="size-11 p-0"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-4 top-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <LinkButton href="/login" variant="secondary" onClick={() => setOpen(false)}>
              Sign In
            </LinkButton>
            <LinkButton href="/register" onClick={() => setOpen(false)}>
              Get Started
            </LinkButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}
