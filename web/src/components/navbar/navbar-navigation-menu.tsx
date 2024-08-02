"use client";

import * as RNM from "@radix-ui/react-navigation-menu";
import { tv, type VariantProps } from "tailwind-variants";

const navbarNavigationMenu = tv({
  slots: {
    item: "",
    trigger: [
      "flex h-full min-h-14 items-center gap-2 px-3 outline-none transition-all",
      "hover:bg-secondary-600 focus-visible:bg-secondary-600 data-[state=open]:bg-secondary-600",
    ],
    content: [
      "absolute rounded p-4 shadow",
      "data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft",
    ],
  },
  variants: {
    variant: {
      primary: {
        content:
          "bg-primary-100 text-zinc-900 dark:bg-primary-900 dark:text-zinc-100",
      },
      menu: {
        item: "hidden max-lg:mr-auto max-lg:flex",
        content: "bg-secondary-500 text-primary-50",
      },
    },
    align: {
      left: {
        content: "left-0",
      },
      right: {
        content: "right-0",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    align: "left",
  },
});

interface INavbarNavigationMenu
  extends VariantProps<typeof navbarNavigationMenu> {}

const { item, trigger, content } = navbarNavigationMenu();

interface INavbarItem
  extends RNM.NavigationMenuItemProps,
    INavbarNavigationMenu {}

function NavbarItem({ className, variant, align, ...rest }: INavbarItem) {
  return <RNM.Item className={item({ variant, align, className })} {...rest} />;
}

interface INavbarTrigger
  extends RNM.NavigationMenuTriggerProps,
    INavbarNavigationMenu {}

function NavbarTrigger({ className, variant, align, ...rest }: INavbarTrigger) {
  return (
    <RNM.Trigger className={trigger({ variant, align, className })} {...rest} />
  );
}

interface INavbarContent
  extends RNM.NavigationMenuContentProps,
    INavbarNavigationMenu {}

function NavbarContent({ className, variant, align, ...rest }: INavbarContent) {
  return (
    <RNM.Content className={content({ variant, align, className })} {...rest} />
  );
}

export const NavbarNavigationMenu = {
  Item: NavbarItem,
  Trigger: NavbarTrigger,
  Content: NavbarContent,
};
