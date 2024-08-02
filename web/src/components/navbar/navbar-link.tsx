"use client";

import { cn } from "@/functions/cn";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

interface INavbarLink extends ComponentProps<typeof Link> {}

export function NavbarLink({ className, ...rest }: INavbarLink) {
  const pathname = usePathname();

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          data-active={pathname === rest.href}
          className={cn(
            "flex items-center gap-2 px-3 py-4 font-medium outline-none transition-all",
            "hover:bg-secondary-600 focus:bg-secondary-600 data-[active=true]:bg-secondary-600",
            className,
          )}
          {...rest}
        />
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
