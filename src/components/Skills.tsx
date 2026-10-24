import { useState, useId } from "react";
import {
  FaAws,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaLaptopCode,
  FaToolbox,
  FaChevronRight,
  FaNetworkWired,
  FaDiagramProject,
} from "react-icons/fa6";
import {
  SiSpringsecurity,
  SiOpenapiinitiative,
  SiFlyway,
  SiLiquibase,
  SiOllama,
  SiOpenrouter,
  SiOpentelemetry,
} from "react-icons/si";
import { ScrollReveal } from "./ScrollReveal";
import {
  GitHubIcon,
  BrunoIcon,
  ClaudeIcon,
  CopilotIcon,
  LangChainIcon,
  HuggingFaceIcon,
  VectorSearchIcon,
  HelmIcon,
  MongoDBIcon,
  KafkaIcon,
  RabbitMQIcon,
  GradleIcon,
  JWTIcon,
} from "./TechCustomIcons";

// Authentic Original Vector SVG Assets from devicon
import javaSvg from "devicon/icons/java/java-original.svg";
import springSvg from "devicon/icons/spring/spring-original.svg";
import mavenSvg from "devicon/icons/maven/maven-original.svg";
import junitSvg from "devicon/icons/junit/junit-original.svg";

import postgresqlSvg from "devicon/icons/postgresql/postgresql-original.svg";
import redisSvg from "devicon/icons/redis/redis-original.svg";
import hibernateSvg from "devicon/icons/hibernate/hibernate-original.svg";
import mysqlSvg from "devicon/icons/mysql/mysql-original.svg";
import elasticsearchSvg from "devicon/icons/elasticsearch/elasticsearch-original.svg";

import dockerSvg from "devicon/icons/docker/docker-original.svg";
import kubernetesSvg from "devicon/icons/kubernetes/kubernetes-original.svg";
import linuxSvg from "devicon/icons/linux/linux-original.svg";
import ubuntuSvg from "devicon/icons/ubuntu/ubuntu-original.svg";
import terraformSvg from "devicon/icons/terraform/terraform-original.svg";
import githubactionsSvg from "devicon/icons/githubactions/githubactions-original.svg";
import nginxSvg from "devicon/icons/nginx/nginx-original.svg";
import prometheusSvg from "devicon/icons/prometheus/prometheus-original.svg";
import grafanaSvg from "devicon/icons/grafana/grafana-original.svg";

import pythonSvg from "devicon/icons/python/python-original.svg";

import reactSvg from "devicon/icons/react/react-original.svg";
import nextjsSvg from "devicon/icons/nextjs/nextjs-original.svg";
import typescriptSvg from "devicon/icons/typescript/typescript-original.svg";
import javascriptSvg from "devicon/icons/javascript/javascript-original.svg";
import tailwindSvg from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import viteSvg from "devicon/icons/vitejs/vitejs-original.svg";
import html5Svg from "devicon/icons/html5/html5-original.svg";
import css3Svg from "devicon/icons/css3/css3-original.svg";

import vscodeSvg from "devicon/icons/vscode/vscode-original.svg";
import postmanSvg from "devicon/icons/postman/postman-original.svg";
import gitSvg from "devicon/icons/git/git-original.svg";
import dbeaverSvg from "devicon/icons/dbeaver/dbeaver-original.svg";
import windowsSvg from "devicon/icons/windows11/windows11-original.svg";
import fedoraSvg from "devicon/icons/fedora/fedora-original.svg";

/**
 * Authentic JetBrains IntelliJ IDEA multi-color product icon.
 * Features the signature multi-stop polygonal gradient flame
 * and the iconic black badge with 'IJ' and green underscore.
 */
const IntelliJIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  const id = useId();
  return (
    <svg
      viewBox="0 0 70 70"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`ijGrad1-${id}`} x1="0.7898" y1="40.0893" x2="33.3172" y2="40.0893" gradientUnits="userSpaceOnUse">
          <stop offset="0.258" stopColor="#F97A12" />
          <stop offset="0.459" stopColor="#B07B58" />
          <stop offset="0.724" stopColor="#577BAE" />
          <stop offset="0.91" stopColor="#1E7CE5" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id={`ijGrad2-${id}`} x1="25.7674" y1="24.88" x2="79.424" y2="54.57" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F97A12" />
          <stop offset="0.334" stopColor="#537BB1" />
          <stop offset="0.655" stopColor="#147CEF" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id={`ijGrad3-${id}`} x1="63.2277" y1="42.9153" x2="48.2903" y2="-1.7191" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FE315D" />
          <stop offset="0.247" stopColor="#755BB4" />
          <stop offset="0.541" stopColor="#2374E9" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient id={`ijGrad4-${id}`} x1="10.7204" y1="16.473" x2="55.5237" y2="90.58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FE315D" />
          <stop offset="0.166" stopColor="#C24383" />
          <stop offset="0.549" stopColor="#755BB4" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#ijGrad1-${id})`} points="17.7,54.6 0.8,41.2 9.2,25.6 33.3,35" />
      <polygon fill={`url(#ijGrad2-${id})`} points="70,18.7 68.7,59.2 41.8,70 25.6,59.6 49.3,35 38.9,12.3 48.2,1.1" />
      <polygon fill={`url(#ijGrad3-${id})`} points="70,18.7 48.7,43.9 38.9,12.3 48.2,1.1" />
      <polygon fill={`url(#ijGrad4-${id})`} points="33.7,58.1 5.6,68.3 10.1,52.5 16,33.1 0,27.7 10.1,0 32.1,2.7 53.7,27.4" />
      <rect x="13.7" y="13.5" width="43.2" height="43.2" rx="3.5" fill="#000000" />
      <rect x="17.7" y="48.6" width="16.2" height="2.7" fill="#3BEA62" />
      <polygon fill="#FFFFFF" points="29.4,22.4 29.4,19.1 20.4,19.1 20.4,22.4 23,22.4 23,33.7 20.4,33.7 20.4,37 29.4,37 29.4,33.7 26.9,33.7 26.9,22.4" />
      <path fill="#FFFFFF" d="M38,37.3c-1.4,0-2.6-0.3-3.5-0.8c-0.9-0.5-1.7-1.2-2.3-1.9l2.5-2.8c0.5,0.6,1,1,1.5,1.3c0.5,0.3,1.1,0.5,1.7,0.5c0.7,0,1.3-0.2,1.8-0.7c0.4-0.5,0.6-1.2,0.6-2.3V19.1h4v11.7c0,1.1-0.1,2-0.4,2.8c-0.3,0.8-0.7,1.4-1.3,2c-0.5,0.5-1.2,1-2,1.2C39.8,37.1,39,37.3,38,37.3" />
    </svg>
  );
};

interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconSrc?: string;
  iconColor?: string;
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
    subtitle: "Java, Spring Boot, Microservices & Messaging",
    headerIcon: FaServer,
    accentColor: "text-sky-400",
    accentGlow: "from-sky-400/80",
    activeBorder: "border-sky-500/40",
    activeBg: "bg-sky-500/10",
    skills: [
      { name: "Java", iconSrc: javaSvg },
      { name: "Spring Boot", iconSrc: springSvg },
      { name: "Spring Security", icon: SiSpringsecurity, iconColor: "#6DB33F" },
      { name: "JWT", icon: JWTIcon },
      { name: "Kafka", icon: KafkaIcon },
      { name: "RabbitMQ", icon: RabbitMQIcon },
      { name: "Microservices", icon: FaDiagramProject, iconColor: "#38BDF8" },
      { name: "REST APIs", icon: SiOpenapiinitiative, iconColor: "#6BA539" },
      { name: "gRPC", icon: FaNetworkWired, iconColor: "#244C5A" },
      { name: "Maven", iconSrc: mavenSvg },
      { name: "Gradle", icon: GradleIcon },
      { name: "JUnit 5", iconSrc: junitSvg },
    ],
  },
  {
    id: "database",
    title: "DATA & STORAGE",
    subtitle: "PostgreSQL, Redis, Mongo & Migrations",
    headerIcon: FaDatabase,
    accentColor: "text-indigo-400",
    accentGlow: "from-indigo-400/80",
    activeBorder: "border-indigo-500/40",
    activeBg: "bg-indigo-500/10",
    skills: [
      { name: "PostgreSQL", iconSrc: postgresqlSvg },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "Redis", iconSrc: redisSvg },
      { name: "Hibernate", iconSrc: hibernateSvg },
      { name: "MySQL", iconSrc: mysqlSvg },
      { name: "Elasticsearch", iconSrc: elasticsearchSvg },
      { name: "Flyway", icon: SiFlyway, iconColor: "#CC0000" },
      { name: "Liquibase", icon: SiLiquibase, iconColor: "#2962FF" },
    ],
  },
  {
    id: "devops",
    title: "DEVOPS & CLOUD",
    subtitle: "Docker, K8s, Linux, Ubuntu & Observability",
    headerIcon: FaCloud,
    accentColor: "text-cyan-400",
    accentGlow: "from-cyan-400/80",
    activeBorder: "border-cyan-500/40",
    activeBg: "bg-cyan-500/10",
    skills: [
      { name: "Docker", iconSrc: dockerSvg },
      { name: "Kubernetes", iconSrc: kubernetesSvg },
      { name: "Linux", iconSrc: linuxSvg },
      { name: "Ubuntu", iconSrc: ubuntuSvg },
      { name: "AWS", icon: FaAws, iconColor: "#FF9900" },
      { name: "Terraform", iconSrc: terraformSvg },
      { name: "Helm", icon: HelmIcon },
      { name: "GitHub Actions", iconSrc: githubactionsSvg },
      { name: "Nginx", iconSrc: nginxSvg },
      { name: "Prometheus", iconSrc: prometheusSvg },
      { name: "Grafana", iconSrc: grafanaSvg },
    ],
  },
  {
    id: "ai",
    title: "AI & AGENTS",
    subtitle: "Spring AI, Gemini, LangChain & LLMs",
    headerIcon: FaRobot,
    accentColor: "text-violet-400",
    accentGlow: "from-violet-400/80",
    activeBorder: "border-violet-500/40",
    activeBg: "bg-violet-500/10",
    skills: [
      { name: "Spring AI", iconSrc: springSvg },
      { name: "Gemini", iconSrc: "/gemini.svg" },
      { name: "LangChain", icon: LangChainIcon },
      { name: "Ollama", icon: SiOllama, iconColor: "#FFFFFF" },
      { name: "Hugging Face", icon: HuggingFaceIcon },
      { name: "Python", iconSrc: pythonSvg },
      { name: "OpenRouter", icon: SiOpenrouter, iconColor: "#818CF8" },
      { name: "Vector Search", icon: VectorSearchIcon },
      { name: "OpenTelemetry", icon: SiOpentelemetry, iconColor: "#4B88AB" },
    ],
  },
  {
    id: "web",
    title: "WEB & FRONTEND",
    subtitle: "React, Next.js, TypeScript & Tailwind",
    headerIcon: FaLaptopCode,
    accentColor: "text-emerald-400",
    accentGlow: "from-emerald-400/80",
    activeBorder: "border-emerald-500/40",
    activeBg: "bg-emerald-500/10",
    skills: [
      { name: "React", iconSrc: reactSvg },
      { name: "Next.js", iconSrc: nextjsSvg },
      { name: "TypeScript", iconSrc: typescriptSvg },
      { name: "JavaScript", iconSrc: javascriptSvg },
      { name: "Tailwind", iconSrc: tailwindSvg },
      { name: "Vite", iconSrc: viteSvg },
      { name: "HTML5", iconSrc: html5Svg },
      { name: "CSS3", iconSrc: css3Svg },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & WORKFLOW",
    subtitle: "IntelliJ, VS Code, Bruno, Copilot & OS",
    headerIcon: FaToolbox,
    accentColor: "text-amber-400",
    accentGlow: "from-amber-400/80",
    activeBorder: "border-amber-500/40",
    activeBg: "bg-amber-500/10",
    skills: [
      { name: "IntelliJ IDEA", icon: IntelliJIcon },
      { name: "VS Code", iconSrc: vscodeSvg },
      { name: "Postman", iconSrc: postmanSvg },
      { name: "Bruno", icon: BrunoIcon },
      { name: "Git", iconSrc: gitSvg },
      { name: "GitHub", icon: GitHubIcon },
      { name: "DBeaver", iconSrc: dbeaverSvg },
      { name: "Copilot", icon: CopilotIcon },
      { name: "Claude Code", icon: ClaudeIcon },
      { name: "Antigravity", iconSrc: "/antigravity.svg" },
      { name: "Windows", iconSrc: windowsSvg },
      { name: "Fedora", iconSrc: fedoraSvg },
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
    tools: "IntelliJ IDEA",
  });

  const handleSelectSkill = (categoryId: string, skillName: string) => {
    setActiveSkills((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === skillName ? "" : skillName,
    }));
  };

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === selectedCategoryId) ?? SKILL_CATEGORIES[0];
  const ActiveHeaderIcon = activeCategory.headerIcon;

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
          {/* Mobile Header: Centered */}
          <div className="w-full flex lg:hidden items-center justify-center mb-6 sm:mb-8">
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

          {/* Desktop Header: Architectural blueprint style */}
          <div className="hidden lg:flex items-center gap-4 mb-6 w-full">
            <div 
              className="w-32 h-px bg-gradient-to-l from-cyan-400/50 via-zinc-700/40 to-transparent" 
              aria-hidden="true" 
            />
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
            MOBILE CAPABILITY LAYOUT (APPLE / LINEAR SEGMENTED TABS)
            - Horizontal touch-friendly category bar with counts
            - Compact, high-density interactive showcase panel
            - Zero endless vertical scrolling on phones
            ======================================================== */}
        <div className="flex lg:hidden flex-col gap-3.5 max-w-xl mx-auto w-full">
          <ScrollReveal direction="up" delayMs={60}>
            {/* Category Segmented Tab Bar */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-900/70 border border-white/[0.08] backdrop-blur-xl overflow-x-auto no-scrollbar shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              {SKILL_CATEGORIES.map((category) => {
                const isSelected = category.id === selectedCategoryId;
                const CategoryIcon = category.headerIcon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={`flex-1 min-w-max inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 [-webkit-tap-highlight-color:transparent] ${
                      isSelected
                        ? `bg-zinc-850/95 text-white border ${category.activeBorder} ${category.accentColor} shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_4px_12px_-2px_rgba(0,0,0,0.5)]`
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <CategoryIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? category.accentColor : "text-zinc-500"}`} />
                    <span>{category.title}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? `${category.activeBg} ${category.accentColor} font-bold`
                          : "bg-zinc-800 text-zinc-500 font-normal"
                      }`}
                    >
                      {category.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Active Category Display Card on Mobile (Stabilized Height to match Backend - Zero Layout Jumps) */}
          <ScrollReveal direction="up" delayMs={100}>
            <div
              key={activeCategory.id}
              className="rounded-3xl glass-panel p-5 sm:p-6 border border-white/[0.09] shadow-xl animate-panel-switch flex flex-col justify-start min-h-[428px] sm:min-h-[445px]"
            >
              {/* Category Card Header */}
              <div className="flex items-center justify-between w-full pb-4 border-b border-zinc-800/80 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <ActiveHeaderIcon className={`w-5 h-5 ${activeCategory.accentColor} shrink-0 drop-shadow-[0_0_8px_currentColor]`} />
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight font-sans uppercase truncate">
                      {activeCategory.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono mt-0.5 truncate">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                </div>

                {/* Pure Glass Capsule Pill (No dot) */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_12px_-4px_rgba(0,0,0,0.5)] select-none shrink-0 backdrop-blur-md">
                  <span className="font-mono text-[10px] sm:text-[11px] font-medium text-zinc-300 tracking-tight">
                    {activeCategory.skills.length} Tech
                  </span>
                </div>
              </div>

              {/* Icon Tiles Grid (Aligned to top so fewer tiles don't stretch or shift) */}
              <div className="flex flex-wrap items-start justify-center content-start gap-2.5 pt-4 flex-1">
                {activeCategory.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const isTileActive = (activeSkills[activeCategory.id] || activeCategory.skills[0]?.name) === skill.name;

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => handleSelectSkill(activeCategory.id, skill.name)}
                      aria-label={`Skill: ${skill.name}`}
                      className={`w-[80px] sm:w-[86px] h-[76px] sm:h-[80px] rounded-2xl flex flex-col items-center justify-center gap-1.5 p-1 transition-all duration-200 cursor-pointer [-webkit-tap-highlight-color:transparent] ${
                        isTileActive
                          ? "bg-zinc-850/95 border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_0_20px_-3px_rgba(255,255,255,0.25)] scale-105 -translate-y-0.5"
                          : "bg-zinc-900/80 backdrop-blur-2xl border border-white/[0.15] hover:border-white/[0.3] hover:bg-zinc-850/80 hover:-translate-y-0.5 hover:scale-105 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_6px_16px_-4px_rgba(0,0,0,0.6)]"
                      }`}
                    >
                      {skill.iconSrc ? (
                        <img
                          src={skill.iconSrc}
                          alt={skill.name}
                          className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-200"
                          loading="lazy"
                        />
                      ) : IconComponent ? (
                        <IconComponent
                          className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 transition-transform duration-200"
                          style={{ color: skill.iconColor }}
                        />
                      ) : null}
                      <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 leading-tight text-center max-w-full px-0.5 break-words line-clamp-2">
                        {skill.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
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
              
              {/* Left Column: 6 Categories Sidebar List */}
              <div className="col-span-5 flex flex-col gap-2">
                {SKILL_CATEGORIES.map((category) => {
                  const isSelected = category.id === selectedCategoryId;
                  const CategoryIcon = category.headerIcon;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer backdrop-blur-xl ${
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

                        {/* Pure Glass Capsule Pill (No dot) */}
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_12px_-4px_rgba(0,0,0,0.5)] select-none backdrop-blur-md">
                          <span className="font-mono text-xs font-medium text-zinc-300 tracking-tight">
                            {activeCategory.skills.length} Technologies
                          </span>
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
                              className={`w-[94px] h-[82px] rounded-2xl flex flex-col items-center justify-center gap-1.5 p-1.5 transition-all duration-200 cursor-pointer ${
                                isTileActive
                                  ? "bg-zinc-850/95 border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_0_20px_-3px_rgba(255,255,255,0.25)] scale-105 -translate-y-1"
                                  : "bg-zinc-900/80 backdrop-blur-2xl border border-white/[0.15] hover:border-white/[0.32] hover:bg-zinc-850/80 hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_20px_-6px_rgba(0,0,0,0.6)]"
                              }`}
                            >
                              {skill.iconSrc ? (
                                <img
                                  src={skill.iconSrc}
                                  alt={skill.name}
                                  className="w-8 h-8 shrink-0 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-110"
                                  loading="lazy"
                                />
                              ) : IconComp ? (
                                <IconComp
                                  className="w-8 h-8 shrink-0 transition-transform duration-200 group-hover:scale-110"
                                  style={{ color: skill.iconColor }}
                                />
                              ) : null}
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