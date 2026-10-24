import { useState, useEffect } from "react";
import {
  FaEarthAmericas,
  FaExpand,
  FaXmark,
  FaGraduationCap,
  FaBriefcase,
  FaCircleCheck,
  FaTerminal,
  FaCode,
  FaGears,
  FaRocket,
  FaBuildingUser,
  FaFileContract,
  FaLaptopCode,
} from "react-icons/fa6";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [leftTab, setLeftTab] = useState<"education" | "engagement">("education");
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
            ARCHITECTURAL ABOUT HEADER
            - Mobile: Centered capsule with flanking gradient wings
            - Desktop: Left-anchored blueprint style (Space-efficient, no wasted vertical push)
            ======================================================== */}
        <ScrollReveal direction="up">
          {/* Mobile Header: Centered (Untouched) */}
          <div className="w-full flex lg:hidden items-center justify-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-xl px-2">
              <div 
                className="flex-1 h-px bg-gradient-to-l from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
              <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                  ABOUT ME
                </span>
              </div>
              <div 
                className="flex-1 h-px bg-gradient-to-r from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Desktop Header: Left-aligned blueprint style */}
          <div className="hidden lg:flex items-center gap-4 mb-6 w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                ABOUT ME
              </span>
            </div>
            <div 
              className="flex-1 h-px bg-gradient-to-r from-sky-400/50 via-zinc-700/40 to-transparent" 
              aria-hidden="true" 
            />
          </div>
        </ScrollReveal>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Card + Interactive Mode Switcher */}
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

                {/* Interactive Frosted Glass Mode Switcher (Matching Projects Section Architecture) */}
                <div className="pt-5 flex flex-col gap-3">
                  {/* Switcher Tab Buttons */}
                  <div className="grid grid-cols-2 p-1 rounded-2xl bg-zinc-950/70 backdrop-blur-2xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] select-none">
                    <button
                      type="button"
                      onClick={() => setLeftTab("education")}
                      className={`inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-mono text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                        leftTab === "education"
                          ? "bg-zinc-800/90 text-zinc-100 border border-white/[0.14] shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
                      }`}
                    >
                      <FaGraduationCap className={`w-3.5 h-3.5 ${leftTab === "education" ? "text-sky-400" : "text-zinc-400"}`} />
                      <span>Education</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLeftTab("engagement")}
                      className={`inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-mono text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                        leftTab === "engagement"
                          ? "bg-zinc-800/90 text-zinc-100 border border-white/[0.14] shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
                      }`}
                    >
                      <FaBriefcase className={`w-3.5 h-3.5 ${leftTab === "engagement" ? "text-indigo-400" : "text-zinc-400"}`} />
                      <span>Engagement</span>
                    </button>
                  </div>

                  {/* Tab Content Display with Fixed Height & Smooth Fade-in */}
                  {leftTab === "education" ? (
                    <div className="h-[178px] p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] flex flex-col justify-between animate-in fade-in zoom-in-98 duration-150">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-zinc-100 tracking-tight font-sans">
                            ITAcademy
                          </h4>
                          <p className="text-xs font-medium text-sky-400 font-sans mt-0.5">
                            Java Development
                          </p>
                        </div>
                        
                        {/* Green Glowing Certified Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                          <FaCircleCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="tracking-wide">CERTIFIED</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800/70 text-xs font-mono text-zinc-400">
                        <span>Timeline</span>
                        <span className="px-2 py-0.5 rounded-md bg-zinc-800/80 border border-white/[0.06] text-[11px] font-semibold text-zinc-200">
                          2023 – 2025
                        </span>
                      </div>

                      <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        Comprehensive software engineering curriculum covering OOP, Spring Boot, databases, clean architecture &amp; RESTful APIs.
                      </p>
                    </div>
                  ) : (
                    <div className="h-[178px] p-3 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] flex flex-col justify-between gap-1.5 animate-in fade-in zoom-in-98 duration-150">
                      {/* Option 1: Full-time */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/45 border border-white/[0.05]">
                        <div className="flex items-center gap-3">
                          <FaBuildingUser className="w-4 h-4 text-emerald-400 shrink-0 drop-shadow-[0_0_6px_currentColor]" />
                          <span className="text-xs font-semibold text-zinc-200 font-sans">Full-Time Roles</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">Long-Term</span>
                      </div>

                      {/* Option 2: Contract / B2B */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/45 border border-white/[0.05]">
                        <div className="flex items-center gap-3">
                          <FaFileContract className="w-4 h-4 text-sky-400 shrink-0 drop-shadow-[0_0_6px_currentColor]" />
                          <span className="text-xs font-semibold text-zinc-200 font-sans">Contract &amp; B2B</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">Worldwide</span>
                      </div>

                      {/* Option 3: Freelance */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/45 border border-white/[0.05]">
                        <div className="flex items-center gap-3">
                          <FaLaptopCode className="w-4 h-4 text-indigo-400 shrink-0 drop-shadow-[0_0_6px_currentColor]" />
                          <span className="text-xs font-semibold text-zinc-200 font-sans">Freelance Projects</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">Modular Scope</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: In-depth Story & Engineering Principles */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="up" delayMs={100}>
              <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.09] shadow-2xl">
                {/* Engineering Philosophy Header with React Icon */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    <FaTerminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="tracking-wider uppercase text-zinc-200 font-semibold text-[11px]">
                      Engineering Philosophy
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-white/[0.08] font-mono text-[10px] text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                    MINDSET
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
                  Dedicated to building high-performance backend systems and resilient cloud architecture within the Java &amp; Spring Boot ecosystem. Rather than assembling superficial features, my focus centers on robust API contract design, relational data integrity, containerized workflows, and secure asynchronous services.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-3.5 leading-relaxed">
                  Backed by formal engineering fundamentals (ITAcademy) and strong personal autonomy, I bring relentless curiosity and discipline to continuous learning. I independently explore cutting-edge tooling, adapt rapidly to modern industry standards, and bring proactive engineering energy to every team and project.
                </p>

                {/* 3 Pillars with Modern React Icons & Frosted Glass Hover Glows */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-zinc-800/80">
                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all duration-200 group">
                    <FaCode className="w-4 h-4 text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Clean Code</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      SOLID principles, modular services &amp; strict typing.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-cyan-500/40 hover:bg-cyan-500/[0.04] transition-all duration-200 group">
                    <FaGears className="w-4 h-4 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Modern DevOps</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      Reproducible container builds with Docker &amp; CI/CD.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-indigo-500/40 hover:bg-indigo-500/[0.04] transition-all duration-200 group">
                    <FaRocket className="w-4 h-4 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-bold text-zinc-100 font-sans">Continuous Growth</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1">
                      Self-driven mastery, rapid adaptation &amp; curiosity.
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