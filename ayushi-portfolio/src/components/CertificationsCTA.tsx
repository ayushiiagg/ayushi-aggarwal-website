"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Download, Award,
  ShieldCheck, Cpu, TrendingUp, BookOpen,
} from "lucide-react";

const badges = [
  {
    icon: Cpu,
    label: "IBM Generative AI",
    sub: "Enterprise-grade AI",
    color: "text-emerald-400",
    bg: "bg-emerald-500/12",
    border: "border-emerald-500/25",
  },
  {
    icon: TrendingUp,
    label: "BITSom · Business Analytics",
    sub: "With Distinction",
    color: "text-amber-400",
    bg: "bg-amber-500/12",
    border: "border-amber-500/25",
  },
  {
    icon: BookOpen,
    label: "IIT Roorkee · AI & Data Science",
    sub: "Premier IIT Program",
    color: "text-sky-400",
    bg: "bg-sky-500/12",
    border: "border-sky-500/25",
  },
  {
    icon: ShieldCheck,
    label: "Python for Data Science",
    sub: "Applied & Verified",
    color: "text-teal-400",
    bg: "bg-teal-500/12",
    border: "border-teal-500/25",
  },
];

export function CertificationsCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#08102e] via-[#0d1b4b] to-[#0f2060]">

      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-amber-500/14 blur-[100px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-12 bottom-0 h-[300px] w-[360px] rounded-full bg-emerald-500/14 blur-[90px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/8 blur-[70px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Edge lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400">
            <Award className="h-3.5 w-3.5" />
            Verified Credentials · Industry Recognised
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mt-6 space-y-1 text-center">
          {[
            "Every certificate here is a commitment —",
            "to learning, to excellence, to delivering results.",
          ].map((line, i) => (
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
                    to learning, to excellence, to{" "}
                    <span className="text-amber-400">delivering results.</span>
                  </>
                ) : line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* ── Body ── */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-7 text-white/55"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          From IBM&apos;s Generative AI program to IIT Roorkee&apos;s AI &amp; Data Science track —
          these aren&apos;t just credentials, they&apos;re proof of consistent upskilling at
          the intersection of business and technology. Each one earned, not just completed.
        </motion.p>

        {/* ── Certification badges ── */}
        <motion.div
          className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className={`flex items-center gap-3 rounded-xl border ${b.border} ${b.bg} px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/20`}
              initial={{ opacity: 0, scale: 0.88, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42 + i * 0.08, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ${b.color}`}>
                <b.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className={`truncate text-xs font-bold leading-tight ${b.color}`}>{b.label}</div>
                <div className="mt-0.5 text-[11px] font-semibold text-white/45">{b.sub}</div>
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
          {/* Primary */}
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

          {/* Secondary */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Award className="h-4 w-4 text-amber-400" />
              Explore My Skills
            </Link>
          </motion.div>

          {/* Tertiary */}
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
            { label: "IBM Generative AI Intern",        accent: "text-emerald-400" },
            { label: "8.5 CGPA · SRM University",       accent: "text-amber-400" },
            { label: "Distinction · BITSom",            accent: "text-teal-400" },
            { label: "IIT Roorkee · AI & Data Science", accent: "text-sky-400" },
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
