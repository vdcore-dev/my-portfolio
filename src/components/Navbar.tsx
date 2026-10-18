import React, { useState, useEffect, useRef } from "react";
import { Home, FileText, FolderKanban, Layers, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

const DESKTOP_LINKS = [
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const MOBILE_LINKS = [
  { name: "Home", href: "#", id: "home", icon: Home },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderKanban },
  { name: "Skills", href: "#skills", id: "skills", icon: Layers },
  { name: "Contact", href: "#contact", id: "contact", icon: MessageSquare },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrollingProgrammatically = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Prevent background scroll and attach Escape key listener
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    setMobileMenuOpen(false);

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
    setMobileMenuOpen(false);

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
      {/* Background overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-250 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Modern Floating Mobile Menu Card (Linear / Raycast Popover Style) */}
      <aside
        className={`fixed top-[72px] inset-x-3 sm:inset-x-6 max-w-sm mx-auto z-50 rounded-3xl glass-panel p-3 flex flex-col gap-1 transition-all duration-250 ease-out origin-top md:hidden ${
          mobileMenuOpen
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "-translate-y-3 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {MOBILE_LINKS.map((link) => {
          const isActive = link.id === "home" ? activeSection === "" : activeSection === link.id;
          const Icon = link.icon;
          return (
            <button
              key={link.id}
              onClick={(e) => scrollTo(e, link.id)}
              className={`relative flex items-center justify-between w-full px-4 py-3 rounded-2xl text-left text-sm font-sans transition-all active:scale-[0.98] cursor-pointer ${
                isActive
                  ? "bg-zinc-800/85 text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? "text-sky-400" : "text-zinc-500"
                  }`}
                />
                <span className="tracking-tight">{link.name}</span>
              </div>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] scale-100"
                    : "bg-transparent scale-0"
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* Desktop & Main Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none">
        <div className="w-full max-w-sm sm:max-w-fit pointer-events-auto flex flex-col items-center">
          
          <nav
            className={`relative flex items-center justify-between w-full gap-2 sm:gap-3.5 md:gap-3.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-zinc-950/90 border-zinc-700/75 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_40px_-10px_rgba(0,0,0,0.85)]"
                : "bg-zinc-900/80 border-zinc-800/85 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_28px_-8px_rgba(0,0,0,0.55)]"
            }`}
          >
            {/* Desktop Static Brand Wordmark - Optically aligned with 13px nav links & icons */}
            <div className="hidden md:flex items-center h-8 pl-2.5 pr-1 font-sans tracking-tight select-none cursor-default translate-y-[2.5px]">
              <span className="font-extrabold text-[15px] text-white leading-none">VD</span>
              <span className="font-medium text-[15px] text-zinc-400 leading-none">Core</span>
              <span className="w-1 h-1 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.95)] ml-[2px] translate-y-[3.5px] shrink-0" />
            </div>

            {/* Mobile Clickable Brand Wordmark */}
            <a
              href="#"
              title="VDCore Home"
              aria-label="VDCore Home"
              onClick={scrollToTop}
              className="flex md:hidden items-center h-8 pl-2 font-sans tracking-tight select-none active:scale-95 transition-transform"
            >
              <span className="font-extrabold text-base text-white leading-none">VD</span>
              <span className="font-medium text-base text-zinc-400 leading-none">Core</span>
              <span className="w-1 h-1 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.95)] ml-[2px] translate-y-[4.5px] shrink-0" />
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
                        ? "text-white"
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

            <div className="flex md:hidden items-center gap-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-full bg-zinc-900/90 border border-zinc-700/75 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-zinc-200 text-xs font-mono font-medium active:scale-95 hover:text-white transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>CV</span>
              </a>

              {/* Hamburger Toggle Button - Matched border & glass surface with CV button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                className={`relative w-9 h-9 rounded-full flex items-center justify-center bg-zinc-900/90 border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-zinc-200 hover:text-white hover:bg-zinc-800/90 transition-all focus:outline-none shrink-0 cursor-pointer active:scale-95 ${
                  mobileMenuOpen ? "border-sky-500/40" : "border-zinc-700/75"
                }`}
              >
                <div className="flex flex-col items-center justify-center w-4 h-4 relative">
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "rotate-45 translate-y-0 text-sky-400" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "-rotate-45 translate-y-0 text-sky-400" : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};