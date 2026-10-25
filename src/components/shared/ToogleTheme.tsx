import { cn } from "cn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToogleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "h-8 w-8 border border-foreground rounded-md cursor-pointer",
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className={cn("p-1 h-full w-full")} />
      ) : (
        <Sun className={cn("p-1 h-full w-full")} />
      )}
    </div>
  );
}
