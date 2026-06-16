"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, Menu, X,
  Home, GraduationCap, Briefcase, Sparkles, Award, MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/",               label: "About",          icon: Home },
  { href: "/education",      label: "Education",       icon: GraduationCap },
  { href: "/experience",     label: "Experience",      icon: Briefcase },
  { href: "/skills",         label: "Skills",          icon: Sparkles },
  { href: "/certifications", label: "Certifications",  icon: Award },
  { href: "/contact",        label: "Contact",         icon: MessageSquare },
];

export function Navbar() {
  const pathname   = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_40px_rgba(13,27,75,0.10)] border-b border-[#0D1B4B]/8"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.8, 0.2, 1] }}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 md:px-8">

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-[#0D1B4B] to-[#243580] shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-white tracking-tight">A</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-base font-semibold leading-none text-[#0D1B4B]">
                Ayushi
              </div>
              <div className="mt-0.5 text-[10px] font-medium tracking-widest text-emerald-600 uppercase">
                Analytics · AI
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "text-[#0D1B4B]"
                      : "text-foreground/60 hover:text-[#0D1B4B] hover:bg-[#0D1B4B]/5"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <n.icon className={cn("h-3.5 w-3.5 transition-colors", active ? "text-emerald-600" : "text-foreground/40")} />
                  {n.label}
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0D1B4B]/8 to-emerald-500/8 ring-1 ring-[#0D1B4B]/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/cv"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0D1B4B] to-[#1a2d6b] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(13,27,75,0.30)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(13,27,75,0.45)] hover:-translate-y-0.5"
              aria-label="View and download CV"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0D1B4B]/10 bg-white/80 text-[#0D1B4B] backdrop-blur-sm transition hover:bg-[#0D1B4B]/5 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-[70] w-[300px] bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              <div className="flex h-[68px] items-center justify-between border-b border-[#0D1B4B]/8 px-5">
                <div className="font-display text-base font-semibold text-[#0D1B4B]">
                  Ayushi
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0D1B4B]/10 text-[#0D1B4B] hover:bg-[#0D1B4B]/5"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {nav.map((n, i) => {
                  const active = pathname === n.href;
                  return (
                    <motion.div
                      key={n.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                          active
                            ? "bg-gradient-to-r from-[#0D1B4B]/8 to-emerald-500/8 text-[#0D1B4B] ring-1 ring-[#0D1B4B]/10"
                            : "text-foreground/70 hover:bg-[#0D1B4B]/5 hover:text-[#0D1B4B]"
                        )}
                      >
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg",
                          active ? "bg-emerald-500/15 text-emerald-700" : "bg-[#0D1B4B]/5 text-foreground/50"
                        )}>
                          <n.icon className="h-4 w-4" />
                        </div>
                        {n.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="absolute bottom-8 left-4 right-4">
                <Link
                  href="/cv"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0D1B4B] to-[#1a2d6b] px-4 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* spacer so content doesn't hide under fixed header */}
      <div className="h-[68px]" />
    </>
  );
}
