import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";

const metrics = [
  { value: "200", suffix: "+", label: "Businesses Served" },
  { value: "99.9", suffix: "%", label: "Call Answer Rate" },
  { value: "24", suffix: "/7", label: "Global Coverage" },
  { value: "3", suffix: "", label: "Continents" },
];

function AnimatedCounter({ value, suffix, delay }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const target = parseFloat(value);
        const isFloat = value.includes(".");
        const duration = 1800;
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
    <span ref={ref} className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-gradient tracking-tight">
      {display}<span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function Hero({ onBooking }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-void">
      {/* Aurora background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="aurora-blob w-[600px] h-[600px] bg-[#1A44D1]/20 top-[-10%] left-[-10%]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="aurora-blob w-[500px] h-[500px] bg-[#C9960C]/15 top-[10%] right-[-5%]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="aurora-blob w-[400px] h-[400px] bg-[#6B21A8]/15 bottom-[10%] left-[30%]"
        />
        {/* Gold particle glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(201,150,12,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Architectural grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[16%] w-[0.5px] h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-[50%] w-[0.5px] h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-[84%] w-[0.5px] h-full bg-white/[0.03]" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[0.5px] bg-gold" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">
            Contact Centers · Consulting · Web & IT · Lead Generation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[820px]"
        >
          <span className="block font-heading text-platinum leading-[0.9] tracking-[-0.01em] text-[clamp(52px,8vw,100px)]">
            Every Call
          </span>
          <span className="block font-heading text-platinum leading-[0.9] tracking-[-0.01em] text-[clamp(52px,8vw,100px)]">
            Answered.
          </span>
          <span className="block font-heading italic text-gold-gradient leading-[0.95] text-[clamp(52px,8vw,100px)]">
            Every Lead
          </span>
          <span className="block font-heading italic text-gold-gradient leading-[0.95] text-[clamp(52px,8vw,100px)]">
            Chased.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[520px] text-[17px] leading-[1.75] text-[#8A8899] mt-8 font-light"
        >
          Elite Partners picks up your phones, fixes your operations, builds the website
          that actually converts, and keeps your pipeline full—around the clock.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start gap-3 mt-10"
        >
          <button onClick={onBooking}
            className="btn-gold flex items-center gap-2 text-[14px] px-7 py-4 rounded-full">
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={2} />
              Book Free Consultation
            </span>
          </button>
          <a href="#services"
            className="btn-ghost-gold flex items-center gap-2 text-[14px] px-7 py-4 rounded-full font-medium cursor-pointer">
            See What We Do
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-24 pt-10 border-t border-white/[0.06]"
        >
          {metrics.map((m, i) => (
            <div key={i} className="group">
              <AnimatedCounter value={m.value} suffix={m.suffix} delay={i * 150} />
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8A8899] mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8899] rotate-90 origin-center mb-6">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
