"use client";

import { cn } from "@/functions/cn";
import { dayjs } from "@/libs/dayjs";
import type { Notification } from "@/types/notification";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Bell, BellRing, CheckCheck } from "lucide-react";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { Link } from "../ui/link";
import { NavbarNavigationMenu } from "./navbar-navigation-menu";

interface INavbarNotificationsLink {
  notifications: Notification[];
  setNotifications: (notification: Notification[]) => void;
}

export function NavbarNotificationsLink({
  notifications,
  setNotifications,
}: INavbarNotificationsLink) {
  const [parent] = useAutoAnimate();
  const hasNewNotification = notifications.some(
    (notification) => notification.readAt === null,
  );

  function readAllUserNotifications() {
    notifications.forEach((notification) => {
      notification.readAt = new Date();
    });

    setNotifications([...notifications]);
  }

  return (
    <NavbarNavigationMenu.Item>
      <NavbarNavigationMenu.Trigger>
        {hasNewNotification ? (
          <BellRing className="size-5" />
        ) : (
          <Bell className="size-5" />
        )}
      </NavbarNavigationMenu.Trigger>
      <NavbarNavigationMenu.Content
        align="right"
        className="w-full max-w-sm space-y-2"
      >
        <div className="flex items-center justify-between gap-2">
          <h6 className="text-nowrap font-semibold">Notificações</h6>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={notifications.length === 0}
            onClick={readAllUserNotifications}
          >
            Marcar todas como lidas
            <CheckCheck className="size-4" />
          </Button>
        </div>
        <div
          ref={parent}
          className="divide-y divide-primary-300 dark:divide-primary-700"
        >
          {notifications.map((notification) => {
            const receivedAt = dayjs(notification.createdAt).fromNow();

            return (
              <NextLink
                key={notification.id}
                href={`/notifications/${notification.id}`}
                className={cn(
                  "flex items-center gap-2 bg-transparent p-2 outline-none transition-all hover:bg-primary-200 dark:hover:bg-primary-800",
                  "focus-visible:bg-primary-200 dark:focus-visible:bg-primary-800",
                )}
              >
                {notification.readAt === null ? (
                  <BellRing className="size-8 text-secondary-500" />
                ) : (
                  <Bell className="size-8 text-secondary-500" />
                )}
                <div className="flex-1">
                  <h6
                    data-read={notification.readAt !== null}
                    className="line-clamp-1 text-sm font-medium data-[read=true]:text-primary-600 dark:data-[read=true]:text-primary-400"
                  >
                    {notification.title}
                  </h6>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    {receivedAt}
                  </p>
                </div>
              </NextLink>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/notifications">Ver todas</Link>
        </div>
      </NavbarNavigationMenu.Content>
    </NavbarNavigationMenu.Item>
  );
}
