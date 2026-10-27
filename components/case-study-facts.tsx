type CaseStudyFact = {
  label: string;
  value: string;
};

type CaseStudyFactsProps = {
  facts: CaseStudyFact[];
};

export default function CaseStudyFacts({ facts }: CaseStudyFactsProps) {
  return (
    <section className="case-study-facts" aria-label="Case study at a glance">
      {facts.map((fact) => (
        <div key={fact.label}>
          <span>{fact.label}</span>
          <p>{fact.value}</p>
        </div>
      ))}
    </section>
  );
}
