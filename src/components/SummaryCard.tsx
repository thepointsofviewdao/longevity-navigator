import { cn } from "@/lib/utils";
import type { MetricStatus } from "@/lib/mockData";

interface SummaryCardProps {
  label: string;
  value: number;
  status?: MetricStatus | 'total';
  className?: string;
}

const statusStyles: Record<string, string> = {
  total: 'border-primary/20 bg-primary/5',
  normal: 'border-status-normal/20 bg-status-normal/5',
  warning: 'border-status-warning/20 bg-status-warning/5',
  critical: 'border-status-critical/20 bg-status-critical/5',
  neutral: 'border-status-neutral/20 bg-status-neutral/5',
  none: 'border-status-none/20 bg-status-none/5',
};

const textStyles: Record<string, string> = {
  total: 'text-primary',
  normal: 'text-status-normal',
  warning: 'text-status-warning',
  critical: 'text-status-critical',
  neutral: 'text-status-neutral',
  none: 'text-status-none',
};

export function SummaryCard({ label, value, status = 'total', className }: SummaryCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4 transition-all hover:shadow-sm",
        statusStyles[status],
        className
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className={cn("text-3xl font-bold mt-1", textStyles[status])}>
        {value}
      </p>
    </div>
  );
}
