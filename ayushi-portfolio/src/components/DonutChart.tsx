"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const gradients: Record<number, { id: string; stops: [string, string] }> = {
  0: { id: "donut0", stops: ["#10B981", "#34D399"] },
  1: { id: "donut1", stops: ["#0D1B4B", "#1a6bff"] },
  2: { id: "donut2", stops: ["#F59E0B", "#FCD34D"] },
  3: { id: "donut3", stops: ["#14B8A6", "#2DD4BF"] },
};

export function DonutChart({
  value,
  label,
  size = 150,
  strokeWidth = 12,
  colorIdx = 0,
  className,
}: {
  value: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  colorIdx?: number;
  className?: string;
}) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const dash = (clamped / 100) * c;
  const g = gradients[colorIdx % 4];

  return (
    <div className={cn("relative", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id={g.id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor={g.stops[0]} />
            <stop offset="100%" stopColor={g.stops[1]} />
          </linearGradient>
          <filter id={`glow-${g.id}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke="rgba(13,27,75,0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Glow layer */}
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={g.stops[0]}
          strokeWidth={strokeWidth + 4}
          strokeLinecap="round"
          fill="transparent"
          opacity={0.15}
          strokeDasharray={`${dash} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
        />

        {/* Main arc */}
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={`url(#${g.id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={`${dash} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
        />
      </svg>

      {/* Center text */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-display text-3xl font-bold text-[#0D1B4B]">{value}%</div>
          <div className="mt-1 text-[11px] font-semibold leading-tight text-foreground/55 max-w-[80px] text-center">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
