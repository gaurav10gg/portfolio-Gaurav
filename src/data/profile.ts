export const profile = {
  name: 'Gaurav G',
  role: 'Backend & infrastructure engineer',
  location: 'Puducherry, India',
  email: 'gauravgjee2025@gmail.com',
  phone: '+91 63742 07466',
  github: 'https://github.com/gaurav10gg',
  linkedin: 'https://www.linkedin.com/in/gaurav10g',
  hatch: 'https://hatchmcp.vercel.app/',
  resume: '/Gaurav-G-Resume.pdf',
  status: 'Building Hatch · open to internships',
  headline: ['I build the', 'backend other', 'software runs on.'],
  intro:
    'Second-year CSE student at NIT Puducherry. I work on the unglamorous half of the stack — API design, job runners, database schemas, deploy pipelines. Right now I am building Hatch, which turns any API into a hosted MCP server.',
} as const;

export const metrics = [
  { value: '2', unit: '', label: 'Engineering internships' },
  { value: '10', unit: '+', label: 'Production APIs shipped' },
  { value: '25', unit: '+', label: 'Public repositories' },
  { value: '1', unit: '', label: 'Startup in build' },
] as const;

/* ------------------------------------------------------------------ */
/* Hatch — the current build                                           */
/* ------------------------------------------------------------------ */

export const hatch = {
  name: 'Hatch',
  org: 'hatchmcp',
  role: 'Founder & engineer',
  url: 'https://github.com/hatchmcp',
  tagline: 'Turn any API into a hosted MCP server.',
  summary:
    'Paste a GitHub repo, an OpenAPI spec, or a Postman collection. Hatch extracts every endpoint, generates typed MCP tools with Claude, runs a dry-run test suite against HTTP mocks, and deploys to a live subdomain you can connect from Claude Desktop or Cursor in one paste.',
  endpoint: '{slug}.mcp.hatch.dev',

  /* A real ordered pipeline, so the numbering carries information. */
  pipeline: [
    {
      id: 'ingest',
      verb: 'Ingest',
      detail:
        'Fetch a GitHub tarball via Octokit, parse an OpenAPI spec or Postman collection, or convert docs HTML to Markdown with Turndown.',
      log: 'fetched 412 files · 1.8 MB',
    },
    {
      id: 'extract',
      verb: 'Extract',
      detail:
        'Chunk the source at 30 KB and pack by directory, then one Claude call per chunk at four concurrent. Strict JSON, Zod-validated, one retry on a parse failure, plus a second pass for anything possibly missed.',
      log: 'found 47 endpoints across 8 chunks',
    },
    {
      id: 'select',
      verb: 'Select',
      detail:
        'You toggle which endpoints ship. Bulk select, filter by method, search. The choice persists on the endpoint row.',
      log: '41 of 47 selected',
    },
    {
      id: 'generate',
      verb: 'Generate',
      detail:
        'One Claude call per tool once you cross fifteen endpoints, parallelised. An auto-fix loop feeds Zod validation errors back to the model for up to two retries.',
      log: 'generated 41 typed tools',
    },
    {
      id: 'test',
      verb: 'Test',
      detail:
        'Compile every input schema with AJV, then dry-run each tool against MSW HTTP mocks with faker inputs. No production credentials involved.',
      log: '41 passed · 0 failed',
    },
    {
      id: 'deploy',
      verb: 'Deploy',
      detail:
        'One atomic transaction writes the new version, marks the old one rolled back, bumps the pointer, and busts the runtime cache.',
      log: 'live at acme.mcp.hatch.dev',
    },
  ],

  services: [
    {
      path: 'apps/api',
      what: 'Express with an in-process job runner',
      detail:
        'p-limit concurrency, heartbeats, a reaper for dead jobs, and SSE-streamed progress. Talks to the Anthropic SDK for extraction and generation.',
    },
    {
      path: 'apps/runtime',
      what: 'Fastify multi-tenant MCP host',
      detail:
        'Subdomain routing, an LRU config cache, in-process rate limiting and usage metering. Every tenant served from one process.',
    },
    {
      path: 'apps/web',
      what: 'Next.js 15 dashboard',
      detail:
        'React 19, Tailwind v4 on CSS-variable tokens, TanStack Query, Supabase auth, a fetch-based SSE consumer, and a cmdk command palette.',
    },
    {
      path: 'packages/*',
      what: 'Shared schemas and migrations',
      detail:
        'Zod contracts for endpoints, tools and jobs shared across all three services, plus six SQL migrations covering companies, servers, versions, secrets and usage.',
    },
  ],

  infra: ['Supabase Postgres', 'pgsodium', 'Anthropic Claude', 'Railway', 'Cloudflare'],

  status: {
    shipped:
      'The full ingest to deploy flow is wired end to end with live SSE in a job rail that follows you across pages. Command palette, mobile fallback, custom 404 and error boundary all in.',
    next: 'Workspace admin — members, API keys and webhooks — is still placeholder in the UI.',
  },
} as const;

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
  /* The one number that makes the project worth reading about. */
  metric?: { value: string; label: string };
  stack: string[];
  repo: string;
  live?: string;
  mark: 'curve' | 'flare' | 'graph' | 'loop' | 'match' | 'block';
};

