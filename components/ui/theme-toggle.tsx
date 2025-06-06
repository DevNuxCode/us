"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full w-10 h-10"
    >
      {theme === "dark" ? (
        <Sun  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100"/>
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-240 scale-100 transition-all dark:rotate-0 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}