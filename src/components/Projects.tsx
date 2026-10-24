import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import {
  FaJava,
  FaLayerGroup,
  FaDiagramProject,
  FaCode,
  FaShieldHalved,
  FaDatabase,
  FaBolt,
  FaEarthAmericas,
  FaCopy,
  FaCheck,
  FaChartLine,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiReact,
  SiTypescript,
  SiApachekafka,
  SiRabbitmq,
  SiTailwindcss,
  SiNginx,
  SiLinux,
  SiOpenapiinitiative,
} from "react-icons/si";
import type { Project } from "../types";
import { ScrollReveal } from "./ScrollReveal";

const getTechIcon = (tag: string) => {
  const lower = tag.toLowerCase().trim();
  if (lower.includes("java") && !lower.includes("script")) return { icon: FaJava, color: "#ED8B00" };
  if (lower.includes("spring")) return { icon: SiSpringboot, color: "#6DB33F" };
  if (lower.includes("postgres")) return { icon: SiPostgresql, color: "#4169E1" };
  if (lower.includes("redis")) return { icon: SiRedis, color: "#DC382D" };
  if (lower.includes("docker")) return { icon: SiDocker, color: "#2496ED" };
  if (lower.includes("react")) return { icon: SiReact, color: "#61DAFB" };
  if (lower.includes("type")) return { icon: SiTypescript, color: "#3178C6" };
  if (lower.includes("kafka")) return { icon: SiApachekafka, color: "#E05243" };
  if (lower.includes("rabbit")) return { icon: SiRabbitmq, color: "#FF6600" };
  if (lower.includes("tailwind")) return { icon: SiTailwindcss, color: "#38BDF8" };
  if (lower.includes("nginx")) return { icon: SiNginx, color: "#009639" };
  if (lower.includes("linux")) return { icon: SiLinux, color: "#FCC624" };
  return { icon: FaCode, color: "#38BDF8" };
};

