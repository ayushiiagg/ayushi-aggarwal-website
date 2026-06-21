"use client";

import { useMemo } from "react";
import { CalendarDays, Award, Briefcase } from "lucide-react";
import { certificateCredentials } from "@/data/certificate-credentials";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const MONTH_ORDER: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function parseDateSortKey(dateLabel: string): number {
  const yearMatch = dateLabel.match(/\b(20\d{2})\b/);
  const year = yearMatch ? Number.parseInt(yearMatch[1], 10) : 0;
  const startPart = dateLabel.split(/[–-]/)[0].trim();
  const parts = startPart.split(/\s+/);
  const day = Number.parseInt(parts[0], 10) || 0;
  const month = MONTH_ORDER[parts[1]?.toLowerCase().slice(0, 3) ?? ""] ?? 0;
  return year * 10000 + month * 100 + day;
}

export function CertificationsSidebar() {
  const groupedByYear = useMemo(() => {
    const groups = new Map<number, typeof certificateCredentials>();

    for (const cert of certificateCredentials) {
      const existing = groups.get(cert.year) ?? [];
      existing.push(cert);
      groups.set(cert.year, existing);
    }

    return [...groups.entries()]
      .sort(([a], [b]) => b - a)
      .map(([year, certs]) => ({
        year,
        certs: [...certs].sort(
          (a, b) => parseDateSortKey(b.dateLabel) - parseDateSortKey(a.dateLabel)
        ),
      }));
  }, []);

  const totalCount = certificateCredentials.length;

  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-[#0D1B4B]/10 bg-white shadow-sm">
          <div className="border-b border-[#0D1B4B]/8 bg-gradient-to-r from-[#0D1B4B]/[0.04] to-emerald-500/[0.06] px-5 py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0D1B4B]/8 text-[#0D1B4B]">
                <CalendarDays className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0D1B4B]">Credentials at a Glance</h2>
                <p className="text-xs text-foreground/50">{totalCount} certificates · year-wise</p>
              </div>
            </div>
          </div>

          <div className="max-h-[min(70vh,720px)] overflow-y-auto p-4 [scrollbar-width:thin]">
            <div className="space-y-6">
              {groupedByYear.map(({ year, certs }) => (
                <div key={year}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-display text-lg text-[#0D1B4B]">{year}</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {certs.length}
                    </span>
                    <div className="h-px flex-1 bg-[#0D1B4B]/8" />
                  </div>

                  <ul className="space-y-2">
                    {certs.map((cert) => (
                      <li
                        key={cert.id}
                        className={cn(
                          "group rounded-xl border px-3 py-2.5 transition-colors",
                          cert.isInternship
                            ? "border-[#0D1B4B]/20 bg-gradient-to-r from-[#0D1B4B]/[0.06] to-emerald-500/[0.08] shadow-sm ring-1 ring-emerald-500/20"
                            : "border-transparent hover:border-emerald-500/15 hover:bg-emerald-500/[0.04]"
                        )}
                      >
                        <div className="flex gap-2.5">
                          <div
                            className={cn(
                              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
                              cert.isInternship
                                ? "bg-[#0D1B4B] text-white"
                                : "bg-[#0D1B4B]/6 text-[#0D1B4B]/70 group-hover:bg-emerald-500/10 group-hover:text-emerald-700"
                            )}
                          >
                            {cert.isInternship ? (
                              <Briefcase className="h-3 w-3" />
                            ) : (
                              <Award className="h-3 w-3" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            {cert.isInternship && (
                              <span className="mb-1 inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-800">
                                Internship Certificate
                              </span>
                            )}
                            <p
                              className={cn(
                                "text-xs font-semibold leading-snug",
                                cert.isInternship ? "text-[#0D1B4B]" : "text-[#0D1B4B]"
                              )}
                            >
                              {cert.name}
                            </p>
                            <p
                              className={cn(
                                "mt-1 text-[10px] font-medium",
                                cert.isInternship ? "text-[#0D1B4B]/60" : "text-foreground/45"
                              )}
                            >
                              {cert.dateLabel}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </aside>
  );
}
