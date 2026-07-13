import React, { useRef } from "react";
import RevealWrap from "@/components/elite/RevealWrap";
import { motion, useScroll, useTransform } from "framer-motion";
import worldMapImage from "@/assets/world-map.jpg";

const LOCATIONS = [
  { city: "USA", country: "Global Headquarters", region: "Global HQ", dot: { top: "42%", left: "22%" } },
  { city: "UAE", country: "Middle East", region: "Middle East Hub", dot: { top: "40%", left: "64%" } },
  { city: "Egypt", country: "North Africa", region: "Africa Hub", dot: { top: "50%", left: "50%" } },
];

export default function GlobalReach() {
  const frameRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="global" className="relative py-20 md:py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,68,209,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealWrap direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[0.5px] bg-electric" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">Global Presence</span>
            </div>
            <h2 className="font-heading text-platinum text-[clamp(36px,4.5vw,60px)] leading-[0.95] mb-6">
              Operating Across{" "}
              <span className="italic text-brand-gradient">3 Continents</span>
            </h2>
            <p className="text-[17px] leading-[1.75] text-[#8A8899] mb-10 font-light max-w-[440px]">
              Strategic hubs across North America, the Middle East, and Africa mean we
              follow your customers wherever they are — and never miss a beat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="glass rounded-xl p-5 group hover:border-electric/20 transition-all duration-300 cursor-default">
                  <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-electric mb-1">{loc.region}</div>
                  <div className="font-heading text-platinum text-lg italic">{loc.city}</div>
                  <div className="text-[12px] text-[#8A8899] font-light">{loc.country}</div>
                </div>
              ))}
            </div>
          </RevealWrap>

          <RevealWrap direction="right" delay={0.15}>
            <div className="relative max-w-[600px] mx-auto">
              {/* Ambient lights glowing behind the map card */}
              <motion.div
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -left-16 w-56 h-56 bg-electric/25 rounded-full blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-14 -right-10 w-64 h-64 bg-emerald/20 rounded-full blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-1/3 right-0 w-32 h-32 bg-[#F5B042]/20 rounded-full blur-3xl pointer-events-none"
              />

              {/* Framed satellite map card */}
              <div ref={frameRef} className="relative rounded-[28px] overflow-hidden glass card-glow aspect-[3/2]">
                <motion.img
                  style={{ y: imageY }}
                  src={worldMapImage}
                  alt="Elite Partners global hub map — USA, UAE, Egypt"
                  className="absolute inset-0 w-full h-full object-cover contrast-[1.05] saturate-[1.1] scale-110"
                />
                {/* Brand tint wash, kept light so labels stay legible */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-emerald/10 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-void/10" />
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/[0.08]" />

                {/* Scanning sweep for a live-data feel */}
                <motion.div
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-electric-light/10 to-transparent pointer-events-none"
                />
              </div>

              {/* Spin ring accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-[32px] border border-dashed border-white/[0.06] pointer-events-none"
              />
            </div>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}
