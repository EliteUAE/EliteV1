import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import RevealWrap from "@/components/elite/RevealWrap";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How quickly can you onboard our team?",
    a: "We're live within 5–7 business days for standard setups. Complex integrations with custom CRMs or industry-specific scripts typically take 2 weeks. We'll give you an exact timeline in the discovery call.",
  },
  {
    q: "Do you offer dedicated agents or shared pools?",
    a: "Both. Dedicated agents are trained exclusively on your brand and workflows. Shared pools work well for overflow or lower-volume clients. Most clients start shared and upgrade to dedicated once volume warrants it.",
  },
  {
    q: "What languages do your agents support?",
    a: "English and Arabic natively, with French and additional languages available on request. Our Middle East operations are particularly strong for Arabic-speaking markets.",
  },
  {
    q: "Can you integrate with our existing CRM?",
    a: "Yes. We have native integrations with Salesforce, HubSpot, Zendesk, and most major CRMs. Custom integrations are also available for proprietary systems.",
  },
  {
    q: "What's the minimum contract length?",
    a: "We ask for 3 months initially so there's time to train, optimise, and demonstrate ROI. After that, month-to-month is available for most services.",
  },
  {
    q: "Do you handle after-hours and weekend support?",
    a: "Yes. 24/7 coverage is our default — across all time zones. We have teams in the Middle East and Africa specifically to cover non-European hours.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-heading text-platinum text-lg italic group-hover:text-gold-light transition-colors duration-200">{q}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center text-gold transition-transform duration-300" style={{ transform: open ? "rotate(0deg)" : "rotate(0deg)" }}>
          {open ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-[#8A8899] leading-[1.75] pb-6 font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <RevealWrap className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[0.5px] bg-gold" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light">FAQ</span>
            <div className="w-6 h-[0.5px] bg-gold" />
          </div>
          <h2 className="font-heading text-platinum text-[clamp(32px,4vw,52px)] leading-tight">
            Common <span className="italic text-gold-gradient">Questions</span>
          </h2>
        </RevealWrap>

        <RevealWrap delay={0.1}>
          <div>
            {FAQS.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}
