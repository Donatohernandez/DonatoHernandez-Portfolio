"use client";

import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>05 · Contact</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-12 rounded-2xl border border-border-2 bg-surface overflow-hidden">
            {/* Accent top strip */}
            <div className="h-[3px] w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

            <div className="p-10 sm:p-14">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
                {contact.headline}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl mb-6">
                {contact.subtext}
              </p>

              {/* Hint box */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-dim border border-accent/15 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-text-secondary">
                  {contact.hint}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md bg-accent text-background font-semibold text-sm cursor-pointer hover:bg-accent-hover transition-colors duration-200"
                >
                  <Mail size={16} />
                  {contact.emailLabel}
                </motion.a>
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md border border-border-2 text-text-secondary font-medium text-sm cursor-pointer hover:border-accent/40 hover:text-text-primary transition-all duration-200"
                >
                  <Linkedin size={16} />
                  {contact.linkedinLabel}
                </motion.a>
              </div>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-border-2 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      {contact.email}
                    </p>
                  </div>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-border-2 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <Linkedin size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      LinkedIn
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      Connect with me
                    </p>
                  </div>
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-border-2 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <MessageCircle size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      SMS / WhatsApp
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      {contact.whatsappNumber}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.1}>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-sm">
            <span className="font-mono">
              <span className="text-accent">donato</span>.dev
            </span>
            <span>Built with Next.js + Tailwind CSS. Deployed on Vercel.</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
