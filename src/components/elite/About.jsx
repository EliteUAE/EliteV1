import React from "react";
import { ArrowRight } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

const PILLARS = [
  { label: "Contact Centers", desc: "Inbound & outbound, 24/7" },
  { label: "Consulting", desc: "Strategy that drives growth" },
  { label: "Web & IT", desc: "Platforms that convert" },
  { label: "Lead Generation", desc: "Full pipeline management" },
];

export default function About({ onBooking }) {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-void overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(201,150,12,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <RevealWrap direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">
                Who We Are
              </span>
            </div>
            <h2 className="font-heading text-platinum leading-[0.95] tracking-[-0.01em] text-[clamp(36px,4.5vw,60px)] mb-6">
              The Team Behind the Scenes of{" "}
              <span className="italic text-gold-gradient">Growing Businesses</span>
            </h2>
            <p className="text-[17px] leading-[1.75] text-[#8A8899] max-w-[480px] mb-8 font-light">
              You didn't start your business to manage call centers, debug your website,
              or chase cold leads all day. We handle the operational weight — so you can
              focus on running the business.
            </p>
            <button onClick={onBooking}
              className="btn-ghost-gold flex items-center gap-2 text-[14px] px-6 py-3.5 rounded-full font-medium cursor-pointer">
              Start a Conversation
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          </RevealWrap>

          <RevealWrap direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <div key={i} className="glass rounded-2xl p-6 group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <div className="w-8 h-[1px] bg-gold mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3 className="font-heading text-platinum text-lg italic mb-1">{p.label}</h3>
                  <p className="text-[13px] text-[#8A8899] font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}
