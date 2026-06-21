"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Trophy, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  {
    icon: BookOpen,
    value: 3,
    suffix: "+",
    label: "Programs",
    sub: "SRM · BITSom · IIT Roorkee",
    detail: "Multi-disciplinary academic journey spanning Business Analytics, Generative AI, and Data Science.",
    gradient: "from-emerald-400 to-emerald-600",
    bg: "from-emerald-500/15 to-emerald-600/5",
    border: "border-emerald-500/30",
    glow: "rgba(16,185,129,0.45)",
    iconBg: "bg-emerald-500",
    ring: "ring-emerald-400/30",
    bar: "#10B981",
    percent: 75,
  },
  {
    icon: Trophy,
    value: 15,
    suffix: "+",
    label: "Certifications",
    sub: "IBM · BITSom · IIT · More",
    detail: "Industry-recognized credentials from IBM, IIT Roorkee, and BITSom in AI and Analytics.",
    gradient: "from-amber-400 to-amber-600",
    bg: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-500/30",
    glow: "rgba(245,158,11,0.45)",
    iconBg: "bg-amber-500",
    ring: "ring-amber-400/30",
    bar: "#F59E0B",
    percent: 85,
  },
  {
    icon: Briefcase,
    value: 2,
    suffix: "",
    label: "Internships",
    sub: "IBM · Vista Neotech",
    detail: "IBM Generative AI internship completed. Business Data Analyst internship at Vista Neotech Pvt. Ltd. — ongoing.",
    gradient: "from-sky-400 to-blue-600",
    bg: "from-sky-500/15 to-blue-600/5",
    border: "border-sky-500/30",
    glow: "rgba(14,165,233,0.45)",
    iconBg: "bg-sky-500",
    ring: "ring-sky-400/30",
    bar: "#0EA5E9",
    percent: 80,
  },
  {
    icon: GraduationCap,
    value: 7.78,
    suffix: "",
    label: "CGPA",
    sub: "SRM University Delhi NCR",
    detail: "Consistently high academic performance in Business Analytics program at SRM University.",
    gradient: "from-teal-400 to-teal-600",
    bg: "from-teal-500/15 to-teal-600/5",
    border: "border-teal-500/30",
    glow: "rgba(20,184,166,0.45)",
    iconBg: "bg-teal-500",
    ring: "ring-teal-400/30",
    bar: "#14B8A6",
    percent: 78,
  },
];

/* ─── Animated counter ──────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const isDecimal = target % 1 !== 0;
        const steps = 50;
        let i = 0;
        const iv = setInterval(() => {
          i++;
          const eased = 1 - Math.pow(1 - i / steps, 3);
          setDisplay(parseFloat((eased * target).toFixed(isDecimal ? 1 : 0)));
          if (i >= steps) clearInterval(iv);
        }, 25);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

/* ─── Arc infographic ───────────────────────────────────────────────── */
function ArcProgress({ percent, color, size = 80 }: { percent: number; color: string; size?: number }) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={6} fill="none" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={color} strokeWidth={6} strokeLinecap="round" fill="none"
        strokeDasharray={`${dash} ${c}`}
        initial={{ strokeDasharray: `0 ${c}` }}
        whileInView={{ strokeDasharray: `${dash} ${c}` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.2, 0.85, 0.2, 1], delay: 0.2 }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

/* ─── Card ──────────────────────────────────────────────────────────── */
function StatCard({ s, i }: { s: typeof stats[0]; i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    rotateX.set(-y * 10);
    rotateY.set(x  * 10);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl border ${s.border} bg-[#0c1638]/90 p-6 backdrop-blur-md cursor-default shadow-[0_12px_40px_rgba(0,0,0,0.25)]`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Colored top accent */}
        <div
          className="absolute inset-x-0 top-0 h-1 opacity-80"
          style={{ background: `linear-gradient(90deg, ${s.bar}, transparent)` }}
        />

        {/* Glow blob behind card */}
        <div
          className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at center, ${s.glow}, transparent 70%)` }}
        />

        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* Top row: icon + arc */}
        <div className="flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg} shadow-lg ring-2 ${s.ring}`}>
            <s.icon className="h-5 w-5 text-white" />
          </div>
          <div className="relative">
            <ArcProgress percent={s.percent} color={s.bar} size={64} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white/85">{s.percent}%</span>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-4">
          <div className="font-display text-5xl font-bold leading-none tracking-tight text-white">
            <AnimatedCounter target={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-sm font-bold text-white">{s.label}</div>
          <div className="mt-0.5 text-xs font-semibold text-white/85">{s.sub}</div>
        </div>

        {/* Detail text */}
        <div className="mt-4 overflow-hidden">
          <p className="text-[13px] font-medium leading-[1.65] text-white/90">
            {s.detail}
          </p>
        </div>

        {/* Arrow icon */}
        <div className="mt-4 flex items-center justify-between">
          <div className="h-px flex-1 bg-white/15" />
          <div className="ml-3 flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/8 text-white/60 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Bottom glow bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${s.bar}, transparent)` }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-[#080f28] py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[400px] rounded-full bg-amber-500/6 blur-[80px]" />
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">

        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0c1638]/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            At a Glance
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
            The numbers that define the journey
          </h2>
          <p className="mt-2 text-sm text-white/75">
            A snapshot of academic excellence, industry exposure, and continuous learning.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>

        {/* Bottom divider into white section */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
