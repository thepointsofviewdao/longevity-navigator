import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { metricGroups } from "@/lib/mockData";
import { Settings, Moon, Activity, Apple, Pill, Droplet, Scale } from "lucide-react";

const groupIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Sleep': Moon,
  'Physical Activity': Activity,
  'Nutrition': Apple,
  'Micronutrients': Pill,
  'Blood Markers': Droplet,
  'Body Composition': Scale,
};

export default function MetricsSettings() {
  const [enabledMetrics, setEnabledMetrics] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    metricGroups.forEach(group => {
      group.metrics.forEach(metric => {
        initial[metric.id] = metric.enabled;
      });
    });
    return initial;
  });

  const toggleMetric = (metricId: string) => {
    setEnabledMetrics(prev => ({
      ...prev,
      [metricId]: !prev[metricId],
    }));
  };

  const getGroupStats = (groupName: string) => {
    const group = metricGroups.find(g => g.name === groupName);
    if (!group) return { enabled: 0, total: 0 };
    const enabled = group.metrics.filter(m => enabledMetrics[m.id]).length;
    return { enabled, total: group.metrics.length };
  };

  const totalEnabled = Object.values(enabledMetrics).filter(Boolean).length;
  const totalMetrics = Object.keys(enabledMetrics).length;

  return (
    <AppLayout title="Metrics Settings">
      <div className="max-w-3xl space-y-6">
        {/* Summary Header */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Active Metrics Summary
            </CardTitle>
            <CardDescription>
              Configure which health metrics you want to track.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-foreground">
                Total Active Metrics
              </span>
              <span className="text-2xl font-bold text-primary">
                {totalEnabled} of {totalMetrics}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Metric Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Metric Categories</CardTitle>
            <CardDescription>
              Expand each category to enable or disable individual metrics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {metricGroups.map((group) => {
                const IconComponent = groupIcons[group.name] || Settings;
                const stats = getGroupStats(group.name);
                
                return (
                  <AccordionItem key={group.id} value={group.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{group.name}</span>
                        <span className="text-sm text-muted-foreground ml-auto mr-4">
                          {stats.enabled} of {stats.total} enabled
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2 pl-12">
                        {group.metrics.map((metric) => (
                          <div
                            key={metric.id}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="space-y-0.5">
                              <Label
                                htmlFor={metric.id}
                                className="text-sm font-medium cursor-pointer"
                              >
                                {metric.name}
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                {metric.about}
                              </p>
                            </div>
                            <Switch
                              id={metric.id}
                              checked={enabledMetrics[metric.id]}
                              onCheckedChange={() => toggleMetric(metric.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
