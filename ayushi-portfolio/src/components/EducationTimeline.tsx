"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Building2, Calendar, Star,
  CheckCircle2, ChevronDown, Cpu, BookOpen, FlaskConical,
} from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* ─── Config ─────────────────────────────────────────────────────────── */
const statusConfig = {
  ongoing: {
    label: "Ongoing",
    badge: "bg-emerald-500/12 text-emerald-700 border-emerald-500/30",
    dot:   "bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.7)]",
    spine: "from-emerald-500 to-emerald-400",
    band:  "from-emerald-500/10 via-emerald-500/4 to-transparent",
    accent:"border-emerald-500/20",
    icon:  "bg-emerald-500/12 text-emerald-700 ring-emerald-500/25",
    pill:  "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    bar:   "bg-gradient-to-r from-emerald-500 to-emerald-400",
    glow:  "group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]",
  },
  completed: {
    label: "Completed",
    badge: "bg-teal-500/12 text-teal-700 border-teal-500/30",
    dot:   "bg-teal-500 shadow-[0_0_14px_rgba(20,184,166,0.7)]",
    spine: "from-teal-500 to-teal-400",
    band:  "from-teal-500/10 via-teal-500/4 to-transparent",
    accent:"border-teal-500/20",
    icon:  "bg-teal-500/12 text-teal-700 ring-teal-500/25",
    pill:  "bg-teal-500/10 text-teal-700 border-teal-500/20",
    bar:   "bg-gradient-to-r from-teal-500 to-teal-400",
    glow:  "group-hover:shadow-[0_20px_60px_rgba(20,184,166,0.12)]",
  },
  "in-progress": {
    label: "In Progress",
    badge: "bg-amber-500/12 text-amber-700 border-amber-500/30",
    dot:   "bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.7)]",
    spine: "from-amber-500 to-amber-400",
    band:  "from-amber-500/10 via-amber-500/4 to-transparent",
    accent:"border-amber-500/20",
    icon:  "bg-amber-500/12 text-amber-700 ring-amber-500/25",
    pill:  "bg-amber-500/10 text-amber-700 border-amber-500/20",
    bar:   "bg-gradient-to-r from-amber-500 to-amber-400",
    glow:  "group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]",
  },
};

const entryIcons = [BookOpen, GraduationCap, FlaskConical];

