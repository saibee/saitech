export const experiences = [
  {
    period: "Feb 2024 – Present",
    company: "EVERSANA India Pvt Ltd",
    role: "Senior Team Lead – Development",
    location: "Pune, India",
    description: "Leading frontend engineering for enterprise pharma platforms. Driving architecture reviews, AI-assisted development workflows, and offshore coordination with US/EU stakeholders. Managing 10 engineers across 3 concurrent projects.",
    tags: ["Next.js", "React", "Sitecore", "Leadership", "AI"],
  },
  {
    period: "Jan 2017 – Jan 2024",
    company: "Intouch Peerless (EVERSANA)",
    role: "Team Lead",
    location: "Mumbai / Pune",
    description: "Led delivery of 5+ enterprise web platforms on Magnolia CMS & Sitecore. Owned hiring, mentoring, sprint planning and client partnerships across US & European markets.",
    tags: ["Magnolia CMS", "Sitecore", "React", "Agile"],
  },
  {
    period: "Aug 2015 – Nov 2016",
    company: "Accenture",
    role: "Team Lead",
    location: "Mumbai",
    description: "Team lead for large-scale digital transformation programs. Coordinated cross-functional teams and ensured quality delivery for Fortune 500 clients.",
    tags: ["Enterprise", "JavaScript", "Leadership"],
  },
  {
    period: "Jan 2011 – Aug 2015",
    company: "NayaMode Solutions",
    role: "Senior Web Developer",
    location: "Mumbai",
    description: "Built responsive web applications and CMS-driven sites. Specialized in frontend engineering and integration with enterprise backends.",
    tags: ["JavaScript", "CMS", "Frontend"],
  },
  {
    period: "May 2008 – Jan 2011",
    company: "Freelancing",
    role: "Web Designer & Developer",
    location: "Remote",
    description: "Independent consulting for SMBs and agencies — branding, websites, and e-commerce builds. Built foundation in full-stack delivery and client management.",
    tags: ["Freelance", "UI/UX", "Web"],
  },
  {
    period: "Feb 2003 – Apr 2008",
    company: "IMS Learning Resources Pvt Ltd",
    role: "Web UI/UX Designer",
    location: "Mumbai",
    description: "Crafted UI/UX for education portals, marketing sites and internal tools. Early adoption of web standards and accessibility practices.",
    tags: ["UI/UX", "Design Systems"],
  },
  {
    period: "Aug 2000 – Jan 2003",
    company: "India Internet Learning Venture Pvt Ltd",
    role: "Web Designer",
    location: "Mumbai",
    description: "Pioneered web design for e-learning products in early 2000s India. Hand-coded HTML/CSS and Flash interactions.",
    tags: ["Web Design", "E-learning"],
  },
  {
    period: "Jan 1996 – Jul 2000",
    company: "Graphiti Multimedia Pvt Ltd",
    role: "3D Graphics Animator (Post production)",
    location: "Mumbai",
    description: "3D animation and post-production for broadcast & advertising. Worked on Maya, 3D Studio, After Effects and linear editing suites.",
    tags: ["3D", "Post Production", "Animation"],
  },
  {
    period: "Feb 1995 – Oct 1995",
    company: "Magna Publishing Co Ltd",
    role: "Desktop Publishing Operator (Print)",
    location: "Mumbai",
    description: "Desktop publishing for Stardust & Savvy magazines. Typesetting, layout and pre-press on QuarkXPress & PageMaker.",
    tags: ["Print", "DTP"],
  },
];

export const projects = [
  {
    slug: "pharma-enterprise-portal",
    title: "Global Pharma Enterprise Portal",
    category: "Enterprise • Sitecore + Next.js",
    excerpt: "Headless Sitecore platform serving 12 markets with personalized HCP experiences.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    year: "2024",
    stack: ["Next.js", "Sitecore XM Cloud", "Vercel", "Tailwind"],
    description: "Led architecture & delivery for a multi-market pharma portal on Sitecore XM Cloud + Next.js. Implemented personalization, A/B testing, and AI-assisted content workflows. Result: 40% faster page loads and unified design system across brands.",
    link: "#",
    highlights: ["12 locales", "ISR + Edge", "99.9% uptime"]
  },
  {
    slug: "magnolia-design-system",
    title: "Magnolia CMS Design System",
    category: "Design System • Magnolia CMS",
    excerpt: "Reusable component library powering 5 brands with consistent governance.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
    year: "2022",
    stack: ["Magnolia CMS", "React", "Storybook", "Figma"],
    description: "Created an enterprise design system on Magnolia CMS with React components, token-driven theming, and authoring-friendly dialogs. Enabled marketing teams to ship pages 3x faster.",
    link: "#",
    highlights: ["50+ components", "Figma to code", "Author experience"]
  },
  {
    slug: "ai-content-workflow",
    title: "AI-Assisted Content Workflow",
    category: "AI • Next.js + Node.js",
    excerpt: "LLM-powered pipeline that auto-generates SEO briefs and CMS payloads.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    year: "2024",
    stack: ["Next.js", "Node.js", "OpenAI", "Clerk"],
    description: "Built internal tool that ingests brand guidelines and generates CMS-ready JSON via LLMs, with human-in-loop approval and Clerk auth. Cut content production time by 60%.",
    link: "#",
    highlights: ["LLM", "Human-in-loop", "Clerk SSO"]
  },
  {
    slug: "ecommerce-replatform",
    title: "E-commerce Replatform",
    category: "E-commerce • Headless",
    excerpt: "Migrated legacy monolith to headless commerce with sub-second TTFB.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    year: "2021",
    stack: ["Next.js", "Node.js", "Algolia", "Stripe"],
    description: "Led replatform from monolith to headless Next.js + Node microservices. Introduced Algolia search, Stripe payments and edge caching. Grew conversion +18%.",
    link: "#",
    highlights: ["Headless", "+18% conversion", "Edge cache"]
  },
  {
    slug: "education-portal-ux",
    title: "Education Portal UX Refresh",
    category: "UX • React",
    excerpt: "Redesign of student dashboard improving task completion by 32%.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    year: "2019",
    stack: ["React", "Figma", "Analytics"],
    description: "UX audit and redesign for an education SaaS dashboard. Simplified IA, added progressive disclosure and accessibility upgrades to WCAG 2.1 AA.",
    link: "#",
    highlights: ["+32% completion", "WCAG AA", "Research led"]
  },
  {
    slug: "3d-motion-reel",
    title: "3D Motion & Post-Production Reel",
    category: "Post Production • 3D",
    excerpt: "Early career broadcast motion graphics and 3D animation compilation.",
    image: "https://images.unsplash.com/photo-1536243287037-7f144477cb88?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1536243287037-7f144477cb88?w=600&q=80",
    year: "1999",
    stack: ["Maya", "After Effects", "3D Studio"],
    description: "Selected broadcast and advertising work from Graphiti Multimedia — title animations, product renders and compositing for Indian television in the late 90s.",
    link: "#",
    highlights: ["Broadcast", "3D", "Compositing"]
  },
];

