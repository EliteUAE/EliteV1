import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    <span ref={ref} className="text-gold-gradient font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight">
      {display}<span className="text-gold-light">{suffix}</span>
    </span>
  );
}

export default function Hero({ onBooking }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, -80]);
  const blob3Y = useTransform(scrollY, [0, 600], [0, -50]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-end overflow-hidden bg-void">

      {/* ── Deep background radial ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,68,209,0.12)_0%,transparent_70%)]" />

      {/* ── Aurora blobs with motion blur ── */}
      <motion.div style={{ y: blob1Y }}
        className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="aurora-blob blob-blur w-[700px] h-[700px] bg-[#1A44D1]/25"
          style={{ top: "-15%", left: "-12%" }}
        />
      </motion.div>

      <motion.div style={{ y: blob2Y }}
        className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 40, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="aurora-blob blob-blur w-[600px] h-[600px] bg-[#C9960C]/18"
          style={{ top: "5%", right: "-8%" }}
        />
      </motion.div>

      <motion.div style={{ y: blob3Y }}
        className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, 30, -40, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="aurora-blob blob-blur w-[500px] h-[500px] bg-[#6B21A8]/20"
          style={{ bottom: "5%", left: "25%" }}
        />
        {/* Extra small warm blob */}
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, -20, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="aurora-blob blob-blur w-[300px] h-[300px] bg-[#E8B84B]/10"
          style={{ top: "40%", left: "55%" }}
        />
      </motion.div>

      {/* ── Spotlight radial at center ── */}
      <div className="absolute inset-0 spotlight" />

      {/* ── Vertical light streaks ── */}
      {[16, 50, 84].map((left, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [0.8, 1.1, 0.8] }}
          transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
          className="light-streak"
          style={{ top: "10%", left: `${left}%`, height: "60%", opacity: 0.3 + i * 0.05 }}
        />
      ))}

      {/* ── Horizontal scan lines ── */}
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[16%] w-[0.5px] h-full bg-white/[0.025]" />
        <div className="absolute top-0 left-[50%] w-[0.5px] h-full bg-white/[0.025]" />
        <div className="absolute top-0 left-[84%] w-[0.5px] h-full bg-white/[0.025]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent" />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 md:pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            animate={{ width: ["2rem", "3rem", "2rem"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-[0.5px] bg-gold"
          />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">
            Contact Centers · Consulting · Web & IT · Lead Generation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[860px] text-halo"
        >
          <span className="block font-heading text-platinum leading-[0.9] tracking-[-0.01em] text-[clamp(52px,8vw,104px)]">
            Every Call
          </span>
          <span className="block font-heading text-platinum leading-[0.9] tracking-[-0.01em] text-[clamp(52px,8vw,104px)]">
            Answered.
          </span>
          <span className="block font-heading italic text-gold-gradient leading-[0.95] text-[clamp(52px,8vw,104px)]">
            Every Lead
          </span>
          <span className="block font-heading italic text-gold-gradient leading-[0.95] text-[clamp(52px,8vw,104px)]">
            Chased.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[520px] text-[17px] leading-[1.8] text-[#8A8899] mt-8 font-light"
        >
          Elite Partners picks up your phones, fixes your operations, builds the website
          that actually converts, and keeps your pipeline full — around the clock.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start gap-3 mt-10"
        >
          <button onClick={onBooking}
            className="btn-gold glow-border flex items-center gap-2 text-[14px] px-7 py-4 rounded-full cursor-pointer">
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
          transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-24 pt-10 border-t border-white/[0.06]"
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <AnimatedCounter value={m.value} suffix={m.suffix} delay={i * 150} />
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8A8899] mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8899] [writing-mode:vertical-rl] mb-3">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
