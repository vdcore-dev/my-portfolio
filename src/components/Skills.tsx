import { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Server, Database, Layout, Terminal, Layers, Cloud, Bot, Star } from "lucide-react";
import type { SkillCategory, SkillItem } from "../types";

export const Skills = () => {
  const defaultId = SKILL_CATEGORIES[0]?.id ?? "backend";
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultId);

  const activeCategory: SkillCategory =
    SKILL_CATEGORIES.find((c) => (c.id ?? c.category) === activeCategoryId) ||
    SKILL_CATEGORIES[0];

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

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
      className="w-full flex flex-col min-h-svh lg:min-h-dvh pt-24 pb-16 mb-16 lg:mb-0 lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-0 touch-pan-y"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-5 lg:pb-4 lg:mb-10 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-sky-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Technical Stack
            </h2>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-zinc-400 ml-1">
              {totalSkillsCount} Tools & Competencies
            </span>
          </div>
        </div>

        {/* 1. Desktop Interface */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Sidebar category navigation buttons */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`selector-item w-full text-left px-4 py-3.5 rounded-2xl border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "selector-item-active text-white"
                      : "selector-item-inactive text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-3">
                    {getCategoryIcon(cat.id, "w-5 h-5")}

                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors ${
                          isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
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
                          ? "w-2 h-2 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
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
            <div
              key={activeCategoryId}
              className="rounded-3xl glass-panel p-6 sm:p-7 relative flex flex-col justify-between h-[445px] animate-panel-switch"
            >
              <div>
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80 mb-3.5">
                  <div className="flex items-center gap-3 min-w-0">
                    {getCategoryIcon(activeCategory.id, "w-5 h-5")}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans truncate">
                      {activeCategory.category}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[10px] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
                    {activeCategory.skills.length} Technologies
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
                        ? "bg-gradient-to-b from-sky-500/[0.08] to-zinc-900/90 border-sky-500/35 hover:border-sky-400/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_20px_-6px_rgba(14,165,233,0.15)]"
                        : "glass-subcard"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white flex items-center gap-2 truncate font-sans">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            skill.highlight
                              ? "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.95)]"
                              : "bg-sky-400/75 shadow-[0_0_5px_rgba(56,189,248,0.6)]"
                          }`}
                        />
                        <span className="truncate">{skill.name}</span>
                      </span>
                      {skill.highlight && (
                        <Star className="w-3.5 h-3.5 text-sky-400 fill-sky-400/35 shrink-0 ml-1" />
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-snug line-clamp-2">
                      {skill.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILE INTERFACE */}
        <div className="block lg:hidden">
          <div 
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-2.5 overflow-x-auto pb-2.5 mb-3.5 [&::-webkit-scrollbar]:hidden -mx-4 px-4 overscroll-x-contain"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`h-10 px-3.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-150 border cursor-pointer flex items-center gap-2 select-none shrink-0 ${
                    isSelected
                      ? "selector-item-active text-white font-medium"
                      : "selector-item-inactive text-zinc-400 active:text-zinc-200"
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>

          <div
            key={activeCategoryId}
            className="rounded-3xl glass-panel p-5 sm:p-6 animate-panel-switch"
          >
            <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5 min-w-0">
                {getCategoryIcon(activeCategory.id, "w-4 h-4")}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans truncate">
                  {activeCategory.category}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-300 font-mono px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_5px_rgba(56,189,248,0.85)]" />
                {activeCategory.skills.length} Tech
              </span>
            </div>

            {activeCategory.tagline && (
              <p className="text-zinc-300 text-xs font-sans leading-relaxed mb-3.5 line-clamp-2">
                {activeCategory.tagline}
              </p>
            )}

            <div className="grid grid-cols-2 gap-2.5">
              {activeCategory.skills.map((skill: SkillItem) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-2xl border flex flex-col justify-between min-h-[82px] transition-all ${
                    skill.highlight
                      ? "bg-gradient-to-b from-sky-500/[0.08] to-zinc-900/90 border-sky-500/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      : "glass-subcard"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-sans text-xs font-bold text-white truncate flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          skill.highlight
                            ? "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]"
                            : "bg-sky-400/75 shadow-[0_0_4px_rgba(56,189,248,0.6)]"
                        }`}
                      />
                      <span className="truncate">{skill.name}</span>
                    </span>
                    {skill.highlight && (
                      <Star className="w-3 h-3 text-sky-400 fill-sky-400/35 shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-zinc-400 font-sans leading-relaxed line-clamp-2">
                    {skill.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};