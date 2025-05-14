import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground mb-3">{subtitle}</p>
      )}
      {description && (
        <p className="max-w-3xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}