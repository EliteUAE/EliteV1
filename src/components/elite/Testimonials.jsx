import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

const TESTIMONIALS = [
  {
    quote: "Elite Partners transformed how we handle customer inquiries. Their team integrated seamlessly — within a week, call resolution time dropped by 40%.",
    name: "Sarah Al-Rashidi",
    title: "COO, PropTech UAE",
    initials: "SA",
  },
  {
    quote: "We tried three agencies before Elite. None of them understood our industry. These guys got it on day one and delivered a pipeline we couldn't build ourselves in two years.",
    name: "Marcus Osei",
    title: "Founder, MedSupply Africa",
    initials: "MO",
  },
  {
    quote: "The website they built increased our conversion rate by 3x in three months. They also handle all our inbound — we've never been more confident in our operations.",
    name: "Lena Hoffmann",
    title: "Director, LegalTech GmbH",
    initials: "LH",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="relative py-28 md:py-36 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,99,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <RevealWrap>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">Client Stories</span>
            <div className="w-6 h-[0.5px] bg-electric" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(32px,4vw,52px)] leading-tight mb-14">
            Trusted by <span className="italic text-brand-gradient">Leaders</span>
          </h2>
        </RevealWrap>

        <div className="relative">
          <Quote size={48} className="text-electric/10 mx-auto mb-8" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-heading text-platinum text-xl md:text-2xl italic leading-[1.5] mb-10">
                "{TESTIMONIALS[idx].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full glass-brand flex items-center justify-center">
                  <span className="font-heading text-electric font-bold text-sm">{TESTIMONIALS[idx].initials}</span>
                </div>
                <div className="text-left">
                  <div className="text-platinum font-medium text-sm">{TESTIMONIALS[idx].name}</div>
                  <div className="text-[#8A8899] text-xs font-light">{TESTIMONIALS[idx].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} aria-label="Previous"
              className="btn-ghost w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i+1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === idx ? "bg-electric w-6" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next"
              className="btn-ghost w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
