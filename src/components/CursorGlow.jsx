import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let rafId = null;
    let latestX = -100;
    let latestY = -100;
    let hasMoved = false;

    const updateGlow = () => {
      if (el && hasMoved) {
        el.style.background = `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(59, 130, 246, 0.08), rgba(168, 85, 247, 0.04), transparent 80%)`;
        el.style.opacity = '1';
      }
      rafId = null;
    };

    const handleMouseMove = (e) => {
      latestX = e.clientX;
      latestY = e.clientY;
      hasMoved = true;
      if (!rafId) {
        rafId = requestAnimationFrame(updateGlow);
      }
    };

    const handleMouseLeave = () => {
      if (el) el.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block opacity-0 will-change-[background]"
    />
  );
};

export default CursorGlow;
