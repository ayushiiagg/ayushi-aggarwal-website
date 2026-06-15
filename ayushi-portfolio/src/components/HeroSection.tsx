"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, ArrowRight, ChevronDown,
  Cpu, TrendingUp, Database, Bot, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Data ──────────────────────────────────────────────────────────── */
const tags = [
  { label: "Generative AI",      icon: Bot },
  { label: "Business Analytics", icon: TrendingUp },
  { label: "Data Science",       icon: Database },
  { label: "Agentic AI",         icon: Cpu },
];

const socials = [
  { href: "mailto:aggarwalayushi545@gmail.com",        icon: Mail,     label: "Email" },
  { href: "https://www.linkedin.com/in/ayushi-aggarwal-bbb383257/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/ayushiiagg",      icon: Github,   label: "GitHub" },
];

/* ─── Word-by-word reveal helper ────────────────────────────────────── */
function WordReveal({
  text,
  className,
  baseDelay = 0,
  staggerMs = 80,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  staggerMs?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, rotateX: -25 }}
            animate={{ y: "0%",   opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.75,
              delay: baseDelay + i * (staggerMs / 1000),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── Floating stat chip ────────────────────────────────────────────── */
function StatChip({
  value, label, sub, color, delay, className,
}: {
  value: string; label: string; sub: string;
  color: string; delay: number; className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "absolute z-30 flex items-center gap-3 rounded-2xl border border-white/20",
        "bg-[#08102e]/95 px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur-md",
        className
      )}
      initial={{ opacity: 0, scale: 0.75, y: 10 }}
      animate={{ opacity: 1, scale: 1,    y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -4, scale: 1.04 }}
    >
      <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white shadow-md", color)}>
        {value}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold text-white">{label}</div>
        <div className="text-[11px] font-medium text-white/75">{sub}</div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] overflow-hidden bg-hero-dark noise-overlay">

      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated glow orbs */}
        <motion.div
          className="absolute -left-32 top-10 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-32 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/12 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#0D1B4B]/80 blur-[80px]"
          animate={{ scaleX: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent line */}
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col">

            {/* Status pill */}
            <motion.div
              className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Opportunities
              <span className="h-3 w-px bg-emerald-500/30" />
              <span className="text-emerald-400/60">SRM University · IBM</span>
            </motion.div>

            {/* ── HERO HEADING ── */}
            <div className="perspective-[800px]">
              {/* Eyebrow */}
              <motion.p
                className="mb-3 text-xs font-bold tracking-[0.25em] text-emerald-400/70 uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Portfolio · 2026
              </motion.p>

              {/* Name — massive display type */}
              <h1 className="font-display leading-[0.92] tracking-[-0.02em]">
                {/* "Hi, I'm" — small line */}
                <span className="block overflow-hidden">
                  <motion.span
                    className="block text-2xl font-normal text-white/50 md:text-3xl"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%",   opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Hi, I&apos;m
                  </motion.span>
                </span>

                {/* "AYUSHI" — giant, emerald accent */}
                <span className="block overflow-hidden mt-1">
                  <motion.span
                    className="block text-[clamp(4rem,12vw,9rem)] font-display text-white"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%",   opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="relative inline-block">
                      AYUSHI
                      {/* Underline accent */}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-[#F59E0B]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ transformOrigin: "left" }}
                        transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </span>
                  </motion.span>
                </span>

                {/* "AGGARWAL" — slightly smaller, navy-tinted */}
                <span className="block overflow-hidden">
                  <motion.span
                    className="block text-[clamp(3.5rem,10vw,8rem)] text-white/80"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%",   opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  >
                    AGGARWAL
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* ── Subtitle bar ── */}
            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-10 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
              <div>
                <p className="text-lg font-bold tracking-wide text-white md:text-xl">
                  Business Analytics &amp; AI Student
                </p>
                <p className="mt-0.5 text-sm font-medium text-white/70">
                  SRM University Delhi NCR · IBM · IIT Roorkee
                </p>
              </div>
            </motion.div>

            {/* ── Description ── */}
            <motion.p
              className="mt-6 max-w-lg text-[15px] leading-[1.8] text-white/75"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82, ease: "easeOut" }}
            >
              Second-year BBA student specializing in Business Analytics with IBM,
              passionate about leveraging AI and data science to solve real-world
              business problems. Expanding expertise through Generative AI and
              Data Science programs at IIT Roorkee.
            </motion.p>

            {/* ── Tag pills ── */}
            <motion.div
              className="mt-7 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
            >
              {tags.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0D1B4B]/50 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/20 hover:text-emerald-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -2 }}
                >
                  <t.icon className="h-3.5 w-3.5" />
                  {t.label}
                </motion.div>
              ))}
            </motion.div>

            {/* ── CTA buttons ── */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.1, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(16,185,129,0.60)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Sparkles className="relative h-4 w-4" />
                <span className="relative">Get In Touch</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/education"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12 hover:text-white"
              >
                View My Journey
              </Link>
            </motion.div>

            {/* ── Social links ── */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/55 uppercase">Connect</span>
              <div className="h-px w-6 bg-white/15" />
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/15 hover:text-emerald-300"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN — PHOTO ══ */}
          <motion.div
            className="relative mt-4 lg:mt-8"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-emerald-500/25 via-transparent to-[#F59E0B]/15 blur-2xl" />

            {/* Spinning dashed rings */}
            <motion.div
              className="absolute -inset-10 rounded-full border border-dashed border-emerald-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-20 rounded-full border border-dashed border-white/6"
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.50)]">
              <Image
                src="/profile-photo.jpg"
                alt="Ayushi Aggarwal"
                width={820}
                height={980}
                priority
                className="relative z-0 h-[420px] w-full object-cover md:h-[520px]"
              />

              {/* Depth overlays — sit above image only, below caption */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#08102e]/85 via-[#08102e]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-emerald-500/8 via-transparent to-[#F59E0B]/6" />
              <div className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-inset ring-white/15" />

              {/* Bottom name strip */}
              <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-[#08102e]/95 px-5 py-4 backdrop-blur-md">
                <div className="font-display text-lg font-semibold text-white">Ayushi Aggarwal</div>
                <div className="mt-0.5 text-xs font-medium text-emerald-300">Business Analytics &amp; AI · SRM University</div>
              </div>
            </div>

            {/* Floating stat chips */}
            <StatChip
              value="IBM" label="Generative AI Intern" sub="IBM Watson · 2025"
              color="bg-gradient-to-br from-[#0D1B4B] to-[#1a2d6b]"
              delay={0.9} className="right-3 top-5"
            />
            <StatChip
              value="3+" label="Programs" sub="SRM · BITSom · IIT"
              color="bg-gradient-to-br from-emerald-500 to-emerald-600"
              delay={1.1} className="-left-5 bottom-28"
            />
            <StatChip
              value="7.78" label="CGPA" sub="SRM University"
              color="bg-gradient-to-br from-[#F59E0B] to-amber-600"
              delay={1.3} className="right-3 bottom-24"
            />
          </motion.div>
        </div>

        {/* ── Marquee strip ── */}
        <motion.div
          className="mt-14 overflow-hidden border-t border-white/8 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex w-max animate-marquee items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-white/45 uppercase">
            {[
              "Business Analytics", "Generative AI", "IBM Watson", "Data Science",
              "Machine Learning", "Agentic AI", "Python", "IIT Roorkee", "SRM University",
              "Business Analytics", "Generative AI", "IBM Watson", "Data Science",
              "Machine Learning", "Agentic AI", "Python", "IIT Roorkee", "SRM University",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 pt-1.5"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="h-2 w-0.5 rounded-full bg-emerald-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/45 uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
