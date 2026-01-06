import { AppLayout } from "@/components/AppLayout";
import { SummaryCard } from "@/components/SummaryCard";
import { ActionCard } from "@/components/ActionCard";
import { getSummaryStats } from "@/lib/mockData";
import {
  Settings,
  Upload,
  TrendingUp,
  Table2,
  FileUp,
  BarChart3,
} from "lucide-react";

const actionCards = [
  {
    title: "Define Metrics",
    description: "Configure which health metrics to track and set your personal targets.",
    icon: Settings,
    href: "/settings",
    status: "11 of 23 metrics enabled",
  },
  {
    title: "Upload Data",
    description: "Manually enter new health measurements and observations.",
    icon: Upload,
    href: "/upload",
    status: "Last upload: Dec 31, 2025",
  },
  {
    title: "Review Trends",
    description: "Analyze your health data over time with interactive charts.",
    icon: TrendingUp,
    href: "/trends",
    status: "12 months of data",
  },
  {
    title: "Metrics Overview",
    description: "View all your metrics in a comprehensive data table.",
    icon: Table2,
    href: "/overview",
    status: "23 total metrics",
  },
  {
    title: "Mass Upload",
    description: "Import data from CSV, JSON, or Excel files for bulk updates.",
    icon: FileUp,
    href: "/mass-upload",
    status: "Supports CSV, JSON, Excel",
  },
  {
    title: "Health Reports",
    description: "Generate comprehensive health reports for your records.",
    icon: BarChart3,
    href: "/overview",
    status: "Coming soon",
  },
];

export default function Dashboard() {
  const stats = getSummaryStats();

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Welcome back, Alex
          </h2>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your health metrics and quick actions.
          </p>
        </div>

        {/* Summary Statistics */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Summary Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <SummaryCard label="Total Metrics" value={stats.total} status="total" />
            <SummaryCard label="Normal" value={stats.normal} status="normal" />
            <SummaryCard label="Warning" value={stats.warning} status="warning" />
            <SummaryCard label="Critical" value={stats.critical} status="critical" />
            <SummaryCard label="Neutral" value={stats.neutral} status="neutral" />
            <SummaryCard label="Not Measured" value={stats.none} status="none" />
          </div>
        </div>

        {/* Action Cards */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionCards.map((card) => (
              <ActionCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                href={card.href}
                status={card.status}
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
