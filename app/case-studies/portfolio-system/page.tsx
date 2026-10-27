import type { Metadata } from "next";
import BackToTop from "@/components/back-to-top";
import CaseStudyFacts from "@/components/case-study-facts";
import CaseStudyHeader from "@/components/case-study-header";
import {
  ColorComparison,
  ComponentStates,
  IterationContactSheet,
  LayoutAnatomy,
  ResponsiveViews,
  TypeSpecimen,
} from "@/components/portfolio-case-study-visuals";
import { portfolioColorTokens, portfolioLayoutTokens, portfolioTypeTokens } from "@/lib/portfolio-tokens";

export const metadata: Metadata = {
  title: "Portfolio Design System | Jess Draper",
  description: "A self-directed portfolio design system spanning visual direction, responsive behavior, and frontend implementation.",
};

const decisions = [
  {
    number: "01",
    title: "Set a visual system with enough range to feel personal",
    copy: "I moved away from a dark, copper-led direction toward a deep navy foundation, warm cream type, and lavender accent. The shift gave the site stronger contrast and a clearer point of view without turning it into a trend piece.",
  },
  {
    number: "02",
    title: "Make the portfolio show the whole product surface",
    copy: "The structure makes room for product and UX thinking, frontend implementation, frameworks, and career experience. That balance reflects how I work: I design the experience, partner with business, and bring the work through production.",
  },
  {
    number: "03",
    title: "Use interaction to orient, not distract",
    copy: "The Contents control tracks the active section and expands into a radial index when someone needs to move through the page. The motion is restrained and purposeful, helping people navigate a long page without competing with the work itself.",
  },
];

export default function PortfolioSystemCaseStudyPage() {
  return (
    <main className="case-study-page">
      <CaseStudyHeader />

      <section className="case-study-hero">
        <p className="eyebrow">Portfolio design system</p>
        <h1>Building a portfolio that shows how I think and work.</h1>
        <p>I treated this site as a product surface, not a static resume. The goal was to create a focused, maintainable system that communicates design maturity and frontend capability in the same experience.</p>
      </section>

      <CaseStudyFacts facts={[
        { label: "Role", value: "Product design and frontend implementation" },
        { label: "Scope", value: "Self-directed portfolio design system" },
        { label: "Evidence", value: "A live, responsive portfolio and its documented tokens" },
      ]} />

      <section className="case-study-context">
        <div>
          <p className="eyebrow">The challenge</p>
          <h2>Make a multidisciplinary practice legible without making the page feel crowded.</h2>
        </div>
        <div className="case-study-copy">
          <p>I needed the site to speak to product design and frontend roles while avoiding generic portfolio patterns. It had to feel authored, make room for technical credibility, and still be easy for a hiring manager to scan quickly.</p>
          <p>I built a small design system around typography, spacing, color, component states, and a few intentional interactions. That gave every section a shared language while leaving room for the work to lead.</p>
        </div>
      </section>

      <section className="portfolio-system-showcase" aria-label="Portfolio homepage preview">
        <img src="/portfolio-home.png" alt="Jess Draper portfolio homepage showing the deep navy, cream, and lavender design system." />
      </section>

      <section className="case-study-phases" aria-label="Design system decisions">
        <article className="case-study-phase case-study-phase-text">
          <div className="case-study-phase-copy">
            <p className="case-study-number">{decisions[0].number}</p>
            <h2>{decisions[0].title}</h2>
          </div>
          <p>{decisions[0].copy}</p>
        </article>
      </section>
      <ColorComparison />
      <IterationContactSheet />

      <section className="case-study-phases" aria-label="Information architecture decisions">
        <article className="case-study-phase case-study-phase-text">
          <div className="case-study-phase-copy">
            <p className="case-study-number">{decisions[1].number}</p>
            <h2>{decisions[1].title}</h2>
          </div>
          <p>{decisions[1].copy}</p>
        </article>
      </section>
      <TypeSpecimen />
      <LayoutAnatomy />
      <ResponsiveViews />

      <section className="case-study-phases" aria-label="Interaction design decisions">
        <article className="case-study-phase case-study-phase-text">
            <div className="case-study-phase-copy">
              <p className="case-study-number">{decisions[2].number}</p>
              <h2>{decisions[2].title}</h2>
            </div>
            <p>{decisions[2].copy}</p>
          </article>
      </section>
      <ComponentStates />

      <section className="case-study-takeaway">
        <p className="eyebrow">The takeaway</p>
        <h2>Let the portfolio itself demonstrate the quality of the work.</h2>
        <p>A personal site can be a credible product artifact when its decisions are intentional, its interactions are useful, and its system is strong enough to grow with the work it presents.</p>
      </section>

      <details className="portfolio-specification-disclosure">
        <summary>View current design specification <span>+</span></summary>
        <section className="portfolio-specification" aria-labelledby="design-specification">
          <div className="portfolio-specification-heading">
            <p className="eyebrow">Current design specification</p>
            <h2 id="design-specification">A compact system for consistent decisions.</h2>
            <p>These tokens are the practical building blocks behind the current portfolio. They keep new sections and case studies aligned without adding a large component library.</p>
          </div>
          <div className="portfolio-token-groups">
            <section><h3>Color</h3><ul className="color-token-list">{portfolioColorTokens.map((token) => (<li key={token.name}><span className="color-swatch" style={{ background: token.value }} aria-hidden="true" /><span><b>{token.name}</b><small>{token.role}</small></span><code>{token.value}</code></li>))}</ul></section>
            <section><h3>Typography</h3><ul className="type-token-list">{portfolioTypeTokens.map((token) => (<li key={token.name}><b>{token.name}</b><span className={token.family === "Noto Serif" ? "type-sample-serif" : "type-sample-sans"}>{token.family}</span><small>{token.use}. Weights: {token.weights}.</small></li>))}</ul></section>
            <section><h3>Layout</h3><ul className="layout-token-list">{portfolioLayoutTokens.map((token) => (<li key={token.name}><b>{token.name}</b><span>{token.value}</span><small>{token.role}</small></li>))}</ul></section>
          </div>
        </section>
      </details>
      <BackToTop />
    </main>
  );
}
