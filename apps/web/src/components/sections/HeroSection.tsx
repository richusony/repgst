"use client";

import { motion } from "framer-motion";
import { ArrowRight, CirclePlay, IndianRupee, ReceiptText, ShieldCheck, TrendingUp } from "lucide-react";
import { Badge } from "@/src/components/ui/Badge";
import { LinkButton } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { fadeUp, stagger } from "./Motion";

const floaters = [
  { label: "Sales", value: "Rs. 48.2L", className: "left-0 top-12", icon: TrendingUp },
  { label: "Purchases", value: "Rs. 31.6L", className: "right-0 top-4", icon: ReceiptText },
  { label: "Output GST", value: "Rs. 8.1L", className: "left-4 bottom-16", icon: IndianRupee },
  { label: "Input GST", value: "Rs. 5.4L", className: "right-3 bottom-8", icon: ShieldCheck },
];

const readinessBars = ["w-[86%]", "w-[89%]", "w-[92%]", "w-[95%]"];
const chartBars = ["h-10", "h-16", "h-12", "h-20", "h-14", "h-24", "h-[72px]"];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp}>
            <Badge>Modern GST compliance platform</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Enterprise GST Compliance, Made Effortless.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Automate GST calculations, manage invoices, track returns, and stay
            compliant with confidence - all from one modern platform.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/register">
              Start Free Trial <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton href="#demo" variant="secondary">
              <CirclePlay className="size-4" /> Watch Demo
            </LinkButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-4 rounded-[2rem] bg-cyan-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Compliance Health
                  </p>
                  <p className="mt-1 text-2xl font-bold">99.2%</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-300">
                  On Track
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["GSTR-1", "GSTR-3B", "ITC Match", "E-Invoice"].map((item, index) => (
                  <div key={item} className="rounded-2xl bg-white/8 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{item}</span>
                      <span className="text-xs text-emerald-300">Ready</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className={`h-2 rounded-full bg-cyan-400 ${readinessBars[index]}`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white p-4 text-slate-950">
                <div className="flex items-center justify-between">
                  <p className="font-bold">June tax position</p>
                  <p className="text-sm font-semibold text-indigo-600">Rs. 2.7L net</p>
                </div>
                <div className="mt-4 grid grid-cols-7 items-end gap-2">
                  {chartBars.map((heightClass, index) => (
                    <div
                      key={index}
                      className={`rounded-t-xl bg-indigo-100 ${heightClass}`}
                    >
                      <div className="h-1/2 rounded-t-xl bg-indigo-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {floaters.map((item, index) => (
            <motion.div
              key={item.label}
              className={`absolute hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg shadow-slate-950/10 backdrop-blur sm:block ${item.className}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <item.icon className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                  <p className="text-sm font-bold text-slate-950">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
