import React from "react";
import RevealWrap from "@/components/elite/RevealWrap";
import { motion } from "framer-motion";

const LOCATIONS = [
  { city: "Dubai", country: "UAE", region: "Middle East HQ", dot: { top: "38%", left: "60%" } },
  { city: "Cairo", country: "Egypt", region: "Africa Hub", dot: { top: "42%", left: "55%" } },
  { city: "Riyadh", country: "KSA", region: "Gulf Operations", dot: { top: "40%", left: "62%" } },
  { city: "London", country: "UK", region: "Europe Desk", dot: { top: "28%", left: "48%" } },
];

export default function GlobalReach() {
  return (
    <section id="global" className="relative py-28 md:py-36 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,68,209,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealWrap direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[0.5px] bg-gold" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">Global Presence</span>
            </div>
            <h2 className="font-heading text-platinum text-[clamp(36px,4.5vw,60px)] leading-[0.95] mb-6">
              Operating Across{" "}
              <span className="italic text-gold-gradient">3 Continents</span>
            </h2>
            <p className="text-[17px] leading-[1.75] text-[#8A8899] mb-10 font-light max-w-[440px]">
              Strategic hubs across the Middle East, Africa, and Europe mean we follow
              your customers wherever they are — and never miss a beat.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="glass rounded-xl p-5 group hover:border-gold/20 transition-all duration-300 cursor-default">
                  <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gold mb-1">{loc.region}</div>
                  <div className="font-heading text-platinum text-lg italic">{loc.city}</div>
                  <div className="text-[12px] text-[#8A8899] font-light">{loc.country}</div>
                </div>
              ))}
            </div>
          </RevealWrap>

          <RevealWrap direction="right" delay={0.15}>
            {/* Decorative globe-like visual */}
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
              <div className="absolute inset-[12%] rounded-full border border-gold/[0.08]" />
              <div className="absolute inset-[24%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[36%] rounded-full border border-gold/[0.06]" />
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(201,150,12,0.3)_0%,transparent_70%)]"
                />
              </div>
              {/* Location dots */}
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute group cursor-default"
                  style={loc.dot}
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute inset-0 w-3 h-3 rounded-full bg-gold"
                    />
                    <div className="w-3 h-3 rounded-full bg-gold-light shadow-[0_0_12px_rgba(201,150,12,0.6)]" />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-[11px] font-medium text-gold-pale bg-elevated px-2 py-1 rounded">{loc.city}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Spin ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[6%] rounded-full border border-dashed border-white/[0.06]"
              />
            </div>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}
