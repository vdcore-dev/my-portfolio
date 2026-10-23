import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // On page mount: only mark visible immediately if genuinely in upper viewport or page already scrolled
    const rect = el.getBoundingClientRect();
    const inInitialView =
      window.scrollY > 50
        ? rect.top < window.innerHeight && rect.bottom > 0
        : rect.top < window.innerHeight * 0.45 && rect.bottom > 0;

    if (inInitialView) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dynamic visibility: smoothly fade in on scroll down, reset when scrolling back up out of view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const getDirectionTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-6";
      case "down":
        return "-translate-y-6";
      case "left":
        return "translate-x-6";
      case "right":
        return "-translate-x-6";
      case "none":
        return "";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${getDirectionTransform()} scale-[0.985]`
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};
