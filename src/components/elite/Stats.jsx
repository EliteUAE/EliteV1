import React, { useRef, useState, useEffect } from "react";
import RevealWrap from "@/components/elite/RevealWrap";

const STATS = [
  { value: "200", suffix: "+", label: "Businesses Served", sub: "across 15 industries" },
  { value: "99.9", suffix: "%", label: "Call Answer Rate", sub: "industry-leading SLA" },
  { value: "24", suffix: "/7", label: "Global Coverage", sub: "follow-the-sun ops" },
  { value: "3", suffix: "", label: "Continents", sub: "strategic presence" },
  { value: "5", suffix: "M+", label: "Calls Handled", sub: "and growing" },
  { value: "98", suffix: "%", label: "Client Retention", sub: "year over year" },
];

function Counter({ value, suffix, delay }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const animated = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const target = parseFloat(value);
        const isFloat = value.includes(".");
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(isFloat ? (target * ease).toFixed(1) : String(Math.round(target * ease)));
          if (p < 1) requestAnimationFrame(tick);
        };
        setTimeout(() => requestAnimationFrame(tick), delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);
  return (
    <span ref={ref} className="text-gold-gradient font-heading text-5xl md:text-6xl tracking-tight">
      {display}<span className="text-gold-light">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-28 md:py-36 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,150,12,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealWrap className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[0.5px] bg-gold" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">By the Numbers</span>
            <div className="w-6 h-[0.5px] bg-gold" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(32px,4vw,52px)] leading-tight">
            Performance That <span className="italic text-gold-gradient">Speaks</span>
          </h2>
        </RevealWrap>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <RevealWrap key={i} delay={i * 0.08}>
              <div className="bg-surface p-8 md:p-10 group hover:bg-elevated transition-colors duration-300">
                <Counter value={s.value} suffix={s.suffix} delay={i * 100} />
                <div className="mt-2">
                  <div className="text-platinum text-sm font-medium">{s.label}</div>
                  <div className="text-[#8A8899] text-xs mt-1 font-light">{s.sub}</div>
                </div>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
