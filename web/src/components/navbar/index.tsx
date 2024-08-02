"use client";

import { navbarLinks } from "@/constants/navbar-links";
import { makeNotification } from "@/factories/make-notification";
import { cn } from "@/functions/cn";
import { useCartStore } from "@/stores/use-cart-store";
import type { Notification } from "@/types/notification";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import { NavbarCart } from "./navbar-cart";
import { NavbarLink } from "./navbar-link";
import { NavbarNotificationsLink } from "./navbar-notifications";
import { NavbarProfileLink } from "./navbar-profile";
import { NavbarResponsiveMenu } from "./navbar-responsive-menu";

export function Navbar() {
  const { length } = useCartStore();
  const [notifications, setNotifications] = useState(() => {
    const notifications: Notification[] = [];

    for (let i = 0; i < 5; i++) {
      notifications.push(makeNotification());
    }

    return notifications;
  });

  return (
    <NavigationMenu.Root className="sticky top-0 z-50 w-screen border-b-2 border-secondary-600 bg-secondary-500 text-primary-50 shadow">
      <div className="relative mx-auto flex max-w-7xl justify-between px-6 max-lg:flex-col-reverse">
        <NavigationMenu.List className="flex max-lg:hidden">
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
        <NavigationMenu.List className="flex h-full">
          <NavbarResponsiveMenu />
          {length > 0 && <NavbarCart />}
          {notifications.length > 0 && (
            <NavbarNotificationsLink
              notifications={notifications}
              setNotifications={setNotifications}
            />
          )}
          <NavbarProfileLink />
        </NavigationMenu.List>
        <NavigationMenu.Viewport
          className={cn(
            "absolute left-6 right-6 top-full my-3",
            "data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn",
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
}
