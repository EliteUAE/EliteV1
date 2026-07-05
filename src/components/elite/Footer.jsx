import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Bell, ShieldCheck, Headphones, Activity } from "lucide-react";

const SOLUTIONS = [
  { label: "VoIP Solutions", href: "#services" },
  { label: "Contact Center", href: "#services" },
  { label: "E-commerce", href: "#" },
  { label: "App Development", href: "#" },
  { label: "CRM Systems", href: "#" },
  { label: "AI Models", href: "#" },
];

const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "Consulting", href: "#services" },
  { label: "Virtual Assistants", href: "#" },
  { label: "Web Dev", href: "#services" },
  { label: "Privacy", href: "#" },
  { label: "Careers", to: "/careers" },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "SOC 2 Certified" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Activity, label: "99.9% Uptime" },
];

const CONTACT_EMAIL = "sales@elitepartnersus.com";
const LOCATIONS = "USA · UAE · EGY";

export default function Footer({ onBooking }) {
  return (
    <footer className="relative bg-void border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(46,99,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading text-2xl italic text-electric-light">Elite</span>
              <span className="font-body text-2xl text-platinum tracking-widest uppercase font-semibold">Partners</span>
            </Link>
            <p className="text-[14px] text-[#8A8899] leading-[1.75] max-w-[280px] font-light mb-2">
              Strategic technology partnerships driving enterprise transformation.
            </p>
            <p className="text-[12px] text-electric-light font-medium tracking-wide mb-6">
              Trusted globally — {LOCATIONS}
            </p>
            <button onClick={onBooking}
              className="btn-primary text-[13px] px-6 py-3 rounded-full cursor-pointer">
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-5">Solutions</div>
            <ul className="space-y-3">
              {SOLUTIONS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] text-[#8A8899] hover:text-platinum transition-colors duration-200 cursor-pointer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-5">Company</div>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-[14px] text-[#8A8899] hover:text-platinum transition-colors duration-200 cursor-pointer">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="text-[14px] text-[#8A8899] hover:text-platinum transition-colors duration-200 cursor-pointer">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-5">Join Us</div>
            <Link to="/careers" className="flex items-center gap-2 text-[14px] font-semibold text-electric-light hover:text-electric transition-colors duration-200 cursor-pointer mb-4">
              <Bell size={14} strokeWidth={2} />
              We're Hiring
            </Link>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-electric mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[14px] text-[#8A8899] hover:text-platinum transition-colors duration-200 font-light">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-electric mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[14px] text-[#8A8899] font-light">{LOCATIONS}</span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social"
                  className="btn-ghost w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-[11px] font-medium text-[#8A8899] border border-white/[0.08] rounded-full px-4 py-2">
              <b.icon size={13} className="text-electric-light" strokeWidth={1.5} />
              {b.label}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="divider-brand mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8A8899]">
          <span>© {new Date().getFullYear()} Elite Partners US. Engineered for Performance.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-platinum transition-colors duration-200 cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-platinum transition-colors duration-200 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
