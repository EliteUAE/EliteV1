import React from "react";
import { Phone, TrendingUp, Globe, Zap, Users, Code2, BarChart3, Headphones } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";

const SERVICES = [
  {
    icon: Headphones,
    title: "Contact Center",
    subtitle: "24/7 · Multilingual",
    desc: "Inbound & outbound call handling, live chat, email support — fully staffed and trained to represent your brand perfectly.",
    span: "lg:col-span-2",
    accent: "from-[#1A44D1]/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    subtitle: "Strategy & Growth",
    desc: "Operations audits, workflow optimization, and growth roadmaps tailored to your business goals.",
    span: "",
    accent: "from-[#2E63FF]/15 to-transparent",
  },
  {
    icon: Code2,
    title: "Web & IT",
    subtitle: "Design · Dev · Deploy",
    desc: "High-converting websites, custom software, and IT infrastructure that keeps you moving.",
    span: "",
    accent: "from-[#6B21A8]/15 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Lead Generation",
    subtitle: "Full-funnel Pipeline",
    desc: "Cold outreach, warm follow-up, CRM management, and appointment setting — we fill your calendar.",
    span: "",
    accent: "from-[#059669]/15 to-transparent",
  },
  {
    icon: Globe,
    title: "Global Operations",
    subtitle: "3 Continents",
    desc: "Offshore teams in strategic time zones. Follow-the-sun coverage so you're never off.",
    span: "lg:col-span-2",
    accent: "from-[#2E63FF]/10 to-transparent",
  },
];

export default function Services({ onBooking }) {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,68,209,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealWrap>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-light">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-heading text-platinum leading-[0.95] text-[clamp(36px,4.5vw,60px)]">
              Four Pillars.{" "}
              <span className="italic text-brand-gradient">One Team.</span>
            </h2>
            <button onClick={onBooking}
              className="btn-primary text-[13px] px-6 py-3 rounded-full self-start md:self-auto cursor-pointer">
              <span>Get Started</span>
            </button>
          </div>
        </RevealWrap>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {SERVICES.map((s, i) => (
            <RevealWrap key={i} delay={i * 0.07} className={s.span}>
              <div className={`glass card-glow rounded-2xl p-8 h-full group hover:border-electric/20 transition-all duration-400 hover:-translate-y-1 cursor-default relative overflow-hidden ${s.span}`}>
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl glass-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <s.icon size={22} className="text-electric" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-electric mb-2">{s.subtitle}</div>
                  <h3 className="font-heading text-platinum text-xl md:text-2xl italic mb-3">{s.title}</h3>
                  <p className="text-[14px] text-[#8A8899] leading-[1.7] font-light">{s.desc}</p>
                </div>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
