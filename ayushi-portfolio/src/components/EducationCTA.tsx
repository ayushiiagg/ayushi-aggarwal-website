"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, GraduationCap,
  TrendingUp, Brain, Download,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  { icon: GraduationCap, label: "8.5 CGPA",        sub: "SRM University" },
  { icon: Brain,         label: "Distinction",      sub: "BITSom GenAI Program" },
  { icon: TrendingUp,    label: "3 Programs",       sub: "Ongoing & Completed" },
];

export function EducationCTA() {
  return (
    <Reveal delay={0.1}>
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#08102e] via-[#0d1b4b] to-[#0f2060]">

        {/* ── Background decoration ── */}
        <div className="pointer-events-none absolute inset-0">
          {/* Glow orbs */}
          <motion.div
            className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[80px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-10 bottom-0 h-[300px] w-[350px] rounded-full bg-[#F59E0B]/10 blur-[70px]"
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Top gradient line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          {/* Bottom gradient line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />
        </div>

        <div className="relative px-7 py-10 md:px-12 md:py-12">

          {/* ── Top label ── */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/12 px-4 py-1.5 text-xs font-bold text-emerald-400"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Academic Journey · 2023 – Present
          </motion.div>

          {/* ── Main layout ── */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Left: headline + body */}
            <div>
              <motion.h2
                className="font-display text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Built on a foundation of
                <br />
                <span className="text-emerald-400">rigorous academics</span>{" "}
                <span className="text-white/50">&amp;</span>
                <br />
                <span className="text-[#F59E0B]">industry exposure.</span>
              </motion.h2>

              <motion.p
                className="mt-5 max-w-xl text-[15px] leading-7 text-white/55"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22 }}
              >
                From IBM-integrated coursework at SRM to a Distinction at BITSom and an advanced AI program at IIT Roorkee — every program has been chosen with purpose. I'm now looking to apply this knowledge in a real-world analytics or AI role.
              </motion.p>

              {/* Highlight chips */}
              <motion.div
                className="mt-6 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.32 }}
              >
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/6 px-4 py-2.5 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.38 + i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ y: -3, borderColor: "rgba(16,185,129,0.35)" }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                      <h.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{h.label}</div>
                      <div className="text-[11px] text-white/45">{h.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: CTA buttons */}
            <motion.div
              className="flex flex-col gap-3 lg:items-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-[0_8px_32px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(16,185,129,0.60)] whitespace-nowrap"
                >
                  <Sparkles className="h-4 w-4" />
                  Let's Work Together
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/cv"
                  className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-7 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  Download Full CV
                </Link>
              </motion.div>

              <p className="mt-1 text-center text-[11px] text-white/65 lg:text-right">
                Open to internships &amp; full-time roles
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
