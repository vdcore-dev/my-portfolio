import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
  color: string;
  depth: number;
  hasGlint?: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const ModernBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run animated galaxy canvas on desktop screens (>= 1024px)
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const setupDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupDimensions();

    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches;

    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const onMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const onResize = () => {
      if (!canvas) return;
      if (Math.abs(window.innerWidth - width) > 15 || Math.abs(window.innerHeight - height) > 120) {
        setupDimensions();
        initStars();
      }
    };

    if (!isTouch) window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);

    // Astronomical spectrum: diamond white, ice-blue, sky-blue, indigo, and warm stellar gold
    const colors = [
      "#ffffff",
      "#ffffff",
      "#f0f9ff",
      "#bae6fd",
      "#7dd3fc",
      "#38bdf8",
      "#818cf8",
      "#fef08a",
    ];

    let stars: Star[] = [];

    const initStars = () => {
      const isMobile = width < 768;
      const count = isMobile ? 120 : Math.floor(Math.min(width, 1600) * 0.16);
      stars = [];

      for (let i = 0; i < count; i++) {
        const depth = Math.random() * 0.8 + 0.2;
        const isBright = Math.random() > 0.88;
        const size = isBright
          ? Math.random() * 0.65 + 1.25
          : Math.random() * 0.5 + 0.45;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: size * (depth > 0.6 ? 1 : 0.85),
          baseAlpha: Math.random() * 0.35 + 0.35,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.007 + 0.003,
          color: colors[Math.floor(Math.random() * colors.length)],
          depth,
          hasGlint: isBright && Math.random() > 0.6,
        });
      }
    };

    initStars();

    // Occasional cinematic shooting star (meteor)
    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: Math.PI / 4,
      alpha: 0,
      active: false,
    };

    const spawnShootingStar = () => {
      shootingStar.x = Math.random() * width * 0.75 + width * 0.1;
      shootingStar.y = Math.random() * height * 0.35;
      shootingStar.length = Math.random() * 80 + 70;
      shootingStar.speed = Math.random() * 8 + 10;
      shootingStar.angle = (Math.random() * 15 + 35) * (Math.PI / 180);
      shootingStar.alpha = 1;
      shootingStar.active = true;
    };

    const meteorTimer = setInterval(() => {
      if (!shootingStar.active && Math.random() > 0.25) {
        spawnShootingStar();
      }
    }, 9000);

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      let offsetX = 0;
      let offsetY = 0;

      if (!isTouch) {
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        offsetX = mouse.x - width / 2;
        offsetY = mouse.y - height / 2;
      }

      // 1. Draw Starfield
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.phase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.25;

        const renderX = isTouch ? s.x : s.x - offsetX * s.depth * 0.016;
        const renderY = isTouch ? s.y : s.y - offsetY * s.depth * 0.016;

        ctx.globalAlpha = Math.max(0.12, Math.min(0.95, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle diamond flare glint on select bright stars
        if (s.hasGlint && currentAlpha > 0.55) {
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(renderX - s.size * 2.5, renderY);
          ctx.lineTo(renderX + s.size * 2.5, renderY);
          ctx.moveTo(renderX, renderY - s.size * 2.5);
          ctx.lineTo(renderX, renderY + s.size * 2.5);
          ctx.stroke();
        }
      }

      // 2. Draw Shooting Star (Meteor)
      if (shootingStar.active) {
        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const meteorGradient = ctx.createLinearGradient(
          tailX,
          tailY,
          shootingStar.x,
          shootingStar.y
        );
        meteorGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        meteorGradient.addColorStop(0.7, "rgba(56, 189, 248, 0.45)");
        meteorGradient.addColorStop(1, "rgba(255, 255, 255, 0.95)");

        ctx.globalAlpha = shootingStar.alpha;
        ctx.strokeStyle = meteorGradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.018;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearInterval(meteorTimer);
      if (!isTouch) window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950 select-none w-full h-full"
      aria-hidden="true"
    >
      {/* =========================================================
          1. DESKTOP / PC BACKGROUND (100% Restored Original Version)
          ========================================================= */}
      <div className="hidden lg:block">
        {/* Desktop Hero Core Glow */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[620px] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(37, 99, 235, 0.12) 0%, rgba(56, 189, 248, 0.07) 30%, rgba(99, 102, 241, 0.05) 55%, transparent 80%)",
          }}
        />

        {/* Desktop Lateral Cosmic Dust Belts */}
        <div
          className="absolute top-[35%] right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.045) 0%, rgba(99, 102, 241, 0.02) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[60%] left-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.045) 0%, rgba(56, 189, 248, 0.02) 45%, transparent 70%)",
          }}
        />

        {/* Desktop Midnight Horizon Glow */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[580px] pointer-events-none opacity-65"
          style={{
            background:
              "radial-gradient(ellipse 75% 50% at 50% 115%, rgba(79, 70, 229, 0.10) 0%, rgba(37, 99, 235, 0.04) 50%, transparent 80%)",
          }}
        />

        {/* Desktop Multi-Depth Astronomical Canvas (Stars, Twinkle, Meteor, Mouse Parallax) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
        />

        {/* Desktop Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 60%, rgba(9, 9, 11, 0.65) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          2. MOBILE BACKGROUND (Smooth Ambient Mist & Toolbar Blending)
          ========================================================= */}
      <div className="block lg:hidden">
        {/* Mobile Atmospheric Celestial Mist (Hero - Soft feathered dispersion without circular hotspot) */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[620px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 160% 85% at 50% -25%, rgba(56, 189, 248, 0.09) 0%, rgba(37, 99, 235, 0.05) 35%, rgba(99, 102, 241, 0.025) 60%, transparent 80%)",
          }}
        />

        {/* Mobile Soft Ambient Body Fog (Continuous diffused wash across Projects & Skills - Zero isolated blobs) */}
        <div
          className="absolute top-[25%] inset-x-0 w-full h-[1000px] pointer-events-none opacity-45 blur-[30px]"
          style={{
            background:
              "radial-gradient(ellipse 130% 60% at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(99, 102, 241, 0.025) 40%, transparent 75%)",
          }}
        />

        {/* Mobile Midnight Horizon Glow (Deep feathered dusk behind Contact & Footer) */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[580px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 140% 75% at 50% 120%, rgba(79, 70, 229, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 80%)",
          }}
        />

        {/* Mobile Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 60%, rgba(9, 9, 11, 0.65) 100%)",
          }}
        />
      </div>
    </div>
  );
};
