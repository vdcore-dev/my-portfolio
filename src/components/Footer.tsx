import { useState } from "react";
import { Copy, Check, ChevronUp, ArrowUpRight, Send, Terminal, MessageSquare, Share2, Info, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { triggerSecureMail, copySecureEmail } from "../utils/security";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = async () => {
    const success = await copySecureEmail();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.origin || window.location.href;
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: `${PERSONAL_INFO.name} | Software Engineer`,
          text: "Check out this software engineer portfolio.",
          url: shareUrl,
        });
      } catch {
        // User canceled share action
      }
    } else {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(shareUrl);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = shareUrl;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          textArea.remove();
        }
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        setShared(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="w-full min-h-lvh lg:min-h-dvh relative overflow-hidden scroll-mt-0 z-10"
    >
      <div className="w-full min-h-svh lg:min-h-dvh flex flex-col justify-between pt-24 pb-3 lg:pt-32 lg:pb-10">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10 flex flex-col flex-1 justify-start lg:justify-between">
          
          {/* Section Header - Aligned with Projects and Skills */}
          <div className="flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-sky-400 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans">
                Get in Touch
              </h2>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-zinc-400 ml-1">
                Direct Channel
              </span>
            </div>
          </div>

          {/* 1. Mobile Interface */}
          <div className="flex lg:hidden flex-col flex-1 justify-between w-full max-w-lg mx-auto pb-4">
            <div className="w-full">
              <div className="rounded-3xl glass-panel p-6 sm:p-7 text-left mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] font-mono text-[11px] text-zinc-200 tracking-wide mb-3.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>{PERSONAL_INFO.availability}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5 leading-snug">
                  Let’s engineer your next{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                    core system.
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  Available for backend engineering roles, high-throughput APIs, and distributed cloud services.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3.5 w-full">
                <button
                  onClick={triggerSecureMail}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-bold text-xs sm:text-sm tracking-tight shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_16px_-4px_rgba(56,189,248,0.22)] active:scale-95 transition-transform cursor-pointer"
                >
                  <span>Send Email</span>
                  <Send className="w-4 h-4 text-zinc-950 shrink-0" />
                </button>

                <button
                  onClick={handleCopy}
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
                      <Check className="w-4 h-4 text-sky-400 shrink-0 animate-in zoom-in-75 duration-150" />
                    </>
                  ) : (
                    <>
                      <span>Copy Email</span>
                      <Copy className="w-4 h-4 text-sky-400 shrink-0" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="w-full pt-5">
              <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase block text-center mb-3.5">
                Network Platforms
              </span>

              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center h-12 rounded-2xl glass-subcard text-zinc-200 hover:text-sky-400 active:scale-95 transition-all"
                >
                  <GithubIcon className="w-[18px] h-[18px]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center h-12 rounded-2xl glass-subcard text-zinc-200 hover:text-sky-400 active:scale-95 transition-all"
                >
                  <LinkedinIcon className="w-[18px] h-[18px]" />
                </a>

                {PERSONAL_INFO.x && (
                  <a
                    href={PERSONAL_INFO.x}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X Profile"
                    className="flex items-center justify-center h-12 rounded-2xl glass-subcard text-zinc-200 hover:text-sky-400 active:scale-95 transition-all"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 2. Desktop Interface */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center lg:my-auto">
            <div className="col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] font-mono text-[11px] text-zinc-200 tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)] shrink-0" />
                <span>Open for Backend & Cloud Opportunities</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 font-sans">
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
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-bold text-sm tracking-tight hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_10px_22px_-4px_rgba(56,189,248,0.35)] transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_18px_-4px_rgba(56,189,248,0.25)] active:scale-95 group cursor-pointer"
                >
                  <span>Send Direct Email</span>
                  <Send className="w-4 h-4 text-zinc-950 transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={handleCopy}
                  type="button"
                  className={`inline-flex items-center justify-center gap-2.5 h-11 px-6 text-sm font-sans font-medium rounded-full border transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 active:scale-95 group cursor-pointer ${
                    copied
                      ? "bg-sky-500/15 border-sky-500/50 text-sky-300 shadow-lg shadow-sky-500/20"
                      : "glass-subcard text-zinc-200 hover:text-white"
                  }`}
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <span className="font-semibold tracking-wide">Email Copied!</span>
                      <Check className="w-4 h-4 text-sky-400 animate-in zoom-in-75 duration-150" />
                    </>
                  ) : (
                    <>
                      <span>Copy Email</span>
                      <Copy className="w-4 h-4 text-sky-400/90 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="col-span-4 rounded-3xl glass-panel p-6 sm:p-7">
              <div className="flex items-center pb-4 mb-4 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="tracking-wider uppercase text-zinc-300 font-semibold text-[11px]">Availability</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <MapPin className="w-[18px] h-[18px] text-sky-400 shrink-0" />
                    <span>Location</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Remote • Worldwide
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <Clock className="w-[18px] h-[18px] text-cyan-400 shrink-0" />
                    <span>Schedule</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Flexible
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-indigo-400 shrink-0" />
                    <span>Status</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                    {PERSONAL_INFO.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Baseline Footer Bar */}
        <div 
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-2 lg:pt-10 shrink-0"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex lg:hidden items-center justify-between w-full pt-3.5 border-t border-zinc-900/80">
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
              © 2026 VDCore.
            </span>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleShare}
                type="button"
                aria-label="Share portfolio"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all active:scale-90 cursor-pointer ${
                  shared
                    ? "bg-sky-500/20 border-sky-500/40 text-sky-300"
                    : "glass-subcard text-zinc-300 hover:text-white"
                }`}
              >
                {shared ? (
                  <Check className="w-4 h-4 text-sky-400" />
                ) : (
                  <Share2 className="w-4 h-4 text-zinc-300" />
                )}
              </button>

              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top"
                className="w-10 h-10 rounded-full flex items-center justify-center glass-subcard text-sky-400 active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronUp className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex pt-6 border-t border-zinc-900/80 items-center justify-between text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>© 2026 VDCore. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {PERSONAL_INFO.x && (
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1 hover:text-sky-400 transition-colors"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              <button
                onClick={handleShare}
                type="button"
                className="group flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer"
              >
                {shared ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-sky-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                    <span className="group-hover:text-zinc-200">Share</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top"
                className="flex items-center gap-1 text-zinc-400 hover:text-sky-400 transition-colors active:scale-95 cursor-pointer group"
              >
                <span className="group-hover:text-zinc-200">Top</span>
                <ChevronUp className="w-4 h-4 text-sky-400 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};