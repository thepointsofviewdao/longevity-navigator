import { cn } from "@/lib/utils";
import type { MetricStatus } from "@/lib/mockData";

interface StatusBadgeProps {
  status: MetricStatus;
  className?: string;
}

const statusConfig: Record<MetricStatus, { label: string; className: string }> = {
  normal: {
    label: 'Normal',
    className: 'bg-status-normal text-status-normal-foreground',
  },
  warning: {
    label: 'Warning',
    className: 'bg-status-warning text-status-warning-foreground',
  },
  critical: {
    label: 'Critical',
    className: 'bg-status-critical text-status-critical-foreground',
  },
  neutral: {
    label: 'Neutral',
    className: 'bg-status-neutral text-status-neutral-foreground',
  },
  none: {
    label: 'No Data',
    className: 'bg-status-none text-status-none-foreground',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
