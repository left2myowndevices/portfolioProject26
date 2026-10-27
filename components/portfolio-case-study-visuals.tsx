export function ColorComparison() {
  return (
      <section className="portfolio-visual-section" aria-labelledby="color-comparison">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Color comparison</p>
          <h2 id="color-comparison">A clearer palette made the hierarchy easier to read.</h2>
          <p>The visual shift was not about making the site brighter. It was about giving headings, supporting copy, and interactive elements enough separation to do their jobs.</p>
        </div>
        <div className="portfolio-comparison-grid">
          <figure>
            <img src="/case-studies/portfolio-system/early-copper-direction.png" alt="Early deep-purple and copper portfolio direction." />
            <figcaption><b>Early direction</b><span>Deep purple, white, and copper.</span></figcaption>
          </figure>
          <figure>
            <img src="/portfolio-home.png" alt="Current deep navy, cream, and lavender portfolio system." />
            <figcaption><b>Current system</b><span>Deep navy, cream, and lavender.</span></figcaption>
          </figure>
        </div>
      </section>
  );
}

export function TypeSpecimen() {
  return (
    <section className="portfolio-visual-section" aria-labelledby="type-specimen">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Typography specimen</p>
          <h2 id="type-specimen">A sans serif for direction, a serif for reflection.</h2>
        </div>
        <div className="portfolio-type-specimen">
          <div>
            <p className="type-specimen-label">Manrope · Display and interface</p>
            <p className="type-specimen-display">Design the product.<br />Build the experience.</p>
            <p className="type-specimen-interface">CONTENTS &nbsp; CASE STUDIES &nbsp; CONTACT</p>
          </div>
          <div>
            <p className="type-specimen-label">Noto Serif · Reading</p>
            <p className="type-specimen-reading">I use visual systems to help complex work feel understandable, then make sure the details hold up in the browser.</p>
          </div>
        </div>
    </section>
  );
}

export function ComponentStates() {
  return (
    <section className="portfolio-visual-section" aria-labelledby="component-states">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Component states</p>
          <h2 id="component-states">Interaction cues that clarify what happens next.</h2>
          <p>These are the small moments that carry the system from a visual direction into a usable interface.</p>
        </div>
        <div className="portfolio-state-strip">
          <article className="state-card state-card-menu">
            <p>Navigation</p>
            <div className="state-menu-orbit"><span>Contents</span><b>01 Skills</b><b>02 Tools</b><b>03 Experience</b></div>
            <small>Active section index</small>
          </article>
          <article className="state-card">
            <p>Action</p>
            <span className="state-button">Explore my toolkit <b>↘</b></span>
            <small>Outlined hover state</small>
          </article>
          <article className="state-card">
            <p>Form input</p>
            <label className="state-input"><span>Email</span><b>you@company.com</b></label>
            <small>Focused field treatment</small>
          </article>
          <article className="state-card">
            <p>Page control</p>
            <span className="state-top">↑</span>
            <small>Footer-aware return control</small>
          </article>
        </div>
    </section>
  );
}

export function ResponsiveViews() {
  return (
    <section className="portfolio-visual-section" aria-labelledby="responsive-views">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Responsive behavior</p>
          <h2 id="responsive-views">One system, composed for the available space.</h2>
        </div>
        <div className="portfolio-responsive-views">
          <figure><img src="/portfolio-home.png" alt="Desktop view of the portfolio homepage." /><figcaption>Desktop: the hero uses a wide text column and portrait balance.</figcaption></figure>
          <figure><img src="/case-studies/portfolio-system/portfolio-mobile.png" alt="Mobile view of the portfolio homepage." /><figcaption>Mobile: the content stacks, while the hierarchy stays intact.</figcaption></figure>
        </div>
    </section>
  );
}

export function LayoutAnatomy() {
  return (
    <section className="portfolio-visual-section" aria-labelledby="layout-anatomy">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Layout anatomy</p>
          <h2 id="layout-anatomy">A few rules keep the long page coherent.</h2>
          <p>The system relies on a deliberate content measure, repeated dividers, and a small set of spacing intervals rather than decorative containers.</p>
        </div>
        <div className="portfolio-layout-anatomy" aria-label="Annotated layout anatomy diagram">
          <span className="anatomy-width">1180px max content width</span>
          <span className="anatomy-heading">Section heading</span>
          <span className="anatomy-copy">Readable copy column</span>
          <span className="anatomy-line">Shared divider rule</span>
          <i className="anatomy-guide anatomy-guide-left" /><i className="anatomy-guide anatomy-guide-right" /><i className="anatomy-rule" />
        </div>
    </section>
  );
}

export function IterationContactSheet() {
  return (
    <section className="portfolio-visual-section portfolio-evolution-sheet" aria-labelledby="iteration-sheet">
        <div className="portfolio-visual-heading">
          <p className="eyebrow">Iteration contact sheet</p>
          <h2 id="iteration-sheet">A direction becomes a system when it works at every scale.</h2>
        </div>
        <div className="portfolio-contact-sheet">
          <figure><img src="/case-studies/portfolio-system/early-copper-direction.png" alt="Early copper portfolio direction." /><figcaption><b>01</b> Early visual direction</figcaption></figure>
          <figure className="contact-sheet-system"><div><span>Canvas</span><span>Surface</span><span>Accent</span><b>Design the product.<br />Build the experience.</b></div><figcaption><b>02</b> System foundation</figcaption></figure>
          <figure><img src="/portfolio-home.png" alt="Current portfolio homepage." /><figcaption><b>03</b> Current portfolio</figcaption></figure>
        </div>
    </section>
  );
}
