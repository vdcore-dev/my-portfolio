import { useState } from "react";
import {
  FaJava,
  FaAws,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaChevronRight,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiJsonwebtokens,
  SiApachekafka,
  SiRabbitmq,
  SiGraphql,
  SiOpenapiinitiative,
  SiApachemaven,
  SiGradle,
  SiJunit5,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiHibernate,
  SiMysql,
  SiElasticsearch,
  SiFlyway,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiGithubactions,
  SiSpring,
  SiLangchain,
  SiOllama,
  SiHuggingface,
  SiPython,
  SiOpenrouter,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { ScrollReveal } from "./ScrollReveal";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string;
}

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  headerIcon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentGlow: string;
  activeBorder: string;
  activeBg: string;
  skills: TechItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "BACKEND",
    subtitle: "Java, Spring Boot, JWT & Messaging",
    headerIcon: FaServer,
    accentColor: "text-sky-400",
    accentGlow: "from-sky-400/80",
    activeBorder: "border-sky-500/40",
    activeBg: "bg-sky-500/10",
    skills: [
      { name: "Java", icon: FaJava, iconColor: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, iconColor: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringsecurity, iconColor: "#6DB33F" },
      { name: "JWT", icon: SiJsonwebtokens, iconColor: "#D63AFF" },
      { name: "Kafka", icon: SiApachekafka, iconColor: "#E05243" },
      { name: "RabbitMQ", icon: SiRabbitmq, iconColor: "#FF6600" },
      { name: "GraphQL", icon: SiGraphql, iconColor: "#E10098" },
      { name: "REST APIs", icon: SiOpenapiinitiative, iconColor: "#6BA539" },
      { name: "Maven", icon: SiApachemaven, iconColor: "#C71A36" },
      { name: "Gradle", icon: SiGradle, iconColor: "#02303A" },
      { name: "JUnit 5", icon: SiJunit5, iconColor: "#25A162" },
    ],
  },
  {
    id: "database",
    title: "DATA & STORAGE",
    subtitle: "PostgreSQL, Mongo & Redis Cache",
    headerIcon: FaDatabase,
    accentColor: "text-indigo-400",
    accentGlow: "from-indigo-400/80",
    activeBorder: "border-indigo-500/40",
    activeBg: "bg-indigo-500/10",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
      { name: "Redis", icon: SiRedis, iconColor: "#DC382D" },
      { name: "Hibernate", icon: SiHibernate, iconColor: "#59666C" },
      { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
      { name: "Elasticsearch", icon: SiElasticsearch, iconColor: "#005571" },
      { name: "Flyway", icon: SiFlyway, iconColor: "#CC0000" },
    ],
  },
  {
    id: "devops",
    title: "DEVOPS & CLOUD",
    subtitle: "Docker, Kubernetes & Linux Infra",
    headerIcon: FaCloud,
    accentColor: "text-cyan-400",
    accentGlow: "from-cyan-400/80",
    activeBorder: "border-cyan-500/40",
    activeBg: "bg-cyan-500/10",
    skills: [
      { name: "Docker", icon: SiDocker, iconColor: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, iconColor: "#326CE5" },
      { name: "Linux", icon: SiLinux, iconColor: "#FCC624" },
      { name: "AWS", icon: FaAws, iconColor: "#FF9900" },
      { name: "Nginx", icon: SiNginx, iconColor: "#009639" },
      { name: "GitHub Actions", icon: SiGithubactions, iconColor: "#2088FF" },
    ],
  },
  {
    id: "ai",
    title: "AI & AGENTS",
    subtitle: "Spring AI, LangChain & LLM APIs",
    headerIcon: FaRobot,
    accentColor: "text-violet-400",
    accentGlow: "from-violet-400/80",
    activeBorder: "border-violet-500/40",
    activeBg: "bg-violet-500/10",
    skills: [
      { name: "Spring AI", icon: SiSpring, iconColor: "#6DB33F" },
      { name: "LangChain", icon: SiLangchain, iconColor: "#1C3C3C" },
      { name: "Ollama", icon: SiOllama, iconColor: "#FFFFFF" },
      { name: "Hugging Face", icon: SiHuggingface, iconColor: "#FFD21E" },
      { name: "Python", icon: SiPython, iconColor: "#3776AB" },
      { name: "OpenRouter", icon: SiOpenrouter, iconColor: "#818CF8" },
    ],
  },
  {
    id: "web",
    title: "WEB & TOOLS",
    subtitle: "React, TypeScript & Tailwind CSS",
    headerIcon: FaLaptopCode,
    accentColor: "text-emerald-400",
    accentGlow: "from-emerald-400/80",
    activeBorder: "border-emerald-500/40",
    activeBg: "bg-emerald-500/10",
    skills: [
      { name: "React", icon: SiReact, iconColor: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, iconColor: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, iconColor: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, iconColor: "#38BDF8" },
      { name: "Vite", icon: SiVite, iconColor: "#646CFF" },
      { name: "Postman", icon: SiPostman, iconColor: "#FF6C37" },
    ],
  },
];

