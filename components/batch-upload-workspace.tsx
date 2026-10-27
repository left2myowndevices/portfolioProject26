import BatchUploadDemo from "@/components/batch-upload-demo";

export const refinementPhases = ["baseline", "surfaces", "affordances", "final"] as const;

export type RefinementPhase = (typeof refinementPhases)[number];

type BatchUploadWorkspaceProps = {
  phase?: RefinementPhase;
};

export function isRefinementPhase(value: string | undefined): value is RefinementPhase {
  return refinementPhases.includes(value as RefinementPhase);
}

export default function BatchUploadWorkspace({ phase = "final" }: BatchUploadWorkspaceProps) {
  const phaseIndex = refinementPhases.indexOf(phase);
  const refinementClasses = [
    phaseIndex >= 1 && "is-surface-refined",
    phaseIndex >= 2 && "is-affordance-refined",
    phaseIndex >= 3 && "is-code-refined",
    phaseIndex >= 3 && "is-alignment-refined",
  ].filter(Boolean).join(" ");

  return (
    <main className={`interface-upload-page ${refinementClasses}`}>
      <section className="interface-upload-container">
        <header className="interface-upload-header">
          <div>
            <h1>Data Upload</h1>
            <p>Paste formatted data for review or send a CSV file for processing.</p>
          </div>
          <button className="interface-history-button" type="button">
            View history
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 8h9m-4-4 4 4-4 4" />
            </svg>
          </button>
        </header>
        <BatchUploadDemo />
      </section>
    </main>
  );
}
