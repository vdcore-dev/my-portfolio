import React, { useState, useEffect, useRef } from "react";
import { FileText, ArrowUpRight, X } from "lucide-react";
import { scrollToElement } from "../utils/scroll";

const NAV_LINKS = [
  {
    name: "Projects",
    href: "#projects",
    id: "projects",
    color: "bg-sky-400",
    shadow: "shadow-[0_0_12px_rgba(56,189,248,0.9)]",
  },
  {
    name: "Skills",
    href: "#skills",
    id: "skills",
    color: "bg-sky-400",
    shadow: "shadow-[0_0_12px_rgba(56,189,248,0.9)]",
  },
  {
    name: "About",
    href: "#about",
    id: "about",
    color: "bg-sky-400",
    shadow: "shadow-[0_0_12px_rgba(56,189,248,0.9)]",
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
    color: "bg-sky-400",
    shadow: "shadow-[0_0_12px_rgba(56,189,248,0.9)]",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrollingProgrammatically = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Optimized scroll position tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (isScrollingProgrammatically.current) {
            ticking = false;
            return;
          }

          const currentY = window.scrollY;
          const scrolled = currentY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          if (currentY < 180) {
            setActiveSection((prev) => (prev !== "" ? "" : prev));
            ticking = false;
            return;
          }

          const isAtBottom =
            window.innerHeight + Math.round(currentY) >=
            document.documentElement.scrollHeight - 70;

          if (isAtBottom) {
            setActiveSection((prev) => (prev !== "contact" ? "contact" : prev));
            ticking = false;
            return;
          }

          const scrollTrigger = currentY + window.innerHeight / 3;
          for (const link of NAV_LINKS) {
            const element = document.getElementById(link.id);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollTrigger >= top && scrollTrigger < top + height) {
                setActiveSection((prev) => (prev !== link.id ? link.id : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearScrollTimeout = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    clearScrollTimeout();
    isScrollingProgrammatically.current = true;
    setActiveSection("");
    setIsMobileMenuOpen(false);

    scrollToElement("home");
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 750);
  };

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const wasMobileOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    if (id === "home") {
      scrollToTop(e);
      return;
    }

    clearScrollTimeout();
    isScrollingProgrammatically.current = true;
    setActiveSection(id);

    // If mobile drawer was open, give a brief 100ms for the drawer to begin closing smoothly before scrolling
    const delay = wasMobileOpen ? 100 : 0;
    setTimeout(() => {
      scrollToElement(id, 64);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 750);
    }, delay);
  };

  return (
    <>
      {/* Top Ambient Vignette / Edge Fade Mask */}
      <div
        className="fixed top-0 left-0 right-0 h-24 sm:h-28 pointer-events-none z-30 bg-gradient-to-b from-zinc-950 via-zinc-950/75 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* ========================================================
          1. DESKTOP NAVBAR (Centered Apple-Grade Frosted Glass Capsule)
          ======================================================== */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 hidden md:flex justify-center px-4 pointer-events-none">
        <div className="w-fit pointer-events-auto flex flex-col items-center">
          <nav
            className={`relative flex items-center gap-3.5 px-4 py-2 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-zinc-950/80 border-white/[0.14] backdrop-blur-3xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_20px_40px_-10px_rgba(0,0,0,0.85)]"
                : "bg-zinc-900/50 border-white/[0.1] backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_12px_28px_-8px_rgba(0,0,0,0.55)]"
            }`}
          >
            {/* Desktop Brand Wordmark (Direct Home Anchor) */}
            <a
              href="#"
              onClick={scrollToTop}
              title="VDCORE - Home"
              aria-label="VDCORE Home"
              className="flex items-center h-8 pl-3 pr-2.5 rounded-full font-sans select-none cursor-pointer group/brand transition-all duration-200 hover:bg-white/[0.06]"
            >
              <span className={`font-extrabold text-[14px] tracking-[0.14em] leading-none transition-colors duration-200 ${
                activeSection === "" ? "text-white" : "text-zinc-300 group-hover/brand:text-white"
              }`}>
                VDCORE
              </span>
              <span className={`w-[5px] h-[5px] rounded-full ml-1.5 translate-y-[3px] shrink-0 transition-all duration-200 ${
                activeSection === ""
                  ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,1)] scale-110"
                  : "bg-sky-400/80 shadow-[0_0_6px_rgba(56,189,248,0.7)] group-hover/brand:bg-sky-400 group-hover/brand:shadow-[0_0_10px_rgba(56,189,248,1)] group-hover/brand:scale-125"
              }`} />
            </a>

            <div className="w-px h-4 bg-zinc-800/80 shrink-0" />

            {/* Desktop Nav Links */}
            <div className="flex items-center gap-1 text-[13px] font-medium font-sans tracking-wide">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`relative h-8 px-3.5 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer select-none ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-200 ease-out -z-10 ${
                        isActive
                          ? "bg-zinc-800/90 border border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_4px_12px_-2px_rgba(0,0,0,0.5)] opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 mx-auto w-4 h-[1.5px] rounded-full ${link.color} ${link.shadow} transition-all duration-200 ease-out ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* ========================================================
          2. MOBILE NAVBAR (Full Blue Glass Dribbble Hamburger)
          ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-4 pointer-events-auto">
        {/* Left Brand Wordmark */}
        <a
          href="#"
          title="VDCORE Home"
          aria-label="VDCORE Home"
          onClick={scrollToTop}
          className="flex items-center h-8 font-sans select-none active:scale-95 transition-transform cursor-pointer"
        >
          <span className="font-extrabold text-[16px] tracking-[0.14em] text-zinc-100 leading-none">
            VDCORE
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.95)] ml-1 translate-y-[3px] shrink-0" />
        </a>

        {/* Right Frosted Glowing Sky Glass Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="relative w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.25 glass-subcard !border-sky-500/40 hover:!border-sky-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.3)] hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] active:scale-90 transition-all duration-200 cursor-pointer p-1 focus:outline-none [-webkit-tap-highlight-color:transparent]"
        >
          {/* Top Line */}
          <span className="w-5 h-[2px] bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all duration-300" />
          {/* Middle Line */}
          <span className="w-3.5 h-[2px] bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.6)] -translate-x-[2px] transition-all duration-300" />
          {/* Bottom Line */}
          <span className="w-4.5 h-[2px] bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all duration-300" />
        </button>
      </header>

      {/* ========================================================
          3. MOBILE GLASS DRAWER OVERLAY (With Staggered Fluid Fade)
          ======================================================== */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Tint */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Apple Frosted Dark Glass Drawer (Smooth Slide-Down) */}
        <div
          className={`relative z-10 w-full max-h-[92svh] bg-zinc-950/94 border-b border-white/[0.12] backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.95)] p-6 pt-5 pb-8 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Top Bar: Brand on Left, Close X on Right (Animated) */}
          <div
            className={`flex items-center justify-between pb-5 border-b border-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "60ms" : "0ms" }}
          >
            <span className="font-extrabold text-[16px] tracking-[0.14em] text-zinc-100 font-sans">
              VDCORE
            </span>

            {/* Clean Close X Button at top right */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/[0.12] text-zinc-300 hover:text-white shadow-inner active:scale-90 transition-all cursor-pointer"
            >
              <X className="w-5 h-5 text-zinc-300" />
            </button>
          </div>

          {/* Clean Menu Items with Staggered Fluid Fade */}
          <div className="flex flex-col gap-1.5 my-4">
            <span
              className={`font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1 px-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
            >
              Navigation
            </span>

            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.id)}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${140 + idx * 50}ms` : "0ms",
                  }}
                  className={`group flex items-center justify-between py-3.5 px-3 rounded-2xl hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Glowing colored accent vertical line */}
                    <span
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? `${link.color} ${link.shadow} h-7`
                          : `${link.color}/50 group-hover:${link.color} group-hover:${link.shadow} h-5 group-hover:h-6`
                      }`}
                    />
                    <span
                      className={`font-sans text-xl font-bold tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive
                        ? "text-sky-400 scale-110"
                        : "text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* View My Work Styled Download CV Pill (Staggered) */}
          <div
            className={`my-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "360ms" : "0ms" }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full h-12 rounded-full glass-subcard !border-sky-500/40 hover:!border-sky-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2.5 active:scale-95 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-sans font-bold text-sm tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                Download CV (PDF)
              </span>
              <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
