import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Global Reach", href: "#global" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", to: "/careers" },
];

const CONTACT = [
  { icon: Mail, label: "hello@elitepartnersus.com" },
  { icon: Phone, label: "+971 4 000 0000" },
  { icon: MapPin, label: "USA" },
];

export default function Footer({ onBooking }) {
  return (
    <footer className="relative bg-void border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(46,99,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading text-2xl italic text-electric-light">Elite</span>
              <span className="font-body text-2xl text-platinum tracking-widest uppercase font-semibold">Partners</span>
            </Link>
            <p className="text-[14px] text-[#8A8899] leading-[1.75] max-w-[320px] font-light mb-6">
              The team behind the scenes of growing businesses. Contact centers, consulting,
              web & IT, lead generation — all under one roof.
            </p>
            <button onClick={onBooking}
              className="btn-primary text-[13px] px-6 py-3 rounded-full cursor-pointer">
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-5">Navigation</div>
            <ul className="space-y-3">
              {LINKS.map((l) => (
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

          {/* Contact */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-electric mb-5">Contact</div>
            <ul className="space-y-4">
              {CONTACT.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <c.icon size={14} className="text-electric mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[14px] text-[#8A8899] font-light">{c.label}</span>
                </li>
              ))}
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

        {/* Bottom */}
        <div className="divider-brand mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8A8899]">
          <span>© {new Date().getFullYear()} Elite Partners. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-platinum transition-colors duration-200 cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-platinum transition-colors duration-200 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
