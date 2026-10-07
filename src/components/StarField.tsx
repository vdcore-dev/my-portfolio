import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
  color: string;
  speedFactor: number;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    
    const isTouchDevice = 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia("(hover: none)").matches;

    
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      
      if (Math.abs(window.innerWidth - width) > 10 || Math.abs(window.innerHeight - height) > 120) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initStars();
      }
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    window.addEventListener("resize", handleResize);

    const colors = ["#ffffff", "#ffffff", "#ffffff", "#a7f3d0", "#c7d2fe"];
    let stars: Star[] = [];

    const initStars = () => {
      const isMobile = width < 768;
      
      const count = isMobile ? 95 : Math.floor(Math.min(width, 1400) * 0.12);

      stars = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() < 0.75 
          ? Math.random() * 0.9 + 0.6 
          : Math.random() * 1.4 + 1.1;

        const baseAlpha = Math.random() * 0.4 + 0.35;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.006 + 0.003, // Lagano, smireno pulsiranje
          color: colors[Math.floor(Math.random() * colors.length)],
          speedFactor: size * 0.015,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let offsetX = 0;
      let offsetY = 0;

      
      if (!isTouchDevice) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
        offsetX = mouse.x - width / 2;
        offsetY = mouse.y - height / 2;
      }

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

      
        star.phase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.phase) * 0.25;

        const renderX = isTouchDevice ? star.x : star.x - offsetX * star.speedFactor;
        const renderY = isTouchDevice ? star.y : star.y - offsetY * star.speedFactor;

        ctx.globalAlpha = Math.max(0.2, Math.min(0.9, currentAlpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-85"
    />
  );
};