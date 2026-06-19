"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/src/components/ui/Card";
import { Container } from "@/src/components/ui/Container";

const metrics = [
  { value: 1000, suffix: "+", label: "Businesses" },
  { value: 500, prefix: "Rs. ", suffix: "Cr+", label: "Invoices Processed" },
  { value: 99.99, suffix: "%", label: "Uptime", decimals: 2 },
  { value: 24, suffix: "x7", label: "Support" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", (latest) => setDisplay(latest.toFixed(decimals))), [spring, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="p-6 text-center">
                <p className="text-3xl font-black text-slate-950">
                  <Counter {...metric} />
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
