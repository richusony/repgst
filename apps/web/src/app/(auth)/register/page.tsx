"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Input, Select } from "@/src/components/ui/Input";

const states = ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi", "Gujarat"];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="grid min-h-screen place-items-center px-4 py-28">
        <Card className="w-full max-w-md p-8 text-center">
          <CheckCircle2 className="mx-auto size-14 text-emerald-500" />
          <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
            Workspace created
          </h1>
          <p className="mt-3 leading-7 text-slate-600">
            Your RepGST account is ready. You can now sign in and complete your
            compliance setup.
          </p>
          <Link href="/login" className="mt-6 inline-flex font-bold text-indigo-600">
            Continue to sign in
          </Link>
        </Card>
      </section>
    );
  }

  return (
    <section className="grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]">
      <div className="hidden items-center justify-center bg-slate-950 p-10 text-white lg:flex">
        <div className="max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <UserPlus className="size-12 text-cyan-300" />
            <h1 className="mt-8 text-5xl font-black tracking-tight">
              Launch a cleaner GST workflow.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Create your company workspace, invite your finance team, and keep
              filings moving with better controls from day one.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-28 sm:px-6">
        <Card className="w-full max-w-xl p-6 shadow-xl shadow-slate-950/10 sm:p-8">
          <div className="flex items-center gap-3">
            {[1, 2].map((item) => (
              <div key={item} className="flex flex-1 items-center gap-3">
                <div className={`grid size-10 place-items-center rounded-2xl text-sm font-black ${step >= item ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {item}
                </div>
                {item < 2 ? <div className={`h-1 flex-1 rounded-full ${step > item ? "bg-indigo-600" : "bg-slate-100"}`} /> : null}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Step {step}
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              {step === 1 ? "Company Information" : "Admin Information"}
            </h2>
          </div>
          <form className="mt-8 space-y-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            {step === 1 ? (
              <>
                <Input required placeholder="Company Name" aria-label="Company Name" />
                <Input placeholder="Trade Name" aria-label="Trade Name" />
                <Input required pattern="^[0-9A-Z]{15}$" placeholder="GSTIN" aria-label="GSTIN" />
                <Select required aria-label="State" defaultValue="">
                  <option value="" disabled>State</option>
                  {states.map((state) => <option key={state}>{state}</option>)}
                </Select>
                <Button type="button" className="w-full" onClick={() => setStep(2)}>
                  Next <ArrowRight className="size-4" />
                </Button>
              </>
            ) : (
              <>
                <Input required placeholder="Full Name" aria-label="Full Name" />
                <Input required type="email" placeholder="Email" aria-label="Email" />
                <Input required type="password" minLength={8} placeholder="Password" aria-label="Password" />
                <Input required type="password" minLength={8} placeholder="Confirm Password" aria-label="Confirm Password" />
                <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-600">
                  <input required type="checkbox" className="mt-1 size-4 rounded border-slate-300 text-indigo-600" />
                  I agree to the RepGST terms, privacy policy, and compliance data processing terms.
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                    <ArrowLeft className="size-4" /> Back
                  </Button>
                  <Button type="submit">
                    Create Account <ArrowRight className="size-4" />
                  </Button>
                </div>
              </>
            )}
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
}
