import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
  Database,
  Zap,
  Globe,
  Copy,
  Check,
  Terminal,
  Layers,
  Activity,
  GitBranch
} from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "saas-billing");
  const [activeTab, setActiveTab] = useState<"specs" | "flow" | "contract">("specs");
  const [mobileTabs, setMobileTabs] = useState<Record<string, "specs" | "flow" | "contract">>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeIdx = Math.max(0, PROJECTS.findIndex((p) => p.id === selectedId));
  const activeProject: Project = PROJECTS[activeIdx] || PROJECTS[0];

  const handleCopyJson = async (projectId: string, data: unknown) => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopiedId(projectId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  const getProjectSystemConfig = (id: string) => {
    switch (id) {
      case "saas-billing":
        return {
          glowGradient: "from-sky-500/25 via-sky-500/5 to-transparent",
          tagDot: "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]",
          activeSidebarBorder: "!border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(56,189,248,0.25)]",
        };
      case "payment-gateway":
        return {
          glowGradient: "from-emerald-500/25 via-emerald-500/5 to-transparent",
          tagDot: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]",
          activeSidebarBorder: "!border-emerald-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(52,211,153,0.25)]",
        };
      case "task-orchestrator":
        return {
          glowGradient: "from-indigo-500/25 via-indigo-500/5 to-transparent",
          tagDot: "bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]",
          activeSidebarBorder: "!border-indigo-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(129,140,248,0.25)]",
        };
      case "modern-portfolio":
      default:
        return {
          glowGradient: "from-cyan-500/25 via-cyan-500/5 to-transparent",
          tagDot: "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]",
          activeSidebarBorder: "!border-cyan-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(34,211,238,0.25)]",
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
      className="w-full flex flex-col pt-28 pb-0 lg:py-0 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-0"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Desktop Modern Capsule Header (Hidden on Mobile for Pure Seamless Scroll) */}
        <div className="hidden lg:flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.1] text-xs font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
            <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-200">Featured Systems</span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-zinc-400">
            {PROJECTS.length} Systems
          </span>
        </div>

        {/* 1. Desktop Interface (Locked Height h-[490px] for 100% Zero Layout Shift) */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Left system list with color-accented index digits */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {PROJECTS.map((project, idx) => {
              const isSelected = project.id === activeProject.id;
              const projectConfig = getProjectSystemConfig(project.id);
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`selector-item w-full text-left px-4 py-3.5 rounded-2xl border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? `selector-item-active ${projectConfig.activeSidebarBorder} text-white`
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
                          ? `w-2 h-2 ${projectConfig.tagDot}`
                          : "w-1.5 h-1.5 bg-zinc-800 group-hover:bg-zinc-600"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right detail showcase card - Locked h-[490px] with zero jump */}
          <div className="col-span-7">
            <div
              key={activeProject.id}
              className="rounded-3xl glass-panel p-6 sm:p-7 relative flex flex-col justify-between h-[490px] animate-panel-switch overflow-hidden"
            >
              {/* Header Zone: Index + Title + 3-Way Mode Segmented Switcher */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-sans text-base font-bold tabular-nums tracking-tight shrink-0 ${getProjectIndexColor(
                      activeIdx,
                      true
                    )}`}
                  >
                    0{activeIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 tracking-tight font-sans truncate">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Linear View Mode Tabs */}
                <div className="inline-flex p-1 rounded-full bg-zinc-950/80 border border-white/[0.08] shadow-inner shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "specs"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("flow")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "flow"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Flow</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("contract")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "contract"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>API Contract</span>
                  </button>
                </div>
              </div>

              {/* Locked Interior Content Zone (h-[340px]) */}
              <div className="h-[340px] flex flex-col justify-between pt-3 pb-1 overflow-hidden">
                {/* Tab 1: Specs Overview - High-Density Modern Spec Matrix */}
                {activeTab === "specs" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-200">
                    <p className="text-zinc-300 text-sm leading-relaxed font-sans line-clamp-2">
                      {activeProject.description}
                    </p>

                    {/* Spec Matrix List - Clean Rows, Modular & Expandable */}
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>Architecture & Pattern</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.architecture || "Clean Architecture"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Persistence & State</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.database || "PostgreSQL + Redis"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>Throughput & SLA</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.performance || "High Throughput"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
                          <span>Security & Protocol</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.security || "Zero-Trust Security"}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-zinc-200 font-mono text-[11px] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400/90 shadow-[0_0_5px_rgba(56,189,248,0.8)] shrink-0" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 2: Architecture Flow Pipeline */}
                {activeTab === "flow" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>Sequential Distributed Pipeline</span>
                      <span className="text-cyan-400 text-[11px]">4 Architecture Stages</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 my-auto">
                      {activeProject.architectureSteps?.map((s) => (
                        <div
                          key={s.step}
                          className="p-3 rounded-2xl bg-zinc-900/70 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] flex flex-col justify-between min-h-[92px]"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[10px] text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                              STAGE {s.step}
                            </span>
                            <span className="font-mono text-[11px] text-zinc-300 font-semibold truncate ml-2">
                              {s.tech}
                            </span>
                          </div>
                          <div>
                            <div className="text-xs font-sans font-bold text-zinc-100">{s.name}</div>
                            <div className="text-[11px] font-sans text-zinc-400 mt-0.5 leading-snug line-clamp-2">
                              {s.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">Data Consistency: ACID + Event-Driven Queues</span>
                      </div>
                      <span className="text-emerald-400 font-bold shrink-0 ml-2">Active</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: API Contract / Schema Spec (100% Honest, No Fake Requests) */}
                {activeTab === "contract" && activeProject.mockApi && (
                  <div className="flex flex-col h-full animate-in fade-in duration-200">
                    {/* Contract Header Bar */}
                    <div className="flex items-center justify-between p-2.5 rounded-t-2xl bg-zinc-950 border border-zinc-800 text-xs font-mono shrink-0">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                          {activeProject.mockApi.method}
                        </span>
                        <span className="text-zinc-200 truncate text-[11px] font-semibold">
                          {activeProject.mockApi.endpoint}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopyJson(activeProject.id, activeProject.mockApi?.response)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 hover:border-sky-500/40 text-zinc-300 hover:text-white transition-all cursor-pointer text-[11px]"
                        >
                          {copiedId === activeProject.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-sky-400" />
                              <span>Copy Schema</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* JSON Display Area - Locked height scrolling */}
                    <div className="p-3 rounded-b-2xl bg-zinc-950/90 border-x border-b border-zinc-800 flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed text-zinc-300">
                      <div className="flex items-center gap-3 pb-2 mb-2 border-b border-zinc-850 text-[10px] text-zinc-500">
                        <span className="text-emerald-400 font-bold">
                          HTTP {activeProject.mockApi.status} OK
                        </span>
                        <span>•</span>
                        <span className="text-cyan-400">OpenAPI 3.1 DTO</span>
                        <span>•</span>
                        <span>Content-Type: application/json</span>
                      </div>
                      <pre className="text-sky-300 whitespace-pre-wrap break-all">
                        {JSON.stringify(activeProject.mockApi.response, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Action CTA buttons - Exact Hero & Linear Capsule Button Styling */}
              <div className="flex items-center gap-3.5 pt-3.5 border-t border-zinc-800/80 shrink-0">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/code inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard border-white/[0.1] text-zinc-200 hover:text-white text-sm font-sans font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
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
                    className="group/demo inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard !border-sky-500/40 hover:!border-sky-400/70 text-sm font-sans font-medium backdrop-blur-md hover:-translate-y-0.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_24px_-6px_rgba(56,189,248,0.25)] active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 group-hover/demo:brightness-110 transition-all duration-200">
                      Live Preview
                    </span>
                    <Globe className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:rotate-12 shrink-0" />
                    <ArrowUpRight className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 shrink-0" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mobile Interface - Modern Dribbble Feed (100% Zero-Jump Locked Viewport + Hero Capsule Buttons) */}
        <div className="flex lg:hidden flex-col">
          {/* Direct, Modern Section Indicator Pill */}
          <div className="flex items-center justify-center mb-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-xs font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] shrink-0" />
              <span className="font-semibold tracking-wider uppercase text-[11px] text-zinc-100">Projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] shrink-0" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS.map((project, idx) => {
            const systemConfig = getProjectSystemConfig(project.id);
            const currentMobileTab = mobileTabs[project.id] ?? "specs";

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel p-5 relative overflow-hidden flex flex-col gap-3.5 border border-white/[0.09] shadow-2xl"
              >
                {/* Ambient Subtle Accent Glow in card corner */}
                <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl ${systemConfig.glowGradient} blur-3xl pointer-events-none -z-10`} />

                {/* Card Top Bar: Clean Category Capsule on Left + Numeric Index on Right */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                    <span className={`w-1.5 h-1.5 rounded-full ${systemConfig.tagDot}`} />
                    <span className="text-[10px] font-mono font-medium text-zinc-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </span>

                  <span
                    className={`font-mono text-xs font-bold tabular-nums tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-900/80 border border-white/[0.06] ${getProjectIndexColor(
                      idx,
                      true
                    )}`}
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title & 2-Sentence Concise Description */}
                <div>
                  <h3 className="text-base font-bold text-zinc-100 tracking-tight font-sans leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Inline 3-Way Switcher inside the card - Rounded Pill Capsule */}
                <div className="inline-flex p-1 rounded-full bg-zinc-950/80 border border-white/[0.08] shadow-inner text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setMobileTabs((prev) => ({ ...prev, [project.id]: "specs" }))}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full text-center transition-colors duration-150 [-webkit-tap-highlight-color:transparent] cursor-pointer ${
                      currentMobileTab === "specs"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Specs</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileTabs((prev) => ({ ...prev, [project.id]: "flow" }))}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full text-center transition-colors duration-150 [-webkit-tap-highlight-color:transparent] cursor-pointer ${
                      currentMobileTab === "flow"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Flow</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileTabs((prev) => ({ ...prev, [project.id]: "contract" }))}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full text-center transition-colors duration-150 [-webkit-tap-highlight-color:transparent] cursor-pointer ${
                      currentMobileTab === "contract"
                        ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm border border-zinc-700/60"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Contract</span>
                  </button>
                </div>

                {/* STRICTLY LOCKED HEIGHT ZONE (h-[195px]) - Zero Card Jump When Switching Tabs */}
                <div className="h-[195px] overflow-hidden flex flex-col justify-between">
                  {/* Mode 1: Specs - Ultra-Clean Spec Matrix */}
                  {currentMobileTab === "specs" && project.specs && (
                    <div className="flex flex-col justify-between h-full py-0.5">
                      <div className="flex flex-col gap-1.5 my-auto">
                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] text-xs">
                          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
                            <Code2 className="w-3.5 h-3.5 text-sky-400" />
                            <span className="text-[10px] font-sans font-medium text-zinc-400">Architecture</span>
                          </div>
                          <span className="text-[11px] text-zinc-200 font-mono font-medium truncate ml-2 text-right">
                            {project.specs.architecture}
                          </span>
                        </div>

                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] text-xs">
                          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
                            <Database className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-[10px] font-sans font-medium text-zinc-400">Storage</span>
                          </div>
                          <span className="text-[11px] text-zinc-200 font-mono font-medium truncate ml-2 text-right">
                            {project.specs.database}
                          </span>
                        </div>

                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] text-xs">
                          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
                            <Zap className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-[10px] font-sans font-medium text-zinc-400">Throughput</span>
                          </div>
                          <span className="text-[11px] text-zinc-200 font-mono font-medium truncate ml-2 text-right">
                            {project.specs.performance || "High Throughput"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] text-xs">
                          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                            <span className="text-[10px] font-sans font-medium text-zinc-400">Security</span>
                          </div>
                          <span className="text-[11px] text-zinc-200 font-mono font-medium truncate ml-2 text-right">
                            {project.specs.security || "Zero-Trust"}
                          </span>
                        </div>
                      </div>

                      {/* Clean Single Row of Badges - Zero Truncation Bug */}
                      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] text-[10px] font-mono text-zinc-200 shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${systemConfig.tagDot} shrink-0`} />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mode 2: Flow (Concise 4-Stage Architecture Pipeline - Zero Text Wrapping) */}
                  {currentMobileTab === "flow" && (
                    <div className="flex flex-col justify-between h-full py-0.5">
                      {project.architectureSteps?.map((s) => (
                        <div
                          key={s.step}
                          className="flex items-center justify-between px-3 py-2 rounded-2xl bg-zinc-900/70 border border-white/[0.07] text-xs font-mono shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-[9px] text-cyan-400 font-bold px-1.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                              0{s.step}
                            </span>
                            <span className="text-zinc-200 font-sans font-semibold text-xs truncate">
                              {s.name}
                            </span>
                          </div>
                          <span className="text-[11px] text-zinc-400 font-mono truncate ml-2 font-medium">
                            {s.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mode 3: API Contract (100% Authentic DTO Spec) */}
                  {currentMobileTab === "contract" && project.mockApi && (
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between p-2 rounded-t-2xl bg-zinc-950 border border-zinc-800 text-[10px] font-mono shrink-0">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="px-1.5 py-0.5 rounded font-bold text-[9px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                            {project.mockApi.method}
                          </span>
                          <span className="text-zinc-300 truncate text-[10px]">
                            {project.mockApi.endpoint}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 ml-1">
                          <button
                            type="button"
                            onClick={() => handleCopyJson(project.id, project.mockApi?.response)}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-[10px]"
                          >
                            {copiedId === project.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-sky-400" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-b-2xl bg-zinc-950/90 border-x border-b border-zinc-800 flex-1 overflow-y-auto font-mono text-[10px] leading-relaxed text-sky-300">
                        <div className="flex items-center gap-2 pb-1 mb-1 border-b border-zinc-850 text-[9px] text-zinc-500">
                          <span className="text-emerald-400 font-semibold">HTTP 200 OK</span>
                          <span>•</span>
                          <span className="text-cyan-400">OpenAPI 3.1 DTO</span>
                        </div>
                        <pre className="whitespace-pre-wrap break-all">
                          {JSON.stringify(project.mockApi.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card Actions: Hero-Matching Capsule Duo */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-zinc-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full glass-subcard border-white/[0.1] text-zinc-200 hover:text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] active:scale-95 transition-all text-xs font-sans font-medium"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] hover:border-sky-500/60 active:scale-95 transition-all text-xs font-sans font-medium backdrop-blur-md cursor-pointer group"
                    >
                      <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                        Live Preview
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
};
