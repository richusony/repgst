import { ArrowRight, BarChart3, CircleUserRound, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your RepGST compliance workspace.",
};

export default function LoginPage() {
  return (
    <section className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
      <div className="hidden items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-900 p-10 text-white lg:flex">
        <div className="max-w-lg">
          <div className="relative h-80 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="rounded-2xl bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-500">Command Center</p>
                  <p className="text-2xl font-black">June compliance</p>
                </div>
                <ShieldCheck className="size-9 text-emerald-500" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Sales", "ITC", "Returns"].map((label) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-500">{label}</p>
                    <p className="mt-2 text-lg font-black">Ready</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-indigo-50 p-4 text-indigo-700">
                <BarChart3 className="size-8" />
                <div>
                  <p className="font-black">99.2% health score</p>
                  <p className="text-sm font-semibold">No filing blockers found</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-10 text-5xl font-black tracking-tight">
            Your Compliance Command Center
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Sign in to review invoices, tax positions, returns, users, and audit
            activity from one secure workspace.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-28 sm:px-6">
        <Card className="w-full max-w-md border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-950/10 backdrop-blur sm:p-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Sign In</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Access your RepGST workspace.
          </p>
          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                <Mail className="size-4" /> Email
              </span>
              <Input type="email" placeholder="finance@company.com" autoComplete="email" />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                <LockKeyhole className="size-4" /> Password
              </span>
              <Input type="password" placeholder="Enter password" autoComplete="current-password" />
            </label>
            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-2 font-semibold text-slate-600">
                <input type="checkbox" className="size-4 rounded border-slate-300 text-indigo-600" />
                Remember me
              </label>
              <Link href="#" className="font-bold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Sign In <ArrowRight className="size-4" />
            </Button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-px flex-1 bg-slate-200" /> OR <span className="h-px flex-1 bg-slate-200" />
          </div>
          <Button type="button" variant="secondary" className="w-full">
            <CircleUserRound className="size-4" /> Continue with Google
          </Button>
          <p className="mt-6 text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-bold text-indigo-600 hover:text-indigo-500">
              Create account
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
}
