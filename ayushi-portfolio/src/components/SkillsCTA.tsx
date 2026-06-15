"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Download, Zap,
  Code2, BarChart3, Brain, Wrench,
} from "lucide-react";

const proofPoints = [
  { icon: Brain,    stat: "85%",  label: "Generative AI",      color: "text-emerald-400",  bg: "bg-emerald-500/12" },
  { icon: BarChart3,stat: "88%",  label: "Business Analytics", color: "text-[#F59E0B]",    bg: "bg-amber-500/12" },
  { icon: Code2,    stat: "90%",  label: "Python",             color: "text-sky-400",      bg: "bg-sky-500/12" },
  { icon: Wrench,   stat: "82%",  label: "Data Science",       color: "text-teal-400",     bg: "bg-teal-500/12" },
];

export function SkillsCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#08102e] via-[#0d1b4b] to-[#0f2060]">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-16 -top-16 h-[380px] w-[380px] rounded-full bg-emerald-500/18 blur-[90px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-10 bottom-0 h-[280px] w-[320px] rounded-full bg-[#F59E0B]/10 blur-[80px]"
          animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
      </div>

      <div className="relative px-7 py-12 md:px-12 md:py-14">

        {/* ── Eyebrow ── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
            <Zap className="h-3.5 w-3.5" />
            Skills in Action · Ready to Deploy
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mt-6 space-y-1 text-center">
          {["These aren't just skills on a page —", "they're tools I use to build real solutions."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                className={
                  i === 0
                    ? "font-display text-3xl tracking-tight text-white/60 md:text-4xl"
                    : "font-display text-3xl tracking-tight text-white md:text-4xl"
                }
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {i === 1 ? (
                  <>
                    they&apos;re tools I use to build{" "}
                    <span className="text-emerald-400">real solutions.</span>
                  </>
                ) : line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* ── Body ── */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-7 text-white/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          From Python and SQL to Generative AI and LangChain — every skill here has been
          applied in real projects, IBM internship work, and coursework at IIT Roorkee and
          BITSom. I bring both technical depth and business context to every problem.
        </motion.p>

        {/* ── Proof points ── */}
        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          {proofPoints.map((p, i) => (
            <motion.div
              key={p.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.bg} ${p.color}`}>
                <p.icon className="h-4 w-4" />
              </div>
              <div>
                <div className={`text-lg font-bold leading-none ${p.color}`}>{p.stat}</div>
                <div className="mt-0.5 text-xs font-semibold text-white/55">{p.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          className="mx-auto mt-10 h-px max-w-sm bg-gradient-to-r from-transparent via-white/12 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        {/* ── CTA buttons ── */}
        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-[0_8px_36px_rgba(16,185,129,0.50)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_48px_rgba(16,185,129,0.65)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Mail className="relative h-4 w-4" />
              <span className="relative">Hire Me</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Zap className="h-4 w-4 text-amber-400" />
              See My Experience
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-semibold text-white/45 transition-all duration-300 hover:border-white/20 hover:text-white/75"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Credential strip ── */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {[
            { label: "IBM Generative AI Intern",       accent: "text-emerald-400" },
            { label: "7.78 CGPA · SRM University",      accent: "text-amber-400" },
            { label: "Distinction · BITSom",           accent: "text-teal-400" },
            { label: "IIT Roorkee · AI & Data Science",accent: "text-sky-400" },
          ].map((item, i) => (
            <span key={item.label} className="flex items-center gap-3">
              {i > 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
              )}
              <span className={`text-xs font-bold tracking-wide ${item.accent}`}>
                {item.label}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
