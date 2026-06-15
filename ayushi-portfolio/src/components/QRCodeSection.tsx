"use client";

import { useMemo, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import {
  Download, Github, Linkedin, Mail, MapPin,
  Scan, Clock, CheckCircle2, ExternalLink,
} from "lucide-react";
import { getSiteUrl } from "@/lib/site";

const portfolioUrl = getSiteUrl();

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "aggarwalayushi545@gmail.com",
    href: "mailto:aggarwalayushi545@gmail.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/12",
    border: "border-emerald-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ayushi-aggarwal-bbb383257",
    href: "https://www.linkedin.com/in/ayushi-aggarwal-bbb383257/",
    color: "text-sky-400",
    bg: "bg-sky-500/12",
    border: "border-sky-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ayushiiagg",
    href: "https://github.com/ayushiiagg",
    color: "text-white/70",
    bg: "bg-white/8",
    border: "border-white/12",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi NCR, India",
    href: null,
    color: "text-amber-400",
    bg: "bg-amber-500/12",
    border: "border-amber-500/20",
  },
];

const highlights = [
  { icon: CheckCircle2, text: "Open to Opportunities",  color: "text-emerald-400" },
  { icon: Clock,        text: "Replies within 24 hrs",  color: "text-amber-400" },
];

export function QRCodeSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const filename = useMemo(() => "ayushi-aggarwal-portfolio-qr.svg", []);

  const download = () => {
    const svg = ref.current?.querySelector("svg");
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#08102e] via-[#0d1b4b] to-[#0f2060]">

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-10 -top-10 h-[240px] w-[240px] rounded-full bg-sky-500/12 blur-[70px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-8 bottom-0 h-[200px] w-[220px] rounded-full bg-amber-500/10 blur-[60px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative p-6 md:p-8">

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-bold tracking-widest text-sky-400 uppercase">
            <Scan className="h-3 w-3" />
            Contact Details
          </div>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-white">
            Reach out directly
          </h2>
          <p className="mt-1.5 text-sm text-white/50">
            Multiple ways to connect — pick what works best for you.
          </p>
        </div>

        {/* Availability chips */}
        <div className="mb-5 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold"
            >
              <h.icon className={`h-3.5 w-3.5 ${h.color}`} />
              <span className="text-white/70">{h.text}</span>
            </div>
          ))}
        </div>

        {/* Contact list */}
        <div className="space-y-2.5">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className={`group flex items-center gap-3 rounded-xl border ${item.border} ${item.bg} p-3 transition-all duration-200 hover:scale-[1.02] hover:border-white/20`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ x: 3 }}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/35">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 truncate text-sm font-semibold ${item.color} hover:underline`}
                  >
                    {item.value}
                    {item.href.startsWith("http") && (
                      <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                    )}
                  </a>
                ) : (
                  <div className={`text-sm font-semibold ${item.color}`}>{item.value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* QR Code block */}
        <motion.div
          className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <Scan className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              Scan to Visit Portfolio
            </span>
          </div>
          <p className="mt-0.5 text-xs text-white/35">Share with recruiters for instant access</p>

          <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row">
            {/* QR code */}
            <div
              ref={ref}
              className="flex h-[160px] w-[160px] shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.30)]"
            >
              <QRCodeSVG
                value={portfolioUrl}
                size={134}
                fgColor="#0D1B4B"
                bgColor="#ffffff"
                level="H"
                includeMargin={false}
              />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">Portfolio URL</p>
                <p className="mt-0.5 break-all text-xs font-semibold text-emerald-400">{portfolioUrl}</p>
              </div>
              <motion.button
                onClick={download}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_18px_rgba(16,185,129,0.40)] transition hover:shadow-[0_6px_26px_rgba(16,185,129,0.55)]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download QR Code
              </motion.button>
              <p className="text-[11px] text-white/30">SVG format · print-ready</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
