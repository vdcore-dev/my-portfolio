import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaArrowDown,
  FaEnvelope,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import { PERSONAL_INFO } from "../data/portfolioData";
import { copySecureEmail } from "../utils/security";
import { scrollToElement } from "../utils/scroll";

const TYPED_TEXT = "Hi, I'm Vladimir";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  // Types out "Hi, I'm Vladimir" once on page load/reload, then keeps the cursor blinking calmly
  useEffect(() => {
    if (displayedText.length < TYPED_TEXT.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText(TYPED_TEXT.slice(0, displayedText.length + 1));
        },
        displayedText.length === 0 ? 300 : 95
      );

      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

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
      className="relative min-h-[100svh] w-full flex flex-col justify-start sm:justify-center items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden box-border select-none"
    >
      {/* Centered Atmospheric Glow behind the Keynote Headline (PC Only) */}
      <div
        className="hidden lg:block absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[360px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(56, 189, 248, 0.11) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Mobile Celestial Ambient Glow (Inside Hero Section Only - Feathers into deep obsidian) */}
      <div
        className="block lg:hidden absolute top-0 inset-x-0 w-full h-[520px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 130% 65% at 50% 12%, rgba(37, 99, 235, 0.11) 0%, rgba(14, 165, 233, 0.06) 35%, rgba(99, 102, 241, 0.02) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* MAIN HERO CONTAINER */}
      <div className="max-w-6xl mx-auto w-full z-10 my-0 sm:my-auto pt-3 sm:pt-0">
        
        {/* ========================================================
            MOBILE VIEW (STRICTLY 100% ORIGINAL IDENTICAL LAYOUT & POSITION FROM b50548d)
            ======================================================== */}
        <div className="lg:hidden w-full">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 items-center w-full">
            <div className="flex flex-col items-start text-left">
              {/* Terminal Greeting: types once on load, cursor keeps blinking */}
              <p className="hero-animate-1 font-mono text-base sm:text-xl font-medium text-zinc-300 tracking-tight mb-2.5 sm:mb-3.5 flex items-center gap-2 h-7 select-none">
                <span className="text-sky-400 font-bold tracking-normal drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">&gt;_</span>
                <span>{displayedText}</span>
                <span className="inline-block w-[2px] h-5 bg-sky-400 rounded-full animate-pulse ml-0.5 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
              </p>

              {/* Headline with original 2 lines */}
              <h1 className="hero-animate-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 font-sans leading-[1.1] mb-5 sm:mb-6">
                Backend &amp; <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                  DevOps Engineer.
                </span>
              </h1>

              {/* 100% Real, Human Statement */}
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
                  <FaArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0 pointer-events-none" />
                </button>
              </div>
            </div>

            {/* Original Mobile Platform Buttons + Divider + ECG Status (Fine-tuned micro-spaced lower section) */}
            <div className="hero-animate-5 w-full flex flex-col items-center justify-center select-none mt-12 sm:mt-14">
              {/* Pure Icon Symbols Row */}
              <div className="flex items-center gap-6 sm:gap-7">
              {/* GitHub */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.github)}
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <FaGithub className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.linkedin)}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="text-zinc-400 hover:text-[#0077b5] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
              </button>

              {/* X Platform */}
              {PERSONAL_INFO.x && (
                <button
                  type="button"
                  onClick={() => openLink(PERSONAL_INFO.x!)}
                  aria-label="X Profile"
                  title="X Profile"
                  className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
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
                className={`hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none ${
                  copied ? "text-emerald-400" : "text-zinc-400 hover:text-sky-400"
                }`}
              >
                {copied ? (
                  <FaCheck className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400 animate-in zoom-in-75 duration-200 pointer-events-none" />
                ) : (
                  <FaEnvelope className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
                )}
              </button>

              {/* Download CV */}
              <button
                type="button"
                onClick={() => openLink("/cv.pdf")}
                aria-label="Download CV"
                title="Download CV (PDF)"
                className="text-zinc-400 hover:text-indigo-400 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <TbFileCv className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none" />
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
                    <linearGradient id="ecgPulseGradMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="url(#ecgPulseGradMobile)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="100"
                    className="animate-ecg-trace"
                  />
                </svg>
              </div>

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

        {/* ========================================================
            DESKTOP VIEW (CENTERED KEYNOTE COMPOSITION IN ONE SINGLE LINE)
            ======================================================== */}
        <div className="hidden lg:flex flex-col items-center text-center w-full max-w-5xl mx-auto">
          {/* Terminal Greeting: types once on load, cursor keeps blinking */}
          <p className="hero-animate-1 font-mono text-xl font-medium text-zinc-300 tracking-tight mb-4 flex items-center justify-center gap-2 h-7 select-none">
            <span className="text-sky-400 font-bold tracking-normal drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">&gt;_</span>
            <span>{displayedText}</span>
            <span className="inline-block w-[2px] h-5 bg-sky-400 rounded-full animate-pulse ml-0.5 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
          </p>

          {/* Headline: Centered in ONE SINGLE LINE */}
          <h1 className="hero-animate-2 text-4xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight text-zinc-100 font-sans leading-[1.15] mb-6 text-center whitespace-nowrap">
            <span>Backend &amp; </span>
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
              DevOps Engineer.
              {/* Softened, silky typography aura */}
              <span
                className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-cyan-500/12 via-sky-500/15 to-indigo-500/10 blur-3xl -z-10 pointer-events-none rounded-full"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Statement Centered */}
          <p className="hero-animate-3 text-lg text-zinc-400 font-sans max-w-2xl mx-auto text-center leading-relaxed mb-9">
            I build reliable backend systems with Java and Spring, manage cloud infrastructure with modern DevOps, and integrate smart AI capabilities into scalable applications.
          </p>

          {/* Desktop Command Bar: Button + Platforms + ECG Status */}
          <div className="hero-animate-4 flex items-center justify-center gap-4 flex-wrap">
            {/* Primary Action Button */}
            <button
              type="button"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] text-sm font-sans font-medium active:scale-95 transition-transform cursor-pointer outline-none focus:outline-none focus-visible:outline-none select-none"
            >
              <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 pointer-events-none">
                View My Work
              </span>
              <FaArrowDown className="w-3.5 h-3.5 text-sky-400 animate-bounce shrink-0 pointer-events-none" />
            </button>

            {/* Vertical Glass Divider */}
            <div className="w-px h-8 bg-white/[0.12] mx-1" />

            {/* Platform Links: Clean, direct icons identical to mobile style */}
            <div className="flex items-center gap-4 px-2 py-1">
              {/* GitHub */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.github)}
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <FaGithub className="w-7 h-7 pointer-events-none" />
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                onClick={() => openLink(PERSONAL_INFO.linkedin)}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="text-zinc-400 hover:text-[#0077b5] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <FaLinkedin className="w-7 h-7 pointer-events-none" />
              </button>

              {/* X Platform */}
              {PERSONAL_INFO.x && (
                <button
                  type="button"
                  onClick={() => openLink(PERSONAL_INFO.x!)}
                  aria-label="X Profile"
                  title="X Profile"
                  className="text-zinc-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
                >
                  <FaXTwitter className="w-6 h-6 pointer-events-none" />
                </button>
              )}

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy Email address"
                title={copied ? "Email Copied!" : "Copy Email"}
                className={`hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none ${
                  copied ? "text-emerald-400" : "text-zinc-400 hover:text-sky-400"
                }`}
              >
                {copied ? (
                  <FaCheck className="w-7 h-7 text-emerald-400 animate-in zoom-in-75 duration-200 pointer-events-none" />
                ) : (
                  <FaEnvelope className="w-7 h-7 pointer-events-none" />
                )}
              </button>

              {/* Download CV */}
              <button
                type="button"
                onClick={() => openLink("/cv.pdf")}
                aria-label="Download CV"
                title="Download CV (PDF)"
                className="text-zinc-400 hover:text-indigo-400 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 bg-transparent border-0 outline-none focus:outline-none"
              >
                <TbFileCv className="w-7 h-7 pointer-events-none" />
              </button>
            </div>

            {/* Vertical Glass Divider */}
            <div className="w-px h-8 bg-white/[0.12] mx-1" />

            {/* ECG Pulse Status Indicator */}
            <div className="flex items-center gap-3 px-2">
              <div className="relative w-24 h-7 flex items-center overflow-hidden shrink-0">
                <svg
                  viewBox="0 0 100 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-sky-400 pointer-events-none"
                >
                  <defs>
                    <linearGradient id="ecgPulseGradCentered" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                    stroke="url(#ecgPulseGradCentered)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="100"
                    className="animate-ecg-trace"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-mono text-[11px] font-bold tracking-wider text-sky-300 uppercase">
                  AVAILABLE FOR WORK
                </span>
                <span className="text-[11px] text-zinc-400 font-sans tracking-tight">
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
