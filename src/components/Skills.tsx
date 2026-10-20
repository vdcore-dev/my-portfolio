import { useState, useRef } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Server, Database, Layout, Terminal, Cloud, Bot, Star, ChevronDown, Layers } from "lucide-react";
import type { SkillCategory, SkillItem } from "../types";

export const Skills = () => {
  const defaultId = SKILL_CATEGORIES[0]?.id ?? "backend";
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultId);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const mobileSkillRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeCategory: SkillCategory =
    SKILL_CATEGORIES.find((c) => (c.id ?? c.category) === activeCategoryId) ||
    SKILL_CATEGORIES[0];

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const toggleMobileCategory = (id: string) => {
    const willExpand = expandedMobileCategory !== id;
    setExpandedMobileCategory(willExpand ? id : null);

    if (willExpand) {
      setTimeout(() => {
        const cardEl = mobileSkillRefs.current[id];
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

  const getCategoryVisualConfig = (id?: string) => {
    switch (id) {
      case "backend":
        return {
          icon: Server,
          subLabel: "CORE",
          domainLabel: "DISTRIBUTED BACKEND",
          accentColor: "text-sky-400",
          badgeBorder: "border-sky-500/35",
          glowGradient: "from-sky-500/25 via-sky-500/5 to-transparent",
          tagDot: "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]",
          expandedCard: "!border-sky-500/60 shadow-[0_0_24px_rgba(56,189,248,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-sky-500/10 border-sky-500/40 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)]",
          highlightCard: "bg-gradient-to-b from-sky-500/[0.08] to-zinc-900/90 border-sky-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          highlightCardDesktop: "bg-gradient-to-b from-sky-500/[0.08] to-zinc-900/90 border-sky-500/35 hover:border-sky-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(14,165,233,0.18)]",
          activeSidebarBorder: "!border-sky-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(56,189,248,0.25)]",
          starColor: "text-sky-400 fill-sky-400/35",
          titleHover: "group-hover:text-sky-300",
        };
      case "devops":
        return {
          icon: Cloud,
          subLabel: "DEVOPS",
          domainLabel: "CLOUD INFRASTRUCTURE",
          accentColor: "text-cyan-400",
          badgeBorder: "border-cyan-500/35",
          glowGradient: "from-cyan-500/25 via-cyan-500/5 to-transparent",
          tagDot: "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]",
          expandedCard: "!border-cyan-500/60 shadow-[0_0_24px_rgba(34,211,238,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.2)]",
          highlightCard: "bg-gradient-to-b from-cyan-500/[0.08] to-zinc-900/90 border-cyan-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          highlightCardDesktop: "bg-gradient-to-b from-cyan-500/[0.08] to-zinc-900/90 border-cyan-500/35 hover:border-cyan-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(34,211,238,0.18)]",
          activeSidebarBorder: "!border-cyan-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(34,211,238,0.25)]",
          starColor: "text-cyan-400 fill-cyan-400/35",
          titleHover: "group-hover:text-cyan-300",
        };
      case "data":
        return {
          icon: Database,
          subLabel: "DATA",
          domainLabel: "PERSISTENCE & STATE",
          accentColor: "text-indigo-400",
          badgeBorder: "border-indigo-500/35",
          glowGradient: "from-indigo-500/25 via-indigo-500/5 to-transparent",
          tagDot: "bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]",
          expandedCard: "!border-indigo-500/60 shadow-[0_0_24px_rgba(129,140,248,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.2)]",
          highlightCard: "bg-gradient-to-b from-indigo-500/[0.08] to-zinc-900/90 border-indigo-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          highlightCardDesktop: "bg-gradient-to-b from-indigo-500/[0.08] to-zinc-900/90 border-indigo-500/35 hover:border-indigo-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(129,140,248,0.18)]",
          activeSidebarBorder: "!border-indigo-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(129,140,248,0.25)]",
          starColor: "text-indigo-400 fill-indigo-400/35",
          titleHover: "group-hover:text-indigo-300",
        };
      case "ai":
        return {
          icon: Bot,
          subLabel: "AI / LLM",
          domainLabel: "INTELLIGENT PIPELINES",
          accentColor: "text-violet-400",
          badgeBorder: "border-violet-500/35",
          glowGradient: "from-violet-500/25 via-violet-500/5 to-transparent",
          tagDot: "bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]",
          expandedCard: "!border-violet-500/60 shadow-[0_0_24px_rgba(167,139,250,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-violet-500/10 border-violet-500/40 text-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.2)]",
          highlightCard: "bg-gradient-to-b from-violet-500/[0.08] to-zinc-900/90 border-violet-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          highlightCardDesktop: "bg-gradient-to-b from-violet-500/[0.08] to-zinc-900/90 border-violet-500/35 hover:border-violet-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(167,139,250,0.18)]",
          activeSidebarBorder: "!border-violet-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(167,139,250,0.25)]",
          starColor: "text-violet-400 fill-violet-400/35",
          titleHover: "group-hover:text-violet-300",
        };
      case "frontend":
      default:
        return {
          icon: Layout,
          subLabel: "CLIENT",
          domainLabel: "MODERN WEB & UI",
          accentColor: "text-blue-400",
          badgeBorder: "border-blue-500/35",
          glowGradient: "from-blue-500/25 via-blue-500/5 to-transparent",
          tagDot: "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]",
          expandedCard: "!border-blue-500/60 shadow-[0_0_24px_rgba(96,165,250,0.18),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          closeBtn: "bg-blue-500/10 border-blue-500/40 text-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.2)]",
          highlightCard: "bg-gradient-to-b from-blue-500/[0.08] to-zinc-900/90 border-blue-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          highlightCardDesktop: "bg-gradient-to-b from-blue-500/[0.08] to-zinc-900/90 border-blue-500/35 hover:border-blue-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(96,165,250,0.18)]",
          activeSidebarBorder: "!border-blue-500/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-6px_rgba(96,165,250,0.25)]",
          starColor: "text-blue-400 fill-blue-400/35",
          titleHover: "group-hover:text-blue-300",
        };
    }
  };

  const getCategoryIcon = (id?: string, sizeClass = "w-4 h-4") => {
    switch (id) {
      case "backend":
        return <Server className={`${sizeClass} text-sky-400 shrink-0`} />;
      case "devops":
        return <Cloud className={`${sizeClass} text-cyan-400 shrink-0`} />;
      case "data":
        return <Database className={`${sizeClass} text-indigo-400 shrink-0`} />;
      case "ai":
        return <Bot className={`${sizeClass} text-violet-400 shrink-0`} />;
      case "frontend":
        return <Layout className={`${sizeClass} text-blue-400 shrink-0`} />;
      default:
        return <Terminal className={`${sizeClass} text-sky-400 shrink-0`} />;
    }
  };

  return (
    <section 
      id="skills" 
      className="w-full flex flex-col pt-[116px] pb-10 lg:py-0 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-0 touch-pan-y"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Modern Capsule Header */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.1] text-xs font-mono text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
            <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-200">Technical Stack</span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-zinc-400">
            {totalSkillsCount} Tools & Competencies
          </span>
        </div>

        {/* 1. Desktop Interface */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Sidebar category navigation buttons */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;
              const catVisualConfig = getCategoryVisualConfig(cat.id);

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`selector-item w-full text-left px-4 py-3.5 rounded-2xl border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? `selector-item-active ${catVisualConfig.activeSidebarBorder} text-white`
                      : "selector-item-inactive text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-3">
                    {getCategoryIcon(cat.id, "w-5 h-5")}

                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors ${
                          isSelected ? "text-zinc-100" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {cat.category}
                      </h3>
                      <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-mono">
                        {cat.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shrink-0 pl-1">
                    <span
                      className={`rounded-full transition-all duration-200 ${
                        isSelected
                          ? `w-2 h-2 ${catVisualConfig.tagDot}`
                          : "w-1.5 h-1.5 bg-zinc-800 group-hover:bg-zinc-600"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category showcase display card */}
          <div className="col-span-7">
            {(() => {
              const activeVisualConfig = getCategoryVisualConfig(activeCategory.id);
              return (
                <div
                  key={activeCategoryId}
                  className="rounded-3xl glass-panel p-6 sm:p-7 relative flex flex-col justify-between h-[445px] animate-panel-switch"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80 mb-3.5">
                      <div className="flex items-center gap-3 min-w-0">
                        {getCategoryIcon(activeCategory.id, "w-5 h-5")}
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight font-sans truncate">
                          {activeCategory.category}
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 font-mono text-[11px] shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                        <span className={`w-1.5 h-1.5 rounded-full ${activeVisualConfig.tagDot}`} />
                        <Layers className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{String(activeCategory.skills.length).padStart(2, "0")} Tech</span>
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-zinc-300 text-sm font-sans leading-relaxed mb-4 line-clamp-2">
                      {activeCategory.tagline || ""}
                    </p>
                  </div>

                  {/* 2x3 skills grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    {activeCategory.skills.map((skill: SkillItem) => (
                      <div
                        key={skill.name}
                        className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between h-[84px] ${
                          skill.highlight
                            ? activeVisualConfig.highlightCardDesktop
                            : "glass-subcard"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-zinc-100 flex items-center gap-2 truncate font-sans">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                skill.highlight
                                  ? activeVisualConfig.tagDot
                                  : "bg-zinc-700"
                              }`}
                            />
                            <span className="truncate">{skill.name}</span>
                          </span>
                          {skill.highlight && (
                            <Star className={`w-3.5 h-3.5 ${activeVisualConfig.starColor} shrink-0 ml-1`} />
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-snug line-clamp-2">
                          {skill.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* 2. Mobile Interface - Ultra-Modern 2026 Technical Stack Capsules List */}
        <div className="flex lg:hidden flex-col gap-3.5">
          {SKILL_CATEGORIES.map((cat) => {
            const catKey = cat.id ?? cat.category;
            const isExpanded = expandedMobileCategory === catKey;
            const visualConfig = getCategoryVisualConfig(cat.id);
            const CategoryIcon = visualConfig.icon;

            return (
              <div
                key={catKey}
                ref={(el) => {
                  mobileSkillRefs.current[catKey] = el;
                }}
                className={`rounded-3xl transition-all duration-300 overflow-hidden glass-panel p-4 ${
                  isExpanded
                    ? visualConfig.expandedCard
                    : "hover:border-white/20"
                }`}
              >
                {/* Mini Capsule Row (Tappable header) */}
                <div
                  onClick={() => toggleMobileCategory(catKey)}
                  className="flex items-start gap-3.5 cursor-pointer select-none group"
                >
                  {/* Left: Radiant Category Hardware/System Badge */}
                  <div className={`relative w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] rounded-2xl overflow-hidden shrink-0 border ${visualConfig.badgeBorder} bg-zinc-950 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${visualConfig.glowGradient}`} />
                    <CategoryIcon className={`w-7 h-7 ${visualConfig.accentColor} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    <span className="relative z-10 text-[8px] font-mono font-bold tracking-wider text-zinc-400 mt-1 uppercase">
                      {visualConfig.subLabel}
                    </span>
                  </div>

                  {/* Right: Full-width Title & Info + Bottom Actions Bar */}
                  <div className="flex-1 min-w-0">
                    {/* Domain Category Eyebrow Capsule */}
                    <div className="flex items-center mb-1.5">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                        <span className={`w-1 h-1 rounded-full ${visualConfig.tagDot}`} />
                        <span className="text-[9px] font-mono font-medium text-zinc-300 uppercase tracking-wider">
                          {visualConfig.domainLabel}
                        </span>
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className={`text-sm sm:text-base font-bold text-zinc-100 tracking-tight leading-snug ${visualConfig.titleHover} transition-colors`}>
                      {cat.category}
                    </h3>

                    {/* Top Core Technologies Preview */}
                    <div className="mt-1.5 font-mono text-[11px] text-zinc-400 leading-snug">
                      <span>
                        {(cat.previewTech ?? cat.skills.slice(0, 2).map((s) => s.name)).join(" • ")}
                      </span>
                    </div>

                    {/* Actions Bar Below Title: Tool count pill & Modern Expand Toggle */}
                    <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-zinc-800/60">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium shadow-inner">
                        <Layers className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{String(cat.skills.length).padStart(2, "0")} Tech</span>
                      </span>

                      {/* 2026 Expand / Stack Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileCategory(catKey);
                        }}
                        className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                          isExpanded
                            ? visualConfig.closeBtn
                            : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        <span>{isExpanded ? "Close" : "Stack"}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : visualConfig.accentColor
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded State: 2-Column Grid of Skills with Highlighting */}
                {isExpanded && (
                  <div className="pt-3.5 mt-3.5 border-t border-zinc-800/80 animate-in fade-in zoom-in-95 duration-200">
                    {cat.tagline && (
                      <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans mb-3.5">
                        {cat.tagline}
                      </p>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      {cat.skills.map((skill: SkillItem) => (
                        <div
                          key={skill.name}
                          className={`p-2.5 rounded-xl border flex flex-col justify-between min-h-[74px] transition-all ${
                            skill.highlight
                              ? visualConfig.highlightCard
                              : "bg-zinc-900/60 border-zinc-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-sans text-xs font-bold text-zinc-100 truncate">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <Star className={`w-3 h-3 ${visualConfig.starColor} shrink-0`} />
                            )}
                          </div>
                          <p className="text-[10px] text-zinc-400 font-sans leading-relaxed line-clamp-2">
                            {skill.role}
                          </p>
                        </div>
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