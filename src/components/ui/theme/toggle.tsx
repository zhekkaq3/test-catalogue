"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="text-accent-foreground bg-transparent hover:bg-accent hover:text-accent-foreground "
      >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
}
