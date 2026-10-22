import React, { useState, useEffect, useRef } from "react";
import { Home, FileText, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

const DESKTOP_LINKS = [
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isScrollingProgrammatically = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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

          if (currentY < 200) {
            setActiveSection((prev) => (prev !== "" ? "" : prev));
            ticking = false;
            return;
          }

          const isAtBottom =
            window.innerHeight + Math.round(currentY) >=
            document.documentElement.scrollHeight - 60;

          if (isAtBottom) {
            setActiveSection((prev) => (prev !== "contact" ? "contact" : prev));
            ticking = false;
            return;
          }

          const scrollTrigger = currentY + window.innerHeight / 3;
          for (const link of DESKTOP_LINKS) {
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

    window.scrollTo({ top: 0, behavior: "smooth" });

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 850);
  };

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === "home") {
      scrollToTop(e);
      return;
    }

    clearScrollTimeout();
    isScrollingProgrammatically.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 850);
    }
  };

  return (
    <>
      {/* Top Ambient Vignette / Edge Fade Mask - Content softly blurs & melts under the viewport edge behind the navbar */}
      <div
        className="fixed top-0 left-0 right-0 h-16 sm:h-20 pointer-events-none z-30 bg-gradient-to-b from-zinc-950 via-zinc-950/60 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Desktop & Main Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none">
        <div className="w-full max-w-sm sm:max-w-fit pointer-events-auto flex flex-col items-center">
          
          <nav
            className={`relative flex items-center justify-between w-full gap-2 sm:gap-3.5 md:gap-3.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-zinc-950/90 border-white/[0.14] backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_40px_-10px_rgba(0,0,0,0.85)]"
                : "bg-zinc-900/80 border-white/[0.1] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_28px_-8px_rgba(0,0,0,0.55)]"
            }`}
          >
            {/* Desktop Brand Wordmark - Modern Architectural All-Caps (Static, unclickable as requested) */}
            <div className="hidden md:flex items-center h-8 pl-2 pr-1 font-sans select-none cursor-default">
              <span className="font-extrabold text-[14px] tracking-[0.14em] text-zinc-100 leading-none">
                VDCORE
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.95)] ml-1 translate-y-[3.5px] shrink-0" />
            </div>

            {/* Mobile Clickable Brand Wordmark - Baseline Period (Smooth Scroll to Top) */}
            <a
              href="#"
              title="VDCORE Home"
              aria-label="VDCORE Home"
              onClick={scrollToTop}
              className="flex md:hidden items-center h-8 pl-1.5 font-sans select-none active:scale-95 transition-transform cursor-pointer"
            >
              <span className="font-extrabold text-[15px] tracking-[0.14em] text-zinc-100 leading-none">
                VDCORE
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.95)] ml-1 translate-y-[3.5px] shrink-0" />
            </a>

            <div className="hidden md:block w-px h-4 bg-zinc-800/90 shrink-0" />
            
            {/* Zero-Shift Raycast/Linear Style Capsule Navigation (including Home) */}
            <div className="hidden md:flex items-center gap-1 text-[13px] font-medium">
              {/* Home Capsule Button */}
              <a
                href="#"
                title="Home"
                aria-label="Home"
                onClick={scrollToTop}
                className={`group/home relative h-8 px-3 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer select-none ${
                  activeSection === ""
                    ? "text-sky-400"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-250 ease-out -z-10 ${
                    activeSection === ""
                      ? "bg-zinc-800/90 border border-zinc-700/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
                <Home
                  className={`w-[16px] h-[16px] transition-transform duration-200 group-hover/home:scale-110 ${
                    activeSection === ""
                      ? "text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
                      : ""
                  }`}
                  strokeWidth={2.2}
                />
                <span
                  className={`absolute bottom-0 left-0 right-0 mx-auto w-3.5 h-[1.5px] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.95)] transition-all duration-250 ease-out ${
                    activeSection === "" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>

              {DESKTOP_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`relative h-8 px-3.5 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer select-none ${
                      isActive
                        ? "text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                    }`}
                  >
                    {/* Background Pill Indicator (Absolute so width NEVER shifts) */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-250 ease-out -z-10 ${
                        isActive
                          ? "bg-zinc-800/90 border border-zinc-700/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                    <span>{link.name}</span>
                    {/* Subtle bottom electric-blue glow line inside the pill */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 mx-auto w-4 h-[1.5px] rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.95)] transition-all duration-250 ease-out ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="w-px h-4 bg-zinc-800/90 hidden md:block shrink-0" />

            {/* Social Network Platforms & CV Button */}
            <div className="hidden md:flex items-center gap-1 shrink-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="group/soc w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/65 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-all duration-200"
              >
                <GithubIcon className="w-[17px] h-[17px] transition-transform duration-200 group-hover/soc:scale-110" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="group/soc w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/65 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-all duration-200"
              >
                <LinkedinIcon className="w-[17px] h-[17px] transition-transform duration-200 group-hover/soc:scale-110" />
              </a>

              {PERSONAL_INFO.x && (
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Profile"
                  className="group/soc w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/65 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-all duration-200"
                >
                  <XIcon className="w-4 h-4 transition-transform duration-200 group-hover/soc:scale-110" />
                </a>
              )}

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="group/cv h-8 px-3.5 rounded-full flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-700/75 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-zinc-200 font-mono font-medium text-xs hover:bg-zinc-800/90 hover:border-sky-500/40 hover:text-white transition-all duration-200 ml-0.5 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400 transition-transform duration-200 group-hover/cv:scale-110" />
                <span>CV</span>
              </a>
            </div>

            <div className="flex md:hidden items-center">
              <button
                onClick={(e) => scrollTo(e, "contact")}
                type="button"
                aria-label="Contact Section"
                className="flex items-center justify-center gap-1.5 h-8 px-3.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-zinc-200 text-xs font-sans font-medium active:scale-95 hover:text-white transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Contact</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
