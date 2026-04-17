"use client";

import Image from "next/image";
import {
  Server,
  Brain,
  Rocket,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={18} />,
  brain: <Brain size={18} />,
  rocket: <Rocket size={18} />,
  database: <Database size={18} />,
  smartphone: <Smartphone size={18} />,
  workflow: <Workflow size={18} />,
};

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <SectionLabel>01 · About</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 mb-4">
              The throughline
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              {about.narrative}
            </p>
          </div>
        </FadeIn>

        {/* Avatar + Quote grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Avatar */}
          <FadeIn delay={0.05}>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-border-2 ring-4 ring-accent/10">
                <Image
                  src="/donato.jpg"
                  alt="Donato Hernández, Full-Stack Developer"
                  fill
                  sizes="176px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <blockquote className="h-full flex items-center p-8 rounded-xl border border-border-2 bg-surface relative">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-accent" />
              <p className="text-text-primary text-xl sm:text-2xl font-medium leading-snug italic pl-2">
                &ldquo;{about.quote}&rdquo;
              </p>
            </blockquote>
          </FadeIn>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {about.capabilities.map((cap, i) => (
            <FadeIn key={cap.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(56,189,248,0.35)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-surface cursor-default"
              >
                <span className="text-accent shrink-0">
                  {iconMap[cap.icon]}
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {cap.label}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
