import React from "react";
import { Building2, ShoppingCart, Heart, Scale, Truck, Landmark, Wifi, GraduationCap } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

const INDUSTRIES = [
  { icon: Building2, label: "Real Estate" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Heart, label: "Healthcare" },
  { icon: Scale, label: "Legal" },
  { icon: Truck, label: "Logistics" },
  { icon: Landmark, label: "Finance" },
  { icon: Wifi, label: "Telecom" },
  { icon: GraduationCap, label: "Education" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,99,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealWrap className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">Sectors We Serve</span>
            <div className="w-6 h-[0.5px] bg-electric" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(36px,4.5vw,60px)] leading-[0.95]">
            Deep Industry <span className="italic text-brand-gradient">Expertise</span>
          </h2>
        </RevealWrap>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <RevealWrap key={i} delay={i * 0.07}>
              <div className="glass rounded-2xl p-8 flex flex-col items-center gap-4 group hover:border-electric/25 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-14 h-14 rounded-xl glass-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ind.icon size={24} className="text-electric" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-platinum text-lg italic text-center">{ind.label}</span>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
