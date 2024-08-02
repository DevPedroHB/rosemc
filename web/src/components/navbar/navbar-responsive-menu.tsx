"use client";

import { navbarLinks } from "@/constants/navbar-links";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { NavbarLink } from "./navbar-link";
import { NavbarNavigationMenu } from "./navbar-navigation-menu";

export function NavbarResponsiveMenu() {
  return (
    <NavbarNavigationMenu.Item variant="menu">
      <NavbarNavigationMenu.Trigger>
        <Menu className="size-5" />
      </NavbarNavigationMenu.Trigger>
      <NavbarNavigationMenu.Content variant="menu" align="left">
        <NavigationMenu.List className="flex flex-col">
          {navbarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavbarLink key={link.label} href={link.path}>
                <Icon className="size-5" />
                {link.label}
              </NavbarLink>
            );
          })}
        </NavigationMenu.List>
      </NavbarNavigationMenu.Content>
    </NavbarNavigationMenu.Item>
  );
}
