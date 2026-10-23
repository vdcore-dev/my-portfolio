import { useState } from "react";
import {
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaShareNodes,
  FaArrowUpRightFromSquare,
  FaTerminal,
  FaChevronUp,
  FaCircleInfo,
  FaEarthAmericas,
  FaRegClock,
  FaCircleCheck,
} from "react-icons/fa6";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { triggerSecureMail, copySecureEmail } from "../utils/security";
import { sharePortfolio } from "../utils/share";
import { ScrollReveal } from "./ScrollReveal";
import { scrollToElement } from "../utils/scroll";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e?.currentTarget) {
      e.currentTarget.blur();
    }
    const success = await copySecureEmail();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const success = await sharePortfolio();
    if (success) {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const scrollToTop = () => {
    scrollToElement("home");
  };

  return (
    <footer
      id="contact"
      className="w-full relative overflow-hidden scroll-mt-16 z-10 pt-12 sm:pt-16 pb-[max(2rem,env(safe-area-inset-bottom))] lg:pt-16 lg:pb-12 flex flex-col justify-between"
    >
      <div className="w-full flex flex-col justify-between flex-1">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10 flex flex-col flex-1 justify-start">
          
          {/* ========================================================
              UNIFIED ARCHITECTURAL CONTACT HEADER
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
                    CONTACT
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

          {/* 1. Mobile Interface - Compact, recruiter-focused contact block */}
          <ScrollReveal direction="up" className="flex lg:hidden flex-col w-full max-w-sm mx-auto items-center text-center">

            {/* Headline + one-line value proposition */}
            <h3 className="text-xl font-bold text-zinc-100 tracking-tight font-sans leading-snug">
              Let’s build something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                scalable.
              </span>
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed text-balance max-w-xs">
              Open to backend engineering roles <br /> &amp; distributed systems.
            </p>

            {/* Action row: primary Email pill + bubble-glass Copy */}
            <div className="mt-6 flex items-center justify-center gap-2.5">
              <button
                onClick={triggerSecureMail}
                type="button"
                className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] text-sm font-sans font-medium active:scale-95 transition-transform cursor-pointer"
              >
                <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                  Email me
                </span>
                <FaPaperPlane className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              </button>

              <button
                onClick={handleCopy}
                type="button"
                aria-label={copied ? "Email copied" : "Copy email address"}
                title={copied ? "Copied!" : "Copy email address"}
                className={`relative w-11 h-11 rounded-full glass-subcard flex items-center justify-center active:scale-90 transition-[transform,border-color,box-shadow] duration-200 cursor-pointer ${
                  copied
                    ? "!border-emerald-400/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_0_16px_-4px_rgba(52,211,153,0.55)]"
                    : "!border-white/[0.12]"
                }`}
              >
                {copied ? (
                  <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <FaCopy className="w-3.5 h-3.5 text-zinc-200" />
                )}
              </button>
            </div>

            {/* Hairline divider */}
            <div className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-zinc-700/70 to-transparent" />

            {/* PC-Header Styled Circular Social Icons + Top Button */}
            <div className="mt-6 flex items-center gap-1.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] active:scale-90 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] active:scale-90 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {PERSONAL_INFO.x && (
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] active:scale-90 transition-all"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={handleShare}
                type="button"
                aria-label="Share portfolio"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all active:scale-90 cursor-pointer ${
                  shared
                    ? "bg-sky-500/20 border-sky-500/40 text-sky-300"
                    : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/70"
                }`}
              >
                {shared ? (
                  <FaCheck className="w-3.5 h-3.5 text-sky-400" />
                ) : (
                  <FaShareNodes className="w-3.5 h-3.5 text-zinc-400" />
                )}
              </button>

              <div className="w-px h-4 bg-zinc-800 mx-1" />

              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Scroll to top"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-sky-400 hover:bg-zinc-800/70 active:scale-90 transition-all cursor-pointer"
                title="Back to top"
              >
                <FaChevronUp className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
              </button>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-5 text-[11px] font-mono text-zinc-600 tracking-wide">
              <span>© 2026 VDCORE. All rights reserved.</span>
            </div>

          </ScrollReveal>

          {/* 2. Desktop Interface */}
          <ScrollReveal direction="up" className="hidden lg:grid grid-cols-12 gap-8 items-center lg:my-auto">
            <div className="col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] font-mono text-[11px] text-zinc-200 tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)] shrink-0" />
                <span>Open for Backend &amp; Cloud Opportunities</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight leading-[1.12] mb-4 font-sans">
                Let’s engineer your next <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 mt-1">
                  core system.
                </span>
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans mb-8 leading-relaxed">
                Available for backend engineering roles, high-throughput APIs, and distributed cloud services.
              </p>

              <div className="flex items-center gap-3.5">
                <button
                  onClick={triggerSecureMail}
                  type="button"
                  className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] text-sm font-sans font-medium active:scale-95 transition-transform cursor-pointer select-none"
                >
                  <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                    Send Direct Email
                  </span>
                  <FaPaperPlane className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </button>

                <button
                  onClick={handleCopy}
                  type="button"
                  className={`inline-flex items-center justify-center gap-2.5 h-11 px-6 text-sm font-sans font-medium rounded-full border transition-all duration-200 backdrop-blur-md active:scale-95 group cursor-pointer ${
                    copied
                      ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/20"
                      : "glass-subcard text-zinc-200 hover:text-white"
                  }`}
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <span className="font-semibold tracking-wide text-emerald-300">Email Copied!</span>
                      <FaCheck className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in-75 duration-150" />
                    </>
                  ) : (
                    <>
                      <span>Copy Email</span>
                      <FaCopy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability Box with Glass Bezel & High-Tech Telemetry Pulse */}
            <div className="col-span-4 rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.09] shadow-2xl">
              <div className="flex items-center pb-4 mb-4 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <FaCircleInfo className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="tracking-wider uppercase text-zinc-300 font-semibold text-[11px]">Availability</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-zinc-900/60 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <FaEarthAmericas className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Location</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Remote • Worldwide
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-zinc-900/60 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <FaRegClock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Schedule</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Flexible
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-zinc-900/60 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <FaCircleCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Status</span>
                  </span>
                  
                  {/* Telemetry live signal matching Hero & About */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.15)]">
                    <div className="relative w-5 h-2.5 flex items-center overflow-hidden shrink-0">
                      <svg
                        viewBox="0 0 100 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-emerald-400 pointer-events-none"
                      >
                        <path
                          d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeOpacity="0.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M 0 12 L 20 12 L 25 12 L 28 8 L 32 16 L 35 12 L 40 12 L 44 2 L 49 22 L 53 12 L 58 12 L 62 9 L 66 12 L 100 12"
                          stroke="#34d399"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="120"
                          strokeDashoffset="120"
                          className="animate-ecg-trace"
                        />
                      </svg>
                    </div>
                    <span>{PERSONAL_INFO.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Baseline Footer Bar - Desktop only */}
        <div 
          className="hidden lg:block w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10 shrink-0"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex pt-6 border-t border-zinc-900/80 items-center justify-between text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <FaTerminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>© 2026 VDCore. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
              >
                <span>GitHub</span>
                <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
              >
                <span>LinkedIn</span>
                <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {PERSONAL_INFO.x && (
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
                >
                  <span>X</span>
                  <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              <button
                onClick={handleShare}
                type="button"
                className="group flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer"
              >
                {shared ? (
                  <>
                    <FaCheck className="w-3 h-3 text-sky-400" />
                    <span className="text-sky-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaShareNodes className="w-3 h-3 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                    <span className="group-hover:text-zinc-200">Share</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-sky-400 transition-colors active:scale-95 cursor-pointer group"
              >
                <span className="group-hover:text-zinc-200">Top</span>
                <FaChevronUp className="w-3 h-3 text-sky-400 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};