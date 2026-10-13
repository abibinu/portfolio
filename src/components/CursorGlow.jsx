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

    // Track cursor/touch
    let mouse = { x: -200, y: -200, active: false };
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

    // Helper to spawn a sparkle
    const spawnSparkle = (x, y, count = 1, burst = false) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) {
          particles.shift(); // keep particle count bounded for optimal 60fps
        }

        const angle = burst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;
        const speed = burst ? Math.random() * 3.5 + 1.2 : Math.random() * 1.2 + 0.3;

        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (burst ? 0 : 0.4), // slight upward float
          size: Math.random() * 5 + 3,
          maxLife: burst ? 35 : 28,
          life: 0,
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.15,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          isStar: Math.random() > 0.35 // 65% 4-point stars, 35% glowing circles
        });
      }
    };

    // Desktop: Mouse Move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Spawn trail if cursor has moved enough distance
      const dist = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
      if (dist > 18) {
        spawnSparkle(mouse.x, mouse.y, 2, false);
        lastSpawn = { x: mouse.x, y: mouse.y };
      }
    };

    // Desktop: Mouse Click Burst
    const handleMouseDown = (e) => {
      spawnSparkle(e.clientX, e.clientY, 10, true);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Mobile: Touch Move & Start
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        mouse.active = true;
        spawnSparkle(touch.clientX, touch.clientY, 8, true);
        lastSpawn = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        mouse.active = true;

        const dist = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
        if (dist > 14) {
          spawnSparkle(mouse.x, mouse.y, 2, false);
          lastSpawn = { x: mouse.x, y: mouse.y };
        }
      }
    };

    const handleTouchEnd = () => {
      // Fade out pointer tracker smoothly
      setTimeout(() => {
        mouse.active = false;
      }, 300);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

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

      // 1. Draw smooth cursor neon aura if active
      if (mouse.active) {
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180
        );
        grad.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
        grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
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
        p.vx *= 0.94; // friction
        p.vy *= 0.94;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const currentSize = p.size * (1 - progress * 0.4);

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
