import React, { useEffect, useRef } from 'react';

const SPARKLE_COLORS = [
  '#38bdf8', // Cyan
  '#818cf8', // Indigo
  '#c084fc', // Purple
  '#facc15', // Gold
  '#ffffff', // White
  '#34d399', // Emerald
];

const CursorGlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track cursor/touch coordinates & smooth glow opacity
    let mouse = { x: -600, y: -600 };
    let glowAlpha = 0;
    let targetGlowAlpha = 0;

    // Ambient floating stardust / particles in the background
    const ambientStars = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      baseAlpha: Math.random() * 0.45 + 0.25,
      pulseSpeed: Math.random() * 0.025 + 0.015,
      phase: Math.random() * Math.PI * 2,
      vy: -(Math.random() * 0.4 + 0.15),
      vx: (Math.random() - 0.5) * 0.18,
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Desktop: Mouse Move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      targetGlowAlpha = 1;
    };

    const handleMouseLeave = () => {
      targetGlowAlpha = 0;
    };

    // Mobile: Touch Events
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        targetGlowAlpha = 1;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        targetGlowAlpha = 1;
      }
    };

    const handleTouchEnd = () => {
      // Smooth organic fade out when finger is lifted
      targetGlowAlpha = 0;
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Main 60fps Animation Loop
    let animId = null;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw smooth cursor neon aura (only the glow, no cursor particles)
      const fadeSpeed = targetGlowAlpha > glowAlpha ? 0.16 : 0.035;
      glowAlpha += (targetGlowAlpha - glowAlpha) * fadeSpeed;

      if (glowAlpha > 0.005) {
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          600
        );
        grad.addColorStop(0, `rgba(59, 130, 246, ${0.085 * glowAlpha})`);
        grad.addColorStop(0.4, `rgba(168, 85, 247, ${0.045 * glowAlpha})`);
        grad.addColorStop(0.8, `rgba(168, 85, 247, ${0.01 * glowAlpha})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 600, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Ambient Floating Particles in Background (Active on Mobile & Desktop)
      for (let i = 0; i < ambientStars.length; i++) {
        const s = ambientStars[i];
        s.y += s.vy;
        s.x += s.vx;
        s.phase += s.pulseSpeed;

        // Wrap boundaries smoothly
        if (s.y < -10) s.y = height + 10;
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;

        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.25;
        ctx.save();
        ctx.globalAlpha = Math.max(0.08, Math.min(0.8, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.shadowBlur = s.size * 3.5;
        ctx.shadowColor = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 w-full h-full will-change-transform"
    />
  );
};

export default CursorGlow;
