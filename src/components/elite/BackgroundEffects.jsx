import React from "react";

// Static ambient glow — replaces the old always-on particle canvas (55
// particles redrawn every frame, forever) and two infinitely-animating,
// blurred full-viewport light beams. Those ran continuously behind every
// section on every page view regardless of whether they were visible, and
// were the main source of the scroll jank/lag complaints — animating a
// blurred filter is one of the most expensive things a browser can composite,
// and this had several running at once, all the time. A one-time-painted
// static gradient gives the same "lit" ambiance with zero ongoing cost.
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(91,140,255,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-[15%] -right-[10%] w-[55%] h-[55%] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(61,220,155,0.08) 0%, transparent 70%)" }}
      />
    </div>
  );
}
