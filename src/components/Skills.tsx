import { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Server, Database, Layout, ChevronRight, Terminal, CheckCircle2 } from "lucide-react";
import type { SkillCategory, SkillItem } from "../types";

export const Skills = () => {
  const defaultId = SKILL_CATEGORIES[0]?.id ?? "backend";
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultId);

  const activeCategory: SkillCategory =
    SKILL_CATEGORIES.find((c) => (c.id ?? c.category) === activeCategoryId) ||
    SKILL_CATEGORIES[0];

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
    <section id="skills" className="min-h-dvh w-full flex flex-col pt-28 lg:pt-32 pb-16 lg:pb-24 relative border-t border-zinc-900/80 scroll-mt-0">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>// Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Engineering Stack & Competencies
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Production technologies and operational competencies used to construct resilient distributed systems.
          </p>
        </div>

        {/* 1. DESKTOP INTERFACE: Master-Detail Architecture Stack */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 flex flex-col gap-3">
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700/80 shadow-lg shadow-black/40"
                      : "bg-zinc-950/40 border-zinc-800/60 hover:bg-zinc-900/40 hover:border-zinc-700/50"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2 rounded-xl border transition-colors ${
                        isSelected
                          ? "bg-zinc-800 border-zinc-600 shadow-sm"
                          : "bg-zinc-900/60 border-zinc-800"
                      }`}
                    >
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div className="truncate">
                      <h3
                        className={`text-sm font-semibold truncate transition-colors font-sans ${
                          isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {cat.category}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">
                        {cat.skills.length} core tools
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

          <div className="col-span-8">
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl p-7 shadow-2xl relative transition-all duration-300">
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800/70 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
                    {activeCategory.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  ACTIVE DOMAIN
                </span>
              </div>

              {activeCategory.tagline && (
                <p className="text-zinc-300 text-sm font-sans mb-6">
                  {activeCategory.tagline}
                </p>
              )}

              <div className="grid grid-cols-2 gap-3.5">
                {activeCategory.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 hover:bg-zinc-950 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono font-bold text-sm text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-medium">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {skill.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. MOBILNI INTERFACE */}
        <div className="block lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
            {SKILL_CATEGORIES.map((cat) => {
              const catKey = cat.id ?? cat.category;
              const isSelected = catKey === activeCategoryId;

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategoryId(catKey)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-zinc-800 border-zinc-600 text-white font-semibold shadow-sm"
                      : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {cat.category.split(" ")[0]}
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-5 shadow-xl">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-800/70 text-xs font-mono text-zinc-400">
              {getCategoryIcon(activeCategory.id)}
              <span className="font-bold text-white">{activeCategory.category}</span>
            </div>

            <div className="space-y-2.5">
              {activeCategory.skills.map((skill: SkillItem) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/60 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-snug">
                      {skill.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};