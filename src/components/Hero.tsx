import React, { useState, useEffect } from "react";
import { ChevronDown, Copy, Check, MapPin, Maximize2, X, Database, Server, Cloud, Bot, User } from "lucide-react";
import { StarField } from "./StarField";
import { PERSONAL_INFO } from "../data/portfolioData";
import { copySecureEmail } from "../utils/security";

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
    const success = await copySecureEmail();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderFocusIcon = (id: string) => {
    switch (id) {
      case "backend":
        return <Server className="w-4 h-4 text-sky-400 shrink-0" />;
      case "devops":
        return <Cloud className="w-4 h-4 text-cyan-400 shrink-0" />;
      case "data":
        return <Database className="w-4 h-4 text-indigo-400 shrink-0" />;
      case "ai":
        return <Bot className="w-4 h-4 text-violet-400 shrink-0" />;
      default:
        return <Server className="w-4 h-4 text-sky-400 shrink-0" />;
    }
  };

  return (
    <section className="relative min-h-svh lg:min-h-dvh flex flex-col justify-center pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 overflow-hidden bg-zinc-950">
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 bg-engineering-grid pointer-events-none z-0 opacity-65" />

      {/* Background Starfield */}
      <div className="absolute inset-0 pointer-events-none lg:pointer-events-auto touch-none z-0">
        <StarField />
      </div>

      {/* Asymmetric galaxy ambient glows */}
      <div 
        className="absolute top-0 right-0 w-[550px] lg:w-[750px] h-[550px] pointer-events-none z-0 opacity-45"
        style={{
          background: "radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.14) 0%, rgba(59, 130, 246, 0.04) 45%, transparent 70%)"
        }}
      />
      <div 
        className="absolute bottom-12 left-0 w-[500px] lg:w-[650px] h-[500px] pointer-events-none z-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.16) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 70%)"
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none z-0" />

      {/* 1. Mobile Interface - Balanced spacing for modern 6.1" - 6.8" screens */}
      <div className="flex lg:hidden flex-col justify-between relative z-10 w-full max-w-lg mx-auto my-auto gap-7 py-2">
        
        {/* Profile Card */}
        <div className="rounded-3xl glass-panel p-5">
          <div className="flex items-center gap-4">
            <div 
              className="relative cursor-pointer shrink-0 group"
              onClick={() => setIsPhotoOpen(true)}
              title="Click to view full photo"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-sky-500/40 p-0.5 bg-gradient-to-tr from-sky-500/25 to-indigo-500/25 shadow-lg shadow-sky-500/10 transition-transform active:scale-95 duration-200">
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-200 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] animate-pulse" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight truncate font-sans">
                {PERSONAL_INFO.name}
              </h2>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sky-400 font-mono font-bold text-xs">|</span>
                <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium truncate">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="flex items-center gap-1.5 mt-1.5 text-zinc-400 text-xs font-sans">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline Card */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-[1.18]">
            Building scalable{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
              backends & resilient
            </span>{" "}
            systems.
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-2">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3.5 w-full pt-1">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-bold text-xs sm:text-sm tracking-tight shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_16px_-4px_rgba(56,189,248,0.22)] active:scale-95 transition-transform"
          >
            <span>Explore Systems</span>
            <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
          </a>

          <button
            onClick={handleCopyEmail}
            type="button"
            className={`inline-flex items-center justify-center gap-2 h-12 text-xs sm:text-sm font-sans font-medium rounded-full border backdrop-blur-md active:scale-95 transition-all cursor-pointer ${
              copied
                ? "bg-sky-500/15 border-sky-500/50 text-sky-300 shadow-lg shadow-sky-500/15"
                : "glass-subcard text-zinc-200 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <span className="font-semibold tracking-wide">Copied!</span>
                <Check className="w-4 h-4 text-sky-400 animate-in zoom-in-75 duration-150" />
              </>
            ) : (
              <>
                <span>Get in touch</span>
                <Copy className="w-4 h-4 text-sky-400" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Desktop Interface */}
      <div className="hidden lg:grid relative z-10 max-w-6xl mx-auto w-full grid-cols-12 gap-12 items-center">
        <div className="col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-xs font-mono text-zinc-200 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Building scalable <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
              backends & resilient
            </span> <br />
            systems.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed font-sans">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex items-center gap-3.5">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-bold text-sm tracking-tight hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_10px_22px_-4px_rgba(56,189,248,0.35)] transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_18px_-4px_rgba(56,189,248,0.25)] active:scale-95 group cursor-pointer"
            >
              <span>Explore Systems</span>
              <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce group-hover:scale-110 transition-transform duration-200" />
            </a>

            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2.5 px-5 py-3 text-sm font-sans font-medium rounded-full border transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer ${
                copied
                  ? "bg-sky-500/15 border-sky-500/50 text-sky-300 shadow-lg shadow-sky-500/20"
                  : "glass-subcard text-zinc-200 hover:text-white"
              }`}
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <span className="font-semibold tracking-wide">Email copied!</span>
                  <Check className="w-4 h-4 text-sky-400 animate-in zoom-in-75 duration-150" />
                </>
              ) : (
                <>
                  <span>Get in touch</span>
                  <Copy className="w-4 h-4 text-sky-400/90 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="col-span-5 w-full">
          <div className="rounded-3xl glass-panel p-6 sm:p-7 relative">
            <div className="flex items-center pb-4 mb-4 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold tracking-wider uppercase text-[11px] text-zinc-300">About</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-5 border-b border-zinc-800/80">
              <div 
                className="relative group cursor-pointer shrink-0"
                onClick={() => setIsPhotoOpen(true)}
                title="Click to view full photo"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-zinc-700/80 p-0.5 bg-gradient-to-tr from-sky-500/25 to-indigo-500/25 shadow-lg shadow-black/50 transition-transform group-hover:scale-105 duration-200">
                  <img
                    src={avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/45 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white tracking-tight truncate font-sans">
                  {PERSONAL_INFO.name}
                </h2>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sky-400 font-mono font-bold text-xs">|</span>
                  <p className="text-xs font-sans text-zinc-300 font-medium tracking-normal truncate">
                    {PERSONAL_INFO.role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-2.5 text-zinc-400 text-xs font-sans">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Static Focus Area Capsules - Clean borderless colorful icons */}
            <div className="pt-5 space-y-2.5">
              {PERSONAL_INFO.focusAreas.map((area) => (
                <div
                  key={area.id}
                  className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]"
                >
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    {renderFocusIcon(area.id)}
                    <span>{area.label}</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    {area.stack}
                  </span>
                </div>
              ))}
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
            className="relative max-w-sm w-full rounded-3xl overflow-hidden glass-panel p-2.5 cursor-default animate-panel-switch"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
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
              <p className="text-sky-400 text-xs font-mono mt-0.5">{PERSONAL_INFO.role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};