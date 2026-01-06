import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { metricGroups } from "@/lib/mockData";
import { Download, Upload, FileText, FileJson, Table, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function MassUpload() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleGroupToggle = (groupName: string) => {
    setSelectedGroups(prev => 
      prev.includes(groupName)
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const handleDownloadTemplate = () => {
    toast({
      title: "Template downloaded",
      description: `CSV template for ${selectedGroups.length || 'all'} group(s) downloaded.`,
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    toast({
      title: "File received",
      description: "Processing your upload... (demo mode)",
    });
  };

  const handleFileSelect = () => {
    toast({
      title: "File selected",
      description: "Processing your upload... (demo mode)",
    });
  };

  return (
    <AppLayout title="Mass Upload">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Template Download */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Download CSV Template
              </CardTitle>
              <CardDescription>
                Get a template file with the correct format for your selected metric groups.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {metricGroups.map((group) => (
                  <div key={group.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={group.id}
                      checked={selectedGroups.includes(group.name)}
                      onCheckedChange={() => handleGroupToggle(group.name)}
                    />
                    <Label htmlFor={group.id} className="text-sm cursor-pointer">
                      {group.name}
                    </Label>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleDownloadTemplate}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Template
                {selectedGroups.length > 0 && ` (${selectedGroups.length} groups)`}
              </Button>
            </CardContent>
          </Card>

          {/* File Upload Zone */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Data File
              </CardTitle>
              <CardDescription>
                Drag and drop your file or click to browse.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleFileSelect}
                className={`
                  border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
                  transition-colors
                  ${isDragging 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                  }
                `}
              >
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-1">
                  {isDragging ? 'Drop your file here' : 'Drag & drop your file here'}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse from your computer
                </p>
                <Button variant="outline" size="sm">
                  Select File
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - File Guide */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="h-5 w-5 text-primary" />
                File Upload Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Supported Formats */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Supported Formats</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <FileText className="h-8 w-8 text-status-normal" />
                    <div>
                      <p className="font-medium text-sm">CSV</p>
                      <p className="text-xs text-muted-foreground">Comma-separated values</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <FileJson className="h-8 w-8 text-status-warning" />
                    <div>
                      <p className="font-medium text-sm">JSON</p>
                      <p className="text-xs text-muted-foreground">JavaScript Object Notation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <Table className="h-8 w-8 text-status-neutral" />
                    <div>
                      <p className="font-medium text-sm">Excel</p>
                      <p className="text-xs text-muted-foreground">.xlsx and .xls files</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Columns */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Required Columns</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">metric_id</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">value</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">date</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">time</code>
                    <span className="text-xs">(optional)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">notes</code>
                    <span className="text-xs">(optional)</span>
                  </li>
                </ul>
              </div>

              {/* Tips */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use ISO date format (YYYY-MM-DD)</li>
                  <li>• Numeric values only in value column</li>
                  <li>• Max file size: 10MB</li>
                  <li>• Up to 1000 rows per upload</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
