import React from "react";
import RevealWrap from "@/components/elite/RevealWrap";

const TECHS = [
  "Salesforce", "HubSpot", "Zendesk", "Twilio", "Five9",
  "Genesys", "AWS", "Azure", "Shopify", "WordPress",
  "React", "Node.js",
];

export default function Technology() {
  return (
    <section className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealWrap className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[0.5px] bg-gold" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">Integrations</span>
            <div className="w-6 h-[0.5px] bg-gold" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(32px,4vw,52px)] leading-tight">
            Built on Tools You <span className="italic text-gold-gradient">Already Trust</span>
          </h2>
          <p className="text-[17px] text-[#8A8899] mt-4 font-light max-w-lg mx-auto">
            We integrate with your existing stack — no migration headaches, no ramp-up friction.
          </p>
        </RevealWrap>

        <div className="flex flex-wrap justify-center gap-3">
          {TECHS.map((tech, i) => (
            <RevealWrap key={tech} delay={i * 0.04}>
              <div className="glass rounded-full px-6 py-3 group hover:border-gold/25 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <span className="text-[13px] font-medium text-platinum/70 group-hover:text-platinum transition-colors duration-200">
                  {tech}
                </span>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
