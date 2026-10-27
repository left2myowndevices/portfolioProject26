export type NavigationItem = {
  id: "skills" | "tools" | "experience" | "contact";
  label: string;
};

export type ProductMark = {
  color?: string;
  label: string;
  slug?: string;
  src?: string;
};

export const linkedInUrl = "https://linkedin.com/in/jessica-draper-249437a7";
export const resumePath = "/assets/draperResume0226.pdf";

export const navigationItems: NavigationItem[] = [
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = ["home", ...navigationItems.map((item) => item.id)];

export const productMarks: Record<string, ProductMark> = {
  React: { slug: "react", label: "R", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", label: "N", color: "FFFFFF" },
  TypeScript: { slug: "typescript", label: "TS", color: "3178C6" },
  "Tailwind CSS": { slug: "tailwindcss", label: "T", color: "06B6D4" },
  Figma: { slug: "figma", label: "F", color: "F24E1E" },
  Storybook: { slug: "storybook", label: "S", color: "FF4785" },
  "Node.js": { slug: "nodedotjs", label: "N", color: "5FA04E" },
  PostgreSQL: { slug: "postgresql", label: "P", color: "4169E1" },
  AWS: { label: "AWS" },
  Docker: { slug: "docker", label: "D", color: "2496ED" },
  Jest: { slug: "jest", label: "J", color: "C21325" },
  Cypress: { slug: "cypress", label: "C", color: "69D3A7" },
  Vitest: { slug: "vitest", label: "V", color: "6E9F18" },
  Playwright: { src: "https://playwright.dev/img/playwright-logo.svg", label: "P" },
  GitHub: { slug: "github", label: "GH", color: "FFFFFF" },
  "Visual Studio Code": { slug: "vscodium", label: "VS", color: "2F80ED" },
  Claude: { slug: "anthropic", label: "C", color: "D4A27F" },
  Codex: { label: "AI" },
  "Product strategy": { label: "PS" },
  "UX/UI design": { label: "UX" },
  "Interaction design": { label: "ID" },
  "Information architecture": { label: "IA" },
  Accessibility: { label: "A11Y" },
  Performance: { label: "P" },
  "Code review": { label: "CR" },
  "REST APIs": { label: "API" },
};

export const skillGroups = [
  { title: "Product & UX", skills: ["Product strategy", "UX/UI design", "Interaction design", "Information architecture", "Figma"] },
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Storybook"] },
  { title: "Full stack", skills: ["Node.js", "PostgreSQL", "REST APIs", "AWS", "Docker"] },
  { title: "Quality", skills: ["Accessibility", "Performance", "Vitest", "Playwright", "Code review"] },
];

export const frameworksAndTools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
  "Storybook",
  "Jest",
  "Cypress",
  "Vitest",
  "Playwright",
  "GitHub",
  "Visual Studio Code",
  "Claude",
  "Codex",
];

export const experience = [
  {
    period: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "OpenYield",
    detail: "Own frontend architecture and delivery for production-critical trading workflows, from UX decisions through React, API, and data-layer implementation.",
  },
  {
    period: "2024 - 2025",
    role: "Senior Software Engineer",
    company: "Atlantic Casualty Insurance",
    detail: "Delivered frontend and platform enhancements for insurance systems, strengthening maintainability and release confidence across customer and internal tools.",
  },
  {
    period: "2021 - 2024",
    role: "Full Stack Developer",
    company: "The Bank of London",
    detail: "Built onboarding and payments workflows with React, TypeScript, Node.js, and AWS, alongside the automated coverage that made frequent releases safer.",
  },
];

export const approach = [
  [
    "01",
    "Understand the problem",
    "Start with the business objective, who is affected, and what a better outcome needs to look like.",
  ],
  [
    "02",
    "Design the system",
    "Turn that understanding into useful flows, clear interface decisions, and implementation boundaries that can hold up in production.",
  ],
  [
    "03",
    "Ship with care",
    "Build, test, and refine the work with an eye on what happens after launch, not just what looks good in a review.",
  ],
] as const;
