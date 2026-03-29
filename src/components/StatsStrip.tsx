"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

interface Stat {
  value: string;
  unit: string;
  label: string;
}

const stats: Stat[] = [
  { value: "530", unit: "cv", label: "Potencia Maxima" },
  { value: "750", unit: "Nm", label: "Binario Maximo" },
  { value: "4.3", unit: "s", label: "0 a 100 km/h" },
  { value: "V8", unit: "Bi-Turbo", label: "Motor TwinPower" },
];

function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const match = stat.value.match(/^([\d.]+)/);
        if (match) {
          const target = parseFloat(match[1]);
          const isFloat = stat.value.includes(".");
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = target * eased;
            el.textContent = `${isFloat ? current.toFixed(1) : Math.round(current)}`;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div>
      <div className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-bmw-white leading-none mb-2">
        <span ref={ref}>{stat.value}</span>{" "}
        <span className="text-[0.5em] font-normal text-bmw-blue">
          {stat.unit}
        </span>
      </div>
      <div className="text-[0.8rem] text-bmw-muted tracking-wider uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="px-[clamp(1.5rem,5vw,6rem)] py-12 border-t border-b border-bmw-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100}>
            <AnimatedStat stat={stat} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
