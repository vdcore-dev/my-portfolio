import { useState } from "react";
import {
  FaJava,
  FaAws,
  FaServer,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiSpringsecurity,
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
  headerIcon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentGlow: string;
  skills: TechItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "BACKEND",
    headerIcon: FaServer,
    accentColor: "text-sky-400",
    accentGlow: "from-sky-400/80",
    skills: [
      { name: "Java", icon: FaJava, iconColor: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, iconColor: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringsecurity, iconColor: "#6DB33F" },
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
    headerIcon: FaDatabase,
    accentColor: "text-indigo-400",
    accentGlow: "from-indigo-400/80",
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
    headerIcon: FaCloud,
    accentColor: "text-cyan-400",
    accentGlow: "from-cyan-400/80",
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
    headerIcon: FaBrain,
    accentColor: "text-violet-400",
    accentGlow: "from-violet-400/80",
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
    headerIcon: FaLaptopCode,
    accentColor: "text-emerald-400",
    accentGlow: "from-emerald-400/80",
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

  const renderCategoryCard = (category: SkillCategory, catIdx: number) => {
    const HeaderIcon = category.headerIcon;
    const currentSelected = activeSkills[category.id];
    const activeItem = category.skills.find((s) => s.name === currentSelected);
    const ActiveIcon = activeItem?.icon;

    return (
      <ScrollReveal
        key={category.id}
        direction="up"
        delayMs={catIdx * 60}
      >
        <div className="flex flex-col gap-3">
          {/* Category Header Row: Icon & Title on Left, Dynamic Inspector Capsule on Right */}
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex items-center gap-2.5 shrink-0">
              <HeaderIcon className={`w-4 h-4 ${category.accentColor} shrink-0`} />
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight font-sans uppercase">
                {category.title}
              </h3>
            </div>

            {/* Modern Dynamic Inspector Capsule in Category Header Line */}
            {activeItem && ActiveIcon && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-white/[0.15] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_4px_16px_-4px_rgba(0,0,0,0.6)] shrink-0 animate-in fade-in zoom-in-95 duration-150 select-none">
                <ActiveIcon
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: activeItem.iconColor }}
                />
                <span className="w-px h-3 bg-zinc-800" aria-hidden="true" />
                <span className="font-mono text-xs font-bold text-zinc-100 tracking-tight">
                  {activeItem.name}
                </span>
              </div>
            )}
          </div>

          {/* Stylish Divider Line with subtle accent glow under title */}
          <div className="w-full h-px bg-gradient-to-r from-zinc-700/60 via-zinc-800/30 to-transparent relative">
            <div className={`absolute top-0 left-0 w-20 h-px bg-gradient-to-r ${category.accentGlow} to-transparent`} />
          </div>

          {/* Icon Tiles Grid - Full Apple Frosted Dark Glass */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
            {category.skills.map((skill) => {
              const IconComponent = skill.icon;
              const isActive = currentSelected === skill.name;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => handleSelectSkill(category.id, skill.name)}
                  aria-label={`Select skill: ${skill.name}`}
                  className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                    isActive
                      ? "bg-zinc-850/90 border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_18px_-3px_rgba(255,255,255,0.22)] scale-105 -translate-y-1"
                      : "bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.12] hover:border-white/[0.25] hover:bg-zinc-850/60 hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_8px_20px_-6px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <IconComponent
                    className="w-6.5 h-6.5 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.iconColor }}
                  />
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
            UNIFIED ARCHITECTURAL SKILLS HEADER
            (Modern softer-squared badge + flanking gradient wings fading out halfway)
            ======================================================== */}
        <ScrollReveal direction="up">
          <div className="w-full flex items-center justify-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-xl px-2">
              
              {/* Left Wing: starts at badge and fades out halfway to the left */}
              <div 
                className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />

              {/* Modern Softer-Squared Chamfered Capsule Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-zinc-900/95 border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_-4px_rgba(0,0,0,0.6)] select-none shrink-0">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-zinc-100 uppercase">
                  SKILLS
                </span>
              </div>

              {/* Right Wing: starts at badge and fades out halfway to the right */}
              <div 
                className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 via-zinc-700/50 to-transparent" 
                aria-hidden="true" 
              />

            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================
            RESPONSIVE CAPABILITY LAYOUT
            - Mobile & Desktop: Unified spacious flow with elegant breathing room
            - All categories full width with glowing divider line
            ======================================================== */}
        <div className="flex flex-col gap-9 sm:gap-11 lg:gap-12 max-w-4xl mx-auto w-full">
          {SKILL_CATEGORIES.map((category, idx) => renderCategoryCard(category, idx))}
        </div>

      </div>
    </section>
  );
};
