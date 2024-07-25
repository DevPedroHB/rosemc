"use client";

import { themes } from "@/constants/themes";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/dropdown-menu";

interface IToggleTheme extends ComponentProps<typeof Button> {}

export function ToggleTheme(props: IToggleTheme) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button type="button" variant="ghost" size="icon" {...props}>
          <SunMoon className="size-5" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <DropdownMenu.RadioItem key={theme.id} value={theme.id}>
                <Icon className="size-5" />
                {theme.label}
              </DropdownMenu.RadioItem>
            );
          })}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
