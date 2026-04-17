"use client";

import { motion } from "framer-motion";
import { values } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Values() {
  return (
    <section id="values" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel>03 · Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3">
              What I believe in
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.3)" }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl border border-border bg-surface cursor-default h-full"
              >
                <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-text-primary font-semibold text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
