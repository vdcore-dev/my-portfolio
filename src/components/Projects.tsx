import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, Terminal, Layers, Star, Code2, FolderKanban, ShieldCheck, Zap } from "lucide-react";
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

  return (
    <section 
      id="projects" 
      className="w-full flex flex-col pt-24 pb-20 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-6 lg:scroll-mt-0 border-t border-zinc-950 lg:border-zinc-900/80"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-8 lg:mb-10 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <FolderKanban className="w-4 h-4 text-emerald-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Featured Systems
            </h2>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 ml-1">
              {PROJECTS.length} Systems
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="text-zinc-600">//</span>
            <span>Microservices & Cloud Architecture</span>
          </div>
        </div>

        {/* 1. DESKTOP INTERFACE */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Leva lista sistema */}
          <div className="col-span-5 flex flex-col gap-2">
            {PROJECTS.map((project) => {
              const isSelected = project.id === selectedId;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700 text-white shadow-xl shadow-black/50 ring-1 ring-emerald-500/20"
                      : "bg-zinc-950/40 border-zinc-800/60 hover:bg-zinc-900/40 hover:border-zinc-700/60 text-zinc-400"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors ${
                          isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono shrink-0">
                          Core
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-mono">
                      {project.category || project.tags.slice(0, 3).join(" • ")}
                    </p>
                  </div>

                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 shrink-0 ${
                      isSelected ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Desni detaljni Showcase Box */}
          <div className="col-span-7">
            <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/90 backdrop-blur-xl p-7 shadow-2xl relative flex flex-col justify-between min-h-[460px]">
              <div>
                {/* Heder kartice: Čist bez suvišne "Featured Architecture" kapsule */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="uppercase text-zinc-300">{activeProject.category || "SYSTEM ARCHITECTURE"}</span>
                  </div>

                  <span className="text-zinc-600 font-mono text-[11px]">
                    System Specs
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight font-sans">
                  {activeProject.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                  {activeProject.description}
                </p>

                {/* Dinamički Specs iz portfolioData.ts */}
                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex flex-col justify-between">
                    <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Architecture</span>
                    <span className="text-zinc-200 font-medium mt-1 flex items-center gap-2 truncate">
                      <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{activeProject.specs?.architecture || "Clean Architecture"}</span>
                    </span>
                  </div>
                  
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex flex-col justify-between">
                    <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Storage & Cache</span>
                    <span className="text-zinc-200 font-medium mt-1 flex items-center gap-2 truncate">
                      <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{activeProject.specs?.database || "PostgreSQL + Redis"}</span>
                    </span>
                  </div>

                  {activeProject.specs?.performance && (
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex flex-col justify-between">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Performance Target</span>
                      <span className="text-zinc-200 font-medium mt-1 flex items-center gap-2 truncate">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{activeProject.specs.performance}</span>
                      </span>
                    </div>
                  )}

                  {activeProject.specs?.security && (
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex flex-col justify-between">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Security & Auth</span>
                      <span className="text-zinc-200 font-medium mt-1 flex items-center gap-2 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span className="truncate">{activeProject.specs.security}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Tagovi */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Akcioni dugmići */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-700/80 text-zinc-200 hover:text-white text-xs font-mono font-medium transition-all active:scale-[0.98]"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-400" />
                    <span>Source Code</span>
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-900/90 border border-emerald-500/40 hover:border-emerald-400 text-zinc-200 hover:text-white text-xs font-mono font-medium transition-all shadow-sm shadow-emerald-500/5 active:scale-[0.98]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform duration-200 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILNI INTERFACE */}
        <div className="block lg:hidden">
          <div 
            ref={mobileScrollRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden -mx-4 px-4"
          >
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="min-w-[88%] sm:min-w-[70%] min-h-[390px] snap-center rounded-3xl bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80 mb-4">
                    <span className="font-mono text-xs text-zinc-400 tracking-wider">
                      System // 0{idx + 1}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <Star className="w-2.5 h-2.5 fill-emerald-400/40" />
                        Core
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight font-sans">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-5 font-sans line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 active:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-mono text-xs font-medium active:scale-[0.97] transition-all"
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
                      className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 active:bg-zinc-800 border border-emerald-500/40 text-zinc-200 font-mono text-xs font-medium active:scale-[0.97] transition-all shadow-sm shadow-emerald-500/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-5">
            {PROJECTS.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeMobileIdx === idx
                    ? "w-6 bg-emerald-400"
                    : "w-2 bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};