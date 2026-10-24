import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export const ModernBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on desktop/pointer screens
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches;

    if (isTouch || window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

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

    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000, active: false };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const onResize = () => {
      if (!canvas) return;
      setupDimensions();
      initNodes();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("resize", onResize);

    const nodeColors = ["#38bdf8", "#60a5fa", "#818cf8", "#bae6fd", "#e0e7ff"];
    let nodes: Node[] = [];

    const initNodes = () => {
      const count = Math.floor(Math.min(width, 1800) * 0.055); // Calibrated clean density (~70-90 nodes)
      nodes = [];

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.4 + 1.0,
          color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
          alpha: Math.random() * 0.45 + 0.35,
        });
      }
    };

    initNodes();

    const maxConnectDistance = 140;
    const mouseRadius = 180;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        mouse.x = -2000;
        mouse.y = -2000;
      }

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce gently off borders
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > width) { n.x = width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > height) { n.y = height; n.vy *= -1; }

        // Subtle mouse repulsion/magnetism
        if (mouse.active) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouseRadius && mDist > 0) {
            const force = (1 - mDist / mouseRadius) * 0.5;
            n.x -= (mdx / mDist) * force;
            n.y -= (mdy / mDist) * force;

            // Draw line to mouse
            const lineAlpha = (1 - mDist / mouseRadius) * 0.28;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.alpha;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * 0.14;
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
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
          1. DESKTOP BACKGROUND (Interactive Neural / Distributed Mesh + Obsidian Horizon)
          ========================================================= */}
      <div className="hidden lg:block w-full h-full">
        {/* Subtle Celestial Ambient Dusk (Non-intrusive, deep dark) */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[650px] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 130% 65% at 50% -15%, rgba(37, 99, 235, 0.10) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 80%)",
          }}
        />

        {/* Interactive Neural / Distributed Constellation Canvas (PC Only) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
        />

        {/* Midnight Horizon Glow (Behind Contact & Footer) */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[580px] pointer-events-none opacity-45"
          style={{
            background:
              "radial-gradient(ellipse 130% 65% at 50% 120%, rgba(79, 70, 229, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 80%)",
          }}
        />

        {/* Deep Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 55%, rgba(9, 9, 11, 0.70) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          2. MOBILE BACKGROUND (STRICTLY 100% UNTOUCHED)
          ========================================================= */}
      <div className="block lg:hidden w-full h-full">
        {/* Mobile Atmospheric Celestial Mist */}
        <div
          className="absolute top-0 inset-x-0 w-full h-[650px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 140% 75% at 50% 18%, rgba(37, 99, 235, 0.13) 0%, rgba(14, 165, 233, 0.08) 35%, rgba(79, 70, 229, 0.03) 65%, transparent 85%)",
          }}
        />

        {/* Mobile Soft Ambient Body Fog */}
        <div
          className="absolute top-[25%] inset-x-0 w-full h-[1000px] pointer-events-none blur-[30px]"
          style={{
            background:
              "radial-gradient(ellipse 130% 60% at 50% 50%, rgba(37, 99, 235, 0.05) 0%, rgba(99, 102, 241, 0.025) 45%, transparent 80%)",
          }}
        />

        {/* Mobile Midnight Horizon Glow */}
        <div
          className="absolute bottom-0 inset-x-0 w-full h-[580px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 140% 75% at 50% 120%, rgba(79, 70, 229, 0.10) 0%, rgba(37, 99, 235, 0.04) 45%, transparent 85%)",
          }}
        />

        {/* Mobile Peripheral Cosmic Vignette */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 55%, rgba(9, 9, 11, 0.65) 100%)",
          }}
        />
      </div>
    </div>
  );
};
