import { useState } from "react";
import { Copy, Check, ArrowUp, ArrowUpRight, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      // Uklonjen flex-1 hack. justify-between rešava problem zabadanja na iOS-u
      className="min-h-dvh w-full flex flex-col justify-between bg-zinc-950 relative overflow-hidden scroll-mt-0"
    >
      {/* Prazan blok na vrhu koji "gura" sadržaj tačno na sredinu (odstojanje od headera) */}
      <div className="w-full pt-24 lg:pt-32" />

      {/* GLAVNI SADRŽAJ (Sada lepo razdvojen i diše) */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-8 lg:gap-10">
        
        {/* MOBILNI PRIKAZ */}
        <div className="block lg:hidden w-full max-w-lg mx-auto flex flex-col gap-7">
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/60 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-emerald-500/40 text-[11px] font-mono text-emerald-400 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 leading-[1.2] font-sans">
              Let’s engineer your next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                core system.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Direct communication channel for full-time backend positions, distributed architectures, and API integrations.
            </p>
          </div>

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
              className={`inline-flex items-center justify-center gap-2 h-14 text-xs sm:text-sm font-sans font-medium rounded-full border backdrop-blur-md shadow-lg active:scale-95 transition-all ${
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

          <div className="w-full mt-2">
            <span className="text-zinc-500 text-[11px] font-mono tracking-wider uppercase block text-center mb-3">
              Connect across platforms
            </span>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center justify-center h-13 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 transition-all shadow-md"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center h-13 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 transition-all shadow-md"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="flex items-center justify-center h-13 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 transition-all shadow-md"
              >
                <XIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP PRIKAZ */}
        <div className="hidden lg:flex flex-col items-start max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-emerald-500/40 text-xs font-mono text-emerald-400 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for work</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-sans">
            Let’s engineer your next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              core system.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans mb-10 leading-relaxed">
            Direct communication channel for full-time backend positions, distributed architectures, and API integrations.
          </p>

          <div className="flex flex-row items-center gap-3.5 w-auto">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-gradient-to-r from-[#00b4d8] via-[#06d6a0] to-[#10b981] text-zinc-950 font-bold text-sm tracking-tight shadow-lg shadow-[#06d6a0]/25 hover:brightness-110 active:scale-[0.98] transition-all duration-150 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl border text-xs sm:text-sm font-sans font-medium transition-all active:scale-[0.98] duration-150 cursor-pointer ${
                copied
                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-sm"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in-75" />
                  <span className="font-semibold">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          DNO: BASELINE BAR 
          "env(safe-area-inset-bottom)" je Apple-ov standard!
          Ovo garantuje da dugme NIKAD ne ode pod traku.
         ======================================================== */}
      <div 
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-16 lg:pt-20"
        style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        
        {/* MOBILNO DNO */}
        <div className="flex lg:hidden items-center justify-center w-full">
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-emerald-400 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            <span className="text-xs font-medium font-sans tracking-wide">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
          </button>
        </div>

        {/* DESKTOP DNO */}
        <div className="hidden lg:flex pt-6 border-t border-zinc-900 flex-row items-center justify-between gap-5 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2 text-left">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>© 2026 • Designed and built by VDCore.</span>
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
              <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};