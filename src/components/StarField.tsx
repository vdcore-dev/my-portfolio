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
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

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
      if (Math.abs(window.innerWidth - width) > 10 || Math.abs(window.innerHeight - height) > 120) {
        setupDimensions();
        initStars();
      }
    };

    if (!isTouch) window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);

    // Čisti astronomski spektar: bela svetlost uz diskretne cyan i emerald tonove
    const colors = ["#ffffff", "#ffffff", "#ffffff", "#f1f5f9", "#a7f3d0", "#67e8f9"];
    let stars: Star[] = [];

    const initStars = () => {
      const isMobile = width < 768;
      const count = isMobile ? 110 : Math.floor(Math.min(width, 1400) * 0.16);
      stars = [];

      for (let i = 0; i < count; i++) {
        const depth = Math.random() * 0.8 + 0.2;
        const isSharp = Math.random() > 0.8;
        const size = isSharp 
          ? Math.random() * 0.6 + 1.1 
          : Math.random() * 0.5 + 0.5;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: size * (depth > 0.6 ? 1 : 0.85),
          baseAlpha: Math.random() * 0.35 + 0.35,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.006 + 0.003,
          color: colors[Math.floor(Math.random() * colors.length)],
          depth,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let offsetX = 0;
      let offsetY = 0;

      if (!isTouch) {
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        offsetX = mouse.x - width / 2;
        offsetY = mouse.y - height / 2;
      }

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.phase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.22;

        const renderX = isTouch ? s.x : s.x - offsetX * s.depth * 0.018;
        const renderY = isTouch ? s.y : s.y - offsetY * s.depth * 0.018;

        ctx.globalAlpha = Math.max(0.15, Math.min(0.9, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (!isTouch) window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90"
    />
  );
};