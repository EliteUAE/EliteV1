const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, TrendingUp, GraduationCap, Heart, Globe } from "lucide-react";
import Navbar from "@/components/elite/Navbar";
import Footer from "@/components/elite/Footer";
import BookingModal from "@/components/elite/BookingModal";
import ApplicationForm from "@/components/elite/ApplicationForm";
import RevealWrap from "@/components/elite/RevealWrap";
import CAREERS_HERO from "@/assets/team-meeting.jpg";

const VALUES = [
  { icon: Users, title: "One Team, Global Reach", desc: "Work alongside talented professionals across the USA, UAE, and Egypt. Collaborate across cultures, time zones, and disciplines on projects that matter." },
  { icon: TrendingUp, title: "Real Career Growth", desc: "We promote from within and invest in your development. Every role has a clear path forward — you're never stuck in a box." },
  { icon: GraduationCap, title: "Keep Learning", desc: "Annual learning budget, certifications, conferences, and hands-on mentorship from senior team members who want you to succeed." },
  { icon: Heart, title: "Wellness First", desc: "Comprehensive health insurance, flexible schedules, and a culture that respects your time outside of work. Burnout is not a badge of honor here." },
];

const BENEFITS = [
  { icon: Globe, title: "Remote-First Culture", desc: "Flexible remote and hybrid arrangements across our three regional hubs." },
  { icon: TrendingUp, title: "Competitive Salary", desc: "Market-leading compensation reviewed annually based on impact." },
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual stipend for courses, certifications, and professional development." },
  { icon: Users, title: "Global Team", desc: "Collaborate with diverse talent across three continents and cultures." },
  { icon: Briefcase, title: "Real Impact", desc: "Work on enterprise-scale projects that shape how global businesses operate." },
];

export default function Careers() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-void overflow-x-hidden">
      <Navbar onBooking={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${CAREERS_HERO})`,
              animation: "kenBurns 25s ease-in-out infinite alternate",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/80 to-void/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[0.5px] bg-electric" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-electric-light">
              We're Hiring · Join Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px]"
          >
            <span className="block font-heading text-platinum leading-[0.92] tracking-[-0.02em] text-[clamp(48px,8vw,96px)]" style={{ fontWeight: 800 }}>
              Build the Future of
            </span>
            <span className="block font-display text-electric-light leading-[0.95] tracking-[-0.01em] text-[clamp(48px,8vw,96px)] italic" style={{ fontWeight: 700 }}>
              Business Operations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[520px] text-base md:text-[17px] leading-[1.7] text-[#8A8899] mt-8"
          >
            We're a team of operators, consultants, developers, and strategists who help growing
            companies run better. If you're tired of clocking in and want work that actually
            moves the needle — this is your place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-3 mt-10"
          >
            <a
              href="#apply"
              className="btn-primary flex items-center gap-2 text-[14px] px-7 py-4 rounded-full tracking-wide"
            >
              Apply Now
              <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a
              href="#culture"
              className="flex items-center gap-2 text-[14px] font-medium text-platinum px-7 py-4 rounded-full border border-white/[0.08] hover:border-white/20 hover:bg-surface/60 transition-all duration-300 tracking-wide hover:-translate-y-0.5"
            >
              Our Culture
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture / Why Join */}
      <section id="culture" className="py-24 md:py-32 bg-surface noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-electric-light">Why Join Us</span>
            </div>
            <h2 className="font-heading text-platinum leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)] max-w-[640px]" style={{ fontWeight: 800 }}>
              More Than a Job.{" "}
              <span className="font-display text-electric-light italic">A Mission.</span>
            </h2>
            <p className="text-base leading-[1.7] text-[#8A8899] mt-5 max-w-[520px]">
              We're not looking for people who want to blend in. We want the ones who see a broken
              process and can't help but fix it — then teach the team how to keep it fixed.
            </p>
          </RevealWrap>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {VALUES.map((v, i) => (
              <RevealWrap key={v.title} delay={(i % 2) * 0.12}>
                <div className="group bg-surface border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:border-electric/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-elevated border border-electric/20 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-electric-light" />
                  </div>
                  <h3 className="font-heading text-xl text-platinum mb-3 tracking-tight" style={{ fontWeight: 700 }}>{v.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-[#8A8899]">{v.desc}</p>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-24 md:py-32 bg-void noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5 justify-center">
              <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-electric-light">Apply Now</span>
            </div>
            <h2 className="font-heading text-platinum leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)] text-center" style={{ fontWeight: 800 }}>
              Tell Us About{" "}
              <span className="font-display text-electric-light italic">Yourself</span>
            </h2>
            <p className="text-base leading-[1.7] text-[#8A8899] mt-5 max-w-[520px] mx-auto text-center">
              We're actively hiring across the USA, UAE, and Egypt — remote included. Tell us which
              role or department interests you and we'll take it from there.
            </p>
          </RevealWrap>

          <div className="mt-14">
            <RevealWrap>
              <ApplicationForm />
            </RevealWrap>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 md:py-32 bg-surface noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-electric-light">Benefits & Perks</span>
            </div>
            <h2 className="font-heading text-platinum leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)]" style={{ fontWeight: 800 }}>
              Built for{" "}
              <span className="font-display text-electric-light italic">Real People</span>
            </h2>
          </RevealWrap>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {BENEFITS.map((b, i) => (
              <RevealWrap key={b.title} delay={(i % 3) * 0.08}>
                <div className="bg-surface border border-white/[0.07] rounded-2xl p-7 hover:border-electric/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <b.icon size={24} className="text-electric-light mb-4" strokeWidth={1.5} />
                  <div className="font-heading text-lg text-platinum mb-2 tracking-tight" style={{ fontWeight: 700 }}>{b.title}</div>
                  <p className="text-[13px] leading-[1.65] text-[#8A8899]">{b.desc}</p>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </section>

      {/* Direct contact, for anyone who'd rather not use the form */}
      <section className="py-16 bg-elevated relative overflow-hidden noise-overlay">
        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center relative z-10">
          <p className="text-[13px] text-[#8A8899]">
            Prefer email? Reach us directly at{" "}
            <a href="mailto:careers@elitepartnersus.com" className="text-electric-light border-b border-electric/30 hover:border-electric transition-colors">
              careers@elitepartnersus.com
            </a>
          </p>
        </div>
      </section>

      <Footer onBooking={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}