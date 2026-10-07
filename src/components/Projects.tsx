import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ExternalLink, Terminal, ChevronRight, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string | number>(PROJECTS[0]?.id ?? 1);
  const activeProject: Project = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  return (
    <section id="projects" className="min-h-dvh w-full flex flex-col pt-28 lg:pt-32 pb-16 lg:pb-24 scroll-mt-0 relative">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Sekcijski Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>// System Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Architecture & Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Production-grade applications, microservices, and platforms designed with a focus on clean APIs and resilience.
          </p>
        </div>

        {/* 1. DESKTOP INTERFACE: Master-Detail Showcase (lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-5 flex flex-col gap-3">
            {PROJECTS.map((project, idx) => {
              const isSelected = project.id === selectedId;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700/80 shadow-lg shadow-black/40"
                      : "bg-zinc-950/40 border-zinc-800/60 hover:bg-zinc-900/40 hover:border-zinc-700/50"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-xs px-2 py-1 rounded-md transition-colors ${
                        isSelected
                          ? "bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30"
                          : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="truncate">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors ${
                          isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate mt-0.5 font-mono">
                        {project.tags.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 shrink-0 ml-2 ${
                      isSelected
                        ? "text-emerald-400 translate-x-1"
                        : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="col-span-7">
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl p-7 shadow-2xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800/70 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="font-mono text-xs text-zinc-400 tracking-wider">
                    SYSTEM ARCHITECTURE SPEC
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source on GitHub"
                      className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Live Project"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 hover:text-white hover:border-zinc-500 text-xs font-mono font-medium transition-all"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                {activeProject.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-center">
                  <span className="text-zinc-500 text-[10px] uppercase">Core Paradigm</span>
                  <span className="text-zinc-200 font-semibold mt-0.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    Clean Architecture
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-center">
                  <span className="text-zinc-500 text-[10px] uppercase">Deployment</span>
                  <span className="text-zinc-200 font-semibold mt-0.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-sky-400" />
                    Dockerized Stack
                  </span>
                </div>
              </div>

              <div>
                <span className="text-zinc-500 font-mono text-xs uppercase block mb-2.5">
                  Technologies & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILNI INTERFACE: Swipe Snap Carousel (lg:hidden) */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="min-w-[85%] sm:min-w-[70%] snap-center rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/70 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                        0{idx + 1}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                          aria-label="GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
              Swipe to explore systems →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};