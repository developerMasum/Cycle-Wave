import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../providers/theme-provider";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../../ui/dropdown-menu";

export const SidebarModeToggle = ({ collapsed }: { collapsed: boolean }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-center cursor-pointer rounded-md text-sm h-10 hover:bg-muted  ${
            collapsed
              ? "justify-center px-3.5 w-max"
              : "justify-start px-3 w-full"
          }`}
        >
          <span className="flex items-center">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            {!collapsed && <span className="ml-3">Theme</span>}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
