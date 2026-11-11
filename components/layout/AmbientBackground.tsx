import React from "react";

/**
 * Global site-wide animated light theme canvas.
 * Optimized for 60fps performance using feathered radial gradients (no CSS
 * blur filter repaints), GPU-only transform animations, and layout containment.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ contain: "strict" }}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#F3F7FB]"
    >
      {/* Seamless Infinite Architectural Grid */}
      <div className="absolute -inset-12 bg-tech-grid animate-grid-drift opacity-80" />

      {/* Soft Vertical Atmospheric Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-transparent to-[#E9F1F8]/75" />

      {/* Drifting Brand Teal Aurora Glow (Top Right) */}
      <div
        className="animate-aurora-1 absolute -top-[18%] -right-[12%] w-[820px] h-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(21, 155, 154, 0.16) 0%, rgba(21, 155, 154, 0.06) 38%, rgba(21, 155, 154, 0.015) 60%, transparent 72%)",
        }}
      />

      {/* Drifting Brand Navy-Sky Aurora Glow (Mid Left) */}
      <div
        className="animate-aurora-2 absolute top-[22%] -left-[16%] w-[880px] h-[880px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(32, 61, 94, 0.12) 0%, rgba(20, 43, 74, 0.045) 40%, rgba(20, 43, 74, 0.01) 62%, transparent 74%)",
        }}
      />

      {/* Drifting Cool Aqua Glow (Bottom Right) */}
      <div
        className="animate-aurora-3 absolute -bottom-[16%] right-[6%] w-[740px] h-[740px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(21, 155, 154, 0.14) 0%, rgba(56, 189, 248, 0.06) 40%, transparent 72%)",
        }}
      />

      {/* Subtle Ambient Diagonal Sheen Sweep */}
      <div
        className="animate-beam-sweep absolute -top-1/2 left-0 w-[34%] h-[220%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(21, 155, 154, 0.04), rgba(255, 255, 255, 0.25), transparent)",
        }}
      />
    </div>
  );
}
