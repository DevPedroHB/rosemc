"use client";

import { cn } from "@/functions/cn";
import * as RDM from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";

function DropdownMenuRoot(props: RDM.DropdownMenuProps) {
  return <RDM.Root {...props} />;
}

function DropdownMenuTrigger(props: RDM.DropdownMenuTriggerProps) {
  return <RDM.Trigger {...props} />;
}

function DropdownMenuContent({
  children,
  className,
  ...rest
}: RDM.DropdownMenuContentProps) {
  return (
    <RDM.Portal>
      <RDM.Content
        className={cn(
          "rounded bg-primary-100 p-2 shadow dark:bg-primary-900",
          "data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
          className,
        )}
        {...rest}
      >
        <RDM.Arrow className="fill-primary-100 dark:fill-primary-900" />
        {children}
      </RDM.Content>
    </RDM.Portal>
  );
}

function DropdownMenuRadioGroup(props: RDM.DropdownMenuRadioGroupProps) {
  return <RDM.RadioGroup {...props} />;
}

function DropdownMenuRadioItem({
  children,
  className,
  ...rest
}: RDM.DropdownMenuRadioItemProps) {
  return (
    <RDM.RadioItem
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded px-2 py-1 font-semibold outline-none transition-all",
        "hover:bg-primary-200 dark:bg-primary-800",
        "focus-visible:bg-primary-200 dark:bg-primary-800",
        className,
      )}
      {...rest}
    >
      {children}
      <DropdownMenuItemIndicator />
    </RDM.RadioItem>
  );
}

function DropdownMenuItemIndicator({
  className,
  ...rest
}: RDM.DropdownMenuItemIndicatorProps) {
  return (
    <RDM.ItemIndicator className={cn("text-green-500", className)} {...rest}>
      <Check className="size-5" />
    </RDM.ItemIndicator>
  );
}

function DropdownMenuSeparator({
  className,
  ...rest
}: RDM.DropdownMenuSeparatorProps) {
  return (
    <RDM.Separator
      className={cn(
        "h-px w-full bg-primary-300 dark:bg-primary-700",
        className,
      )}
      {...rest}
    />
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
};
