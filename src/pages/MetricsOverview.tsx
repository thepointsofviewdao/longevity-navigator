import { AppLayout } from "@/components/AppLayout";
import { MetricsTable } from "@/components/MetricsTable";
import { getAllMetrics } from "@/lib/mockData";

export default function MetricsOverview() {
  const allMetrics = getAllMetrics();

  return (
    <AppLayout title="Metrics Overview">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            All Health Metrics
          </h2>
          <p className="text-muted-foreground mt-1">
            A comprehensive view of all your tracked health metrics with filtering and search capabilities.
          </p>
        </div>

        <MetricsTable metrics={allMetrics} />
      </div>
    </AppLayout>
  );
}
