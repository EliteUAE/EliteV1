import React from "react";

const ITEMS = [
  "Contact Center Services", "Business Consulting", "Web Development",
  "IT Solutions", "Lead Generation", "24/7 Support", "Global Reach",
  "Operations Management", "CRM Integration", "Digital Transformation",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden py-5 bg-surface border-y border-white/[0.05]">
      <div
        className="flex gap-12 w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#8A8899]">
              {item}
            </span>
            <span className="text-electric text-[10px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
