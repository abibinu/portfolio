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

    // Track cursor/touch & smooth glow fade opacity
    let mouse = { x: -200, y: -200 };
    let glowAlpha = 0;
    let targetGlowAlpha = 0;
    let lastSpawn = { x: 0, y: 0 };
    let particles = [];
    const maxParticles = 70;

    // Ambient floating stardust (active on all screens, especially stunning on mobile)
    const ambientStars = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      baseAlpha: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      vy: -(Math.random() * 0.35 + 0.15),
      vx: (Math.random() - 0.5) * 0.15,
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
    }));

    // Handle screen resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Helper to spawn sparkles widely spread around cursor
    const spawnSparkle = (x, y, count = 1, burst = false) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) {
          particles.shift();
        }

        // Scatter spawn position widely around cursor (up to 55px offset)
        const scatterDist = burst ? Math.random() * 65 + 10 : Math.random() * 45 + 6;
        const scatterAngle = Math.random() * Math.PI * 2;
        const spawnX = x + Math.cos(scatterAngle) * scatterDist;
        const spawnY = y + Math.sin(scatterAngle) * scatterDist;

        // Dispersion velocity
        const driftAngle = Math.random() * Math.PI * 2;
        const speed = burst ? Math.random() * 4.2 + 1.2 : Math.random() * 1.8 + 0.4;

        particles.push({
          x: spawnX,
          y: spawnY,
          vx: Math.cos(driftAngle) * speed,
          vy: Math.sin(driftAngle) * speed - (burst ? 0 : 0.35), // gentle float upward
          size: Math.random() * 5 + 2.5,
          maxLife: burst ? 42 : 36,
          life: 0,
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.18,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          isStar: Math.random() > 0.3
        });
      }
    };

    // Desktop: Mouse Move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      targetGlowAlpha = 1;

      // Spawn trail if cursor has moved enough distance
      const dist = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
      if (dist > 16) {
        spawnSparkle(mouse.x, mouse.y, 2, false);
        lastSpawn = { x: mouse.x, y: mouse.y };
      }
    };

    // Desktop: Mouse Click Burst
    const handleMouseDown = (e) => {
      spawnSparkle(e.clientX, e.clientY, 12, true);
    };

    const handleMouseLeave = () => {
      targetGlowAlpha = 0;
    };

    // Mobile: Touch Move & Start
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        targetGlowAlpha = 1;
        spawnSparkle(touch.clientX, touch.clientY, 10, true);
        lastSpawn = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        targetGlowAlpha = 1;

        const dist = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
        if (dist > 14) {
          spawnSparkle(mouse.x, mouse.y, 2, false);
          lastSpawn = { x: mouse.x, y: mouse.y };
        }
      }
    };

    const handleTouchEnd = () => {
      // Smooth organic fade out when finger is lifted
      targetGlowAlpha = 0;
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Draw 4-point Diamond Star
    const drawStar = (x, y, size, rotation, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = color;
      ctx.shadowBlur = size * 2.5;
      ctx.shadowColor = color;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const ox = Math.cos(angle) * size;
        const oy = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(ox, oy);
        else ctx.lineTo(ox, oy);

        const innerAngle = angle + Math.PI / 4;
        const ix = Math.cos(innerAngle) * (size * 0.28);
        const iy = Math.sin(innerAngle) * (size * 0.28);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Main 60fps Animation Loop
    let animId = null;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw smooth cursor neon aura with smooth fade in and fade out animation
      const fadeSpeed = targetGlowAlpha > glowAlpha ? 0.16 : 0.035; // responsive touch in, organic lingering fade out
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
        grad.addColorStop(0, `rgba(59, 130, 246, ${0.08 * glowAlpha})`);
        grad.addColorStop(0.4, `rgba(168, 85, 247, ${0.04 * glowAlpha})`);
        grad.addColorStop(0.8, `rgba(168, 85, 247, ${0.01 * glowAlpha})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 600, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Ambient Floating Stardust (Active on Mobile & Desktop)
      for (let i = 0; i < ambientStars.length; i++) {
        const s = ambientStars[i];
        s.y += s.vy;
        s.x += s.vx;
        s.phase += s.pulseSpeed;

        // Wrap boundaries
        if (s.y < -10) s.y = height + 10;
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;

        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.2;
        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(0.7, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.shadowBlur = s.size * 3;
        ctx.shadowColor = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Render and Update Active Sparkle Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.vx *= 0.95; // gentle friction
        p.vy *= 0.95;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const currentSize = p.size * (1 - progress * 0.35);

        if (p.life >= p.maxLife || currentSize <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isStar) {
          drawStar(p.x, p.y, currentSize, p.rotation, alpha, p.color);
        } else {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.shadowBlur = currentSize * 2;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
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