/* ─── Component ──────────────────────────────────────────────────────── */
export function EducationTimeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="relative">
      {/* Glowing spine */}
      <div className="absolute left-[22px] top-0 bottom-0 hidden w-px overflow-hidden md:block">
        <div className="h-full w-full bg-gradient-to-b from-emerald-500/70 via-teal-500/30 via-amber-500/20 to-transparent" />
        <div className="absolute inset-0 blur-[3px] bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent" />
      </div>

      <div className="space-y-6">
        {education.map((e, idx) => {
          const s = statusConfig[e.status];
          const EntryIcon = entryIcons[idx % entryIcons.length];
          const isOpen = expanded === e.id;

          return (
            <Reveal key={e.id} delay={idx * 0.1}>
              <div className="relative md:pl-[72px]">

                {/* Timeline dot */}
                <div className="absolute left-[14px] top-8 hidden md:block">
                  <div className={cn("h-[18px] w-[18px] rounded-full ring-[3px] ring-white", s.dot)} />
                  <div className={cn("absolute inset-0 animate-ping rounded-full opacity-25", s.dot.split(" ")[0])} />
                </div>

                {/* Card */}
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-[#0D1B4B]/10 bg-white transition-all duration-300",
                    s.glow,
                    isOpen && s.accent
                  )}
                  layout
                  whileHover={{ scale: 1.005 }}
                  transition={{ layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                >
                  {/* Top gradient wash */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70 pointer-events-none", s.band)} />

                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Left accent bar */}
                  <div className={cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl", s.bar)} />

                  {/* ── Header (always visible) ── */}
                  <button
                    className="relative w-full cursor-pointer px-6 pt-6 pb-5 text-left md:px-8"
                    onClick={() => setExpanded(isOpen ? null : e.id)}
                    aria-expanded={isOpen}
                  >
                    {/* Row 1: badges + grade */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className={cn("flex h-9 w-9 items-center justify-center rounded-xl ring-1", s.icon)}>
                          <EntryIcon className="h-4 w-4" />
                        </div>
                        <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", s.badge)}>
                          {s.label}
                        </span>
                        {e.period && (
                          <span className="flex items-center gap-1 text-xs text-foreground/50">
                            <Calendar className="h-3.5 w-3.5" />
                            {e.period}
                            {e.year && <span className="text-foreground/35">· {e.year}</span>}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {(e.cgpa || e.grade) && (
                          <div className="flex items-center gap-1.5 rounded-xl border border-amber-500/25 bg-amber-500/8 px-3 py-1.5">
                            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                            <span className="text-xs font-bold text-amber-700">
                              {e.cgpa ? `CGPA ${e.cgpa}` : e.grade}
                            </span>
                          </div>
                        )}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#0D1B4B]/10 bg-[#0D1B4B]/4 text-foreground/40"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Degree title */}
                    <h3 className="mt-3 font-display text-2xl tracking-tight text-[#0D1B4B] md:text-[1.75rem]">
                      {e.degree}
                    </h3>

                    {/* Institution */}
                    <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-foreground/65">
                      <Building2 className="h-4 w-4 text-emerald-600" />
                      {e.institution}
                    </div>

                    {/* Specialisation chip */}
                    {e.specialisation && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#0D1B4B]/10 bg-[#0D1B4B]/4 px-3 py-1.5">
                        <Cpu className="h-3.5 w-3.5 text-[#0D1B4B]/50" />
                        <span className="text-xs font-semibold text-[#0D1B4B]/70">
                          Specialisation: {e.specialisation}
                        </span>
                      </div>
                    )}
                  </button>

                  {/* ── Expandable body ── */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="relative px-6 pb-7 md:px-8">
                          {/* Divider */}
                          <div className="mb-6 h-px bg-gradient-to-r from-[#0D1B4B]/10 via-[#0D1B4B]/6 to-transparent" />

                          {/* Description */}
                          <p className="text-sm leading-7 text-foreground/65">
                            {e.description}
                          </p>

                          {/* Outcomes */}
                          {e.outcomes && e.outcomes.length > 0 && (
                            <div className="mt-6">
                              <div className="mb-3 flex items-center gap-2">
                                <div className={cn("h-4 w-1 rounded-full", s.bar)} />
                                <span className="text-xs font-bold tracking-widest text-[#0D1B4B]/60 uppercase">
                                  Key Outcomes &amp; Learning
                                </span>
                              </div>
                              <ul className="space-y-2.5">
                                {e.outcomes.map((outcome, oi) => (
                                  <motion.li
                                    key={outcome}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: oi * 0.06, duration: 0.35, ease: "easeOut" }}
                                  >
                                    <CheckCircle2 className={cn(
                                      "mt-0.5 h-4 w-4 shrink-0",
                                      e.status === "ongoing" ? "text-emerald-600"
                                        : e.status === "completed" ? "text-teal-600"
                                        : "text-amber-600"
                                    )} />
                                    <span className="text-sm leading-6 text-foreground/75">{outcome}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Skills */}
                          {e.skills && e.skills.length > 0 && (
                            <div className="mt-6">
                              <div className="mb-3 flex items-center gap-2">
                                <div className={cn("h-4 w-1 rounded-full", s.bar)} />
                                <span className="text-xs font-bold tracking-widest text-[#0D1B4B]/60 uppercase">
                                  Skills &amp; Tools
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {e.skills.map((skill, si) => (
                                  <motion.span
                                    key={skill}
                                    className={cn(
                                      "rounded-lg border px-3 py-1 text-xs font-semibold",
                                      s.pill
                                    )}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + si * 0.04, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                                    whileHover={{ scale: 1.07, y: -1 }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom accent bar */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    s.bar
                  )} />
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
