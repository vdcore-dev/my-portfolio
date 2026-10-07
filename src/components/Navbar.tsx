import React, { useState, useEffect, useRef } from "react";
import { Home, FileText, FolderGit2, Layers, Send, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isScrollingProgrammatically = useRef(false);

  const desktopLinks = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Stack", href: "#skills", id: "skills" },
    { name: "Connect", href: "#contact", id: "contact" },
  ];

  const mobileLinks = [
    { name: "Home", href: "#", id: "home", icon: Home },
    { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
    { name: "Stack", href: "#skills", id: "skills", icon: Layers },
    { name: "Connect", href: "#contact", id: "contact", icon: Send },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isScrollingProgrammatically.current) return;

      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollTrigger = window.scrollY + window.innerHeight / 3;
      
      for (const link of desktopLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollTrigger >= top && scrollTrigger < top + height) {
            setActiveSection(link.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    isScrollingProgrammatically.current = true;
    setActiveSection("");
    setMobileMenuOpen(false);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 850);
  };

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === "home") {
      scrollToTop(e);
      return;
    }

    isScrollingProgrammatically.current = true;
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 850);
    }
  };

  return (
    <>
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/75 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 
          Mobile menu:
          - top-24
          - bottom-8 
      */}
      <aside
        className={`fixed top-24 right-0 bottom-8 z-50 w-[82%] max-w-[290px] rounded-l-[28px] bg-zinc-950/95 border-y border-l border-zinc-800/80 backdrop-blur-2xl shadow-[-16px_0_40px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
            <span className="font-mono text-zinc-500 font-medium text-[11px] tracking-widest uppercase">
              Navigation
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex flex-col gap-2.5 mt-5">
            {mobileLinks.map((link) => {
              const isActive = link.id === "home" ? activeSection === "" : activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={(e) => scrollTo(e, link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl text-left text-sm font-sans transition-all active:scale-[0.98] cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 border border-zinc-700/80 text-white font-medium shadow-md shadow-black/40"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                    <span className="tracking-tight">{link.name}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "text-emerald-400 translate-x-0.5" : "text-zinc-700"}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-900 text-center text-[10px] font-mono text-zinc-500 tracking-wider">
          © 2026 VDCore. All rights reserved.
        </div>
      </aside>

      {/* Desktop & Main Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none">
        <div className="w-full max-w-sm sm:max-w-fit pointer-events-auto flex flex-col items-center">
          
          <nav
            className={`flex items-center justify-between w-full gap-2 sm:gap-4 md:gap-5 px-3.5 sm:px-6 py-2.5 md:py-2.5 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-zinc-950/90 border-zinc-800/90 backdrop-blur-xl shadow-2xl shadow-black/70"
                : "bg-zinc-900/80 border-zinc-800/70 backdrop-blur-md shadow-lg shadow-black/30"
            }`}
          >
            <div className="hidden md:flex items-baseline font-sans tracking-tight select-none py-0.5 leading-none cursor-default">
              <span className="font-extrabold text-[15px] text-white">VD</span>
              <span className="font-light text-[15px] text-zinc-400">Core</span>
              <span className="font-black text-[15px] text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.85)]">.</span>
            </div>

            <a
              href="#"
              title="VDCore Home"
              aria-label="VDCore Home"
              onClick={scrollToTop}
              className="flex md:hidden items-baseline font-sans tracking-tight select-none py-0.5 pl-1.5 active:scale-95 transition-transform"
            >
              <span className="font-extrabold text-base text-white">VD</span>
              <span className="font-medium text-base text-zinc-400">Core</span>
              <span className="font-black text-base text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.85)]">.</span>
            </a>

            <div className="hidden md:flex items-center">
              <a
                href="#"
                title="Scroll to Top"
                aria-label="Home"
                onClick={scrollToTop}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden md:block w-px h-4 bg-zinc-800 shrink-0" />
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {desktopLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.id)}
                    className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-zinc-100 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute -bottom-0.5 left-0 right-0 mx-auto w-5 h-0.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)] origin-center transition-all duration-300 ease-out ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="w-px h-4 bg-zinc-800 hidden md:block shrink-0" />

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-all"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="group/cv flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 font-medium text-xs hover:bg-zinc-950 hover:border-emerald-500/60 hover:text-emerald-300 transition-all ml-1 shadow-sm active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400 group-hover/cv:text-emerald-400 transition-colors" />
                <span>CV</span>
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 text-xs font-mono font-medium active:scale-95 hover:text-white transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>CV</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none shrink-0 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center w-4 h-4 relative">
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "rotate-45 text-zinc-200" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-4 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "-rotate-45 text-zinc-200" : "translate-y-1.5"
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