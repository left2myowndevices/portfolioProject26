import Link from "next/link";
import type { Metadata } from "next";
import CaseStudyFacts from "@/components/case-study-facts";

export const metadata: Metadata = {
  title: "Engineering Intelligence Concept | Jess Draper",
  description: "A self-initiated concept for reading maintainability signals across application surfaces.",
};

export default function EngineeringIntelligencePage() {
  return (
    <main className="case-study-page">
      <header className="case-study-nav">
        <Link className="case-study-wordmark" href="/">Jess <span>Draper</span></Link>
        <Link className="case-study-back-link" href="/case-studies"><span>←</span> Case studies</Link>
      </header>

      <section className="case-study-hero">
        <p className="eyebrow">Operational tooling concept</p>
        <h1>Making engineering attention easier to act on.</h1>
        <p>I started this project to get a clearer view of how code quality and maintainability were changing across the app surfaces I worked on. The initial challenge was finding a fair way to read signals across different languages and codebases without flattening them into one misleading score. It became an evidence-first operating view that helps technical leaders understand where a conversation may be useful, while making the limits of the available data visible.</p>
      </section>

      <CaseStudyFacts facts={[
        { label: "Role", value: "Product design and frontend implementation" },
        { label: "Scope", value: "Self-initiated operational-tooling concept" },
        { label: "Focus", value: "Cross-language maintainability context and human judgment" },
      ]} />

      <section className="case-study-context">
        <div>
          <p className="eyebrow">The challenge</p>
          <h2>Surface meaningful engineering signals without reducing people to metrics.</h2>
        </div>
        <div className="case-study-copy">
          <p>Engineering leaders need a way to see changing technical conditions across workstreams, but activity counts, rankings, and unexplained scores create false confidence and can lead to unfair decisions. That gets harder when different languages, tools, and codebases expose different kinds of quality evidence.</p>
          <p>I began with a practical question from my own work: how can I see whether maintainability is improving or slipping across different application surfaces while respecting those differences? I framed the concept around a more useful follow-up: where should engineering attention go next, and what evidence supports that decision? The answer had to retain context, show uncertainty, and leave judgment with people.</p>
        </div>
      </section>

      <section className="case-study-phases" aria-label="Design decisions">
        <article className="case-study-phase">
          <div className="case-study-phase-copy">
            <p className="case-study-number">01</p>
            <h2>Start with decisions, not a dashboard</h2>
            <p>I organized the screen around work that may need attention, rather than individual output. The summary answers what changed, where to focus, and how much confidence the available sources support.</p>
          </div>
          <figure>
            <img src="/case-studies/engineering-intelligence/dashboard.png" alt="Synthetic engineering attention dashboard with anonymous delivery evidence and structural signals." />
          </figure>
        </article>

        <article className="case-study-phase">
          <div className="case-study-phase-copy">
            <p className="case-study-number">02</p>
            <h2>Keep evidence and limits in view</h2>
            <p>Each delivery pairs its engineering context with a concise structural signal and a suggested next move. Documentation-only work is explicitly marked as outside analysis scope instead of being treated as a gap or a failure.</p>
          </div>
          <figure>
            <img src="/case-studies/engineering-intelligence/dashboard.png" alt="Synthetic engineering attention dashboard showing evidence-led delivery comparisons." />
          </figure>
        </article>

        <article className="case-study-phase">
          <div className="case-study-phase-copy">
            <p className="case-study-number">03</p>
            <h2>Make human judgment the final step</h2>
            <p>The tool identifies an area to review, not a person to judge. The callout turns a signal into a transparent conversation prompt, preserving the distinction between observed evidence and a decision.</p>
          </div>
          <figure>
            <img src="/case-studies/engineering-intelligence/dashboard.png" alt="Synthetic engineering attention dashboard with actionable follow-up guidance." />
          </figure>
        </article>
      </section>

      <section className="case-study-takeaway">
        <p className="eyebrow">The takeaway</p>
        <h2>Use data to support judgment, not replace it.</h2>
        <p>This concept balances the usefulness of technical evidence with the responsibility to show its limits. The result is a clearer operating view that invites the right conversation instead of presenting a false conclusion.</p>
      </section>
    </main>
  );
}
