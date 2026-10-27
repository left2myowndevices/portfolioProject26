import type { Metadata } from "next";
import BackToTop from "@/components/back-to-top";
import CaseStudyFacts from "@/components/case-study-facts";
import CaseStudyHeader from "@/components/case-study-header";

export const metadata: Metadata = {
  title: "Dense Upload Flow Refinement | Jess Draper",
  description: "An anonymized workflow refinement focused on clearer high-density data entry.",
};

const phases = [
  {
    number: "01",
    title: "Start with the structure that already works",
    copy: "I started with a direct upload flow that made the rules and the two entry paths clear. That is a good foundation for dense work, so I kept the structure intact and focused the refinements on how each part of the page reads.",
    image: "baseline.png",
    alt: "Baseline data upload workflow with format rules, sample data, and two input methods.",
  },
  {
    number: "02",
    title: "Make the working areas easier to recognize",
    copy: "I tightened the page hierarchy and gave the file drop area and text input a quiet surface fill. The change is subtle, but it makes the places where someone can work feel distinct from the supporting guidance without adding a layer of cards.",
    image: "surfaces.png",
    alt: "Data upload workflow with refined labels and quiet background surfaces for data entry.",
  },
  {
    number: "03",
    title: "Strengthen the input affordances",
    copy: "I changed the file target to a dashed outline and gave it a brighter response on hover. I also turned the divider between file upload and pasted data into one continuous rail with a small OR marker, so the two options feel connected but clearly separate.",
    image: "affordances.png",
    alt: "Data upload workflow with a dashed file drop target and centered OR divider.",
  },
  {
    number: "04",
    title: "Finish the details that support faster scanning",
    copy: "I set the sample data apart as a code block and aligned the vertical divisions across the screen. The final pass lets the page hold a lot of information without asking someone to work to understand where to look or what they can do next.",
    image: "final.png",
    alt: "Final refined data upload workflow with aligned divisions and code-formatted sample data.",
  },
  {
    number: "05",
    title: "Make interaction feedback easy to notice",
    copy: "I gave the pasted-data field a clear focus treatment and the file target a brighter drag state. Those signals make the current work surface obvious without adding permanent visual noise to the page.",
    image: "interaction-states.png",
    alt: "Final data upload workflow showing focused pasted-data input and active file drop target states.",
  },
  {
    number: "06",
    title: "Confirm when the work is ready to review",
    copy: "Once valid data is present, the screen confirms the number of lines ready and enables the next action. That keeps the transition into review clear and makes the disabled state feel purposeful rather than passive.",
    image: "ready-to-review.png",
    alt: "Data upload workflow with sample data entered, status confirmation, and enabled review button.",
  },
];

export default function BatchUploadCaseStudyPage() {
  return (
    <main className="case-study-page">
      <CaseStudyHeader />

      <section className="case-study-hero">
        <p className="eyebrow">Workflow refinement</p>
        <h1>Making a dense upload flow easier to use.</h1>
        <p>I refined a solid data-upload foundation without overdesigning it. The focus was on clearer work surfaces, more honest affordances, and visual hierarchy that supports quick, careful input.</p>
      </section>

      <CaseStudyFacts facts={[
        { label: "Role", value: "Product design and frontend refinement" },
        { label: "Scope", value: "Anonymized high-density internal workflow" },
        { label: "Focus", value: "Input clarity, cognitive load, and review readiness" },
      ]} />

      <section className="case-study-context">
        <div>
          <p className="eyebrow">The challenge</p>
          <h2>Keep the work direct while reducing the effort it takes to read the screen.</h2>
        </div>
        <div className="case-study-copy">
          <p>I was refining a high-density data-entry experience where speed and accuracy matter. The goal was to reduce cognitive load by making the required format, input options, and path into review easy to understand at a glance.</p>
          <p>I kept the layout flat because it already respected the task. I avoided extra cards and controls that could make static information look interactive. Instead, I used spacing, type, and a small number of intentional surfaces to guide attention.</p>
        </div>
      </section>

      <section className="case-study-phases" aria-label="Design refinements">
        {phases.map((phase) => (
          <article className="case-study-phase" key={phase.number}>
            <div className="case-study-phase-copy">
              <p className="case-study-number">{phase.number}</p>
              <h2>{phase.title}</h2>
              <p>{phase.copy}</p>
            </div>
            <figure>
              <img src={`/case-studies/batch-upload/${phase.image}`} alt={phase.alt} />
            </figure>
          </article>
        ))}
      </section>

      <section className="case-study-takeaway">
        <p className="eyebrow">The takeaway</p>
        <h2>Use hierarchy to make dense work feel clear, not decorative.</h2>
        <p>The final screen is still direct, but the work surfaces now read immediately. That leaves people free to focus on the data instead of the interface.</p>
      </section>
      <BackToTop />
    </main>
  );
}