export const Skills = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("backend");
  const [activeSkills, setActiveSkills] = useState<Record<string, string>>({
    backend: "Java",
    database: "PostgreSQL",
    devops: "Docker",
    ai: "Spring AI",
    web: "React",
  });

  const handleSelectSkill = (categoryId: string, skillName: string) => {
    setActiveSkills((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === skillName ? "" : skillName,
    }));
  };

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === selectedCategoryId) ?? SKILL_CATEGORIES[0];
  const ActiveHeaderIcon = activeCategory.headerIcon;

  const renderCategoryCard = (category: SkillCategory, catIdx: number) => {
    const HeaderIcon = category.headerIcon;
    const currentSelected = activeSkills[category.id];

    return (
      <ScrollReveal
        key={category.id}
        direction="up"
        delayMs={catIdx * 60}
      >
        <div className="flex flex-col gap-5">
          {/* Category Header Row: Icon & Title */}
          <div className="flex items-center gap-2.5 shrink-0 w-full">
            <HeaderIcon className={`w-5 h-5 ${category.accentColor} shrink-0 drop-shadow-[0_0_8px_currentColor]`} />
            <h3 className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight font-sans uppercase">
              {category.title}
            </h3>
          </div>

          {/* Icon Tiles Grid - Centered Symmetrically for Mobile with Direct Labels */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
            {category.skills.map((skill) => {
              const IconComponent = skill.icon;
              const isActive = currentSelected === skill.name;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => handleSelectSkill(category.id, skill.name)}
                  aria-label={`Skill: ${skill.name}`}
                  className={`w-[78px] sm:w-[84px] h-[72px] sm:h-[78px] rounded-2xl flex flex-col items-center justify-center gap-1 p-1 transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                    isActive
                      ? "bg-zinc-850/95 border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_18px_-3px_rgba(255,255,255,0.22)] scale-105 -translate-y-0.5"
                      : "bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.12] hover:border-white/[0.25] hover:bg-zinc-850/60 hover:-translate-y-0.5 hover:scale-105 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_6px_16px_-4px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <IconComponent
                    className="w-6 h-6 sm:w-6.5 sm:h-6.5 shrink-0 transition-transform duration-200"
                    style={{ color: skill.iconColor }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 leading-tight text-center max-w-full px-0.5 break-words line-clamp-2">
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <section
      id="skills"
      className="w-full flex flex-col pt-12 sm:pt-16 pb-16 lg:pb-24 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* ========================================================
            ARCHITECTURAL SKILLS HEADER
            - Mobile: Centered capsule with flanking gradient wings
            - Desktop: Left-anchored blueprint style (Space-efficient, no wasted vertical push)
            ======================================================== */}
        <ScrollReveal direction="up">
          {/* Mobile Header: Centered (Untouched) */}
          <div className="w-full flex lg:hidden items-center justify-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-xl px-2">
              <div 
                className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
              <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                  SKILLS
                </span>
              </div>
              <div 
                className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Desktop Header: Left-aligned blueprint style */}
          <div className="hidden lg:flex items-center gap-4 mb-6 w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                SKILLS
              </span>
            </div>
            <div 
              className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 via-zinc-700/40 to-transparent" 
              aria-hidden="true" 
            />
          </div>
        </ScrollReveal>

        {/* ========================================================
            MOBILE CAPABILITY LAYOUT (STRICTLY UNTOUCHED EXCEPT SPACING)
            ======================================================== */}
        <div className="flex lg:hidden flex-col gap-14 sm:gap-16 max-w-4xl mx-auto w-full">
          {SKILL_CATEGORIES.map((category, idx) => renderCategoryCard(category, idx))}
        </div>

        {/* ========================================================
            DESKTOP CAPABILITY LAYOUT: PROJECTS-STYLE 2-PANE ARCHITECTURE
            - Left: 5 Categories Sidebar List
            - Right: Locked Height h-[470px] Viewport Card with Icons & Inspector
            - Zero endless vertical scrolling on PC
            ======================================================== */}
        <div className="hidden lg:block">
          <ScrollReveal direction="up" delayMs={80}>
            <div className="grid grid-cols-12 gap-7 items-start">
              
              {/* Left Column: 5 Categories Sidebar List */}
              <div className="col-span-5 flex flex-col gap-2.5">
                {SKILL_CATEGORIES.map((category) => {
                  const isSelected = category.id === selectedCategoryId;
                  const CategoryIcon = category.headerIcon;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer backdrop-blur-xl ${
                        isSelected
                          ? `bg-zinc-900/85 ${category.activeBorder} text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(0,0,0,0.5)]`
                          : "bg-zinc-950/40 border-white/[0.07] text-zinc-400 hover:bg-zinc-900/50 hover:border-white/[0.12] hover:text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-3">
                        <CategoryIcon
                          className={`w-5 h-5 shrink-0 transition-all duration-200 ${
                            isSelected
                              ? `${category.accentColor} scale-110 drop-shadow-[0_0_8px_currentColor]`
                              : "text-zinc-400 group-hover:text-zinc-200 group-hover:scale-105"
                          }`}
                        />

                        <div className="min-w-0">
                          <h3
                            className={`text-sm font-bold tracking-tight uppercase truncate transition-colors font-sans ${
                              isSelected ? "text-zinc-100" : "text-zinc-300 group-hover:text-white"
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-mono">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pl-1">
                        <span
                          className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold border transition-colors ${
                            isSelected
                              ? `${category.activeBg} ${category.accentColor} ${category.activeBorder}`
                              : "bg-zinc-900/60 text-zinc-500 border-white/[0.05]"
                          }`}
                        >
                          {category.skills.length} Tech
                        </span>
                        <FaChevronRight
                          className={`w-3 h-3 transition-transform ${
                            isSelected ? `${category.accentColor} translate-x-0.5` : "text-zinc-600 group-hover:text-zinc-400"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Category Display Panel (h-[470px] Zero Scroll) */}
              <div className="col-span-7">
                {activeCategory && (
                  <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.09] shadow-2xl h-[470px] flex flex-col justify-start">
                    {/* Header Row */}
                    <div>
                      {/* Header Row: Category Title on Left, Tech Count Badge on Right */}
                      <div className="flex items-center justify-between w-full pb-8 sm:pb-9">
                        <div className="flex items-center gap-3">
                          <ActiveHeaderIcon className={`w-6 h-6 ${activeCategory.accentColor} shrink-0 drop-shadow-[0_0_10px_currentColor]`} />
                          <h3 className="text-base font-bold text-zinc-100 tracking-tight font-sans uppercase">
                            {activeCategory.title}
                          </h3>
                        </div>

                        <div className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold border ${activeCategory.activeBg} ${activeCategory.accentColor} ${activeCategory.activeBorder} shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] select-none`}>
                          {activeCategory.skills.length} Technologies
                        </div>
                      </div>

                      {/* Icon Tiles Grid (Apple Frosted Dark Glass Tiles with Direct Labels) */}
                      <div className="flex flex-wrap items-center gap-3">
                        {activeCategory.skills.map((skill) => {
                          const IconComp = skill.icon;
                          const isTileActive = (activeSkills[activeCategory.id] || activeCategory.skills[0]?.name) === skill.name;

                          return (
                            <button
                              key={skill.name}
                              type="button"
                              onClick={() => handleSelectSkill(activeCategory.id, skill.name)}
                              onMouseEnter={() => handleSelectSkill(activeCategory.id, skill.name)}
                              aria-label={`Skill: ${skill.name}`}
                              className={`w-[88px] h-[78px] rounded-2xl flex flex-col items-center justify-center gap-1.5 p-1.5 transition-all duration-200 cursor-pointer ${
                                isTileActive
                                  ? "bg-zinc-850/95 border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_18px_-3px_rgba(255,255,255,0.22)] scale-105 -translate-y-1"
                                  : "bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.12] hover:border-white/[0.28] hover:bg-zinc-850/60 hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(0,0,0,0.5)]"
                              }`}
                            >
                              <IconComp
                                className="w-6.5 h-6.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                                style={{ color: skill.iconColor }}
                              />
                              <span className="text-[10px] font-mono font-medium text-zinc-300 leading-tight text-center max-w-full px-0.5 break-words line-clamp-2">
                                {skill.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};