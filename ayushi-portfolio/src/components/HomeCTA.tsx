"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Download, Sparkles,
  TrendingUp, Brain, Briefcase, GraduationCap,
} from "lucide-react";

const pillars = [
  { icon: TrendingUp,    label: "Business Analytics", sub: "IBM · SRM University" },
  { icon: Brain,         label: "Generative AI",       sub: "IBM Watson · BITSom" },
  { icon: GraduationCap, label: "Data Science",        sub: "IIT Roorkee · IIHub" },
  { icon: Briefcase,     label: "Open to Work",        sub: "Internships & Full-time" },
];

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08102e]">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Orbs */}
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/18 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F59E0B]/10 blur-[90px]"
          animate={{ scale: [1, 1.07, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute left-0 bottom-10 h-[300px] w-[300px] rounded-full bg-[#0D1B4B]/60 blur-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">

        {/* ── Eyebrow ── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Opportunities · Delhi NCR, India
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mt-8 text-center">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Ready to turn data into
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-emerald-400">decisions</span>
              <span className="text-white/30"> · </span>
              <span className="text-[#F59E0B]">strategy</span>
              <span className="text-white/30"> · </span>
              <span className="text-white">impact.</span>
            </motion.h2>
          </div>
        </div>

        {/* ── Body ── */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-white/75"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          I'm a second-year Business Analytics student with hands-on experience in
          Generative AI at IBM, advanced programs at IIT Roorkee and BITSom, and a
          consistent 7.78 CGPA. If you're building something at the intersection of
          data and business — let's talk.
        </motion.p>

        {/* ── Pillar chips ── */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#0c1638]/80 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/35 hover:bg-emerald-500/15"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <p.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{p.label}</div>
                <div className="text-[11px] font-medium text-white/70">{p.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          className="mx-auto mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-white/15 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        {/* ── CTA buttons ── */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
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
              <span className="relative">Get In Touch</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Secondary */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/skills"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Explore My Skills
            </Link>
          </motion.div>

          {/* Tertiary */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-8 py-4 text-sm font-semibold text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white/80"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Social proof strip ── */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {[
            { label: "IBM Generative AI Intern",        accent: "text-emerald-400" },
            { label: "7.78 CGPA · SRM University",       accent: "text-amber-400" },
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
