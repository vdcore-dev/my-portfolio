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
      className="w-full flex flex-col pt-20 pb-16 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative scroll-mt-6 lg:scroll-mt-0 touch-pan-y"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* HEADER: Minimalistički i oštar */}
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

        {/* 1. DESKTOP INTERFACE */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Sidebar lista tastera - Čiste raznobojne ikonice bez okvira */}
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

          {/* Desni glavni Show Box */}
          <div className="col-span-7">
            <div
              key={activeCategoryId}
              className="rounded-3xl glass-panel glass-panel-hover p-7 relative flex flex-col h-[445px] animate-panel-switch"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
                  {getCategoryIcon(activeCategory.id)}
                  <span className="uppercase text-zinc-300 font-semibold">{activeCategory.category}</span>
                </div>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 font-mono text-[10px]">
                  {activeCategory.skills.length} Technologies
                </span>
              </div>

              {/* Tagline */}
              <div className="h-10 mb-5 flex items-center">
                <p className="text-zinc-300 text-sm font-sans leading-relaxed line-clamp-2">
                  {activeCategory.tagline || ""}
                </p>
              </div>

              {/* Grid 2x3 sa veštinama */}
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
                              ? "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]"
                              : "bg-zinc-600"
                          }`}
                        />
                        <span className="truncate">{skill.name}</span>
                      </span>
                      {skill.highlight && (
                        <span 
                          title="Core Skill"
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-400 text-[10px] font-mono shrink-0 ml-1"
                        >
                          <Star className="w-2.5 h-2.5 text-sky-400 fill-sky-400/30" />
                          <span>Core</span>
                        </span>
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
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                {getCategoryIcon(activeCategory.id)}
                <span className="font-bold text-white tracking-tight font-sans">{activeCategory.category}</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-800">
                {activeCategory.skills.length} Tech
              </span>
            </div>

            {activeCategory.tagline && (
              <p className="text-zinc-400 text-xs font-sans leading-relaxed mb-3.5 line-clamp-2">
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
                          skill.highlight ? "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" : "bg-zinc-600"
                        }`}
                      />
                      <span className="truncate">{skill.name}</span>
                    </span>
                    {skill.highlight && (
                      <Star className="w-3 h-3 text-sky-400 fill-sky-400/30 shrink-0" />
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