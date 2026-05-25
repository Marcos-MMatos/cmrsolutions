"use client";

export default function TechBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

      {/* Animated tech grid */}
      <div className="absolute inset-0 tech-grid opacity-60" />

      {/* Radial glow top */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial-glow opacity-70 blur-2xl" />

      {/* Radial glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-radial-glow opacity-50 blur-2xl" />

      {/* Subtle scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 1) 3px)",
        }}
      />

      {/* Floating particles */}
      {[
        { left: "10%", top: "20%", delay: "0s" },
        { left: "85%", top: "30%", delay: "1.5s" },
        { left: "25%", top: "70%", delay: "3s" },
        { left: "75%", top: "80%", delay: "2s" },
        { left: "50%", top: "15%", delay: "4s" },
        { left: "15%", top: "50%", delay: "2.5s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent-cyan rounded-full shadow-glow-cyan animate-float"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
