import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusBadge } from "./StatusBadge";
import { Metric, metricGroups } from "@/lib/mockData";
import { Search, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricsTableProps {
  metrics: Metric[];
}

export function MetricsTable({ metrics }: MetricsTableProps) {
  const [search, setSearch] = useState("");
  const [groupFilter, setGroupFilter] = useState<string>("all");

  const filteredMetrics = metrics.filter((metric) => {
    const matchesSearch = 
      metric.name.toLowerCase().includes(search.toLowerCase()) ||
      metric.group.toLowerCase().includes(search.toLowerCase());
    const matchesGroup = groupFilter === "all" || metric.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  const groups = metricGroups.map((g) => g.name);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search metrics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={groupFilter} onValueChange={setGroupFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Groups</SelectItem>
            {groups.map((group) => (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Group</TableHead>
              <TableHead>Metric</TableHead>
              <TableHead>Last Value</TableHead>
              <TableHead>Last Check-in</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>About</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>How to Improve</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMetrics.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No metrics found
                </TableCell>
              </TableRow>
            ) : (
              filteredMetrics.map((metric) => (
                <TableRow key={metric.id}>
                  <TableCell className="font-medium">{metric.group}</TableCell>
                  <TableCell>{metric.name}</TableCell>
                  <TableCell>
                    {metric.lastValue !== null 
                      ? `${metric.lastValue} ${metric.unit}`
                      : '—'
                    }
                  </TableCell>
                  <TableCell>
                    {metric.lastCheckIn 
                      ? new Date(metric.lastCheckIn).toLocaleDateString()
                      : '—'
                    }
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={metric.status} />
                  </TableCell>
                  <TableCell className="max-w-[150px]">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                          <Info className="h-4 w-4" />
                          <span className="text-sm truncate">{metric.about}</span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px]">
                        <p>{metric.about}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="max-w-[150px]">
                    <span className="text-sm text-muted-foreground line-clamp-2">
                      {metric.risk}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-[150px]">
                    <span className="text-sm text-muted-foreground line-clamp-2">
                      {metric.howToImprove}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
