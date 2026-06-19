import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600 via-slate-900 to-cyan-500 p-8 text-center shadow-2xl shadow-indigo-950/30 sm:p-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Ready to Simplify GST Compliance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-50">
            Bring invoices, tax tracking, returns, audit history, and users into one
            polished compliance command center.
          </p>
          <div className="mt-8">
            <LinkButton href="/register" variant="secondary">
              Get Started Today <ArrowRight className="size-4" />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
