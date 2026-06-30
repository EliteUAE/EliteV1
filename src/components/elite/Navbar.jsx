import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Global", href: "#global" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", to: "/careers" },
];

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: visible ? 0 : (scrolled ? 100 : -80),
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "bottom-6 top-auto w-[min(94vw,900px)]"
            : "top-0 bottom-auto w-full"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass rounded-full px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "bg-transparent px-6 md:px-10 py-5"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="font-heading text-lg md:text-xl font-bold italic text-gold-light">Elite</span>
            <span className="font-body text-lg md:text-xl text-platinum tracking-[0.12em] uppercase font-semibold">Partners</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <Link key={link.to} to={link.to}
                  className="text-[13px] font-medium text-[#8A8899] hover:text-platinum px-3 py-2 rounded-full transition-colors duration-200 tracking-wide cursor-pointer">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href}
                  className="text-[13px] font-medium text-[#8A8899] hover:text-platinum px-3 py-2 rounded-full transition-colors duration-200 tracking-wide cursor-pointer">
                  {link.label}
                </a>
              )
            )}
            <button onClick={onBooking}
              className="btn-gold ml-3 text-[13px] px-5 py-2.5 rounded-full tracking-wide">
              <span>Book Consultation</span>
            </button>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 text-platinum cursor-pointer" aria-label="Open menu">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full p-8"
            >
              <div className="flex items-center justify-between mb-14">
                <Link to="/" className="flex items-center gap-2">
                  <span className="font-heading text-xl italic text-gold-light">Elite</span>
                  <span className="font-body text-xl text-platinum tracking-widest uppercase font-semibold">Partners</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-platinum cursor-pointer" aria-label="Close menu">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-0">
                {NAV_LINKS.map((link, i) =>
                  link.to ? (
                    <motion.div key={link.to} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay: i*0.06 }}>
                      <Link to={link.to} onClick={() => setMobileOpen(false)}
                        className="block font-heading text-3xl text-platinum py-4 border-b border-white/[0.06] tracking-tight italic cursor-pointer">
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div key={link.href} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay: i*0.06 }}>
                      <a href={link.href} onClick={() => setMobileOpen(false)}
                        className="block font-heading text-3xl text-platinum py-4 border-b border-white/[0.06] tracking-tight italic cursor-pointer">
                        {link.label}
                      </a>
                    </motion.div>
                  )
                )}
              </div>
              <div className="mt-auto">
                <button onClick={() => { setMobileOpen(false); onBooking(); }}
                  className="btn-gold w-full text-base py-4 rounded-full tracking-wide">
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
