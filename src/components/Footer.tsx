import { useState } from "react";
import { Copy, Check, ArrowUp, ArrowUpRight, Send, Terminal, Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="min-h-dvh w-full flex flex-col justify-between pt-24 lg:pt-28 pb-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900/80"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col flex-1 justify-center">
        
        {/* SECTION HEADER: Čist moderni simbol bez okvira */}
        <div className="flex items-center justify-between pb-4 mb-8 sm:mb-10 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans">
              Get in Touch
            </h2>
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for work</span>
          </div>
        </div>

        {/* 1. MOBILE */}
        <div className="block lg:hidden w-full max-w-lg mx-auto flex flex-col gap-6">
          <div className="rounded-3xl bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl text-left">
            
            {/* Status */}
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-wide mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for work</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5 leading-snug">
              Let’s engineer your next{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                core system.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Direct communication channel for backend engineering roles, microservices, and distributed architecture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-3.5 w-full">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 h-14 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#06d6a0] to-[#10b981] text-zinc-950 font-bold text-xs sm:text-sm tracking-tight shadow-lg shadow-[#06d6a0]/25 active:scale-95 transition-transform"
            >
              <span>Send Email</span>
              <Send className="w-4 h-4 text-zinc-950" />
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`inline-flex items-center justify-center gap-2 h-14 text-xs sm:text-sm font-sans font-medium rounded-full border backdrop-blur-md shadow-lg active:scale-95 transition-all cursor-pointer ${
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
                  <span>Copy Email</span>
                  <Copy className="w-4 h-4 text-emerald-400" />
                </>
              )}
            </button>
          </div>

          {/* Social Networks */}
          <div className="w-full">
            <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase block text-center mb-2.5">
              Network Platforms
            </span>

            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center justify-center h-12 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center h-12 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 active:scale-95 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="flex items-center justify-center h-12 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 active:scale-95 transition-all"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. DESKTOP view */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          <div className="col-span-8 flex flex-col items-start">
            
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 font-sans">
              Let’s engineer your next{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 mt-1">
                core system.
              </span>
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans mb-8 leading-relaxed">
              Available for full-time backend development, microservices design, and mission-critical cloud integrations.
            </p>

            {/* Desktop CTA buttons */}
            <div className="flex items-center gap-3.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#06d6a0] to-[#10b981] text-zinc-950 font-bold text-sm tracking-tight hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#06d6a0]/25 active:scale-95 cursor-pointer"
              >
                <span>Send Direct Email</span>
                <Send className="w-4 h-4 text-zinc-950" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className={`inline-flex items-center gap-2.5 px-5 py-3 text-sm font-sans font-medium rounded-full border transition-all duration-200 backdrop-blur-md shadow-lg active:scale-95 cursor-pointer ${
                  copied
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20"
                    : "bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 shadow-black/30"
                }`}
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <span className="font-semibold tracking-wide">Email copied to clipboard!</span>
                    <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in-75 duration-150" />
                  </>
                ) : (
                  <>
                    <span>Copy email</span>
                    <Copy className="w-4 h-4 text-emerald-400/90 transition-transform duration-200 hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="col-span-4 rounded-3xl bg-zinc-950/70 border border-zinc-800/90 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>SYSTEM DIRECTORY</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <span className="text-zinc-500">Location</span>
                <span className="text-zinc-200">Remote / Worldwide</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <span className="text-zinc-500">Timezone</span>
                <span className="text-zinc-200">CET / UTC+1</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <span className="text-zinc-500">Status</span>
                <span className="text-emerald-400 font-semibold">Immediate Availability</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BASELINE FOOTER BAR */}
      <div 
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        {/* Mobile bottom bar */}
        <div className="flex lg:hidden items-center justify-center w-full">
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-emerald-400 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            <span className="text-xs font-medium font-sans tracking-wide">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
          </button>
        </div>

        {/* Desktop bottom bar */}
        <div className="hidden lg:flex pt-6 border-t border-zinc-900/80 items-center justify-between text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>© 2026 VDCore. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors active:scale-95 cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};