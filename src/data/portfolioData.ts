import type { PersonalInfo, Project, SkillCategory } from "../types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vladimir Dejanovic",
  role: "Java Backend & DevOps Engineer",
  availability: "Open to Offers",
  location: "Remote • Worldwide",
  bio: "Specialized in Java and the Spring Boot ecosystem, automating cloud infrastructure through modern DevOps, and integrating intelligent AI workflows into scalable services.",
  email: "", // Obfuscated via security utility
  github: "https://github.com/vdcore-dev",
  linkedin: "https://linkedin.com/in/vladimir-dejanovic-16700238b",
  x: "https://x.com/vdcore_dev",
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
    tagline: "High-throughput services, OOP design, concurrency & clean microservices",
    skills: [
      { name: "Java (17/21)", role: "Virtual Threads, Streams, Concurrency", highlight: true },
      { name: "Spring Boot", role: "Dependency Injection, REST, Modular Arch", highlight: true },
      { name: "Spring Security", role: "OAuth2, JWT Tokens, Role-Based Access" },
      { name: "Microservices", role: "Distributed Architecture & Service Discovery" },
      { name: "RESTful Design", role: "Idempotency, OpenApi Contracts, DTOs" },
      { name: "RabbitMQ", role: "Asynchronous Messaging & Event-Driven Flows" },
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud",
    tagline: "Infrastructure automation, automated delivery & containerized workloads",
    skills: [
      { name: "Docker", role: "Multi-stage Builds, Compose, Optimization", highlight: true },
      { name: "CI/CD Pipelines", role: "GitHub Actions, Automated Testing & Build", highlight: true },
      { name: "Linux Systems", role: "Shell Scripting, CLI Management, Networking" },
      { name: "Cloud Platforms", role: "Container Deployments, VPS, Environment Config" },
      { name: "Git & Versioning", role: "Trunk-based Dev, Branching & PR Reviews" },
      { name: "Prometheus Basics", role: "Application Metrics & Service Health Checks" },
    ],
  },
  {
    id: "data",
    category: "Data & Storage",
    tagline: "Relational integrity, caching layers & transaction consistency",
    skills: [
      { name: "PostgreSQL", role: "Indexing, ACID Transactions, Schema Design", highlight: true },
      { name: "Redis", role: "Distributed Locks, Cache-Aside, Key Eviction", highlight: true },
      { name: "Spring Data JPA", role: "Custom Queries, Transaction Boundaries, ORM" },
      { name: "Hibernate", role: "Query Plan Optimization & L2 Caching" },
      { name: "Database Migrations", role: "Liquibase / Flyway Versioned Changes" },
      { name: "Connection Pooling", role: "HikariCP Configuration & Latency Tuning" },
    ],
  },
  {
    id: "ai",
    category: "AI & Integrations",
    tagline: "Modern AI pipelines, intelligent backends & LLM orchestration",
    skills: [
      { name: "Spring AI", role: "Native Framework LLM Clients & Models", highlight: true },
      { name: "LLM APIs", role: "Anthropic & OpenAI Structured Output", highlight: true },
      { name: "RAG Architecture", role: "Context Augmentation & Embeddings Storage" },
      { name: "Vector Databases", role: "Similarity Search & High-dim Indexes" },
      { name: "Prompt Engineering", role: "System Instructions, Guardrails & Fallbacks" },
      { name: "Function Calling", role: "Model Tool Calling & Autonomous Actions" },
    ],
  },
  {
    id: "frontend",
    category: "Web & Interface",
    tagline: "Type-safe clients, component modularity & zero layout shift",
    skills: [
      { name: "TypeScript", role: "Strict Static Typing, Generics, Safety", highlight: true },
      { name: "React 19", role: "Hooks, State Architecture, Component Lifecycles" },
      { name: "Tailwind CSS", role: "Modern Layouts, Glassmorphism & UI Systems" },
      { name: "API Integration", role: "Axios/Fetch, State Sync & Error Boundaries" },
      { name: "Vite", role: "Fast Bundling & Modern Frontend Tooling" },
      { name: "Responsive Design", role: "Mobile-first Architecture & Cross-browser Standards" },
    ],
  },
];