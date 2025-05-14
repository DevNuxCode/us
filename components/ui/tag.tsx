import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ 
  children, 
  active = false, 
  onClick,
  className 
}: TagProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
        active 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}