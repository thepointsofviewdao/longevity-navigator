import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status?: string;
  className?: string;
}

export function ActionCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  status,
  className 
}: ActionCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group flex flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-md hover:border-primary/50",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
      {status && (
        <p className="mt-4 text-xs text-muted-foreground border-t pt-3">
          {status}
        </p>
      )}
    </Link>
  );
}
