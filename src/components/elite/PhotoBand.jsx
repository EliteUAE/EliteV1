import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

export default function PhotoBand({
  image,
  eyebrow,
  title,
  accent,
  desc,
  reverse = false,
  onBooking,
  ctaLabel,
  bg = "bg-void",
}) {
  const frameRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1.06, 1.16]);

  return (
    <section className={`relative py-16 md:py-24 ${bg} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <RevealWrap direction={reverse ? "right" : "left"}>
            <div ref={frameRef} className="relative rounded-[28px] overflow-hidden glass card-glow aspect-[4/3]">
              <motion.img
                style={{ y: imageY, scale: imageScale }}
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale-[25%] contrast-[1.08]"
              />
              {/* Brand duotone wash — matches the hero photograph treatment */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/25 via-transparent to-emerald/20 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/[0.08]" />
              {/* corner glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-electric/30 rounded-full blur-3xl pointer-events-none"
              />
            </div>
          </RevealWrap>

          <RevealWrap direction={reverse ? "left" : "right"} delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[0.5px] bg-electric" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">{eyebrow}</span>
            </div>
            <h2 className="font-heading text-platinum leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4vw,52px)] mb-6">
              {title} <span className="italic text-brand-gradient">{accent}</span>
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#8A8899] max-w-[460px] mb-8 font-light">
              {desc}
            </p>
            {ctaLabel && (
              <button onClick={onBooking}
                className="btn-ghost flex items-center gap-2 text-[14px] px-6 py-3.5 rounded-full font-medium cursor-pointer">
                {ctaLabel}
                <ArrowRight size={15} strokeWidth={2} />
              </button>
            )}
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}
