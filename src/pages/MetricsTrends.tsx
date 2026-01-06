import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MetricsChart } from "@/components/MetricsChart";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { metricGroups, getAllMetrics, generateTrendData } from "@/lib/mockData";

export default function MetricsTrends() {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [selectedMetric, setSelectedMetric] = useState<string>("");
  const [showRanges, setShowRanges] = useState(false);

  const allMetrics = getAllMetrics();
  
  const filteredMetrics = selectedGroup === "all" 
    ? allMetrics 
    : allMetrics.filter(m => m.group === selectedGroup);

  const currentMetric = allMetrics.find(m => m.id === selectedMetric);
  const trendData = selectedMetric ? generateTrendData(selectedMetric) : [];

  return (
    <AppLayout title="Metrics Trends">
      <div className="space-y-6">
        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label>Select Group</Label>
                <Select value={selectedGroup} onValueChange={(value) => {
                  setSelectedGroup(value);
                  setSelectedMetric("");
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Groups" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Groups</SelectItem>
                    {metricGroups.map((group) => (
                      <SelectItem key={group.id} value={group.name}>
                        {group.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select Metric</Label>
                <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a metric" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredMetrics.map((metric) => (
                      <SelectItem key={metric.id} value={metric.id}>
                        {metric.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="show-ranges"
                  checked={showRanges}
                  onCheckedChange={setShowRanges}
                />
                <Label htmlFor="show-ranges" className="cursor-pointer">
                  Show Reference Ranges
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {currentMetric 
                ? `${currentMetric.name} Trend (Last 12 Months)`
                : "Select a metric to view trends"
              }
            </CardTitle>
            {currentMetric && (
              <p className="text-sm text-muted-foreground">
                {currentMetric.about} • Unit: {currentMetric.unit}
              </p>
            )}
          </CardHeader>
          <CardContent>
            {selectedMetric && trendData.length > 0 ? (
              <MetricsChart
                data={trendData}
                showRanges={showRanges}
                normalRange={currentMetric?.normalRange}
                warningRange={currentMetric?.warningRange}
              />
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                <div className="text-center">
                  <p className="text-lg font-medium">No Data to Display</p>
                  <p className="text-sm">Select a metric from the dropdown above to view its trend.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Legend */}
        {showRanges && selectedMetric && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reference Ranges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-status-normal border-dashed border-t-2 border-status-normal"></div>
                  <span className="text-sm text-muted-foreground">
                    Normal Range ({currentMetric?.normalRange.min} - {currentMetric?.normalRange.max} {currentMetric?.unit})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-status-warning border-dashed border-t-2 border-status-warning"></div>
                  <span className="text-sm text-muted-foreground">
                    Warning Zone
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-primary rounded"></div>
                  <span className="text-sm text-muted-foreground">
                    Your Data
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
