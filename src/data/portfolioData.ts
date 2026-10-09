import type { PersonalInfo, Project, SkillCategory } from "../types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vladimir Dejanovic",
  role: "Java Backend & DevOps Engineer",
  availability: "Available for work",
  location: "Remote • Worldwide",
  bio: "Specialized in Java and the Spring Boot ecosystem, automating cloud infrastructure through modern DevOps, and integrating intelligent AI workflows into scalable services.",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  focusAreas: [
    {
      id: "backend",
      label: "Core Backend",
      stack: "Java • Spring Boot",
    },
    {
      id: "devops",
      label: "DevOps & Cloud",
      stack: "Docker • CI/CD",
    },
    {
      id: "data",
      label: "Data & Storage",
      stack: "PostgreSQL • Redis",
    },
    {
      id: "ai",
      label: "AI & Integrations",
      stack: "Spring AI • LLM APIs",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "saas-billing",
    title: "SaaS Subscription & Billing Platform",
    category: "Distributed Billing & SaaS",
    description:
      "Enterprise billing engine featuring automated recurring subscriptions, transactional consistency, webhook handling, and real-time revenue analytics.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "React", "Docker"],
    githubUrl: "https://github.com/your-username/saas-billing",
    liveUrl: "https://demo.example.com",
    featured: true,
    specs: {
      architecture: "Modular Monolith / Clean Arch",
      database: "PostgreSQL + Redis Cache",
      performance: "Sub-50ms API Latency",
      security: "JWT + Role-Based Access Control",
    },
    highlights: [
      "ACID-compliant subscription state transitions with optimistic locking",
      "Asynchronous webhook dispatcher with retry backoff strategy",
      "Cached usage counters in Redis for real-time quota evaluation",
    ],
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Simulator",
    category: "Financial Systems & Microservices",
    description:
      "High-throughput mock transaction gateway demonstrating idempotent API design, payload encryption, network latency simulation, and audit logging.",
    tags: ["Spring Boot", "RabbitMQ", "PostgreSQL", "Docker", "REST API"],
    githubUrl: "https://github.com/your-username/payment-gateway",
    featured: true,
    specs: {
      architecture: "Event-Driven Processing",
      database: "PostgreSQL with Audit Logs",
      performance: "Idempotent <30ms Responses",
      security: "HMAC Signatures & Encryption",
    },
    highlights: [
      "Distributed locks to eliminate duplicate transaction execution",
      "Dead Letter Queue (DLQ) integration for resilient failure handling",
      "Configurable network delay simulation for realistic chaos testing",
    ],
  },
  {
    id: "task-orchestrator",
    title: "Distributed Task Scheduler",
    category: "Cloud Infrastructure",
    description:
      "High-availability asynchronous job execution service with leader election, distributed cron scheduling, and worker pool balancing.",
    tags: ["Java 21", "Spring Boot", "Redis", "Docker", "Prometheus"],
    githubUrl: "https://github.com/your-username/task-scheduler",
    featured: false,
    specs: {
      architecture: "Leader-Worker Clustered",
      database: "Redis Sorted Sets (ZSET)",
      performance: "10,000+ Tasks Dispatched/sec",
      security: "Internal Service-to-Service mTLS",
    },
    highlights: [
      "Distributed leader election using Redis lease TTL mechanics",
      "Graceful degradation and automatic worker failover routing",
      "Prometheus metrics endpoint for latency and queue saturation monitoring",
    ],
  },
  {
    id: "modern-portfolio",
    title: "Minimalist Engineering Portfolio",
    category: "Frontend & Performance",
    description:
      "High-performance developer platform built with React 19, TypeScript, and Tailwind CSS, featuring subtle galaxy mask blending and zero layout shift.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/your-username/my-portfolio",
    liveUrl: "https://vdcore.dev",
    featured: false,
    specs: {
      architecture: "Single Page App (SPA)",
      database: "Static Pre-Compiled Bundles",
      performance: "100 Lighthouse Performance",
      security: "Content Security Policy (CSP)",
    },
    highlights: [
      "Glassmorphic floating dock with device-specific accessibility targets",
      "Bespoke SVG hardware-inspired monogram with zero raster asset dependencies",
      "Responsive console showcase with native CSS touch snapping",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    category: "Backend & Systems",
    tagline: "High-throughput services, concurrency & clean domain logic",
    skills: [
      { name: "Java", role: "Virtual Threads, Concurrency & Stream API", highlight: true },
      { name: "Spring Boot", role: "IoC, Dependency Injection, REST APIs", highlight: true },
      { name: "Spring Data JPA", role: "Hibernate, Transaction Boundaries, ORM" },
      { name: "RESTful APIs", role: "Contract Design, Idempotency, OpenAPI" },
      { name: "Microservices", role: "Distributed Architecture & Service Discovery" },
      { name: "Hibernate", role: "L2 Caching, N+1 Query Optimization" },
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Web",
    tagline: "Type-safe interfaces, state management & zero layout shift",
    skills: [
      { name: "TypeScript", role: "Strict Typing, Generics, Safety", highlight: true },
      { name: "JavaScript", role: "ESNext Features, Async/Await Runtime" },
      { name: "React", role: "Functional Components, Custom Hooks, State" },
      { name: "Tailwind CSS", role: "Design Systems, Modern Responsive Layouts" },
      { name: "HTML5 / Semantic UI", role: "Accessible Structure & SEO Standards" },
      { name: "Vite", role: "High-Speed Bundling & HMR Engine" },
    ],
  },
  {
    id: "data-devops",
    category: "Data & DevOps",
    tagline: "Resilient persistence, caching strategies & automated pipelines",
    skills: [
      { name: "PostgreSQL", role: "Schema Design, Indexing, ACID Guarantees", highlight: true },
      { name: "Redis", role: "Distributed Locks, Cache-Aside, Key Eviction", highlight: true },
      { name: "Docker", role: "Multi-stage Builds, Containerization" },
      { name: "Git / GitHub", role: "Branching Strategies, CI/CD Actions" },
      { name: "Linux (Fedora/Ubuntu)", role: "Shell Scripting, Process Management" },
      { name: "CI/CD Basics", role: "Automated Build & Deployment Pipelines" },
    ],
  },
];