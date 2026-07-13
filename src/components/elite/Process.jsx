import React from "react";
import { Search, Zap, Rocket, Shield } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

const STEPS = [
  { num: "01", icon: Search, title: "Discovery Call", desc: "We learn your business, gaps, and goals inside-out. No templates — every engagement is built for you." },
  { num: "02", icon: Zap, title: "Custom Setup", desc: "Your dedicated team is briefed, trained, and equipped. Scripts, systems, processes — all configured." },
  { num: "03", icon: Rocket, title: "Go Live", desc: "We launch and immediately start delivering results. You stay focused on what matters most." },
  { num: "04", icon: Shield, title: "Continuous Optimisation", desc: "Weekly reports, quality audits, and proactive improvements. We get better as you grow." },
];

export default function Process({ onBooking }) {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-surface overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(107,33,168,0.07)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealWrap className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">How It Works</span>
          </div>
          <h2 className="font-heading text-platinum text-[clamp(36px,4.5vw,60px)] leading-[0.95] max-w-xl">
            From Day One to{" "}
            <span className="italic text-brand-gradient">Long-Term Growth</span>
          </h2>
        </RevealWrap>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <RevealWrap key={i} delay={i * 0.1}>
              <div className="relative glass rounded-2xl p-8 h-full group hover:border-electric/20 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden">
                {/* Number watermark */}
                <div className="absolute -top-4 -right-2 font-heading text-[80px] text-white/[0.03] leading-none select-none pointer-events-none">
                  {step.num}
                </div>
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-electric/30 z-20" />
                )}
                <div className="relative z-10">
                  <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-4">{step.num}</div>
                  <div className="w-10 h-10 rounded-lg glass-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={18} className="text-electric" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-platinum text-xl italic mb-3">{step.title}</h3>
                  <p className="text-[14px] text-[#8A8899] leading-[1.7] font-light">{step.desc}</p>
                </div>
              </div>
            </RevealWrap>
          ))}
        </div>

        <RevealWrap delay={0.4} className="mt-12 text-center">
          <button onClick={onBooking}
            className="btn-primary text-[14px] px-8 py-4 rounded-full cursor-pointer">
            <span>Start Your Onboarding</span>
          </button>
        </RevealWrap>
      </div>
    </section>
  );
}
