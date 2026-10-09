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

  const getCategoryIcon = (id?: string) => {
    switch (id) {
      case "backend":
        return <Server className="w-4 h-4 text-emerald-400 shrink-0" />;
      case "devops":
        return <Cloud className="w-4 h-4 text-sky-400 shrink-0" />;
      case "data":
        return <Database className="w-4 h-4 text-indigo-400 shrink-0" />;
      case "ai":
        return <Bot className="w-4 h-4 text-teal-400 shrink-0" />;
      case "frontend":
        return <Layout className="w-4 h-4 text-violet-400 shrink-0" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="w-full flex flex-col pt-24 pb-20 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative border-t border-zinc-950 lg:border-zinc-900/80 scroll-mt-6 lg:scroll-mt-0 touch-pan-y"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        
        {/* HEADER: Minimalistički i oštar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-8 lg:mb-10 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Technical Stack
            </h2>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 ml-1">
              {totalSkillsCount} Tools & Competencies
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="text-zinc-600">//</span>
            <span>Production-Ready Architecture</span>
          </div>
        </div>

        {/* 1. DESKTOP INTERFACE */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          {/* Sidebar lista tastera: Čist selektor bez strelica-viškova */}
          <div className="col-span-5 flex flex-col gap-2">
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700 text-white shadow-xl shadow-black/50 ring-1 ring-emerald-500/20"
                      : "bg-zinc-950/40 border-zinc-800/60 hover:bg-zinc-900/40 hover:border-zinc-700/60 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                      {getCategoryIcon(cat.id)}
                    </div>

                    <div className="truncate">
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

                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      isSelected ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Desni glavni Show Box: Stabilna fiksna visina h-[445px] */}
          <div className="col-span-7">
            <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/90 backdrop-blur-xl p-7 shadow-2xl relative flex flex-col h-[445px]">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
                  {getCategoryIcon(activeCategory.id)}
                  <span className="uppercase text-zinc-300">{activeCategory.category}</span>
                </div>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[10px]">
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
                    className={`p-3.5 rounded-2xl border transition-all duration-150 flex flex-col justify-between h-[84px] ${
                      skill.highlight
                        ? "bg-zinc-900/85 border-emerald-500/30 hover:border-emerald-500/50 shadow-sm shadow-emerald-500/5"
                        : "bg-zinc-900/50 border-zinc-800/70 hover:border-zinc-700/90"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5 truncate">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span 
                          title="Core Skill"
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-sans shrink-0 ml-1"
                        >
                          <Star className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400/30" />
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
            className="flex gap-2.5 overflow-x-auto pb-3 mb-4 [&::-webkit-scrollbar]:hidden -mx-4 px-4 overscroll-x-contain"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`h-10 px-3.5 rounded-xl text-xs font-mono whitespace-nowrap transition-colors duration-150 border cursor-pointer flex items-center gap-2 select-none shrink-0 ${
                    isSelected
                      ? "bg-zinc-900 border-emerald-500/50 text-white font-medium shadow-md shadow-black/40 ring-1 ring-emerald-500/30"
                      : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 active:bg-zinc-900 active:text-zinc-200"
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl p-5.5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                {getCategoryIcon(activeCategory.id)}
                <span className="font-bold text-white tracking-tight">{activeCategory.category}</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                {activeCategory.skills.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {activeCategory.skills.map((skill: SkillItem) => (
                <div
                  key={skill.name}
                  className={`p-3.5 rounded-2xl border flex flex-col justify-between min-h-[82px] transition-all ${
                    skill.highlight
                      ? "bg-zinc-900/80 border-emerald-500/30 shadow-sm shadow-emerald-500/5"
                      : "bg-zinc-900/50 border-zinc-800/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono text-xs font-bold text-white truncate">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <Star className="w-3 h-3 text-emerald-400 fill-emerald-400/30 shrink-0" />
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