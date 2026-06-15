"use client";

import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Cpu } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { technicalProficiency } from "@/data/skills";

const icons = [Code2, Brain, BarChart3, Cpu];
const colors = [
  { bar: "from-emerald-500 to-emerald-400", glow: "rgba(16,185,129,0.4)", text: "text-emerald-700", bg: "bg-emerald-500/10" },
  { bar: "from-[#0D1B4B] to-[#1a2d6b]",   glow: "rgba(13,27,75,0.35)",  text: "text-[#0D1B4B]",  bg: "bg-[#0D1B4B]/8" },
  { bar: "from-[#F59E0B] to-amber-400",    glow: "rgba(245,158,11,0.4)", text: "text-amber-700",  bg: "bg-amber-500/10" },
  { bar: "from-teal-500 to-teal-400",      glow: "rgba(20,184,166,0.4)", text: "text-teal-700",   bg: "bg-teal-500/10" },
];

export function TechProficiency() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#0D1B4B]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Technical Proficiency
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-[#0D1B4B] md:text-5xl">
              Practical skills,{" "}
              <span className="text-gradient">production mindset</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-foreground/55">
              Hands-on expertise built through IBM internship, IIT Roorkee AI program, and BITSom analytics coursework.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {technicalProficiency.map((s, i) => {
            const Icon = icons[i % icons.length];
            const c = colors[i % colors.length];
            return (
              <Reveal key={s.label} delay={i * 0.07}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-[#0D1B4B]/8 bg-white p-6 transition-all duration-300 card-lift"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-[#0D1B4B]">{s.label}</span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <motion.span
                        className={`text-2xl font-bold ${c.text}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {s.value}
                      </motion.span>
                      <span className="text-sm text-foreground/40">%</span>
                    </div>
                  </div>

                  {/* Bar track */}
                  <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-[#0D1B4B]/8">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                      style={{ boxShadow: `0 0 12px ${c.glow}` }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1], delay: 0.1 + i * 0.07 }}
                    />
                  </div>

                  {/* Tick marks */}
                  <div className="mt-2 flex justify-between text-[10px] text-foreground/30">
                    {[0, 25, 50, 75, 100].map((t) => (
                      <span key={t}>{t}%</span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
