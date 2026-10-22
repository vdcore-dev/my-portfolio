import type { PersonalInfo, Project, SkillCategory } from "../types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vladimir Dejanovic",
  role: "Java Backend & DevOps Engineer",
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
  {
    id: "payment-gateway",
    title: "Payment Gateway Simulator",
    category: "Financial API",
    description:
      "High-throughput mock transaction gateway demonstrating idempotent API design, payload encryption, network latency simulation, and audit logging.",
    tags: ["Spring Boot", "RabbitMQ", "PostgreSQL", "Docker", "REST API"],
    githubUrl: "https://github.com/vdcore-dev/payment-gateway",
    specs: {
      architecture: "Event-Driven Processing",
      database: "PostgreSQL with Audit Logs",
      performance: "Idempotent <30ms Responses",
      security: "HMAC Signatures & Encryption",
    },
    architectureSteps: [
      { step: "01", name: "Signature Verification", tech: "HMAC-SHA256", detail: "Payload tampering validation & replay attack prevention" },
      { step: "02", name: "Loom Concurrency", tech: "Virtual Threads", detail: "Lightweight concurrency handling 10,000+ IO-bound tx/s" },
      { step: "03", name: "Immutable Ledger", tech: "Partitioned Postgres", detail: "Append-only encrypted financial audit storage" },
      { step: "04", name: "Settlement Bus", tech: "RabbitMQ Broker", detail: "ISO-20022 banking message queue integration" },
    ],
    mockApi: {
      method: "POST",
      endpoint: "/api/v1/payments/process",
      status: 201,
      response: {
        transactionId: "tx_77a9c240f",
        status: "APPROVED",
        authorizedAmount: 1500.00,
        currency: "USD",
        riskScore: 0.02,
        settlementRoute: "SWIFT-ISO20022",
        encryption: "AES-256-GCM",
        executionTimeMs: 27
      }
    }
  },
  {
    id: "task-orchestrator",
    title: "Distributed Task Scheduler",
    category: "Distributed Cloud",
    description:
      "High-availability asynchronous job execution service with leader election, distributed cron scheduling, and worker pool balancing.",
    tags: ["Java 21", "Spring Boot", "Redis", "Docker", "Prometheus"],
    githubUrl: "https://github.com/vdcore-dev/task-scheduler",
    specs: {
      architecture: "Leader-Worker Clustered",
      database: "Redis Sorted Sets (ZSET)",
      performance: "10,000+ Tasks Dispatched/sec",
      security: "Internal Service-to-Service mTLS",
    },
    architectureSteps: [
      { step: "01", name: "Leader Election", tech: "Redis Redlock", detail: "Quorum-based consensus preventing split-brain states" },
      { step: "02", name: "Priority Queue", tech: "Redis ZSET", detail: "Sub-millisecond chronological task index polling" },
      { step: "03", name: "Worker Fleet", tech: "Dockerized Nodes", detail: "Dynamically scaling thread pools with heartbeat sync" },
      { step: "04", name: "Telemetry Export", tech: "Prometheus + Micrometer", detail: "Exporting dispatch rates, task drop % and worker latency" },
    ],
    mockApi: {
      method: "GET",
      endpoint: "/api/v1/cluster/orchestrator/status",
      status: 200,
      response: {
        clusterNode: "orchestrator-node-03",
        leaderRole: "ACTIVE_PRIMARY",
        nodesHealthy: 5,
        activeWorkers: 32,
        tasksDispatchedPerSec: 10420,
        queueDepth: 0,
        uptime: "99.994%"
      }
    }
  },
  {
    id: "modern-portfolio",
    title: "Minimalist Engineering Portfolio",
    category: "Web Architecture",
    description:
      "High-performance developer platform built with React 19, TypeScript, and Tailwind CSS, featuring subtle galaxy mask blending and zero layout shift.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/vdcore-dev/my-portfolio",
    liveUrl: "https://vdcore.com",
    specs: {
      architecture: "Single Page App (SPA)",
      database: "Static Pre-Compiled Bundles",
      performance: "100 Lighthouse Performance",
      security: "Content Security Policy (CSP)",
    },
    architectureSteps: [
      { step: "01", name: "Edge Caching", tech: "Global Edge Network", detail: "Instant SSL termination and static bundle distribution" },
      { step: "02", name: "Reactive Core", tech: "React 19 + TypeScript", detail: "Strict type safety with zero layout shift architecture" },
      { step: "03", name: "Hardware GPU Glass", tech: "Tailwind v4 @theme", detail: "Linear-style frosted glass shaders without CPU drain" },
      { step: "04", name: "Hardened Client", tech: "CSP + Obfuscated Mail", detail: "Strict anti-scraping and runtime security mechanisms" },
    ],
    mockApi: {
      method: "GET",
      endpoint: "/api/v1/system/health",
      status: 200,
      response: {
        status: "HEALTHY",
        version: "2.4.0",
        environment: "production",
        domain: "vdcore.com",
        edgeLatency: "9ms",
        lighthouseScore: {
          performance: 100,
          accessibility: 100,
          bestPractices: 100,
          seo: 100
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