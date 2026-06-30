import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

export default function CTA({ onBooking }) {
  return (
    <section className="relative py-28 md:py-40 bg-void overflow-hidden">
      {/* Aurora blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="aurora-blob w-[500px] h-[500px] bg-[#1A44D1]/20 top-[-20%] left-[-10%]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="aurora-blob w-[400px] h-[400px] bg-[#C9960C]/15 bottom-[-10%] right-[-5%]"
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <RevealWrap>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-6 h-[0.5px] bg-gold" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">Ready to Scale</span>
            <div className="w-6 h-[0.5px] bg-gold" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(40px,6vw,80px)] leading-[0.92] mb-6">
            Let's Build Something{" "}
            <span className="italic text-gold-gradient block">Extraordinary</span>
          </h2>
          <p className="text-[18px] text-[#8A8899] leading-[1.75] max-w-[520px] mx-auto mb-10 font-light">
            Book a free 30-minute consultation. No pitch, no pressure — just an honest
            conversation about what we can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onBooking}
              className="btn-gold flex items-center gap-2 text-[15px] px-8 py-4 rounded-full cursor-pointer">
              <span className="flex items-center gap-2">
                <Calendar size={18} strokeWidth={2} />
                Book Free Consultation
              </span>
            </button>
            <a href="mailto:hello@elitepartners.ae"
              className="btn-ghost-gold flex items-center gap-2 text-[14px] px-8 py-4 rounded-full font-medium cursor-pointer">
              Email Us
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}
