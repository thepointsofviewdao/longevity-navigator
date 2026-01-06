import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Moon, 
  Dumbbell, 
  Apple, 
  Pill, 
  Droplet, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Moon,
    title: "Sleep",
    description: "Track sleep duration, quality, deep sleep, and REM cycles for optimal recovery.",
  },
  {
    icon: Dumbbell,
    title: "Physical Activity",
    description: "Monitor steps, active minutes, VO2 max, and strength training sessions.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Log protein, fiber, and water intake to fuel your body properly.",
  },
  {
    icon: Pill,
    title: "Micronutrients",
    description: "Track vitamin D, B12, iron, and magnesium levels for optimal health.",
  },
  {
    icon: Droplet,
    title: "Blood Markers",
    description: "Monitor glucose, HbA1c, cholesterol, and triglycerides for metabolic health.",
  },
];

const benefits = [
  "Long-term strategic health monitoring",
  "Monthly, quarterly, and annual trends",
  "Professional-grade data visualization",
  "Actionable insights and recommendations",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-xl">HealthTrack</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-8">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Strategic Health Tracking</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
            Your Long-Term Health,
            <br />
            <span className="text-primary">Strategically Managed</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Move beyond daily logging. HealthTrack focuses on the metrics that matter for longevity,
            helping you understand monthly, quarterly, and annual health trends.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-status-normal flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Health Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track the metrics that science has shown to be most important for longevity and healthspan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
            <div className="rounded-lg border bg-primary/5 border-primary/20 p-6 flex flex-col items-center justify-center text-center">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                And More...
              </h3>
              <p className="text-muted-foreground mb-4">
                Body composition, mental health, and custom metrics.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/signup">Explore All</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of health-conscious individuals tracking their way to longevity.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/signup">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-2">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">HealthTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 HealthTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
