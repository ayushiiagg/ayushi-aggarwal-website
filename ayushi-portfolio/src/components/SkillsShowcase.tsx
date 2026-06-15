"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, Bot, Wrench, Code2, Users,
} from "lucide-react";
import { coreCompetencies, skillCategories } from "@/data/skills";
import { DonutChart } from "@/components/DonutChart";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const categoryIcons = [TrendingUp, Bot, Wrench, Code2, Users];
const categoryStyles = [
  { border: "border-[#0D1B4B]/10",   icon: "bg-[#0D1B4B]/8 text-[#0D1B4B]",   header: "from-[#0D1B4B]/6 to-transparent",   pill: "bg-[#0D1B4B]/6 text-[#0D1B4B] border-[#0D1B4B]/12" },
  { border: "border-emerald-500/15", icon: "bg-emerald-500/10 text-emerald-700", header: "from-emerald-500/8 to-transparent",  pill: "bg-emerald-500/8 text-emerald-700 border-emerald-500/15" },
  { border: "border-teal-500/15",    icon: "bg-teal-500/10 text-teal-700",       header: "from-teal-500/8 to-transparent",    pill: "bg-teal-500/8 text-teal-700 border-teal-500/15" },
  { border: "border-emerald-500/15", icon: "bg-emerald-500/10 text-emerald-700", header: "from-emerald-500/8 to-transparent",  pill: "bg-emerald-500/8 text-emerald-700 border-emerald-500/15" },
  { border: "border-amber-500/15",   icon: "bg-amber-500/10 text-amber-700",     header: "from-amber-500/8 to-transparent",   pill: "bg-amber-500/8 text-amber-700 border-amber-500/15" },
];

export function SkillsShowcase() {
  return (
    <div className="space-y-16">
      {/* ── Core Competencies ── */}
      <section>
        <Reveal>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Core Competencies
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-[#0D1B4B] md:text-5xl">
              Strength map
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-[#0D1B4B]/8 bg-white p-6 text-center transition-all duration-300 card-lift"
                whileHover={{ scale: 1.03 }}
              >
                {/* Shimmer */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="flex justify-center">
                  <DonutChart value={c.value} label={c.label} colorIdx={i} size={150} strokeWidth={12} />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Skill Categories ── */}
      <section>
        <Reveal>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D1B4B]/15 bg-[#0D1B4B]/6 px-4 py-1.5 text-xs font-bold tracking-widest text-[#0D1B4B] uppercase">
              Skill Categories
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-[#0D1B4B] md:text-5xl">
              Tooling + methods
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            const s = categoryStyles[i % categoryStyles.length];
            return (
              <Reveal key={cat.category} delay={i * 0.06}>
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 card-lift",
                    s.border
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header gradient */}
                  <div className={cn("absolute inset-x-0 top-0 h-24 bg-gradient-to-b", s.header)} />

                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative p-6">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", s.icon)}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0D1B4B]">{cat.category}</h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          className={cn(
                            "rounded-lg border px-2.5 py-1 text-xs font-semibold",
                            s.pill
                          )}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + si * 0.04 }}
                          whileHover={{ scale: 1.08, y: -1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
