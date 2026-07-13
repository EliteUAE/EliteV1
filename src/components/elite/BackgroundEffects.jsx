import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Floating particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      electric: Math.random() > 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.electric
          ? `rgba(46,99,255,${p.alpha})`
          : `rgba(18,184,134,${p.alpha * 0.4})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}

// Sweeping light beam
function LightBeam({ delay = 0, fromLeft = true }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        top: 0,
        left: fromLeft ? "-30%" : "auto",
        right: fromLeft ? "auto" : "-30%",
        width: "60%",
        height: "100vh",
        background: fromLeft
          ? "linear-gradient(105deg, transparent 40%, rgba(91,140,255,0.06) 50%, transparent 60%)"
          : "linear-gradient(75deg, transparent 40%, rgba(61,220,155,0.05) 50%, transparent 60%)",
        filter: "blur(2px)",
      }}
      animate={{ x: fromLeft ? ["0%", "180%", "0%"] : ["0%", "-180%", "0%"] }}
      transition={{ duration: 18 + delay, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

export default function BackgroundEffects() {
  return (
    <>
      <ParticleCanvas />
      <LightBeam delay={0} fromLeft={true} />
      <LightBeam delay={7} fromLeft={false} />
    </>
  );
}
