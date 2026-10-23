import type { PersonalInfo, Project, SkillCategory } from "../types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vladimir Dejanovic",
  role: "Java and DevOps Engineer",
  availability: "Available for Work",
  location: "Remote • Worldwide",
  bio: "Specialized in Java and the Spring Boot ecosystem, automating cloud infrastructure through modern DevOps, and integrating intelligent AI workflows into scalable services.",
  email: "",
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
    category: "Fintech SaaS",
    description:
      "Enterprise billing engine featuring automated recurring subscriptions, transactional consistency, webhook handling, and real-time revenue analytics.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "React", "Docker"],
    githubUrl: "https://github.com/vdcore-dev/saas-billing",
    liveUrl: "https://demo.example.com",
    specs: {
      architecture: "Modular Monolith / Clean Arch",
      database: "PostgreSQL + Redis Cache",
      performance: "Sub-50ms API Latency",
      security: "JWT + Role-Based Access Control",
    },
    architectureSteps: [
      { step: "01", name: "Client & Ingress", tech: "REST / HTTPS", detail: "TLS 1.3 encrypted requests with JWT Bearer auth" },
      { step: "02", name: "Billing Engine", tech: "Spring Boot 3", detail: "Idempotent payment state machine & transaction manager" },
      { step: "03", name: "Persistence Layer", tech: "PostgreSQL + Redis", detail: "ACID double-entry ledger with cache-aside tier" },
      { step: "04", name: "Async Dispatcher", tech: "RabbitMQ Events", detail: "Reliable webhook delivery with exponential backoff retry" },
    ],
    mockApi: {
      method: "POST",
      endpoint: "/api/v1/billing/subscriptions/checkout",
      status: 200,
      response: {
        status: "success",
        code: 200,
        data: {
          subscriptionId: "sub_92k4a8df1",
          plan: "Enterprise Pro",
          currency: "EUR",
          amount: 299.00,
          paymentStatus: "SETTLED",
          idempotencyKey: "idem_8f39b1a0",
          nextBillingCycle: "2026-11-22T00:00:00Z"
        },
        meta: {
          engine: "Spring Boot 3.3 (Java 21)",
          latency: "38ms",
          cluster: "eu-central-1"
        }
      }
    }
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    category: "Backend & Systems",
    tagline: "High-throughput services, OOP design, concurrency & clean microservices",
    previewTech: ["Java 21", "Spring Boot", "Kafka"],
    skills: [
      { name: "Java (21/25)", highlight: true },
      { name: "Spring Boot 3", highlight: true },
      { name: "Spring Security", highlight: true },
      { name: "Kafka & RabbitMQ" },
      { name: "Microservices Arch" },
      { name: "REST & OpenAPI" },
      { name: "JUnit 5 & Mockito" },
      { name: "Gradle & Maven" },
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud",
    tagline: "Infrastructure automation, automated delivery & containerized workloads",
    previewTech: ["Docker", "CI/CD", "Linux"],
    skills: [
      { name: "Docker", highlight: true },
      { name: "CI/CD (GitHub Actions)", highlight: true },
      { name: "Linux Systems", highlight: true },
      { name: "Nginx & Reverse Proxy" },
      { name: "Cloud VPS & Deployments" },
      { name: "Prometheus & Grafana" },
      { name: "Git & Version Control" },
    ],
  },
  {
    id: "data",
    category: "Data & Storage",
    tagline: "Relational integrity, caching layers & transaction consistency",
    previewTech: ["PostgreSQL", "Redis", "JPA"],
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Redis", highlight: true },
      { name: "Spring Data JPA" },
      { name: "Hibernate ORM" },
      { name: "Liquibase / Flyway" },
      { name: "HikariCP Pooling" },
    ],
  },
  {
    id: "ai",
    category: "AI & Integrations",
    tagline: "Modern AI pipelines, intelligent backends & LLM orchestration",
    previewTech: ["Spring AI", "LLM APIs"],
    skills: [
      { name: "Spring AI", highlight: true },
      { name: "LLM APIs & Tools", highlight: true },
      { name: "RAG & Embeddings" },
      { name: "Vector Databases" },
      { name: "Prompt Engineering" },
      { name: "Guardrails & Output" },
    ],
  },
  {
    id: "frontend",
    category: "Web & Interface",
    tagline: "Type-safe clients, component modularity & zero layout shift",
    previewTech: ["TypeScript", "React", "Tailwind"],
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "React 19", highlight: true },
      { name: "Tailwind CSS" },
      { name: "Vite Tooling" },
      { name: "Component Systems" },
      { name: "REST Integration" },
    ],
  },
];