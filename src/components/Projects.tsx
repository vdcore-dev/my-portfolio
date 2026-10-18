import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, Terminal, Layers, Code2, FolderKanban, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "saas-billing");
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const activeProject: Project = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPosition = el.scrollLeft;
      const cardWidth = el.clientWidth * 0.88;
      const newIdx = Math.round(scrollPosition / cardWidth);
      if (newIdx !== activeMobileIdx && newIdx >= 0 && newIdx < PROJECTS.length) {
        setActiveMobileIdx(newIdx);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeMobileIdx]);

  const scrollToMobileCard = (idx: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.88 + 16;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    setActiveMobileIdx(idx);
  };

  const getProjectIndexColor = (idx: number, isSelected: boolean) => {
    const colors = [
      isSelected ? "text-sky-400" : "text-sky-400/75 group-hover:text-sky-400",
      isSelected ? "text-cyan-400" : "text-cyan-400/75 group-hover:text-cyan-400",
      isSelected ? "text-indigo-400" : "text-indigo-400/75 group-hover:text-indigo-400",
      isSelected ? "text-violet-400" : "text-violet-400/75 group-hover:text-violet-400",
    ];
    return colors[idx % colors.length];
  };

  return (
    <section 
      id="projects" 
      className="w-full flex flex-col pt-20 pb-16 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-6 lg:scroll-mt-0"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <FolderKanban className="w-5 h-5 text-sky-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Featured Systems
            </h2>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-zinc-400 ml-1">
              {PROJECTS.length} Systems
            </span>
          </div>
        </div>

        {/* 1. DESKTOP INTERFACE */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Leva lista sistema - Čiste raznobojne cifre bez okvira */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {PROJECTS.map((project, idx) => {
              const isSelected = project.id === selectedId;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`selector-item w-full text-left px-4 py-3.5 rounded-2xl border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "selector-item-active text-white"
                      : "selector-item-inactive text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-3">
                    <span
                      className={`font-sans text-sm font-bold tabular-nums tracking-tight shrink-0 transition-colors duration-200 ${getProjectIndexColor(
                        idx,
                        isSelected
                      )}`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors ${
                          isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-mono">
                        {project.category || project.tags.slice(0, 3).join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shrink-0 pl-1">
                    <span
                      className={`rounded-full transition-all duration-200 ${
                        isSelected
                          ? "w-2 h-2 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                          : "w-1.5 h-1.5 bg-zinc-800 group-hover:bg-zinc-600"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desni detaljni Showcase Box - FIKSNA VISINA h-[445px] u Apple-Glass Hero stilu */}
          <div className="col-span-7">
            <div
              key={activeProject.id}
              className="rounded-3xl glass-panel p-6 sm:p-7 relative flex flex-col justify-between h-[445px] animate-panel-switch"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80 mb-3.5">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
                    <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="uppercase text-zinc-300 font-semibold">
                      {activeProject.category || "SYSTEM ARCHITECTURE"}
                    </span>
                  </div>

                  {activeProject.featured ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 font-mono text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
                      Core System
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 font-mono text-[10px]">
                      Production Ready
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight font-sans">
                  {activeProject.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-sans line-clamp-2">
                  {activeProject.description}
                </p>

                {/* 3 Sleek Hero-Style Apple-Glass Architecture Capsules */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                    <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Architecture</span>
                    </span>
                    <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                      {activeProject.specs?.architecture || "Clean Architecture"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                    <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Storage & State</span>
                    </span>
                    <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                      {activeProject.specs?.database || "PostgreSQL + Redis"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                    <span className="text-zinc-300 font-sans text-xs font-medium flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>SLA & Security</span>
                    </span>
                    <span className="text-zinc-200 font-mono text-[11px] font-medium tracking-tight">
                      {[activeProject.specs?.performance, activeProject.specs?.security].filter(Boolean).join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Tagovi */}
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] text-zinc-300 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Akcioni dugmići */}
              <div className="flex items-center gap-3 pt-3.5 border-t border-zinc-800/80">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/code flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-subcard text-zinc-200 hover:text-white text-xs font-mono font-medium transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-400 group-hover/code:text-white group-hover/code:scale-110 transition-all duration-200" />
                    <span>Source Code</span>
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/15 border border-sky-500/35 hover:border-sky-400/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-zinc-100 hover:text-white text-xs font-mono font-medium transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILNI INTERFACE - Apple-Glass kartice sa Hero kapsulama */}
        <div className="block lg:hidden">
          <div 
            ref={mobileScrollRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden -mx-4 px-4"
          >
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="min-w-[88%] sm:min-w-[70%] min-h-[420px] snap-center rounded-3xl glass-panel p-5.5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3.5">
                    <span className="font-mono text-[11px] text-zinc-300 font-semibold tracking-wider uppercase flex items-center gap-2">
                      <span className="text-sky-400 font-mono">0{idx + 1}</span>
                      <span className="text-zinc-700">•</span>
                      <span className="truncate max-w-[170px]">{project.category || "System"}</span>
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-[10px] font-mono text-sky-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        Core
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight font-sans">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/*Hero style capsule*/}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                      <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Architecture</span>
                      </span>
                      <span className="text-zinc-200 font-mono text-[10px] font-medium tracking-tight truncate max-w-[145px]">
                        {project.specs?.architecture || "Clean Architecture"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/65 border border-zinc-800/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
                      <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Storage</span>
                      </span>
                      <span className="text-zinc-200 font-mono text-[10px] font-medium tracking-tight truncate max-w-[145px]">
                        {project.specs?.database || "PostgreSQL + Redis"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-lg bg-zinc-900/90 border border-zinc-800/90 text-zinc-300 font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-3.5 border-t border-zinc-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl glass-subcard text-zinc-200 font-mono text-xs font-medium active:scale-[0.97] transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-400" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-sky-500/10 border border-sky-500/35 text-zinc-100 font-mono text-xs font-medium active:scale-[0.97] transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                aria-label={`View project ${idx + 1}`}
                onClick={() => scrollToMobileCard(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeMobileIdx === idx
                    ? "w-6 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                    : "w-2 bg-zinc-800 hover:bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};