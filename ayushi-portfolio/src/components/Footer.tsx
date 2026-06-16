"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Zap } from "lucide-react";

const navLinks = [
  { href: "/",               label: "About" },
  { href: "/education",      label: "Education" },
  { href: "/experience",     label: "Experience" },
  { href: "/skills",         label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact",        label: "Contact" },
];

const socials = [
  { href: "mailto:aggarwalayushi545@gmail.com",      icon: Mail,     label: "Email",    handle: "aggarwalayushi545@gmail.com" },
  { href: "https://www.linkedin.com/in/ayushi-aggarwal-bbb383257/", icon: Linkedin, label: "LinkedIn", handle: "in/ayushi-aggarwal-bbb383257" },
  { href: "https://github.com/ayushiiagg",    icon: Github,   label: "GitHub",   handle: "ayushiiagg" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08102e]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-[#0D1B4B]/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-[200px] w-[300px] rounded-full bg-[#F59E0B]/5 blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 pb-8 md:px-8">
        {/* Top gradient divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-[#0D1B4B] to-[#243580] shadow-lg ring-1 ring-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-base font-bold text-white">A</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-white">Ayushi</div>
                <div className="text-[10px] font-medium tracking-widest text-emerald-400 uppercase">
                  Analytics · AI
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/55 max-w-xs">
              Second-year BBA student specializing in Business Analytics with IBM at SRM University Delhi NCR. Passionate about AI-driven solutions.
            </p>

            <div className="mt-5 flex items-center gap-1.5 text-xs text-white/40">
              <MapPin className="h-3.5 w-3.5 text-emerald-500" />
              Delhi NCR, India
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Opportunities
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="mb-5 text-xs font-bold tracking-widest text-white/30 uppercase">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-emerald-500" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="mb-5 text-xs font-bold tracking-widest text-white/30 uppercase">
              Connect
            </div>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="group flex items-center gap-3 text-sm text-white/55 transition-all hover:text-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/80 group-hover:text-white">{s.label}</div>
                      <div className="text-[11px] text-white/35">{s.handle}</div>
                    </div>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <div className="text-xs text-white/30">
            © 2025 Ayushi · Built with{" "}
            <span className="text-white/50">Next.js 16</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <Zap className="h-3 w-3 text-emerald-500" />
            <span>Powered by analytics &amp; ambition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
