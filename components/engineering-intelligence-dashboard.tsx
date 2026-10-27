const summaryItems = [
  {
    label: "What changed",
    body: "Three connected deliveries were reviewed across product UI, service behavior, and documentation.",
  },
  {
    label: "Where to focus",
    body: "The workspace permissions workflow is the clearest review surface, with repeated policy logic across layers.",
  },
  {
    label: "Source confidence",
    body: "Change history and structural analysis are complete. Product context is linked where available.",
  },
];

const deliveries = [
  {
    title: "Notification delivery resilience",
    meta: "Client application · Event service",
    detail: "Added clearer retry behavior for delayed notifications and aligned client messaging with event status.",
    metric: "Stable complexity",
    note: "12 changed modules · maintainability +6.4 · 0 new duplicate-code candidates",
    tone: "good",
  },
  {
    title: "Workspace permission cleanup",
    meta: "Admin UI · API · Policy layer",
    detail: "Consolidated permission checks across workspace invitations and access-update flows.",
    metric: "Review before expansion",
    note: "18 changed modules · maintainability -4.1 · 2 repeated policy candidates",
    tone: "watch",
  },
  {
    title: "Release handoff guide",
    meta: "Documentation experience",
    detail: "Documented the permission flow and recovery guidance for support and implementation teams.",
    metric: "Analysis not applicable",
    note: "6 documentation files · no production-code analysis inferred",
    tone: "neutral",
  },
];

const coverage = [
  ["Change history", "Three linked deliveries reviewed against their parent revisions."],
  ["Work records", "Product context connected for the two implementation deliveries."],
  ["Structural analysis", "Changed functions and duplication candidates are available for review."],
  ["Discussion context", "Relevant release notes included where they clarify implementation scope."],
];

export default function EngineeringIntelligenceDashboard() {
  return (
    <main className="review-dashboard">
      <aside className="review-sidebar">
        <p className="review-brand"><span>AR</span>Engineering attention</p>
        <p className="review-sidebar-label">Review window</p>
        <p className="review-window">Sample week<br />Spring 2026</p>
        <nav aria-label="Review sections" className="review-nav">
          <a href="#review-summary">Summary</a>
          <a href="#review-deliveries">Deliveries</a>
          <a href="#review-structure">Structural signals</a>
          <a href="#review-coverage">Source coverage</a>
        </nav>
        <p className="review-sidebar-footer">Synthetic portfolio prototype<br />Evidence-led operating review</p>
      </aside>

      <section className="review-main">
        <div className="review-topline">
          <span>Engineering attention review</span>
          <span><i />Sample completed week</span>
        </div>
        <div className="review-content">
          <header className="review-heading">
            <div>
              <p>Weekly consolidation</p>
              <h1>Engineering attention</h1>
            </div>
            <p>This view surfaces evidence that may deserve a technical conversation. It does not score people or grade code.</p>
          </header>

          <section className="review-summary" id="review-summary" aria-label="Review summary">
            {summaryItems.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.body}</p></article>)}
          </section>

          <section className="review-section" id="review-deliveries">
            <div className="review-section-head"><h2>Included deliveries</h2><span>Full linked scope, not interface files only</span></div>
            <ol className="review-deliveries">
              {deliveries.map((delivery) => (
                <li key={delivery.title}>
                  <div><h3>{delivery.title}</h3><small>{delivery.meta}</small></div>
                  <p>{delivery.detail}</p>
                  <div className={`review-metric ${delivery.tone}`}><b>{delivery.metric}</b><span>{delivery.note}</span></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="review-section" id="review-structure">
            <div className="review-section-head"><h2>Structural signals</h2><span>Parent to merge, with context retained</span></div>
            <div className="review-signal-table" role="table" aria-label="Structural signal summary">
              <div role="row" className="review-signal-header"><span>Delivery</span><span>Signal</span><span>Suggested next move</span></div>
              <div role="row"><strong>Notification delivery resilience</strong><span className="review-positive">+6.4 maintainability · 0 candidates</span><span>Monitor through the next release.</span></div>
              <div role="row"><strong>Workspace permission cleanup</strong><span className="review-watch">-4.1 maintainability · 2 candidates</span><span>Review the shared boundary before the next expansion.</span></div>
              <div role="row"><strong>Release handoff guide</strong><span>Analysis not applicable</span><span>Keep implementation guidance aligned with the flow.</span></div>
            </div>
          </section>

          <section className="review-callout" aria-label="Actionable follow-up">
            <strong>Actionable follow-up:</strong> Review the repeated permissions policy logic during normal design and engineering review. The signal is a prompt for human judgment, not a conclusion.
          </section>

          <section className="review-section" id="review-coverage">
            <div className="review-section-head"><h2>Source coverage</h2><span>Limits stay visible beside the evidence</span></div>
            <div className="review-coverage">
              {coverage.map(([title, detail]) => <article key={title}><b>{title}</b><span>{detail}</span></article>)}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