export const projects: Project[] = [
  {
    slug: 'chemml',
    title: 'chemML',
    kind: 'Reactor surrogate · IIT Kharagpur ML hackathon',
    year: '2026',
    blurb:
      'The training data was a stiff ODE solver, not noisy plant data — so rather than regress on 150 rows I identified the reactor itself, recovering the differential equations and their six physical constants by inverse modelling. The recovered physics explains why 37 rows sit at exactly zero yield: a crossover temperature at 450 K above which the side reaction runs away.',
    metric: { value: '4.21', label: '10-fold CV RMSE, against 18.44 for the best black-box model' },
    stack: ['Python', 'SciPy', 'Differential evolution', 'NumPy'],
    repo: 'https://github.com/gaurav10gg/chemML',
    mark: 'curve',
  },
  {
    slug: 'solar-flare-detector',
    title: 'solar-flare-detector',
    kind: 'Aditya-L1 flare nowcasting and forecasting',
    year: '2026',
    blurb:
      'Forecasts solar flares from the SoLEXS soft X-ray and HEL1OS hard X-ray instruments on Aditya-L1. I found the rolling windows feeding the forecaster were centred, meaning they peeked into the future, and rebuilt the entire feature set as trailing-only. Skill dropped slightly and became honest. A precision-targeted operating point cut false alarms from 2,453 a day to 129.',
    metric: { value: '14.5 min', label: 'Mean warning lead across 23 days of leave-one-day-out CV' },
    stack: ['Python', 'FastAPI', 'scikit-learn', 'React', 'Plotly'],
    repo: 'https://github.com/gaurav10gg/solar-flare-detector',
    mark: 'flare',
  },
  {
    slug: 'devshowcase',
    title: 'DevShowcase',
    kind: 'Developer project discovery platform',
    year: '2026',
    blurb:
      'A place for developers to publish projects and get real feedback through upvotes and comments. Fifteen REST endpoints behind JWT auth and role-based access control, with Prisma queries tuned after profiling. Went through a 150-person beta before public release.',
    metric: { value: '150+', label: 'Beta testers, zero critical post-launch bugs' },
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React'],
    repo: 'https://github.com/gaurav10gg/devshowcase-frontend',
    live: 'https://devshowcase-frontend.vercel.app',
    mark: 'graph',
  },
  {
    slug: 'agentx',
    title: 'AgentX',
    kind: 'Local-first personal AI agent',
    year: '2026',
    blurb:
      'You send natural language; a ReAct loop reasons, calls a tool, observes, and repeats. It reaches Gmail, Calendar, Contacts, search, alarms and a scheduler. Delayed tasks persist to SQLite, so "remind me in an hour" survives a process restart. Adding a new external service went from hours to under thirty minutes.',
    metric: { value: '15+', label: 'Task types executed autonomously' },
    stack: ['Python', 'FastAPI', 'AsyncIO', 'SQLite', 'ReAct'],
    repo: 'https://github.com/gaurav10gg/AgentX',
    mark: 'loop',
  },
  {
    slug: 'job-matcher',
    title: 'LinkedIn Job Matcher',
    kind: 'Resume-driven job discovery',
    year: '2026',
    blurb:
      'Reads your resume, generates targeted search queries from it, scrapes LinkedIn with Playwright, and ranks the results by relevance to your actual skills instead of by keyword overlap.',
    stack: ['Python', 'FastAPI', 'Playwright', 'NLP', 'Ollama'],
    repo: 'https://github.com/gaurav10gg/AI-Powered-LinkedIn-Job-Matcher',
    mark: 'match',
  },
  {
    slug: 'descroll',
    title: 'DeScroll',
    kind: 'Browser extension',
    year: '2026',
    blurb:
      'Removes YouTube Shorts and Instagram Reels from the web. A small, deliberately boring extension that solves one problem completely — built after noticing how much of my own day the infinite scroll was taking.',
    stack: ['JavaScript', 'Chrome Extensions'],
    repo: 'https://github.com/gaurav10gg/descroll',
    live: 'https://descroll.vercel.app',
    mark: 'block',
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Role = {
  company: string;
  org?: string;
  title: string;
  period: string;
  mode: string;
  credential?: string;
  credentialUrl?: string;
  live?: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: 'Hatch',
    org: 'hatchmcp',
    title: 'Founder & engineer',
    period: 'Jun 2026 — Present',
    mode: 'Puducherry',
    current: true,
    live: 'https://hatchmcp.vercel.app/',
    bullets: [
      'Designing and building all three services: an Express API with an in-process job runner, a Fastify multi-tenant MCP runtime, and a Next.js 15 dashboard, over shared Zod contracts.',
      'Built the extraction pipeline that chunks a codebase, runs four concurrent Claude calls, and validates every response against a schema with an auto-fix retry loop.',
      'Ship deploys as a single atomic transaction — new version in, old one marked rolled back, pointer bumped, runtime cache busted — so a bad release is one click to undo.',
    ],
  },
  {
    company: 'Tynari',
    org: 'formerly Printeast',
    title: 'Full Stack Developer Intern',
    period: 'Apr 2026 — Jun 2026',
    mode: 'Remote',
    credential: 'Internship certificate',
    credentialUrl: 'https://drive.google.com/file/d/1QWL351Q6f83zpWJdrp7foUCt6Dcy7KJ2/view?usp=sharing',
    bullets: [
      'Designed and built a Niche Generator that surfaces 50+ product and market opportunities, integrated directly into the seller dashboard.',
      'Shipped an AI-enabled Chrome extension wired to platform backend services, cutting an estimated 40% of manual seller workflow.',
      'Architected the product catalogue schema for 1000+ SKUs, structured for scale and tuned for query performance.',
      'Resolved 15+ bugs across the codebase while working on performance and code quality.',
    ],
  },
  {
    company: 'Brand Labs Ventures LLP',
    title: 'Development Intern',
    period: 'Jan 2026 — Apr 2026',
    mode: 'Remote',
    credential: 'Letter of recommendation',
    bullets: [
      'Engineered 10+ production RESTful APIs in FastAPI covering authentication, data management and core product flows, holding sub-200ms responses.',
      'Unified file handling, data pipelines and three third-party integrations into one full-stack workflow, removing cross-team handoff delays.',
      'Automated ingestion from 5+ external sources with validation and storage, cutting an estimated 60% of manual processing time.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Stack & education                                                   */
/* ------------------------------------------------------------------ */

export const stack = [
  {
    group: 'Languages',
    items: ['TypeScript', 'Python', 'JavaScript', 'Java', 'SQL', 'C'],
  },
  {
    group: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express', 'Fastify', 'REST', 'JWT', 'SSE', 'Zod'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'TanStack Query', 'Radix', 'Vite'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'Supabase', 'Prisma', 'MongoDB', 'SQLite', 'Neon'],
  },
  {
    group: 'AI',
    items: ['Anthropic Claude', 'MCP', 'ReAct agents', 'scikit-learn', 'NLP'],
  },
  {
    group: 'Operations',
    items: ['Docker', 'Railway', 'Vercel', 'Cloudflare', 'CI/CD', 'Postman'],
  },
] as const;

export const education = [
  {
    school: 'National Institute of Technology, Puducherry',
    qualification: 'B.Tech, Computer Science and Engineering',
    period: 'Aug 2025 — Present',
    note: 'Second year',
  },
  {
    school: 'Vivekananda School, CBSE',
    qualification: 'Class XII · Physics, Chemistry, Mathematics',
    period: 'Jul 2022 — May 2024',
    note: 'CGPA 9.4 / 10',
  },
] as const;
