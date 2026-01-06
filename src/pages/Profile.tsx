import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userProfile } from "@/lib/mockData";
import { User, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Profile() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  };

  return (
    <AppLayout title="Profile">
      <div className="max-w-2xl space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Your Profile
          </h2>
          <p className="text-muted-foreground mt-1">
            Manage your personal information and preferences.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Update your personal details here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue={userProfile.name.split(' ')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue={userProfile.name.split(' ')[1]}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={userProfile.email}
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  defaultValue={userProfile.dateOfBirth}
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue={userProfile.gender}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Height and Weight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    defaultValue={userProfile.height}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    defaultValue={userProfile.weight}
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Level</Label>
                <Select defaultValue={userProfile.activityLevel}>
                  <SelectTrigger id="activity">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sedentary">Sedentary</SelectItem>
                    <SelectItem value="Light">Light</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Very Active">Very Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Member Since (Read Only) */}
              <div className="space-y-2">
                <Label htmlFor="memberSince">Member Since</Label>
                <Input
                  id="memberSince"
                  value={new Date(userProfile.memberSince).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  disabled
                  className="bg-secondary/50"
                />
              </div>

              {/* Save Button */}
              <Button type="submit" className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
