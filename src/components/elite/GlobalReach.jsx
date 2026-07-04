import React from "react";
import RevealWrap from "@/components/elite/RevealWrap";
import { motion } from "framer-motion";

const LOCATIONS = [
  { city: "USA", country: "Global Headquarters", region: "Global HQ", dot: { top: "42%", left: "22%" } },
  { city: "UAE", country: "Middle East", region: "Middle East Hub", dot: { top: "40%", left: "64%" } },
  { city: "Egypt", country: "North Africa", region: "Africa Hub", dot: { top: "50%", left: "50%" } },
];

export default function GlobalReach() {
  return (
    <section id="global" className="relative py-28 md:py-36 bg-void overflow-hidden">
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
            {/* Decorative globe-like visual */}
            <div className="relative aspect-square max-w-[560px] mx-auto">
              {/* Ambient gradient-mesh glow filling the space around the rings */}
              <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(46,99,255,0.16)_0%,transparent_65%)] blur-2xl pointer-events-none" />
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_65%_60%,rgba(18,184,134,0.14)_0%,transparent_60%)] blur-2xl pointer-events-none" />

              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
              <div className="absolute inset-[12%] rounded-full border border-electric/[0.08]" />
              <div className="absolute inset-[24%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[36%] rounded-full border border-electric/[0.06]" />

              {/* Fine dot-grid texture for a data-viz feel */}
              <div
                className="absolute inset-[8%] rounded-full opacity-[0.35]"
                style={{
                  backgroundImage: "radial-gradient(rgba(91,140,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
                }}
              />

              {/* Stylized dotted landmasses under the pins — reads as a world map, not literal cartography */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-90">
                <defs>
                  <pattern id="mapDots" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.55" fill="#5B8CFF" fillOpacity="0.55" />
                  </pattern>
                </defs>
                {/* North America — hosts the USA hub */}
                <path
                  d="M4,24 Q10,14 22,15 Q32,16 34,26 Q36,35 30,42 Q26,50 17,49 Q7,46 4,36 Q2,30 4,24 Z"
                  fill="url(#mapDots)"
                />
                {/* Europe / Middle East / North Africa landmass — hosts UAE + Egypt */}
                <path
                  d="M42,14 Q52,8 62,12 Q72,15 76,24 Q80,32 74,38 Q78,46 70,54 Q62,61 52,58 Q44,55 41,46 Q36,38 39,28 Q37,20 42,14 Z"
                  fill="url(#mapDots)"
                />
              </svg>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(46,99,255,0.3)_0%,transparent_70%)]"
                />
              </div>

              {/* Flight-path connections from the USA HQ hub to every other office */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B8CFF" />
                    <stop offset="100%" stopColor="#3DDC9B" />
                  </linearGradient>
                </defs>
                {[
                  "M22,42 Q43,23 64,40",
                  "M22,42 Q36,34 50,50",
                ].map((d, i) => (
                  <g key={i}>
                    <path d={d} fill="none" stroke="url(#routeGradient)" strokeWidth="0.3" strokeOpacity="0.25" />
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeDasharray="3 7"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                    />
                  </g>
                ))}
              </svg>

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
                      className="absolute inset-0 w-3 h-3 rounded-full bg-electric"
                    />
                    <div className="w-3 h-3 rounded-full bg-electric-light shadow-[0_0_12px_rgba(46,99,255,0.6)]" />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-[11px] font-medium text-electric-pale bg-elevated px-2 py-1 rounded">{loc.city}</span>
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
