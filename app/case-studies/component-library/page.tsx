import Link from "next/link";
import type { Metadata } from "next";
import CaseStudyFacts from "@/components/case-study-facts";
import ComponentLibraryShowcase from "@/components/component-library-showcase";

export const metadata: Metadata = {
  title: "Component Library | Jess Draper",
  description: "A case study about building and formalizing reusable React components across application surfaces.",
};

export default function ComponentLibraryPage() {
  return (
    <main className="case-study-page component-library-case">
      <header className="case-study-nav">
        <Link className="case-study-wordmark" href="/">Jess <span>Draper</span></Link>
        <Link className="case-study-back-link" href="/case-studies"><span>←</span> Case studies</Link>
      </header>

      <section className="case-study-hero">
        <p className="eyebrow">Component library</p>
        <h1>Building shared UI patterns from the work already happening in product.</h1>
        <p>I created reusable components inside the applications I was building, then brought the strongest patterns together into a typed React library. The goal was not a catalog for its own sake. It was to make common interactions more consistent, easier to maintain, and faster to use well across product surfaces.</p>
      </section>

      <CaseStudyFacts facts={[
        { label: "Role", value: "Product design and frontend engineering" },
        { label: "Scope", value: "Reusable components across internal application surfaces" },
        { label: "System", value: "Typed APIs, Storybook, tests, and package distribution" },
      ]} />

      <section className="case-study-context" id="library-problem">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Repeated interface work should not mean repeated decisions from scratch.</h2>
        </div>
        <div className="case-study-copy">
          <p>As application surfaces grew, the same interaction needs kept returning: form controls, selection patterns, feedback states, dense data views, chart behavior, and navigation. Building each one locally made it harder to preserve consistency and created more places for small behavior and accessibility differences to accumulate.</p>
          <p>I started by creating components where the product needed them. Once patterns had proven their value in context, I consolidated them into a shared library with documented props, reusable states, and a clearer path for other engineers to work from the same foundation.</p>
        </div>
      </section>

      <div id="library-system"><ComponentLibraryShowcase /></div>

      <section className="case-study-phases" id="library-approach" aria-label="Component library approach">
        <article className="case-study-phase component-library-phase">
          <div className="case-study-phase-copy"><p className="case-study-number">01</p><h2>Build in context first</h2><p>I treated application work as the proving ground. A component had to solve a real interaction problem before it earned a place in a shared system.</p></div>
          <div className="component-library-note"><span>From product need</span><b>Controls, feedback, tables, charts, and navigation patterns emerged from the workflows people already used.</b></div>
        </article>
        <article className="case-study-phase component-library-phase">
          <div className="case-study-phase-copy"><p className="case-study-number">02</p><h2>Make reuse intentional</h2><p>I defined typed APIs and predictable states so the components could be reused without recreating their behavior or styling decisions in every implementation.</p></div>
          <div className="component-library-note"><span>Shared contract</span><b>Typed props, deliberate variants, and documented behavior make a component easier to adopt and safer to change.</b></div>
        </article>
        <article className="case-study-phase component-library-phase">
          <div className="case-study-phase-copy"><p className="case-study-number">03</p><h2>Document and test the system</h2><p>Storybook made states and usage visible. Tests and accessibility tooling helped keep the library dependable as components evolved.</p></div>
          <div className="component-library-note"><span>Working system</span><b>Documentation, visual review, test coverage, and package tooling turn a folder of components into a maintainable shared capability.</b></div>
        </article>
      </section>

      <section className="case-study-takeaway" id="library-takeaway">
        <p className="eyebrow">The takeaway</p>
        <h2>Start with product work, then turn proven patterns into durable infrastructure.</h2>
        <p>A useful component library is not separate from product delivery. It captures the decisions that have already earned their place, so the next surface can begin with a stronger, more consistent foundation.</p>
      </section>
    </main>
  );
}
