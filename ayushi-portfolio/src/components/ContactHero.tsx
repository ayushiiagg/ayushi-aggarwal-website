"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Zap, CheckCircle2, Clock,
  Briefcase, Handshake, GraduationCap, ArrowDown,
} from "lucide-react";

const reasons = [
  { icon: Briefcase,     text: "Job & Internship Offers",  color: "text-emerald-400", bg: "bg-emerald-500/12", border: "border-emerald-500/25" },
  { icon: Handshake,     text: "Project Collaborations",   color: "text-sky-400",     bg: "bg-sky-500/12",     border: "border-sky-500/25" },
  { icon: GraduationCap, text: "Mentorship & Guidance",    color: "text-amber-400",   bg: "bg-amber-500/12",   border: "border-amber-500/25" },
  { icon: MessageSquare, text: "General Conversations",    color: "text-teal-400",    bg: "bg-teal-500/12",    border: "border-teal-500/25" },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060d22] via-[#08102e] to-[#0d1b4b]">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Glow orbs */}
        <motion.div
          className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/12 blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-[400px] w-[420px] rounded-full bg-sky-500/10 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/6 blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-24">

        {/* Eyebrow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Opportunities · Actively Looking
          </div>
        </motion.div>

        {/* Headline */}
        <div className="mt-7 space-y-2 text-center">
          {[
            "Don't just scroll past —",
            "let's build something great together.",
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className={
                  i === 0
                    ? "font-display text-4xl tracking-tight text-white/55 md:text-5xl lg:text-6xl"
                    : "font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
                }
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                {i === 1 ? (
                  <>
                    let&apos;s build{" "}
                    <span className="text-emerald-400">something great</span>
                    {" "}together.
                  </>
                ) : line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub-copy */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-white/50 md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          I&apos;m Ayushi Aggarwal — a Business Analytics graduate with hands-on IBM AI experience,
          ready to bring data-driven thinking to your team. Whether it&apos;s a role, a project,
          or just a conversation, I&apos;m all ears.
        </motion.p>

        {/* Status chips */}
        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Available Now
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-400">
            <Clock className="h-3.5 w-3.5" />
            Replies within 24 hrs
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-bold text-sky-400">
            <Zap className="h-3.5 w-3.5" />
            Delhi NCR · Remote-friendly
          </div>
        </motion.div>

        {/* Reason cards */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              className={`flex flex-col items-center gap-2.5 rounded-2xl border ${r.border} ${r.bg} px-4 py-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-white/20`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${r.color}`}>
                <r.icon className="h-5 w-5" />
              </div>
              <span className={`text-xs font-bold leading-tight ${r.color}`}>{r.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-1.5 text-white/25"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest">Fill the form below</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
