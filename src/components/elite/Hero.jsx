import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";

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
    <span ref={ref} className="text-brand-gradient font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight">
      {display}<span className="text-electric-light">{suffix}</span>
    </span>
  );
}

export default function Hero({ onBooking }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Ambient hero photograph — dissolves into the aurora as the user scrolls past.
  // Driven only by cheap, GPU-compositable transforms (opacity/scale/translate) —
  // an animated CSS blur() filter here would force a full repaint every scroll frame.
  const imageOpacity = useTransform(scrollY, [0, 550], [0.55, 0]);
  const imageScale = useTransform(scrollY, [0, 550], [1, 1.22]);
  const imageY = useTransform(scrollY, [0, 550], [0, -70]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-end overflow-hidden bg-void noise-overlay">

      {/* ── Deep background radial ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,68,209,0.12)_0%,transparent_70%)]" />

      {/* ── Ambient hero photograph — fades in on load, dissolves away on scroll ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.1, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[62%_42%] grayscale-[35%] contrast-[1.08] animate-ken-burns"
          />
          {/* Brand duotone wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric/25 via-transparent to-emerald/20 mix-blend-color" />
          {/* Legibility gradient — solid where copy sits, opens up toward the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-void from-[5%] via-void/70 via-45% to-void/10" />
          {/* Fade into the sections above/below */}
          <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void" />
        </motion.div>
      </motion.div>

      {/* ── Aurora glow — static (was 4 separately-animating blurred blobs
          plus a scroll-linked parallax wrapper each; that's a lot of
          continuous compositing work for a decorative background element).
          A single painted-once gradient reads the same at a glance. ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob blob-blur w-[700px] h-[700px] bg-[#1A44D1]/20"
          style={{ top: "-15%", left: "-12%" }}
        />
        <div
          className="aurora-blob blob-blur w-[600px] h-[600px] bg-[#12B886]/15"
          style={{ bottom: "0%", right: "-8%" }}
        />
      </div>

      {/* ── Spotlight radial at center ── */}
      <div className="absolute inset-0 spotlight" />

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
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-8 md:pb-12 pt-32 md:pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[0.5px] bg-electric" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-electric-light">
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
          <span className="block font-heading italic text-brand-gradient leading-[0.95] text-[clamp(52px,8vw,104px)]">
            Every Lead
          </span>
          <span className="block font-heading italic text-brand-gradient leading-[0.95] text-[clamp(52px,8vw,104px)]">
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
            className="btn-primary glow-border flex items-center gap-2 text-[14px] px-7 py-4 rounded-full cursor-pointer">
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={2} />
              Book Free Consultation
            </span>
          </button>
          <a href="#services"
            className="btn-ghost flex items-center gap-2 text-[14px] px-7 py-4 rounded-full font-medium cursor-pointer">
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
          <ChevronDown size={16} className="text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