export const blogPosts = [
  {
    slug: "ai-assisted-frontend",
    title: "AI-Assisted Frontend: What Actually Works in Production",
    excerpt: "Practical patterns from shipping LLM features in enterprise Next.js apps without sacrificing reliability.",
    date: "2026-02-18",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "Next.js", "Engineering"],
    content: `
## Why AI in frontend is different

Shipping LLMs in enterprise web platforms taught us that **prompt ≠ product**. You need guardrails, fallbacks and human-in-loop.

### 3 patterns that worked

1. **Structured JSON output** — Use function calling to get validated CMS payloads instead of raw markdown.
2. **Retrieval before generation** — Ground every prompt with brand tokens and design system context.
3. **Graceful degradation** — If the model is slow or down, fall back to cached templates. Never block render.

> "The best AI feature is the one users don't notice — it just makes the happy path faster."

### Code snippet

\`\`\`js
const payload = await generateWithSchema(prompt, cmsSchema);
// validated, typed, ready to publish
\`\`\`

We now review AI-generated PRs the same way we review human PRs — with architecture review and visual regression.
    `
  },
  {
    slug: "sitecore-headless-lessons",
    title: "5 Lessons from Headless Sitecore at Scale",
    excerpt: "From XM Cloud to Vercel edge — what we learned running 12 locales with personalization.",
    date: "2025-11-02",
    read: "8 min",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["Sitecore", "Architecture"],
    content: `
## Headless ≠ simpler

Headless Sitecore gives you freedom, but also responsibility for caching, preview and personalization.

**Key takeaways:**
- Use ISR + on-demand revalidation per locale, not full rebuilds.
- Keep Experience Editor live via visual editing bridge.
- Centralize tokens in a design system package shared by all brands.

Edge caching on Vercel cut p95 TTFB from 1.2s to 180ms.
    `
  },
  {
    slug: "managing-10-engineers",
    title: "Managing 10 Engineers Across 3 Projects Without Burnout",
    excerpt: "A lightweight operating system: hiring, mentoring and ruthless prioritization.",
    date: "2025-08-14",
    read: "7 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["Leadership", "Agile"],
    content: `
## The 3-board system

One board per project, one portfolio board for capacity. Daily stand-ups stay 12 minutes. Weekly architecture review is sacred — no feature PR merges without it.

Hiring tip: **hire for curiosity, teach the stack.** The best frontend engineers I hired came from print, 3D and backend — diversity of perspective beats framework trivia.
    `
  },
  {
    slug: "from-dtp-to-nextjs",
    title: "From DTP to Next.js: A 30-Year Journey Through Pixels",
    excerpt: "What print layout taught me about grids, and what 3D taught me about light.",
    date: "2025-06-30",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1536243287037-7f144477cb88?w=800&q=80",
    tags: ["Career", "Personal"],
    content: `
## Every medium teaches the same lesson

From QuarkXPress to Figma to Next.js — the tools changed, the fundamentals didn't: **hierarchy, whitespace and story**.

My first job was pasting Savvy magazine layouts. My latest is reviewing Next.js architecture for global pharma. Same craft, different canvas.
    `
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Next.js", "JavaScript (ESNext)", "Tailwind CSS", "Node.js"] },
  { group: "CMS / Enterprise", items: ["Sitecore XM Cloud", "Magnolia CMS", "Headless CMS", "Vercel", "Edge & ISR"] },
  { group: "Leadership", items: ["Team Lead (10)", "Hiring & Mentoring", "Agile Delivery", "Architecture Reviews", "Offshore Coordination"] },
  { group: "Craft", items: ["Design Systems", "AI-assisted Dev", "Git", "Performance", "Accessibility"] },
];
