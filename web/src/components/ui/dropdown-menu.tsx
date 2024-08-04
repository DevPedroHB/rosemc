"use client";

import * as RDM from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const dropdownMenu = tv({
  slots: {
    content: [
      "rounded bg-primary-100 p-2 shadow dark:bg-primary-900",
      "will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade",
    ],
    arrow: "fill-primary-100 dark:fill-primary-900",
    radioItem: [
      "flex cursor-pointer items-center gap-2 rounded px-2 py-1 font-semibold outline-none transition-all",
      "hover:bg-primary-200 dark:hover:bg-primary-800",
      "focus-visible:bg-primary-200 dark:focus-visible:bg-primary-800",
    ],
    itemIndicator: "text-green-500",
    separator: "h-px w-full bg-primary-300 dark:bg-primary-700",
  },
});

interface IDropdownMenu extends VariantProps<typeof dropdownMenu> {}

const { content, arrow, radioItem, itemIndicator, separator } = dropdownMenu();

function DropdownMenuRoot(props: RDM.DropdownMenuProps) {
  return <RDM.Root {...props} />;
}

function DropdownMenuTrigger(props: RDM.DropdownMenuTriggerProps) {
  return <RDM.Trigger {...props} />;
}

interface IDropdownMenuContent
  extends RDM.DropdownMenuContentProps,
    IDropdownMenu {}

function DropdownMenuContent({
  children,
  className,
  ...rest
}: IDropdownMenuContent) {
  return (
    <RDM.Portal>
      <RDM.Content className={content({ className })} {...rest}>
        <RDM.Arrow className={arrow()} />
        {children}
      </RDM.Content>
    </RDM.Portal>
  );
}

function DropdownMenuRadioGroup(props: RDM.DropdownMenuRadioGroupProps) {
  return <RDM.RadioGroup {...props} />;
}

interface IDropdownMenuRadioItem
  extends RDM.DropdownMenuRadioItemProps,
    IDropdownMenu {}

function DropdownMenuRadioItem({
  children,
  className,
  ...rest
}: IDropdownMenuRadioItem) {
  return (
    <RDM.RadioItem className={radioItem({ className })} {...rest}>
      {children}
      <DropdownMenuItemIndicator />
    </RDM.RadioItem>
  );
}

interface IDropdownMenuItemIndicator
  extends RDM.DropdownMenuItemIndicatorProps,
    IDropdownMenu {}

function DropdownMenuItemIndicator({
  className,
  ...rest
}: IDropdownMenuItemIndicator) {
  return (
    <RDM.ItemIndicator className={itemIndicator({ className })} {...rest}>
      <Check className="size-5" />
    </RDM.ItemIndicator>
  );
}

interface IDropdownMenuSeparator
  extends RDM.DropdownMenuSeparatorProps,
    IDropdownMenu {}

function DropdownMenuSeparator({ className, ...rest }: IDropdownMenuSeparator) {
  return <RDM.Separator className={separator({ className })} {...rest} />;
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
};
