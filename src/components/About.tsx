import { useState, useEffect } from "react";
import {
  FaEarthAmericas,
  FaExpand,
  FaXmark,
  FaGraduationCap,
  FaCircleCheck,
  FaTerminal,
  FaCode,
  FaShieldHalved,
  FaGears,
} from "react-icons/fa6";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
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

  return (
    <section id="about" className="w-full flex flex-col pt-12 sm:pt-16 pb-16 lg:pb-24 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* ========================================================
            UNIFIED ARCHITECTURAL ABOUT HEADER
            ======================================================== */}
        <ScrollReveal direction="up">
          <div className="w-full flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-xl px-2">
              
              {/* Left Wing */}
              <div 
                className="flex-1 h-px bg-gradient-to-l from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />

              {/* Modern Softer-Squared Chamfered Capsule Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                  ABOUT
                </span>
              </div>

              {/* Right Wing */}
              <div 
                className="flex-1 h-px bg-gradient-to-r from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />

            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Card + Education */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal direction="up">
              <div className="rounded-3xl glass-panel p-6 sm:p-7 relative border border-white/[0.09] shadow-2xl">
                
                {/* Profile row */}
                <div className="flex items-center gap-4 sm:gap-5 pb-5 border-b border-zinc-800/80">
                  {/* Photo with modern Apple frosted glass bezel */}
                  <div
                    className="relative group cursor-pointer shrink-0"
                    onClick={() => setIsPhotoOpen(true)}
                    title="Click to view full photo"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl p-1 bg-zinc-900/70 backdrop-blur-2xl border border-white/[0.16] shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.18)] group-hover:border-sky-400/60 group-hover:shadow-sky-500/10 transition-all duration-300">
                      <div className="w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-zinc-950/40">
                        <img
                          src={avatarUrl}
                          alt={PERSONAL_INFO.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    {/* Hover expand hint */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <FaExpand className="w-4 h-4 text-white drop-shadow" />
                    </div>
                  </div>

                  {/* Profile info on the right of photo */}
                  <div className="flex-1 min-w-0">
                    {/* Telemetry live status indicator (matching Hero telemetry wave, zero medical vibe) */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] text-[10px] font-mono text-zinc-300 mb-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                      <div className="relative w-7 h-3 flex items-center overflow-hidden shrink-0">
                        <svg
                          viewBox="0 0 100 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full text-emerald-400 pointer-events-none"
                        >
                          <path
                            d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeOpacity="0.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                            stroke="#34d399"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="120"
                            strokeDashoffset="120"
                            className="animate-ecg-trace"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-emerald-300 tracking-tight uppercase text-[9.5px]">
                        {PERSONAL_INFO.availability}
                      </span>
                    </div>

                    {/* Name: guaranteed single line */}
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight whitespace-nowrap font-sans">
                      {PERSONAL_INFO.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-xs sm:text-sm font-medium text-sky-400 font-sans mt-0.5">
                      {PERSONAL_INFO.role}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-400 font-sans">
                      <FaEarthAmericas className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-mono text-[11px] text-zinc-300">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* Education & Certification Section - Clean & High-Impact */}
                <div className="pt-5 flex flex-col gap-3">
                  {/* Header with Title and Certified Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FaGraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="font-mono text-xs font-bold text-zinc-200 tracking-wider uppercase">
                        Education
                      </span>
                    </div>

                    {/* Green Glowing Certified Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                      <FaCircleCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="tracking-wide">CERTIFIED</span>
                    </div>
                  </div>

                  {/* Clean Minimalist Education Card in Frosted Dark Glass */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold text-zinc-100 tracking-tight font-sans">
                        ITAcademy
                      </h4>
                      <p className="text-xs font-medium text-sky-400 font-sans mt-0.5">
                        Java Development
                      </p>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-white/[0.06] text-[11px] font-mono font-semibold text-zinc-300 shrink-0">
                      2024 – 2025
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: In-depth Story & Engineering Principles */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="up" delayMs={100}>
              <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.09] shadow-2xl">
                {/* Background & Ambition Header with React Icon */}
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                  <FaTerminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="tracking-wider uppercase text-zinc-300 font-semibold text-[11px]">
                    Background &amp; Ambition
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
                  I am a self-driven software developer dedicated to building high-performance backend systems and clean cloud architecture. Rather than building superficial features, my focus is centered on API contract design, relational data integrity, containerized workflows, and resilient asynchronous services.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-3.5 leading-relaxed">
                  While entering the professional software industry, I bring uncompromising discipline toward clean code, testability, and continuous learning. I am eager to contribute actively to an agile engineering team where scalability and developer velocity matter.
                </p>

                {/* 3 Pillars with Modern React Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-zinc-800/80">
                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <FaCode className="w-4 h-4 text-sky-400 mb-2" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Clean Code</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      SOLID principles, modular services &amp; strict typing.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <FaShieldHalved className="w-4 h-4 text-emerald-400 mb-2" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Reliability</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      ACID transactions, graceful error handling &amp; logging.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <FaGears className="w-4 h-4 text-cyan-400 mb-2" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Modern DevOps</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      Reproducible container builds with Docker &amp; CI/CD.
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
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
              aria-label="Close photo preview"
            >
              <FaXmark className="w-4 h-4" />
            </button>
            <img
              src={avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-zinc-100 font-bold text-lg font-sans">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sky-400 text-xs font-mono mt-0.5">
                {PERSONAL_INFO.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};