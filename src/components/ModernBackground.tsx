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
      {/* 1. Deep Edge-to-Edge Radiant Nebula Core (Hero section) */}
      <div
        className="absolute top-0 inset-x-0 w-full h-[650px] pointer-events-none opacity-85"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% -10%, rgba(56, 189, 248, 0.22) 0%, rgba(14, 165, 233, 0.13) 32%, rgba(99, 102, 241, 0.08) 58%, rgba(168, 85, 247, 0.03) 78%, transparent 100%)",
        }}
      />

      {/* 2. Cosmic Dust Belts (Lateral glows illuminating Projects & Skills) */}
      <div
        className="absolute top-[35%] -right-[10%] sm:right-0 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.09) 0%, rgba(56, 189, 248, 0.035) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[60%] -left-[10%] sm:left-0 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, rgba(168, 85, 247, 0.04) 45%, transparent 70%)",
        }}
      />

      {/* 3. Bottom Stellar Horizon Glow (Behind Contact & Footer) */}
      <div
        className="absolute bottom-0 inset-x-0 w-full h-[600px] pointer-events-none opacity-75"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 115%, rgba(99, 102, 241, 0.16) 0%, rgba(56, 189, 248, 0.06) 48%, rgba(168, 85, 247, 0.02) 72%, transparent 100%)",
        }}
      />

      {/* 4. Multi-Depth Astronomical Canvas (Stars, Twinkle, Meteor, Parallax) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
      />

      {/* 5. Deep Peripheral Cosmic Vignette */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 60%, rgba(9, 9, 11, 0.65) 100%)",
        }}
      />
    </div>
  );
};
