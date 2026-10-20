import { useState } from "react";
import { Copy, Check, ChevronUp, ArrowUpRight, Send, Mail, Terminal, Share2, Info, MapPin, Clock, CheckCircle2 } from "lucide-react";
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
      className="w-full relative overflow-hidden scroll-mt-0 z-10 pt-6 pb-12 lg:py-0 lg:min-h-dvh flex flex-col justify-between lg:pt-32 lg:pb-10"
    >
      <div className="w-full flex flex-col justify-between flex-1">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10 flex flex-col flex-1 justify-start lg:justify-between">
          
          {/* Modern Capsule Header - Desktop only */}
          <div className="hidden lg:flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.1] text-xs font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
              <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-200">Get in Touch</span>
            </div>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-zinc-400">
              Direct Channel
            </span>
          </div>

          {/* 1. Mobile Interface - Pure Open Minimalist 2026 Style (Van boxa, No hard line) */}
          <div className="flex lg:hidden flex-col w-full max-w-lg mx-auto items-center text-center gap-6">
            
            {/* Top: Work / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-xs font-mono text-zinc-200">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.95)]" />
              </span>
              <span className="font-semibold text-zinc-100">Available for work</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Let’s connect</span>
            </div>

            {/* Minimalist Contact Symbols: Mailto & Copy */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={triggerSecureMail}
                type="button"
                title="Send Direct Email (mailto)"
                aria-label="Send Direct Email (mailto)"
                className="inline-flex items-center gap-1.5 h-8.5 px-4 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer text-xs font-mono shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Mailto</span>
              </button>

              <button
                onClick={handleCopy}
                type="button"
                title="Copy Email Address"
                aria-label="Copy Email Address"
                className="inline-flex items-center gap-1.5 h-8.5 px-4 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer text-xs font-mono shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-sky-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* PC-Header Styled Circular Social Icons + Top Button */}
            <div className="flex items-center gap-1.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] active:scale-90 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] active:scale-90 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {PERSONAL_INFO.x && (
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noreferrer"
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
                  <Check className="w-4 h-4 text-sky-400" />
                ) : (
                  <Share2 className="w-4 h-4 text-zinc-400" />
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
                <ChevronUp className="w-4 h-4 text-sky-400 animate-bounce" />
              </button>
            </div>

            {/* Bottom Copyright */}
            <div className="text-[11px] font-mono text-zinc-500 tracking-wide">
              <span>© 2026 VDCore. All rights reserved.</span>
            </div>

          </div>

          {/* 2. Desktop Interface */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center lg:my-auto">
            <div className="col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] font-mono text-[11px] text-zinc-200 tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)] shrink-0" />
                <span>Open for Backend & Cloud Opportunities</span>
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
                  className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard hover:border-sky-500/50 border border-zinc-800 text-sm font-sans font-medium backdrop-blur-md hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_24px_-6px_rgba(56,189,248,0.22)] active:scale-95 transition-all duration-200 group cursor-pointer"
                >
                  <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 group-hover:brightness-110 transition-all duration-200">
                    Send Direct Email
                  </span>
                  <Send className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
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
                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <MapPin className="w-[18px] h-[18px] text-sky-400 shrink-0" />
                    <span>Location</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Remote • Worldwide
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                    <Clock className="w-[18px] h-[18px] text-cyan-400 shrink-0" />
                    <span>Schedule</span>
                  </span>
                  <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                    Flexible
                  </span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-3 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
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

        {/* Baseline Footer Bar - Desktop only */}
        <div 
          className="hidden lg:block w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10 shrink-0"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex pt-6 border-t border-zinc-900/80 items-center justify-between text-xs font-mono text-zinc-500">
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