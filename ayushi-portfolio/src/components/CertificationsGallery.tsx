"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, Award, X, FileText } from "lucide-react";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const cardColors = [
  { border: "border-[#0D1B4B]/10",   icon: "bg-[#0D1B4B]/8 text-[#0D1B4B]",    band: "from-[#0D1B4B] via-emerald-500 to-[#F59E0B]" },
  { border: "border-emerald-500/15", icon: "bg-emerald-500/10 text-emerald-700", band: "from-emerald-500 via-teal-500 to-emerald-400" },
  { border: "border-amber-500/15",   icon: "bg-amber-500/10 text-amber-700",     band: "from-[#F59E0B] via-amber-500 to-teal-500" },
  { border: "border-teal-500/15",    icon: "bg-teal-500/10 text-teal-700",       band: "from-teal-500 via-emerald-500 to-[#0D1B4B]" },
];

export function CertificationsGallery() {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = useMemo(
    () => certificates.find((c) => c.id === openId) ?? null,
    [openId]
  );

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {certificates.map((c, i) => {
          const style = cardColors[i % cardColors.length];
          const hasImage = Boolean(c.image);
          const hasPdf = Boolean(c.pdf);
          return (
            <Reveal key={c.id} delay={i * 0.06}>
              <motion.div
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 card-lift",
                  style.border
                )}
                whileHover={{ scale: 1.02 }}
              >
                {/* Top gradient band */}
                <div className={cn("absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r", style.band)} />

                {/* Shimmer */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0D1B4B]/5 to-emerald-500/5">
                    {hasImage ? (
                      <Image
                        src={c.image!}
                        alt={c.name}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        unoptimized
                      />
                    ) : hasPdf ? (
                      <>
                        <iframe
                          src={`${c.pdf}#toolbar=0&navpanes=0`}
                          title={c.name}
                          className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] bg-white"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-[#0D1B4B]/75 px-3 py-1.5 text-[10px] font-semibold text-white">
                          <FileText className="h-3 w-3" />
                          PDF Certificate
                        </div>
                      </>
                    ) : (
                      <Image
                        src="/certificates/placeholder.jpg"
                        alt={c.name}
                        fill
                        className="object-contain p-2"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        unoptimized
                      />
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0D1B4B]/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <button
                        onClick={() => setOpenId(c.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#0D1B4B] shadow-lg transition hover:bg-white"
                        aria-label={`View ${c.name}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <a
                        href={c.pdf ?? c.image ?? "#"}
                        download={hasPdf ? true : undefined}
                        target={hasPdf ? undefined : "_blank"}
                        rel={hasPdf ? undefined : "noopener noreferrer"}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600"
                        aria-label={`Download ${c.name}`}
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", style.icon)}>
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-[#0D1B4B]">{c.name}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-foreground/50">
                        <span className="font-semibold text-foreground/70">{c.issuer}</span>
                        <span>·</span>
                        <span>{c.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl border-[#0D1B4B]/12 text-xs font-semibold text-[#0D1B4B] hover:border-emerald-500/30 hover:bg-emerald-500/5"
                      onClick={() => setOpenId(c.id)}
                    >
                      <Eye className="mr-1.5 h-3.5 w-3.5" />
                      View
                    </Button>
                    {hasPdf && (
                      <a
                        href={c.pdf}
                        download
                        aria-label={`Download ${c.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0D1B4B]/12 text-foreground/60 transition hover:border-emerald-500/30 hover:bg-emerald-500/8 hover:text-emerald-700"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {openId !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpenId(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-[#0D1B4B]/8 px-6 py-4">
                <div>
                  <h2 className="font-display text-xl text-[#0D1B4B]">{active?.name}</h2>
                  <p className="mt-0.5 text-xs text-foreground/50">{active?.issuer} · {active?.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {active?.pdf && (
                    <a
                      href={active.pdf}
                      download
                      className="flex items-center gap-1.5 rounded-xl bg-[#0D1B4B] px-3 py-2 text-xs font-semibold text-white hover:bg-[#1a2d6b]"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </a>
                  )}
                  <button
                    onClick={() => setOpenId(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0D1B4B]/10 text-foreground/60 hover:bg-[#0D1B4B]/5"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal content */}
              <div className="relative h-[65vh] bg-[#0D1B4B]/[0.02]">
                {active?.pdf ? (
                  <iframe src={active.pdf} title={active.name} className="h-full w-full" />
                ) : active?.image ? (
                  <Image
                    src={active.image}
                    alt={active?.name ?? "Certificate"}
                    fill
                    className="object-contain p-8"
                    sizes="100vw"
                    unoptimized
                  />
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
