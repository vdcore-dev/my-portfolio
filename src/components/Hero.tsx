import React, { useState, useEffect } from "react";
import { ChevronDown, Copy, Check, MapPin, Maximize2, X, Cpu, Server, Cloud, Bot, User } from "lucide-react";
import { StarField } from "./StarField";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const avatarUrl = "/avatar2.jpg";

  useEffect(() => {
    if (!isPhotoOpen) return;
    
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPhotoOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPhotoOpen]);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-svh lg:min-h-dvh flex flex-col justify-center pt-28 lg:pt-32 pb-16 lg:pb-20 px-4 overflow-hidden bg-zinc-950">
      {/* Background Starfield */}
      <div className="absolute inset-0 pointer-events-none lg:pointer-events-auto touch-none z-0">
        <StarField />
      </div>

      {/* Ambient Glows */}
      <div className="block lg:hidden absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-indigo-950/25 blur-[120px] pointer-events-none z-0" />
      <div className="hidden lg:block absolute top-1/4 -left-28 w-96 h-96 rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none z-0" />
      <div className="hidden lg:block absolute top-1/3 -right-28 w-[420px] h-[420px] rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none z-0" />
      <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-72 rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none z-0" />

      {/* Grid Pattern and Bottom Gradient Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 lg:opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none z-0" />

      {/* ========================================================
          1. MOBILE INTERFACE (Optimized h-12 CTA Buttons)
         ======================================================== */}
      <div className="block lg:hidden relative z-10 w-full max-w-lg mx-auto">
        
        {/* Profile Card */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-4 sm:p-5 shadow-2xl shadow-indigo-500/5 mb-6">
          <div className="flex items-center gap-4">
            <div 
              className="relative cursor-pointer shrink-0 group"
              onClick={() => setIsPhotoOpen(true)}
              title="Click to view full photo"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/40 p-0.5 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 shadow-lg shadow-emerald-500/10 transition-transform active:scale-95 duration-200">
                <img
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full rounded-[14px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight truncate font-sans">
                {PERSONAL_INFO.name}
              </h2>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-emerald-400 font-mono font-bold text-xs">|</span>
                <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium">
                  Software Engineer
                </p>
              </div>

              <div className="flex items-center gap-1.5 mt-2 text-zinc-400 text-xs font-sans">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Remote • Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline & Value Proposition Card */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-black/40 text-left mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-[1.2]">
            Building scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              backends & resilient
            </span>{" "}
            systems.
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-2">
            Engineering robust Java microservices, streamlined DevOps pipelines, and intelligent AI-powered cloud integrations with high availability.
          </p>
        </div>

        {/* CTA Buttons (Standardized h-12 / 48px touch targets) */}
        <div className="grid grid-cols-2 gap-3.5 w-full mt-10">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#06d6a0] to-[#10b981] text-zinc-950 font-bold text-xs sm:text-sm tracking-tight shadow-md shadow-[#06d6a0]/20 active:scale-95 transition-transform"
          >
            <span>Explore Systems</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>

          <button
            onClick={handleCopyEmail}
            type="button"
            className={`inline-flex items-center justify-center gap-2 h-12 text-xs sm:text-sm font-sans font-medium rounded-full border backdrop-blur-md shadow-md active:scale-95 transition-all cursor-pointer ${
              copied
                ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20"
                : "bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700"
            }`}
          >
            {copied ? (
              <>
                <span className="font-semibold tracking-wide">Copied!</span>
                <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in-75 duration-150" />
              </>
            ) : (
              <>
                <span>Get in touch</span>
                <Copy className="w-4 h-4 text-emerald-400" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* ========================================================
          2. DESKTOP INTERFACE (100% Preserved)
         ======================================================== */}
      <div className="hidden lg:grid relative z-10 max-w-6xl mx-auto w-full grid-cols-12 gap-12 items-center">
        <div className="col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 backdrop-blur-md shadow-inner shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Building scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              backends & resilient
            </span>{" "}
            systems.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed font-sans">
            Engineering robust Java microservices, streamlined DevOps pipelines, and intelligent AI-powered cloud integrations with an uncompromising focus on clean architecture and high availability.
          </p>

          <div className="flex items-center gap-3.5">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#06d6a0] to-[#10b981] text-zinc-950 font-bold text-sm tracking-tight hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#06d6a0]/25 active:scale-95 group cursor-pointer"
            >
              <span>Explore Systems</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>

            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2.5 px-5 py-3 text-sm font-sans font-medium rounded-full border transition-all duration-200 backdrop-blur-md shadow-lg active:scale-95 group cursor-pointer ${
                copied
                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 shadow-black/30"
              }`}
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <span className="font-semibold tracking-wide">Email copied!</span>
                  <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in-75 duration-150" />
                </>
              ) : (
                <>
                  <span>Get in touch</span>
                  <Copy className="w-4 h-4 text-emerald-400/90 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-emerald-300" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="col-span-5 w-full">
          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-indigo-500/5 relative hover:border-zinc-700 transition-all duration-300">
            <div className="flex items-center pb-4 mb-4 border-b border-zinc-800/70 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold tracking-wider uppercase text-[11px] text-zinc-300">About</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-5 border-b border-zinc-800/70">
              <div 
                className="relative group cursor-pointer shrink-0"
                onClick={() => setIsPhotoOpen(true)}
                title="Click to view full photo"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-zinc-700/80 p-0.5 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 transition-transform group-hover:scale-105 duration-200">
                  <img
                    src={avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white tracking-tight truncate font-sans">
                  {PERSONAL_INFO.name}
                </h2>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-400 font-mono font-bold text-xs">|</span>
                  <p className="text-xs font-sans text-zinc-300 font-medium tracking-normal">
                    Software Engineer
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-2.5 text-zinc-400 text-xs font-sans">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Remote • Worldwide</span>
                </div>
              </div>
            </div>

            <div className="pt-5 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Core Backend
                </span>
                <span className="text-zinc-200 font-medium">Java • Spring Boot</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Cloud className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  DevOps & Cloud
                </span>
                <span className="text-zinc-200 font-medium">Docker • CI/CD Pipelines</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  Persistence
                </span>
                <span className="text-zinc-200 font-medium">PostgreSQL • Redis</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  AI & Integrations
                </span>
                <span className="text-zinc-200 font-medium">LLM APIs • Spring AI</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full Photo Modal */}
      {isPhotoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
          onClick={() => setIsPhotoOpen(false)}
        >
          <div 
            className="relative max-w-sm w-full rounded-3xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl p-2 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/70 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-white font-bold text-lg font-sans">{PERSONAL_INFO.name}</h3>
              <p className="text-emerald-400 text-xs font-mono">Software Engineer</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};