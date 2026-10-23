import React, { useState } from "react";
import { ArrowRight, Mail, Check, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PERSONAL_INFO } from "../data/portfolioData";
import { copySecureEmail } from "../utils/security";
import { scrollToElement } from "../utils/scroll";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement("projects", 64);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    copySecureEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-start sm:justify-center items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden box-border"
    >
      {/* 1. DUAL-CORE ATMOSPHERIC COSMIC NEBULA (Zero GPU Filter Lag - Pure Silk Gradients) */}
      <div
        className="absolute top-[30%] left-[24%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[440px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-[34%] right-[10%] translate-x-1/4 -translate-y-1/2 w-[650px] h-[480px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56, 189, 248, 0.14) 0%, rgba(129, 140, 248, 0.08) 40%, rgba(168, 85, 247, 0.04) 60%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* 2. MAIN HERO CONTENT */}
      <div className="max-w-6xl mx-auto w-full z-10 my-0 sm:my-auto pt-3 sm:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Pure Greeting + Split Headline + Statement
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Terminal Static Greeting (>_ Hi, I'm Vladimir) with blinking cursor | */}
            <p className="hero-animate-1 font-mono text-base sm:text-xl font-medium text-zinc-300 tracking-tight mb-2.5 sm:mb-3.5 flex items-center gap-2 h-7 select-none">
              <span className="text-sky-400 font-bold tracking-normal">&gt;_</span>
              <span>Hi, I'm Vladimir</span>
              <span className="inline-block w-[2px] h-5 bg-sky-400 rounded-full animate-pulse ml-0.5" />
            </p>

            {/* Structured Headline: Java Backend & / DevOps Engineer. */}
            <h1 className="hero-animate-2 text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-zinc-100 font-sans leading-[1.1] mb-5 sm:mb-6">
              Java Backend &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                DevOps Engineer.
              </span>
            </h1>

            {/* 100% Real, Human Statement Covering Java, Spring, DevOps, Cloud, AI */}
            <p className="hero-animate-3 text-sm sm:text-base md:text-lg text-zinc-400 font-sans max-w-xl leading-relaxed mb-6 sm:mb-8">
              I build reliable backend systems with Java and Spring, manage cloud infrastructure with modern DevOps, and integrate smart AI capabilities into scalable applications.
            </p>

            {/* Primary Action Button: View My Work */}
            <div className="hero-animate-4">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] text-sm font-sans font-medium active:scale-95 transition-transform cursor-pointer outline-none focus:outline-none focus-visible:outline-none select-none"
              >
                <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 pointer-events-none">
                  View My Work
                </span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0 pointer-events-none" />
              </button>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Pure Icon Symbols (100% Buttons, Zero Boxes) & ECG Status
              ======================================================== */}
          <div className="hero-animate-5 lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-center select-none mt-7 sm:mt-9 lg:mt-0">
            
            {/* Pure Icon Symbols Row (Slightly larger, luxurious spacing, 100% button architecture) */}
            <div className="flex items-center gap-6 sm:gap-7">
              
              {/* GitHub */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.github)}
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none"
              >
                <FaGithub className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.linkedin)}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="text-zinc-400 hover:text-[#0077b5] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none"
              >
                <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
              </button>

              {/* X Platform (if present) */}
              {PERSONAL_INFO.x && (
                <button
                  type="button"
                  onClick={() => openLink(PERSONAL_INFO.x!)}
                  aria-label="X Profile"
                  title="X Profile"
                  className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none"
                >
                  <FaXTwitter className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
                </button>
              )}

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy Email address"
                title={copied ? "Email Copied!" : "Copy Email"}
                className={`hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none ${
                  copied ? "text-emerald-400" : "text-zinc-400 hover:text-sky-400"
                }`}
              >
                {copied ? (
                  <Check className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400 animate-in zoom-in-75 duration-200 pointer-events-none" />
                ) : (
                  <Mail className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
                )}
              </button>

              {/* Download CV */}
              <button
                type="button"
                onClick={() => openLink("/cv.pdf")}
                aria-label="Download CV"
                title="Download CV (PDF)"
                className="flex flex-col items-center justify-center text-zinc-400 hover:text-indigo-400 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none"
              >
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
                <span className="font-mono text-[9px] font-bold tracking-tight text-zinc-400 -mt-0.5 pointer-events-none">CV</span>
              </button>

            </div>

            {/* Hairline Divider Line */}
            <div className="w-full max-w-[270px] sm:max-w-[310px] h-[1px] bg-gradient-to-r from-transparent via-sky-500/35 to-transparent my-4 sm:my-4.5" />

            {/* ECG Pulse Status Indicator */}
            <div className="flex items-center gap-3 px-1">
              <div className="relative w-20 sm:w-24 h-7 flex items-center overflow-hidden">
                <svg
                  viewBox="0 0 100 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-sky-400 pointer-events-none"
                >
                  <defs>
                    <linearGradient id="ecgPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Faint static guide line */}
                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Animated beating ECG wave */}
                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="url(#ecgPulseGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="120"
                    strokeDashoffset="120"
                    className="animate-ecg-trace"
                  />
                </svg>
              </div>

              {/* Telemetry Status Text */}
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-sky-300 uppercase">
                  AVAILABLE FOR WORK
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-400 font-sans tracking-tight">
                  Full-time &amp; Engineering Projects
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
