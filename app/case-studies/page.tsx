import Link from "next/link";
import type { Metadata } from "next";
import BackToTop from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "Case Studies | Jess Draper",
  description: "Selected product design and frontend engineering case studies by Jess Draper.",
};

const caseStudies = [
  {
    number: "01",
    eyebrow: "Component library",
    title: "Turning repeated product patterns into a shared system.",
    summary: "I built reusable components inside application surfaces, then formalized those patterns as a typed, documented React library.",
    detail: "Component APIs, Storybook, accessibility tooling, tests, and package distribution.",
    href: "/case-studies/component-library",
  },
  {
    number: "02",
    eyebrow: "Portfolio design system",
    title: "Building a portfolio that shows how I think and work.",
    summary: "A self-directed design system for presenting product design and frontend engineering work with a clear point of view.",
    detail: "Visual direction, information architecture, responsive behavior, and interaction design.",
    href: "/case-studies/portfolio-system",
  },
  {
    number: "03",
    eyebrow: "Operational tooling concept",
    title: "Making engineering attention easier to act on.",
    summary: "A self-initiated concept for reading maintainability signals across different application surfaces without turning people into metrics.",
    detail: "Evidence-first reporting, cross-language context, and human judgment.",
    href: "/case-studies/engineering-intelligence",
  },
  {
    number: "04",
    eyebrow: "Workflow refinement",
    title: "Making a dense upload flow easier to use.",
    summary: "An anonymized internal-workflow refinement that makes high-density data entry easier to scan, understand, and review.",
    detail: "Hierarchy, accessible affordances, and clear working surfaces.",
    href: "/case-studies/batch-upload",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="case-studies-index">
      <header className="case-study-nav">
        <Link className="case-study-wordmark" href="/">Jess <span>Draper</span></Link>
        <Link className="case-study-back-link case-study-home-link" href="/"><span>↙</span> Home</Link>
      </header>

      <section className="case-studies-index-hero">
        <p className="eyebrow">Case studies</p>
        <h1>Work shaped by clear questions and careful iteration.</h1>
        <p>Four projects that show how I approach reusable systems, product interfaces, engineering context, and high-density workflow design.</p>
      </section>

      <section className="case-studies-list" aria-label="Case studies">
        {caseStudies.map((caseStudy) => (
          <article className="case-study-preview" key={caseStudy.number}>
            <p className="case-study-number">{caseStudy.number}</p>
            <div>
              <p className="eyebrow">{caseStudy.eyebrow}</p>
              <h2>{caseStudy.title}</h2>
            </div>
            <div className="case-study-preview-detail">
              <p>{caseStudy.summary}</p>
              <p>{caseStudy.detail}</p>
            </div>
            <Link className="case-study-link" href={caseStudy.href}>Read case study <span>↗</span></Link>
          </article>
        ))}
      </section>
      <BackToTop />
    </main>
  );
}
