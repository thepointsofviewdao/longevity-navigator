import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { metricGroups, getAllMetrics } from "@/lib/mockData";
import { Upload, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function UploadData() {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedMetric, setSelectedMetric] = useState<string>("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState("09:00");
  const [notes, setNotes] = useState("");

  const allMetrics = getAllMetrics();
  const filteredMetrics = selectedGroup 
    ? allMetrics.filter(m => m.group === selectedGroup)
    : [];
  
  const currentMetric = allMetrics.find(m => m.id === selectedMetric);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Data uploaded successfully!",
      description: `${currentMetric?.name}: ${value} ${currentMetric?.unit}`,
    });
    // Reset form
    setValue("");
    setNotes("");
  };

  return (
    <AppLayout title="Upload Data">
      <div className="max-w-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Manual Data Entry
          </h2>
          <p className="text-muted-foreground mt-1">
            Enter a new health measurement manually.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              New Measurement
            </CardTitle>
            <CardDescription>
              Fill in the details below to record a new data point.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Group Selection */}
              <div className="space-y-2">
                <Label>Metric Group</Label>
                <Select 
                  value={selectedGroup} 
                  onValueChange={(value) => {
                    setSelectedGroup(value);
                    setSelectedMetric("");
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a group" />
                  </SelectTrigger>
                  <SelectContent>
                    {metricGroups.map((group) => (
                      <SelectItem key={group.id} value={group.name}>
                        {group.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Metric Selection */}
              <div className="space-y-2">
                <Label>Data Type (Metric)</Label>
                <Select 
                  value={selectedMetric} 
                  onValueChange={setSelectedMetric}
                  disabled={!selectedGroup}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={selectedGroup ? "Select a metric" : "Select a group first"} />
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

              {/* Value Input */}
              <div className="space-y-2">
                <Label htmlFor="value">
                  Value {currentMetric && `(${currentMetric.unit})`}
                </Label>
                <Input
                  id="value"
                  type="number"
                  step="any"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={currentMetric ? `Enter ${currentMetric.name}` : "Enter value"}
                  disabled={!selectedMetric}
                />
                {currentMetric && (
                  <p className="text-sm text-muted-foreground">
                    Valid range: {currentMetric.normalRange.min} - {currentMetric.warningRange.max} {currentMetric.unit}
                  </p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any relevant notes about this measurement..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full"
                disabled={!selectedMetric || !value}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Save Measurement
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
