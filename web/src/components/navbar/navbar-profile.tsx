"use client";

import { User2 } from "lucide-react";
import { NavbarNavigationMenu } from "./navbar-navigation-menu";

export function NavbarProfileLink() {
  return (
    <NavbarNavigationMenu.Item>
      <NavbarNavigationMenu.Trigger>
        <User2 className="size-5" />
        Visitante
      </NavbarNavigationMenu.Trigger>
      <NavbarNavigationMenu.Content align="right">
        Perfil
      </NavbarNavigationMenu.Content>
    </NavbarNavigationMenu.Item>
  );
}
