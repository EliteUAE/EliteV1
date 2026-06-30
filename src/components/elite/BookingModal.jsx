import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2 } from "lucide-react";

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  const handleClose = () => { onClose(); setTimeout(() => setSent(false), 400); };

  const field = "w-full bg-elevated border border-white/[0.07] rounded-xl px-4 py-3 text-platinum text-[14px] placeholder:text-[#8A8899]/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200 font-light";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="absolute inset-0 bg-void/80 backdrop-blur-xl" />
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-gold rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(201,150,12,0.15)" }}
          >
            {/* Header */}
            <div className="p-8 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center">
                    <Calendar size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-platinum text-xl italic">Book a Consultation</h3>
                    <p className="text-[12px] text-[#8A8899] font-light">Free · 30 minutes · No pressure</p>
                  </div>
                </div>
                <button onClick={handleClose} aria-label="Close"
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-[#8A8899] hover:text-platinum transition-colors cursor-pointer">
                  <X size={16} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-full glass-gold flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 size={28} className="text-gold" strokeWidth={1.5} />
                    </motion.div>
                    <h4 className="font-heading text-platinum text-2xl italic mb-2">Request Received</h4>
                    <p className="text-[14px] text-[#8A8899] font-light mb-6">We'll reach out within 24 hours to confirm your consultation slot.</p>
                    <button onClick={handleClose}
                      className="btn-gold text-[14px] px-6 py-3 rounded-full cursor-pointer">
                      <span>Close</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Name *</label>
                        <input required className={field} placeholder="Your name"
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Email *</label>
                        <input required type="email" className={field} placeholder="you@company.com"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Company</label>
                        <input className={field} placeholder="Company name"
                          value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Phone</label>
                        <input type="tel" className={field} placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Service of Interest</label>
                      <select className={`${field} cursor-pointer`}
                        value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service…</option>
                        <option>Contact Center</option>
                        <option>Business Consulting</option>
                        <option>Web & IT</option>
                        <option>Lead Generation</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-medium tracking-wide text-[#8A8899] uppercase block mb-1.5">Message</label>
                      <textarea rows={3} className={`${field} resize-none`} placeholder="Tell us a bit about what you need…"
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" disabled={loading}
                      className="btn-gold w-full text-[14px] py-4 rounded-xl mt-2 cursor-pointer disabled:opacity-60">
                      <span className="flex items-center justify-center gap-2">
                        {loading ? (
                          <><div className="w-4 h-4 rounded-full border-2 border-void/30 border-t-void animate-spin" /> Sending…</>
                        ) : (
                          <><Calendar size={16} strokeWidth={2} /> Book Consultation</>
                        )}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
