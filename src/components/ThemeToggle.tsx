"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-16 h-8 rounded-full bg-foreground/10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-16 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors focus:outline-none"
      aria-label="Toggle theme"
    >
      <div 
        className={`absolute left-1 w-6 h-6 rounded-full bg-background flex items-center justify-center transition-transform duration-300 border border-foreground/10 shadow-sm ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-foreground" />
        )}
      </div>
    </button>
  );
}
