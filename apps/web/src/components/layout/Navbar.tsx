"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Logo } from "@/src/components/ui/Logo";
import { cn } from "@/src/lib/utils";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-slate-200/80 bg-white/85 shadow-sm shadow-slate-950/5 backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-sm",
      )}
    >
      <Container className="relative flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LinkButton href="/login" variant="ghost">
            Sign In
          </LinkButton>
          <LinkButton href="/register">Get Started</LinkButton>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
