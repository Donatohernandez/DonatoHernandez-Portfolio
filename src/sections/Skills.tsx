"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel>04 — Skills</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3">
              Stack &amp; tools
            </h2>
          </div>
        </FadeIn>

        {/* Three columns */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {skills.columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.08}>
              <div className="p-6 rounded-xl border border-border bg-surface h-full">
                <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tools row */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
              Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ borderColor: "rgba(56,189,248,0.4)", color: "#f8fafc" }}
                  transition={{ duration: 0.15 }}
                  className="px-3 py-1.5 text-xs rounded-md border border-border text-text-secondary cursor-default font-mono"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Philosophy */}
        <FadeIn delay={0.15}>
          <div className="relative p-6 rounded-xl bg-surface border border-border">
            <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-accent" />
            <p className="text-text-secondary leading-relaxed italic pl-2">
              &ldquo;{skills.philosophy}&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
