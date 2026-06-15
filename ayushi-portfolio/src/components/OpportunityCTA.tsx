"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function OpportunityCTA() {
  return (
    <Reveal delay={0.1}>
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0D1B4B] to-[#1a2d6b] p-8 md:p-10">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-[#F59E0B]/8 blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Opportunities
            </div>
            <h3 className="mt-4 font-display text-3xl tracking-tight text-white md:text-4xl">
              Seeking roles in Analytics,
              <br />
              <span className="text-emerald-400">Data Science &amp; AI</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
              If you're hiring for analytics or AI-focused internships and roles, I'd love to connect and explore how I can contribute.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_28px_rgba(16,185,129,0.40)] transition-all duration-300 hover:shadow-[0_10px_36px_rgba(16,185,129,0.55)]"
            >
              <Sparkles className="h-4 w-4" />
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}
