import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function PlaceholderCard({ icon: Icon, title, description, className }: PlaceholderCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card))] p-12 text-center",
        className
      )}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(var(--secondary))]">
        <Icon className="w-7 h-7 text-[hsl(var(--primary))]" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))]">{title}</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1 max-w-sm">{description}</p>
      </div>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]">
        Em desenvolvimento
      </span>
    </div>
  );
}
