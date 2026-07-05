import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";
import skyscrapersImage from "@/assets/skyscrapers.jpg";

export default function CTA({ onBooking }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-44 bg-void overflow-hidden">
      {/* Ambient skyline photograph — faint architectural texture */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          style={{ y: imageY }}
          src={skyscrapersImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.16] grayscale-[40%] contrast-[1.15] scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/85 to-void/60" />
      </div>

      {/* Heavy aurora burst */}
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="aurora-blob blob-blur w-[700px] h-[700px] bg-[#1A44D1]/25"
        style={{ top: "-30%", left: "-15%" }}
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 50, -20, 0], scale: [1, 0.85, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="aurora-blob blob-blur w-[600px] h-[600px] bg-[#2E63FF]/20"
        style={{ bottom: "-20%", right: "-10%" }}
      />
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="aurora-blob blob-blur w-[400px] h-[400px] bg-[#6B21A8]/18"
        style={{ top: "30%", right: "20%" }}
      />

      {/* Central spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(46,99,255,0.08)_0%,transparent_70%)]" />

      {/* Scan lines */}
      <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />

      {/* Light streaks */}
      {[20, 50, 80].map((left, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.2, 0.6, 0.2], scaleY: [0.7, 1.2, 0.7] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          className="light-streak"
          style={{ top: "5%", left: `${left}%`, height: "90%" }}
        />
      ))}

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <RevealWrap>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-electric-light">Ready to Scale</span>
            <div className="w-8 h-[0.5px] bg-electric" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(40px,6vw,88px)] leading-[0.9] mb-6 text-halo">
            Let's Build Something{" "}
            <span className="italic text-brand-gradient block">Extraordinary</span>
          </h2>
          <p className="text-[18px] text-[#8A8899] leading-[1.75] max-w-[520px] mx-auto mb-10 font-light">
            Book a free 30-minute consultation. No pitch, no pressure — just an honest
            conversation about what we can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onBooking}
              className="btn-primary glow-border flex items-center gap-2 text-[15px] px-8 py-4 rounded-full cursor-pointer">
              <span className="flex items-center gap-2">
                <Calendar size={18} strokeWidth={2} />
                Book Free Consultation
              </span>
            </button>
            <a href="mailto:sales@elitepartnersus.com"
              className="btn-ghost flex items-center gap-2 text-[14px] px-8 py-4 rounded-full font-medium cursor-pointer">
              Email Us
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}
