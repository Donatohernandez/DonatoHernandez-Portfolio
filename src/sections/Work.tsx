"use client";

import { Sparkles, Mic, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={20} />,
  mic: <Mic size={20} />,
};

const statusStyles: Record<string, string> = {
  live: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  shipped: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
};

export function Work() {
  return (
    <section id="work" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel>02 · Featured Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3">
              Things I&apos;ve shipped
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <motion.article
                whileHover={{ borderColor: "rgba(56,189,248,0.18)" }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-border bg-surface overflow-hidden"
              >
                {/* Project header */}
                <div className="p-8 border-b border-border">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-accent">{iconMap[project.icon]}</span>
                      <h3 className="text-2xl font-semibold text-text-primary">
                        {project.name}
                      </h3>
                    </div>
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full ${
                        statusStyles[project.status.variant]
                      }`}
                    >
                      {project.status.label}
                    </span>
                  </div>

                  {/* Role tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface-2 text-text-secondary border border-border"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Pain point */}
                  <div className="mb-4 p-4 rounded-lg bg-accent-dim border border-accent/15">
                    <p className="font-mono text-xs text-accent/70 mb-1 tracking-widest uppercase">
                      Pain point
                    </p>
                    <p className="text-text-primary font-medium">
                      {project.painPoint}
                    </p>
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technical / Impact columns */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="p-8">
                    <h4 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
                      Technical Build
                    </h4>
                    <ul className="space-y-3">
                      {project.technical.map((t, i) => (
                        <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8">
                    <h4 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
                      Impact &amp; Results
                    </h4>
                    <ul className="space-y-3">
                      {project.impact.map((imp, i) => (
                        <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="text-emerald-400 mt-1 shrink-0">✓</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Proof + links */}
                <div className="p-8 border-t border-border bg-surface-2/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-1">
                        What this proves
                      </p>
                      <p className="text-text-primary font-medium max-w-xl">
                        {project.proof}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.comingSoon ? (
                        <span
                          aria-disabled="true"
                          className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 text-accent text-sm opacity-40 cursor-not-allowed select-none"
                        >
                          <ExternalLink size={15} />
                          Coming Soon
                        </span>
                      ) : (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live`}
                          className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 text-accent text-sm hover:bg-accent/15 transition-all duration-200 cursor-pointer"
                        >
                          <ExternalLink size={15} />
                          {project.liveLabel ?? "Live"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
