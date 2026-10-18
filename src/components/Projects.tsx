import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, Code2, FolderKanban, ShieldCheck, Database, Zap, Globe } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "saas-billing");
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const activeIdx = Math.max(0, PROJECTS.findIndex((p) => p.id === selectedId));
  const activeProject: Project = PROJECTS[activeIdx] || PROJECTS[0];

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
      className="w-full flex flex-col min-h-svh lg:min-h-dvh pt-24 pb-16 mb-16 lg:mb-0 lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-0"
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

        {/* 1. Desktop Interface */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Left system list with color-accented index digits */}
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

          {/* Right detail showcase card with fixed height */}
          <div className="col-span-7">
            <div
              key={activeProject.id}
              className="rounded-3xl glass-panel p-6 sm:p-7 relative flex flex-col justify-between h-[445px] animate-panel-switch"
            >
              <div>
                {/* Card header: Index + Title + Status badge */}
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80 mb-3.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-sans text-base font-bold tabular-nums tracking-tight shrink-0 ${getProjectIndexColor(
                        activeIdx,
                        true
                      )}`}
                    >
                      0{activeIdx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans truncate">
                      {activeProject.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[10px] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
                    {activeProject.featured ? "Core System" : "Production Ready"}
                  </span>
                </div>

                {/* Project description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-sans line-clamp-2">
                  {activeProject.description}
                </p>

                {/* 2x2 specification grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Architecture</span>
                    </span>
                    <span className="text-white font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.architecture || "Clean Architecture"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Data & State</span>
                    </span>
                    <span className="text-white font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.database || "PostgreSQL + Redis"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Performance & SLA</span>
                    </span>
                    <span className="text-white font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.performance || "High Throughput"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>Security & Auth</span>
                    </span>
                    <span className="text-white font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.security || "Zero-Trust Security"}
                    </span>
                  </div>
                </div>

                {/* Tech stack badges with glowing indicators */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-zinc-200 font-mono text-[11px] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/90 shadow-[0_0_5px_rgba(56,189,248,0.8)] shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA buttons */}
              <div className="flex items-center gap-3.5 pt-3.5 border-t border-zinc-800/80">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/code inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard text-zinc-200 hover:text-white text-sm font-sans font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    <GithubIcon className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover/code:scale-110 group-hover/code:-translate-y-0.5" />
                    <span>Source Code</span>
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-bold text-sm tracking-tight hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_10px_22px_-4px_rgba(56,189,248,0.35)] transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_18px_-4px_rgba(56,189,248,0.25)] active:scale-95"
                  >
                    <Globe className="w-4 h-4 text-zinc-950 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:rotate-12" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-950 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mobile Interface - Horizontal snap cards */}
        <div className="block lg:hidden">
          <div 
            ref={mobileScrollRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden -mx-4 px-4"
          >
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="min-w-[88%] sm:min-w-[70%] min-h-[445px] snap-center rounded-3xl glass-panel px-5 py-5.5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Mobile header: Index + Title */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-zinc-800/80 mb-3.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`font-sans text-sm font-bold tabular-nums shrink-0 ${getProjectIndexColor(
                          idx,
                          true
                        )}`}
                      >
                        0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans truncate">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-300 font-mono px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_5px_rgba(56,189,248,0.85)]" />
                      {project.featured ? "Core" : "Ready"}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                    {project.description}
                  </p>

                  {/* 2x2 mobile spec grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    <div className="p-3 rounded-xl glass-subcard flex flex-col justify-between">
                      <span className="text-zinc-400 font-sans text-[10px] font-medium flex items-center gap-1.5 mb-1">
                        <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Architecture</span>
                      </span>
                      <span className="text-white font-mono text-[11px] font-semibold tracking-tight truncate">
                        {project.specs?.architecture || "Clean Arch"}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl glass-subcard flex flex-col justify-between">
                      <span className="text-zinc-400 font-sans text-[10px] font-medium flex items-center gap-1.5 mb-1">
                        <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Data & State</span>
                      </span>
                      <span className="text-white font-mono text-[11px] font-semibold tracking-tight truncate">
                        {project.specs?.database || "PostgreSQL"}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl glass-subcard flex flex-col justify-between">
                      <span className="text-zinc-400 font-sans text-[10px] font-medium flex items-center gap-1.5 mb-1">
                        <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Performance</span>
                      </span>
                      <span className="text-white font-mono text-[11px] font-semibold tracking-tight truncate">
                        {project.specs?.performance || "Low Latency"}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl glass-subcard flex flex-col justify-between">
                      <span className="text-zinc-400 font-sans text-[10px] font-medium flex items-center gap-1.5 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>Security</span>
                      </span>
                      <span className="text-white font-mono text-[11px] font-semibold tracking-tight truncate">
                        {project.specs?.security || "JWT & RBAC"}
                      </span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800/90 text-zinc-200 font-mono text-[10px] font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
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
                      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full glass-subcard text-zinc-200 font-sans text-xs font-medium active:scale-95 transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-sky-400" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-zinc-950 font-sans font-bold text-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_6px_16px_-4px_rgba(56,189,248,0.22)] active:scale-95 transition-all"
                    >
                      <Globe className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
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