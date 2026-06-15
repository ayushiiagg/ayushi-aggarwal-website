"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Calendar, ExternalLink, Github } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const logoStyles = [
  "from-[#0D1B4B] to-[#1a2d6b]",
  "from-sky-600 to-teal-600",
];

const carLabels = [
  { key: "context" as const, label: "Context", accent: "bg-[#0D1B4B]/8 text-[#0D1B4B] border-[#0D1B4B]/15" },
  { key: "action" as const, label: "Action", accent: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20" },
  { key: "result" as const, label: "Result", accent: "bg-amber-500/10 text-amber-800 border-amber-500/20" },
];

function ExperienceItem({
  entry,
  index,
}: {
  entry: (typeof experience)[0];
  index: number;
}) {
  const logoStyle = logoStyles[index % logoStyles.length];

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-[#0D1B4B]/8 bg-white transition-all duration-300 card-lift"
        whileHover={{ scale: 1.005 }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D1B4B] via-emerald-500 to-[#F59E0B]" />

        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,27,75,0.04),transparent_60%)]" />

        <div className="relative p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-2xl border border-[#0D1B4B]/10 bg-gradient-to-br shadow-[0_6px_24px_rgba(13,27,75,0.30)]",
                  logoStyle
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    {entry.logoText}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 to-transparent" />
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-tight text-[#0D1B4B] md:text-3xl">
                  {entry.role}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-foreground/65">
                  <span>{entry.company}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700">
                {entry.type}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-foreground/45">
                <Calendar className="h-3.5 w-3.5" />
                {entry.duration}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-foreground/45">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                {entry.location}
              </div>
            </div>
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#0D1B4B]/10 to-transparent" />

          <div className="grid gap-3 md:grid-cols-2">
            {entry.responsibilities.map((r, i) => (
              <motion.div
                key={r}
                className="flex items-start gap-2.5 rounded-xl border border-[#0D1B4B]/6 bg-[#0D1B4B]/[0.02] p-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm leading-6 text-foreground/70">{r}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {entry.tags.map((t, i) => (
              <motion.span
                key={t}
                className="rounded-lg border border-[#0D1B4B]/10 bg-gradient-to-r from-[#0D1B4B]/6 to-[#0D1B4B]/3 px-3 py-1 text-xs font-semibold text-[#0D1B4B]"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {entry.projects && entry.projects.length > 0 && (
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-4 w-1 rounded-full bg-gradient-to-b from-[#0D1B4B] to-emerald-500" />
                <h4 className="text-xs font-bold tracking-widest text-[#0D1B4B]/60 uppercase">
                  GitHub Projects
                </h4>
              </div>
              <div className="space-y-4">
                {entry.projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="rounded-xl border border-[#0D1B4B]/10 bg-gradient-to-br from-[#0D1B4B]/[0.03] to-emerald-500/[0.04] p-5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2.5 transition-colors hover:text-emerald-700"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#0D1B4B]/10 bg-[#0D1B4B]/6 text-[#0D1B4B] transition-colors group-hover/link:border-emerald-500/30 group-hover/link:bg-emerald-500/10 group-hover/link:text-emerald-700">
                        <Github className="h-4 w-4" />
                      </div>
                      <span className="font-display text-lg font-semibold text-[#0D1B4B] group-hover/link:text-emerald-700">
                        {project.title}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-emerald-600 opacity-70 transition-opacity group-hover/link:opacity-100" />
                    </a>

                    <div className="mt-4 space-y-3">
                      {carLabels.map(({ key, label, accent }) => (
                        <div
                          key={key}
                          className="rounded-lg border border-[#0D1B4B]/6 bg-white/60 p-4"
                        >
                          <span
                            className={cn(
                              "inline-flex rounded-md border px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase",
                              accent
                            )}
                          >
                            {label}
                          </span>
                          <p className="mt-2.5 text-sm leading-7 text-foreground/75">
                            {project[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

export function ExperienceCard() {
  return (
    <div className="space-y-6">
      {experience.map((entry, index) => (
        <ExperienceItem key={entry.id} entry={entry} index={index} />
      ))}
    </div>
  );
}