const highlightJson = (json: unknown): string => {
  const str = typeof json !== "string" ? JSON.stringify(json, null, 2) : json;
  return str.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls: string;
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "text-zinc-400";
        } else {
          cls = "text-emerald-400";
        }
      } else if (/true|false/.test(match)) {
        cls = "text-indigo-400";
      } else if (/null/.test(match)) {
        cls = "text-zinc-500";
      } else {
        cls = "text-amber-400";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
};

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "saas-billing");
  const [activeTab, setActiveTab] = useState<"specs" | "flow" | "contract">("specs");
  const [mobileCardTab, setMobileCardTab] = useState<Record<string, "stack" | "architecture" | "json">>({});
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
      className="w-full flex flex-col pt-12 sm:pt-16 pb-16 lg:pb-24 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* ========================================================
            ARCHITECTURAL PROJECTS HEADER
            - Mobile: Centered capsule with flanking gradient wings
            - Desktop: Left-anchored blueprint style (Space-efficient, no wasted vertical push)
            ======================================================== */}
        <ScrollReveal direction="up">
          {/* Mobile Header: Centered (Untouched) */}
          <div className="w-full flex lg:hidden items-center justify-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-xl px-2">
              <div 
                className="flex-1 h-px bg-gradient-to-l from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                  PROJECTS
                </span>
                <span className="w-px h-3.5 bg-zinc-800" aria-hidden="true" />
                <span className="inline-flex items-center justify-center min-w-[24px] h-[19px] px-1.5 rounded-[5px] bg-sky-500/10 border border-sky-500/25 text-sky-400 font-mono text-[10px] font-bold tabular-nums shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
                </span>
              </div>
              <div 
                className="flex-1 h-px bg-gradient-to-r from-sky-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Desktop Header: Left-aligned blueprint style */}
          <div className="hidden lg:flex items-center gap-4 mb-6 w-full">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                PROJECTS
              </span>
              <span className="w-px h-3.5 bg-zinc-800" aria-hidden="true" />
              <span className="inline-flex items-center justify-center min-w-[24px] h-[19px] px-1.5 rounded-[5px] bg-sky-500/10 border border-sky-500/25 text-sky-400 font-mono text-[10px] font-bold tabular-nums shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
              </span>
            </div>
            <div 
              className="flex-1 h-px bg-gradient-to-r from-sky-400/50 via-zinc-700/40 to-transparent" 
              aria-hidden="true" 
            />
          </div>
        </ScrollReveal>

        {/* Desktop Interface */}
        <div className="hidden lg:block">
          {/* 1. Desktop Interface (Locked Height h-[490px] for 100% Zero Layout Shift) */}
          <ScrollReveal direction="up" delayMs={100}>
            <div className="grid grid-cols-12 gap-7 items-start">
          {/* Left system list with color-accented index digits */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {PROJECTS.map((project, idx) => {
              const isSelected = project.id === activeProject.id;
              const projectConfig = getProjectSystemConfig(project.id);
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer backdrop-blur-xl ${
                    isSelected
                      ? `bg-zinc-900/80 ${projectConfig.activeSidebarBorder} text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)]`
                      : "bg-zinc-950/40 border-white/[0.07] text-zinc-400 hover:bg-zinc-900/50 hover:border-white/[0.12] hover:text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
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

          {/* Right detail showcase card - Pure Apple Dark Frosted Glass */}
          <div className="col-span-7">
            <div
              key={activeProject.id}
              className="rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.12] p-6 sm:p-7 relative flex flex-col justify-between h-[490px] animate-panel-switch overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_16px_40px_-10px_rgba(0,0,0,0.6)]"
            >
              {/* Header Zone: Index + Title + Modern 3-Way Dark Glass Buttons */}
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

                {/* Modern Glass 3-Way Buttons: Pure Dark Frosted Glass with Glow Highlights */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-950/60 border border-white/[0.08] shadow-inner shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      activeTab === "specs"
                        ? "bg-zinc-900/90 text-white border border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(56,189,248,0.3)] font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                    }`}
                  >
                    <FaLayerGroup className={`w-3.5 h-3.5 shrink-0 transition-colors ${activeTab === "specs" ? "text-sky-400" : "text-zinc-500"}`} />
                    <span>Stack</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("flow")}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      activeTab === "flow"
                        ? "bg-zinc-900/90 text-white border border-cyan-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(34,211,238,0.3)] font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                    }`}
                  >
                    <FaDiagramProject className={`w-3.5 h-3.5 shrink-0 transition-colors ${activeTab === "flow" ? "text-cyan-400" : "text-zinc-500"}`} />
                    <span>Flow</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("contract")}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      activeTab === "contract"
                        ? "bg-zinc-900/90 text-white border border-emerald-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(52,211,153,0.3)] font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                    }`}
                  >
                    <SiOpenapiinitiative className={`w-3.5 h-3.5 shrink-0 transition-colors ${activeTab === "contract" ? "text-emerald-400" : "text-zinc-500"}`} />
                    <span>API JSON</span>
                  </button>
                </div>
              </div>

              {/* Locked Interior Content Zone (h-[340px]) */}
              <div className="h-[340px] flex flex-col justify-between pt-3 pb-1 overflow-hidden">
                {/* Tab 1: Specs Overview - High-Density Modern Spec Matrix with Colored React Tech Icons */}
                {activeTab === "specs" && (
                  <div className="flex flex-col justify-between h-full animate-in fade-in duration-200">
                    <p className="text-zinc-300 text-sm leading-relaxed font-sans line-clamp-2">
                      {activeProject.description}
                    </p>

                    {/* Spec Matrix List - Clean Rows, Modular & Expandable */}
                    <div className="flex flex-col gap-2 my-auto">
                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <FaCode className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>Architecture &amp; Pattern</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.architecture || "Clean Architecture"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <FaDatabase className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Persistence &amp; State</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.database || "PostgreSQL + Redis"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <FaBolt className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>Throughput &amp; SLA</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.performance || "High Throughput"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl glass-subcard text-xs">
                        <span className="text-zinc-400 font-sans font-medium flex items-center gap-2.5">
                          <FaShieldHalved className="w-4 h-4 text-violet-400 shrink-0" />
                          <span>Security &amp; Protocol</span>
                        </span>
                        <span className="text-zinc-100 font-mono text-xs font-semibold tracking-tight">
                          {activeProject.specs?.security || "Zero-Trust Security"}
                        </span>
                      </div>
                    </div>

                    {/* Authentic Colored React Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => {
                        const tech = getTechIcon(tag);
                        const IconComp = tech.icon;
                        return (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/70 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-zinc-200 font-mono text-xs font-medium hover:border-white/[0.15] transition-colors"
                          >
                            <IconComp className="w-3.5 h-3.5 shrink-0" style={{ color: tech.color }} />
                            <span>{tag}</span>
                          </span>
                        );
                      })}
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
                        <FaChartLine className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">Data Consistency: ACID + Event-Driven Queues</span>
                      </div>
                      <span className="text-emerald-400 font-bold shrink-0 ml-2">Active</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: API Contract / Schema Spec with Syntax-Colored JSON */}
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
                              <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <FaCopy className="w-3.5 h-3.5 text-sky-400" />
                              <span>Copy Schema</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* JSON Display Area with Syntax Highlighting */}
                    <div className="p-3.5 rounded-b-2xl bg-zinc-950/90 border-x border-b border-zinc-800 flex-1 overflow-y-auto font-mono text-xs leading-relaxed select-text scrollbar-thin">
                      <div className="flex items-center gap-3 pb-2 mb-2 border-b border-zinc-850 text-[10px] text-zinc-500 font-mono">
                        <span className="text-emerald-400 font-bold">
                          HTTP {activeProject.mockApi.status} OK
                        </span>
                        <span>•</span>
                        <span className="text-cyan-400">OpenAPI 3.1 DTO</span>
                        <span>•</span>
                        <span>Content-Type: application/json</span>
                      </div>
                      <pre
                        className="whitespace-pre-wrap break-all"
                        dangerouslySetInnerHTML={{ __html: highlightJson(activeProject.mockApi.response) }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action CTA buttons - Exact Hero & Linear Capsule Button Styling */}
              <div className="flex items-center gap-3.5 pt-3.5 border-t border-zinc-800/80 shrink-0">
                {activeProject.githubUrl && (
                  <button
                    type="button"
                    onClick={() => window.open(activeProject.githubUrl, "_blank", "noopener,noreferrer")}
                    className="group/code inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard border-white/[0.1] text-zinc-200 hover:text-white text-sm font-sans font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] cursor-pointer"
                  >
                    <FaGithub className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover/code:scale-110 group-hover/code:-translate-y-0.5" />
                    <span>Source Code</span>
                  </button>
                )}

                {activeProject.liveUrl && (
                  <button
                    type="button"
                    onClick={() => window.open(activeProject.liveUrl, "_blank", "noopener,noreferrer")}
                    className="group/demo inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full glass-subcard !border-sky-500/40 hover:!border-sky-400/70 text-sm font-sans font-medium backdrop-blur-md hover:-translate-y-0.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_24px_-6px_rgba(56,189,248,0.25)] active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 group-hover/demo:brightness-110 transition-all duration-200">
                      Live Preview
                    </span>
                    <FaEarthAmericas className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:rotate-12 shrink-0" />
                    <FaArrowUpRightFromSquare className="w-3.5 h-3.5 text-sky-400 transition-transform duration-200 group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

        {/* 2. Mobile Interface - Modern Compact Apple-Style Glass Cards */}
        <div className="flex lg:hidden flex-col">
          <div className="flex flex-col gap-5">
            {PROJECTS.map((project, idx) => {
              const currentTab = mobileCardTab[project.id] ?? "stack";

              return (
                <ScrollReveal key={project.id} direction="up" delayMs={idx * 60}>
                  <div className="relative rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.12] p-5 overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_16px_36px_-10px_rgba(0,0,0,0.6)] flex flex-col gap-4">
                    
                    {/* Title & Concise Description */}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight font-sans">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Modern Glass 3-Way Buttons: Pure Dark Frosted Glass with Glow Highlights */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setMobileCardTab((prev) => ({ ...prev, [project.id]: "stack" }))}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                          currentTab === "stack"
                            ? "bg-zinc-900/90 text-white border border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(56,189,248,0.3)] font-semibold"
                            : "bg-zinc-950/60 text-zinc-400 border border-white/[0.08] hover:text-zinc-200 hover:bg-zinc-900/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <FaLayerGroup className={`w-3.5 h-3.5 shrink-0 transition-colors ${currentTab === "stack" ? "text-sky-400" : "text-zinc-500"}`} />
                        <span>Stack</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMobileCardTab((prev) => ({ ...prev, [project.id]: "architecture" }))}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                          currentTab === "architecture"
                            ? "bg-zinc-900/90 text-white border border-cyan-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(34,211,238,0.3)] font-semibold"
                            : "bg-zinc-950/60 text-zinc-400 border border-white/[0.08] hover:text-zinc-200 hover:bg-zinc-900/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <FaDiagramProject className={`w-3.5 h-3.5 shrink-0 transition-colors ${currentTab === "architecture" ? "text-cyan-400" : "text-zinc-500"}`} />
                        <span>Flow</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMobileCardTab((prev) => ({ ...prev, [project.id]: "json" }))}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                          currentTab === "json"
                            ? "bg-zinc-900/90 text-white border border-emerald-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_14px_-3px_rgba(52,211,153,0.3)] font-semibold"
                            : "bg-zinc-950/60 text-zinc-400 border border-white/[0.08] hover:text-zinc-200 hover:bg-zinc-900/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <SiOpenapiinitiative className={`w-3.5 h-3.5 shrink-0 transition-colors ${currentTab === "json" ? "text-emerald-400" : "text-zinc-500"}`} />
                        <span>API JSON</span>
                      </button>
                    </div>

                    {/* Dynamic Content Area - Compact Fixed Height (h-[135px]) with Zero Layout Shift */}
                    <div className="h-[135px] overflow-hidden flex flex-col justify-between">
                      {currentTab === "stack" && (
                        <div className="flex flex-col justify-center h-full py-1">
                          {/* Tech Stack Badges with Authentic Colored React Icons */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => {
                              const tech = getTechIcon(tag);
                              const IconComp = tech.icon;
                              return (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-[11px] font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                                >
                                  <IconComp className="w-3.5 h-3.5 shrink-0" style={{ color: tech.color }} />
                                  <span>{tag}</span>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {currentTab === "architecture" && (
                        <div className="flex flex-col justify-between h-full py-0.5">
                          {project.architectureSteps?.map((s) => (
                            <div
                              key={s.step}
                              className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-zinc-950/70 border border-white/[0.06] text-xs font-mono shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-[9px] text-cyan-400 font-bold px-1.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                                  0{s.step}
                                </span>
                                <span className="text-zinc-200 font-sans font-medium text-[11px] truncate">
                                  {s.name}
                                </span>
                              </div>
                              <span className="text-[10px] text-zinc-400 font-mono truncate ml-2 font-medium">
                                {s.tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === "json" && project.mockApi && (
                        <div className="flex flex-col h-full rounded-2xl bg-zinc-950/90 border border-white/[0.1] overflow-hidden shadow-inner">
                          {/* Terminal Bar */}
                          <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900/90 border-b border-white/[0.08] text-[10px] font-mono shrink-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="px-1.5 py-0.5 rounded font-bold text-[9px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                                {project.mockApi.method}
                              </span>
                              <span className="text-zinc-300 truncate text-[10px] font-mono">
                                {project.mockApi.endpoint}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleCopyJson(project.id, project.mockApi?.response)}
                              aria-label="Copy API JSON response"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-950 border border-white/[0.1] text-zinc-300 hover:text-white text-[10px] active:scale-95 transition-all cursor-pointer [-webkit-tap-highlight-color:transparent] shrink-0 ml-1"
                            >
                              {copiedId === project.id ? (
                                <>
                                  <FaCheck className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400 font-semibold">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <FaCopy className="w-3 h-3 text-sky-400" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Syntax Highlighted JSON Code Box */}
                          <div className="p-2.5 flex-1 overflow-y-auto font-mono text-[10px] leading-relaxed select-text scrollbar-thin">
                            <pre
                              className="whitespace-pre-wrap break-all"
                              dangerouslySetInnerHTML={{ __html: highlightJson(project.mockApi.response) }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Original Capsule Button Duo: Source Code & Live Preview */}
                    <div className="flex items-center gap-3 pt-1">
                      {project.githubUrl && (
                        <button
                          type="button"
                          onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full glass-subcard border-white/[0.1] text-zinc-200 hover:text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] active:scale-95 transition-all text-xs font-sans font-medium cursor-pointer [-webkit-tap-highlight-color:transparent]"
                        >
                          <FaGithub className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>Source Code</span>
                        </button>
                      )}

                      {project.liveUrl && (
                        <button
                          type="button"
                          onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                          aria-label={`Open live preview for ${project.title}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full glass-subcard !border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(56,189,248,0.25)] hover:border-sky-500/60 active:scale-95 transition-all text-xs font-sans font-medium backdrop-blur-md cursor-pointer group [-webkit-tap-highlight-color:transparent]"
                        >
                          <span className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                            Live Preview
                          </span>
                          <FaArrowUpRightFromSquare className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      )}
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
