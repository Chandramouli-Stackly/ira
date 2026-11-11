"use client";

import React, { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor-interactive]';

/**
 * Lightweight, GPU-composited desktop cursor dot + trailing ring.
 * - Activates only on fine-pointer devices with hover capability.
 * - Uses direct DOM transform mutations in requestAnimationFrame (0 React re-renders).
 * - Automatically idles the rAF loop once settled to conserve CPU/battery.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovering = false;
    let isPressed = false;
    let rafId: number | null = null;

    const updateAppearance = () => {
      const opacity = isVisible ? "1" : "0";
      dot.style.opacity = opacity;
      ring.style.opacity = opacity;

      const dotScale = isPressed ? 0.8 : isHovering ? 1.25 : 1;
      const ringScale = isPressed ? 0.85 : isHovering ? 1.45 : 1;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;

      if (isHovering) {
        ring.style.borderColor = "rgba(20, 43, 74, 0.55)";
        ring.style.backgroundColor = "rgba(21, 155, 154, 0.12)";
      } else {
        ring.style.borderColor = "rgba(21, 155, 154, 0.55)";
        ring.style.backgroundColor = "rgba(21, 155, 154, 0.05)";
      }
    };

    const tick = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;

      ringX += dx * 0.22;
      ringY += dy * 0.22;

      updateAppearance();

      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        ringX = mouseX;
        ringY = mouseY;
        updateAppearance();
        rafId = null;
      }
    };

    const startLoop = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        ringX = mouseX;
        ringY = mouseY;
        isVisible = true;
      }
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      const dotScale = isPressed ? 0.8 : isHovering ? 1.25 : 1;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
      startLoop();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const nextHover = Boolean(target && target.closest(INTERACTIVE_SELECTOR));
      if (nextHover !== isHovering) {
        isHovering = nextHover;
        startLoop();
      }
    };

    const handleMouseDown = () => {
      isPressed = true;
      startLoop();
    };

    const handleMouseUp = () => {
      isPressed = false;
      startLoop();
    };

    const handleMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("blur", handleMouseLeave, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
    >
      {/* Trailing Ring */}
      <div
        ref={ringRef}
        style={{ opacity: 0, willChange: "transform, opacity" }}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-brand-teal/55 bg-brand-teal/5 transition-[opacity,border-color,background-color] duration-200 ease-out"
      />

      {/* Core Cursor Dot */}
      <div
        ref={dotRef}
        style={{ opacity: 0, willChange: "transform, opacity" }}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-brand-teal shadow-[0_0_8px_rgba(21,155,154,0.45)] transition-opacity duration-150"
      />
    </div>
  );
}

