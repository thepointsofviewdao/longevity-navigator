import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { TrendDataPoint } from "@/lib/mockData";

interface MetricsChartProps {
  data: TrendDataPoint[];
  showRanges?: boolean;
  normalRange?: { min: number; max: number };
  warningRange?: { min: number; max: number };
}

export function MetricsChart({ 
  data, 
  showRanges = false,
  normalRange,
  warningRange,
}: MetricsChartProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatDate}
            className="text-xs fill-muted-foreground"
          />
          <YAxis className="text-xs fill-muted-foreground" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            labelFormatter={(label) => formatDate(label as string)}
          />
          
          {showRanges && normalRange && (
            <>
              <ReferenceLine
                y={normalRange.max}
                stroke="hsl(var(--status-normal))"
                strokeDasharray="5 5"
                label={{ value: 'Normal Max', position: 'right', fill: 'hsl(var(--status-normal))' }}
              />
              <ReferenceLine
                y={normalRange.min}
                stroke="hsl(var(--status-normal))"
                strokeDasharray="5 5"
                label={{ value: 'Normal Min', position: 'right', fill: 'hsl(var(--status-normal))' }}
              />
            </>
          )}
          
          {showRanges && warningRange && (
            <>
              <ReferenceLine
                y={warningRange.max}
                stroke="hsl(var(--status-warning))"
                strokeDasharray="3 3"
                label={{ value: 'Warning', position: 'right', fill: 'hsl(var(--status-warning))' }}
              />
              <ReferenceLine
                y={warningRange.min}
                stroke="hsl(var(--status-warning))"
                strokeDasharray="3 3"
              />
            </>
          )}
          
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
