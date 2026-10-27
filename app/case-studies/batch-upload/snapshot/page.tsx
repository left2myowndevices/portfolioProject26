import BatchUploadWorkspace, { isRefinementPhase } from "@/components/batch-upload-workspace";

type SnapshotPageProps = {
  searchParams: Promise<{ phase?: string }>;
};

export default async function BatchUploadSnapshotPage({ searchParams }: SnapshotPageProps) {
  const { phase } = await searchParams;

  return <BatchUploadWorkspace phase={isRefinementPhase(phase) ? phase : "baseline"} />;
}
