"use client";

import { Bell } from "lucide-react";
import { NavbarNavigationMenu } from "./navbar-navigation-menu";

export function NavbarNotificationsLink() {
  return (
    <NavbarNavigationMenu.Item>
      <NavbarNavigationMenu.Trigger>
        <Bell className="size-5" />
      </NavbarNavigationMenu.Trigger>
      <NavbarNavigationMenu.Content align="right">
        Notificações
      </NavbarNavigationMenu.Content>
    </NavbarNavigationMenu.Item>
  );
}
