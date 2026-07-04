const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Briefcase, Mail, Users, TrendingUp, GraduationCap, Heart, Globe, Send } from "lucide-react";
import Navbar from "@/components/elite/Navbar";
import Footer from "@/components/elite/Footer";
import BookingModal from "@/components/elite/BookingModal";
import ApplicationModal from "@/components/elite/ApplicationModal";
import RevealWrap from "@/components/elite/RevealWrap";

const CAREERS_HERO = "https://media.db.com/images/public/6a4321e700517b6f8766408e/e67dfb084_generated_image.png";

const VALUES = [
  { icon: Users, title: "One Team, Global Reach", desc: "Work alongside talented professionals across the USA, UAE, and Egypt. Collaborate across cultures, time zones, and disciplines on projects that matter." },
  { icon: TrendingUp, title: "Real Career Growth", desc: "We promote from within and invest in your development. Every role has a clear path forward — you're never stuck in a box." },
  { icon: GraduationCap, title: "Keep Learning", desc: "Annual learning budget, certifications, conferences, and hands-on mentorship from senior team members who want you to succeed." },
  { icon: Heart, title: "Wellness First", desc: "Comprehensive health insurance, flexible schedules, and a culture that respects your time outside of work. Burnout is not a badge of honor here." },
];

const POSITIONS = [
  { title: "Senior Contact Center Agent", dept: "Customer Operations", location: "Cairo, Egypt", type: "Full-Time" },
  { title: "Business Consultant", dept: "Strategy & Operations", location: "Dubai, UAE", type: "Full-Time" },
  { title: "Full-Stack Web Developer", dept: "Technology", location: "Remote", type: "Full-Time" },
  { title: "Mobile App Developer (React Native)", dept: "Technology", location: "Remote", type: "Full-Time" },
  { title: "VoIP Network Engineer", dept: "Infrastructure", location: "Cairo, Egypt", type: "Full-Time" },
  { title: "Lead Generation Specialist", dept: "Sales", location: "New York, USA", type: "Full-Time" },
  { title: "Account Manager", dept: "Client Success", location: "Dubai, UAE", type: "Full-Time" },
  { title: "UI/UX Designer", dept: "Technology", location: "Remote", type: "Full-Time" },
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
  const [applyOpen, setApplyOpen] = useState(false);
  const [applyPosition, setApplyPosition] = useState("");

  const openApplication = (position) => {
    setApplyPosition(position || "");
    setApplyOpen(true);
  };

  return (
    <div className="bg-bone overflow-x-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-bone/95 via-bone/80 to-bone/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[0.5px] bg-cobalt" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cobalt">
              We're Hiring · Join Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px]"
          >
            <span className="block font-heading text-obsidian leading-[0.92] tracking-[-0.02em] text-[clamp(48px,8vw,96px)]" style={{ fontWeight: 800 }}>
              Build the Future of
            </span>
            <span className="block font-display text-cobalt leading-[0.95] tracking-[-0.01em] text-[clamp(48px,8vw,96px)] italic" style={{ fontWeight: 700 }}>
              Business Operations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[520px] text-base md:text-[17px] leading-[1.7] text-ash mt-8"
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
              href="#positions"
              className="btn-fill flex items-center gap-2 text-[14px] font-semibold text-white bg-cobalt hover:bg-cobalt-light px-7 py-4 rounded-full transition-all duration-300 tracking-wide hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(26,68,209,0.25)]"
            >
              View Open Roles
              <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a
              href="#culture"
              className="flex items-center gap-2 text-[14px] font-medium text-obsidian px-7 py-4 rounded-full border border-black/[0.08] hover:border-black/20 hover:bg-white/60 transition-all duration-300 tracking-wide hover:-translate-y-0.5"
            >
              Our Culture
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture / Why Join */}
      <section id="culture" className="py-24 md:py-32 bg-white noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cobalt">Why Join Us</span>
            </div>
            <h2 className="font-heading text-obsidian leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)] max-w-[640px]" style={{ fontWeight: 800 }}>
              More Than a Job.{" "}
              <span className="font-display text-cobalt italic">A Mission.</span>
            </h2>
            <p className="text-base leading-[1.7] text-ash mt-5 max-w-[520px]">
              We're not looking for people who want to blend in. We want the ones who see a broken
              process and can't help but fix it — then teach the team how to keep it fixed.
            </p>
          </RevealWrap>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {VALUES.map((v, i) => (
              <RevealWrap key={v.title} delay={(i % 2) * 0.12}>
                <div className="group bg-bone/50 border border-black/[0.06] rounded-2xl p-8 md:p-10 hover:border-cobalt/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-cobalt" />
                  </div>
                  <h3 className="font-heading text-xl text-obsidian mb-3 tracking-tight" style={{ fontWeight: 700 }}>{v.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-ash">{v.desc}</p>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 md:py-32 bg-bone noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cobalt">Open Positions</span>
            </div>
            <h2 className="font-heading text-obsidian leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)]" style={{ fontWeight: 800 }}>
              Find Your{" "}
              <span className="font-display text-cobalt italic">Next Role</span>
            </h2>
            <p className="text-base leading-[1.7] text-ash mt-5 max-w-[520px]">
              We're actively hiring across all three regions and remote. Don't see a perfect fit?
              Send us your resume anyway — we're always looking for exceptional talent.
            </p>
          </RevealWrap>

          <div className="flex flex-col gap-3 mt-14">
            {POSITIONS.map((pos, i) => (
              <RevealWrap key={pos.title} delay={Math.min(i * 0.06, 0.3)}>
                <button
                  type="button"
                  onClick={() => openApplication(pos.title)}
                  className="group w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-black/[0.06] rounded-2xl p-6 md:p-7 hover:border-cobalt/20 hover:bg-cobalt/[0.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-cobalt" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-obsidian tracking-tight" style={{ fontWeight: 700 }}>{pos.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-[12px] font-medium text-cobalt">{pos.dept}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 md:gap-8 pl-15 md:pl-0">
                    <div className="flex items-center gap-1.5 text-[13px] text-ash">
                      <MapPin size={14} className="text-ash" />
                      {pos.location}
                    </div>
                    <div className="text-[12px] font-medium text-ash bg-sand/60 border border-black/[0.06] rounded-full px-3 py-1">
                      {pos.type}
                    </div>
                    <ArrowUpRight size={18} className="text-ash group-hover:text-cobalt transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden md:block" />
                  </div>
                </button>
              </RevealWrap>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 md:py-32 bg-white noise-overlay">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealWrap>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cobalt">Benefits & Perks</span>
            </div>
            <h2 className="font-heading text-obsidian leading-[0.95] tracking-[-0.01em] text-[clamp(32px,4.5vw,56px)]" style={{ fontWeight: 800 }}>
              Built for{" "}
              <span className="font-display text-cobalt italic">Real People</span>
            </h2>
          </RevealWrap>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {BENEFITS.map((b, i) => (
              <RevealWrap key={b.title} delay={(i % 3) * 0.08}>
                <div className="bg-bone/50 border border-black/[0.06] rounded-2xl p-7 hover:border-cobalt/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <b.icon size={24} className="text-cobalt mb-4" strokeWidth={1.5} />
                  <div className="font-heading text-lg text-obsidian mb-2 tracking-tight" style={{ fontWeight: 700 }}>{b.title}</div>
                  <p className="text-[13px] leading-[1.65] text-ash">{b.desc}</p>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-sand relative overflow-hidden noise-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center relative z-10">
          <RevealWrap>
            <h2 className="font-heading text-obsidian leading-[0.92] tracking-[-0.01em] text-[clamp(36px,6vw,72px)] mb-6" style={{ fontWeight: 800 }}>
              Don't See Your{" "}
              <span className="font-display text-cobalt italic">Perfect Fit?</span>
            </h2>
            <p className="text-base leading-[1.7] text-ash mb-10 max-w-[520px] mx-auto">
              We're always looking for exceptional people. Send us your resume and tell us how you'd
              make an impact — we read every single one.
            </p>
            <button
              type="button"
              onClick={() => openApplication("")}
              className="btn-fill inline-flex items-center gap-2 text-[15px] font-semibold text-white bg-cobalt hover:bg-cobalt-light px-8 py-4 rounded-full transition-all duration-300 tracking-wide hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(26,68,209,0.25)] cursor-pointer"
            >
              <Send size={16} />
              Send Your Resume
            </button>
            <div className="flex items-center justify-center gap-2 mt-8 text-[13px] text-ash">
              <Mail size={13} />
              <a href="mailto:careers@elitepartnersus.com" className="text-ash border-b border-black/10 hover:text-cobalt hover:border-cobalt transition-colors">
                careers@elitepartnersus.com
              </a>
            </div>
          </RevealWrap>
        </div>
      </section>

      <Footer onBooking={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <ApplicationModal open={applyOpen} onClose={() => setApplyOpen(false)} position={applyPosition} />
    </div>
  );
}