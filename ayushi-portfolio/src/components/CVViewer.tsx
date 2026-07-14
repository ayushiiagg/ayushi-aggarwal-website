"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download, Printer, ArrowLeft, ExternalLink,
  CheckCircle2, Award, Zap,
} from "lucide-react";

export function CVViewer() {
  const openAndPrint = () => {
    window.open("/resume.html", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060d22] via-[#08102e] to-[#0d1b4b]">

      {/* ── Background decoration ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-[400px] w-[420px] rounded-full bg-amber-500/8 blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 py-10 md:px-6">

        {/* ── Back nav ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 transition-colors hover:text-white/80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* ── Hero header ── */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Curriculum Vitae · 2026
          </div>

          <h1 className="mt-5 font-display text-5xl tracking-tight text-white md:text-6xl">
            Ayushi <span className="text-emerald-400">Aggarwal</span>
          </h1>
          <p className="mt-3 text-base text-white/50 md:text-lg">
            IBM Generative AI Intern &nbsp;·&nbsp; Vista Neotech Data Analyst Intern
          </p>

          {/* Credential strip */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "IBM Generative AI Intern",        accent: "text-emerald-400" },
              { label: "8.24 SGPA · 7.90 CGPA · SRM",     accent: "text-amber-400" },
              { label: "Distinction · BITSom",            accent: "text-teal-400" },
              { label: "IIT Roorkee · AI & Data Science", accent: "text-sky-400" },
            ].map((item, i) => (
              <span key={item.label} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />}
                <span className={`text-xs font-bold tracking-wide ${item.accent}`}>{item.label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Action buttons ── */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={openAndPrint}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-[0_8px_36px_rgba(16,185,129,0.50)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_48px_rgba(16,185,129,0.65)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Download className="relative h-4 w-4" />
            <span className="relative">Download CV (PDF)</span>
          </motion.button>

          <motion.button
            onClick={openAndPrint}
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Printer className="h-4 w-4 text-amber-400" />
            Print CV
          </motion.button>

          <motion.a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-semibold text-white/45 transition-all duration-300 hover:border-white/20 hover:text-white/75"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink className="h-4 w-4" />
            Open in New Tab
          </motion.a>
        </motion.div>

        {/* ── PDF tip ── */}
        <motion.p
          className="mt-3 text-center text-xs text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Tip: In the print dialog, select &quot;Save as PDF&quot; and set margins to &quot;None&quot; for best results.
        </motion.p>

        {/* ── CV Preview iframe ── */}
        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <iframe
            src="/resume.html"
            title="Ayushi Aggarwal CV"
            className="h-[900px] w-full border-0 bg-white"
            style={{ minHeight: 900 }}
          />
        </motion.div>

        {/* ── Feature highlights ── */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            {
              icon: CheckCircle2,
              color: "text-emerald-400",
              bg: "bg-emerald-500/12",
              border: "border-emerald-500/25",
              title: "ATS-Optimised",
              body: "Clean structure, keyword-rich content, and standard formatting — passes all major Applicant Tracking Systems.",
            },
            {
              icon: Award,
              color: "text-amber-400",
              bg: "bg-amber-500/12",
              border: "border-amber-500/25",
              title: "EU & US Standards",
              body: "Follows European and North American CV conventions — no photo bias, clear sections, quantified achievements.",
            },
            {
              icon: Zap,
              color: "text-sky-400",
              bg: "bg-sky-500/12",
              border: "border-sky-500/25",
              title: "Print-Ready PDF",
              body: "Optimised A4 layout with precise print CSS — use Save as PDF for a pixel-perfect, professional document.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border ${f.border} ${f.bg} p-5 backdrop-blur-sm`}
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ${f.color}`}>
                <f.icon className="h-4.5 w-4.5" />
              </div>
              <p className={`mt-3 text-sm font-bold ${f.color}`}>{f.title}</p>
              <p className="mt-1.5 text-xs leading-5 text-white/50">{f.body}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
