import { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Server, Database, Layout, ChevronRight, Terminal, Layers } from "lucide-react";
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
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "data-devops":
        return <Database className="w-4 h-4 text-sky-400" />;
      case "frontend":
        return <Layout className="w-4 h-4 text-indigo-400" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="w-full flex flex-col pt-24 pb-20 lg:min-h-dvh lg:justify-center lg:pt-32 lg:pb-24 relative border-t border-zinc-900/80 scroll-mt-6 lg:scroll-mt-0 touch-pan-y"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        
        {/* HEADER - Čist moderni Layers simbol umesto tačke */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Distributed Architecture & Ops</span>
          </div>
        </div>

        {/* 1. DESKTOP INTERFACE - NETAKNUT */}
        <div className="hidden lg:grid grid-cols-12 gap-7 items-start">
          
          {/* Skill Categories */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700 text-white shadow-xl shadow-black/50 ring-1 ring-emerald-500/20"
                      : "bg-zinc-950/40 border-zinc-800/70 hover:bg-zinc-900/50 hover:border-zinc-700/60 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-xs w-7 h-7 flex items-center justify-center rounded-lg transition-colors shrink-0 ${
                        isSelected
                          ? "bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30"
                          : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`text-sm font-semibold truncate transition-colors ${
                            isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                          }`}
                        >
                          {cat.category}
                        </h3>
                      </div>
                      <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-mono">
                        {cat.skills.length} core technologies
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

          {/* Skill Cards */}
          <div className="col-span-7">
            <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/90 backdrop-blur-xl p-7 shadow-2xl relative flex flex-col justify-between min-h-[460px]">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
                    {getCategoryIcon(activeCategory.id)}
                    <span className="uppercase">{activeCategory.category} SPECIFICATION</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                    Verified Competencies
                  </span>
                </div>

                {activeCategory.tagline && (
                  <p className="text-zinc-300 text-sm font-sans mb-6 leading-relaxed">
                    {activeCategory.tagline}
                  </p>
                )}

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  {activeCategory.skills.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700/90 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-medium">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-snug">
                        {skill.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-500">
                <span>Domain: {activeCategory.category}</span>
                <span className="text-emerald-400/90 font-medium">Production Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILE INTERFACE */}
        <div className="block lg:hidden">
          {/* Thumb tabs */}
          <div 
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-2 overflow-x-auto pb-3 mb-4 [&::-webkit-scrollbar]:hidden -mx-4 px-4 overscroll-x-contain"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`h-10 px-4 rounded-xl text-xs font-mono whitespace-nowrap transition-all border active:scale-95 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-zinc-900 border-zinc-700 text-white font-medium shadow-md shadow-black/40 ring-1 ring-emerald-500/30"
                      : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>

          {/* Glavna kartica */}
          <div className="rounded-3xl bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl min-h-[390px] flex flex-col justify-between">
            <div>
              {/* Header spec */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(activeCategory.id)}
                  <span className="font-bold text-white tracking-tight">{activeCategory.category}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">DOMAIN SPEC</span>
              </div>

              {/* 2-kolonski raspored */}
              <div className="grid grid-cols-2 gap-2.5">
                {activeCategory.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 flex flex-col justify-between min-h-[72px]"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-xs font-bold text-white truncate">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" title="Primary Skill" />
                      )}
                    </div>
                    <p className="text-[10px] text-zinc-400 font-sans leading-tight line-clamp-2">
                      {skill.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dno kartice */}
            <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span>{activeCategory.skills.length} core modules</span>
              <span className="text-emerald-400/90 font-medium">Production Tested</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};