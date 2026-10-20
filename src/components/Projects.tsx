import { useState, useRef } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, Code2, ShieldCheck, Database, Zap, Globe, ChevronDown, Server, Workflow } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "saas-billing");
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);
  const mobileCardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeIdx = Math.max(0, PROJECTS.findIndex((p) => p.id === selectedId));
  const activeProject: Project = PROJECTS[activeIdx] || PROJECTS[0];

  const toggleMobileProject = (id: string) => {
    const willExpand = expandedMobileId !== id;
    setExpandedMobileId(willExpand ? id : null);

    if (willExpand) {
      setTimeout(() => {
        const cardEl = mobileCardRefs.current[id];
        if (cardEl) {
          const rect = cardEl.getBoundingClientRect();
          const navbarHeight = 84;
          const windowHeight = window.innerHeight;

          if (rect.bottom > windowHeight) {
            const extraScroll = rect.bottom - windowHeight + 24;
            window.scrollBy({ top: extraScroll, behavior: "smooth" });
          } else if (rect.top < navbarHeight) {
            const topOffset = rect.top - navbarHeight;
            window.scrollBy({ top: topOffset, behavior: "smooth" });
          }
        }
      }, 180);
    }
  };

  const getProjectSystemConfig = (id: string) => {
    switch (id) {
      case "saas-billing":
        return {
          icon: Server,
          subLabel: "BILLING",
          accentColor: "text-sky-400",
          badgeBorder: "border-sky-500/35",
          glowGradient: "from-sky-500/25 via-sky-500/5 to-transparent",
          tagDot: "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]",
          expandedCard: "!border-sky-500/60 shadow-[0_0_24px_rgba(56,189,248,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-sky-500/10 border-sky-500/40 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)]",
        };
      case "payment-gateway":
        return {
          icon: Zap,
          subLabel: "GATEWAY",
          accentColor: "text-emerald-400",
          badgeBorder: "border-emerald-500/35",
          glowGradient: "from-emerald-500/25 via-emerald-500/5 to-transparent",
          tagDot: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]",
          expandedCard: "!border-emerald-500/60 shadow-[0_0_24px_rgba(52,211,153,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.2)]",
        };
      case "task-orchestrator":
        return {
          icon: Workflow,
          subLabel: "CLUSTER",
          accentColor: "text-indigo-400",
          badgeBorder: "border-indigo-500/35",
          glowGradient: "from-indigo-500/25 via-indigo-500/5 to-transparent",
          tagDot: "bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]",
          expandedCard: "!border-indigo-500/60 shadow-[0_0_24px_rgba(129,140,248,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.2)]",
        };
      case "modern-portfolio":
      default:
        return {
          icon: Globe,
          subLabel: "CLIENT",
          accentColor: "text-cyan-400",
          badgeBorder: "border-cyan-500/35",
          glowGradient: "from-cyan-500/25 via-cyan-500/5 to-transparent",
          tagDot: "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]",
          expandedCard: "!border-cyan-500/60 shadow-[0_0_24px_rgba(34,211,238,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.2)]",
        };
    }
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
      className="w-full flex flex-col pt-[116px] pb-10 lg:py-0 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-0"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Modern Capsule Header */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.1] text-xs font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
            <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-200">Featured Systems</span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-zinc-400">
            {PROJECTS.length} Systems
          </span>
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
                          isSelected ? "text-zinc-100" : "text-zinc-300 group-hover:text-white"
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
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight font-sans truncate">
                      {activeProject.title}
                    </h3>
                  </div>
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
                    <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.architecture || "Clean Architecture"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Data & State</span>
                    </span>
                    <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.database || "PostgreSQL + Redis"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Performance & SLA</span>
                    </span>
                    <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight truncate">
                      {activeProject.specs?.performance || "High Throughput"}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl glass-subcard flex flex-col justify-between">
                    <span className="text-zinc-400 font-sans text-[11px] font-medium flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>Security & Auth</span>
                    </span>
                    <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight truncate">
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

        {/* 2. Mobile Interface - Ultra-Modern 2026 Systems List */}
        <div className="flex lg:hidden flex-col gap-3.5">
          {PROJECTS.map((project) => {
            const isExpanded = expandedMobileId === project.id;
            const systemConfig = getProjectSystemConfig(project.id);
            const SystemIcon = systemConfig.icon;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  mobileCardRefs.current[project.id] = el;
                }}
                className={`rounded-3xl transition-all duration-300 overflow-hidden glass-panel p-4 ${
                  isExpanded
                    ? systemConfig.expandedCard
                    : "hover:border-white/20"
                }`}
              >
                {/* Mini Capsule Row (Tappable header) */}
                <div
                  onClick={() => toggleMobileProject(project.id)}
                  className="flex items-start gap-3.5 cursor-pointer select-none group"
                >
                  {/* Left: Larger, Radiant System Hardware Badge */}
                  <div className={`relative w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] rounded-2xl overflow-hidden shrink-0 border ${systemConfig.badgeBorder} bg-zinc-950 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${systemConfig.glowGradient}`} />
                    <SystemIcon className={`w-7 h-7 ${systemConfig.accentColor} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    <span className="relative z-10 text-[8px] font-mono font-bold tracking-wider text-zinc-400 mt-1 uppercase">
                      {systemConfig.subLabel}
                    </span>
                  </div>

                  {/* Right: Full-width Title & Info + Bottom Actions Bar */}
                  <div className="flex-1 min-w-0">
                    {/* Domain Category Eyebrow Capsule */}
                    <div className="flex items-center mb-1.5">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                        <span className={`w-1 h-1 rounded-full ${systemConfig.tagDot}`} />
                        <span className="text-[9px] font-mono font-medium text-zinc-300 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </span>
                    </div>

                    {/* Title with full width - no truncation from side buttons */}
                    <h3 className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Core Tech Stack */}
                    <div className="mt-1.5 font-mono text-[11px] text-zinc-400 leading-snug">
                      <span>{project.tags.slice(0, 3).join(" • ")}</span>
                    </div>

                    {/* Actions Bar Below Title: Code, Live, and Specs / Expand Arrow */}
                    <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-zinc-800/60">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View Source on GitHub"
                          aria-label="View Source on GitHub"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 active:scale-95 transition-all shadow-inner text-xs font-sans font-medium"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View Live Demo"
                          aria-label="View Live Demo"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sky-400 hover:text-sky-300 hover:border-sky-500/40 active:scale-95 transition-all shadow-inner text-xs font-sans font-medium"
                        >
                          <Globe className="w-3.5 h-3.5 text-sky-400" />
                          <span>Live</span>
                        </a>
                      )}

                      {/* 2026 Expand / Specs Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileProject(project.id);
                        }}
                        className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                          isExpanded
                            ? systemConfig.closeBtn
                            : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        <span>{isExpanded ? "Close" : "Specs"}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : systemConfig.accentColor
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded State: Compact, Clean Backend Architecture Summary (No duplicate giant image) */}
                {isExpanded && (
                  <div className="pt-3.5 mt-3.5 border-t border-zinc-800/80 animate-in fade-in zoom-in-95 duration-200">
                    {/* Focused System Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans mb-3.5">
                      {project.description}
                    </p>

                    {/* 2x2 Core Backend Specifications Grid */}
                    {project.specs && (
                      <div className="grid grid-cols-2 gap-2 mb-3.5">
                        <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                          <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1.5 mb-1">
                            <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span>Architecture</span>
                          </span>
                          <span className="text-zinc-100 font-mono text-[11px] font-semibold block truncate">
                            {project.specs.architecture}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                          <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1.5 mb-1">
                            <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>Data & State</span>
                          </span>
                          <span className="text-zinc-100 font-mono text-[11px] font-semibold block truncate">
                            {project.specs.database}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                          <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1.5 mb-1">
                            <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>Performance</span>
                          </span>
                          <span className="text-zinc-100 font-mono text-[11px] font-semibold block truncate">
                            {project.specs.performance || "High Throughput"}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                          <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1.5 mb-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                            <span>Security</span>
                          </span>
                          <span className="text-zinc-100 font-mono text-[11px] font-semibold block truncate">
                            {project.specs.security || "Zero-Trust"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${systemConfig.tagDot}`} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};