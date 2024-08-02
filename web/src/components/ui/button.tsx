import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "flex items-center justify-center gap-2 text-nowrap rounded font-semibold shadow outline-none transition-all",
    "focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-50 dark:focus-visible:ring-offset-primary-950",
    "active:brightness-90 dark:active:brightness-110",
    "disabled:cursor-not-allowed disabled:opacity-75",
  ],
  variants: {
    variant: {
      primary:
        "bg-secondary-500 text-primary-50 hover:bg-secondary-600 dark:hover:bg-secondary-400",
      outline:
        "border border-primary-300 bg-transparent hover:bg-primary-950/5 dark:border-primary-700 dark:hover:bg-primary-50/5",
      ghost:
        "bg-transparent shadow-none hover:bg-primary-950/5 dark:hover:bg-primary-50/5",
    },
    size: {
      xs: "px-1 py-0.5 text-xs",
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      full: "w-full py-2.5",
      icon: "aspect-square p-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface IButton
  extends ComponentProps<"button">,
    VariantProps<typeof button> {}

export function Button({
  children,
  className,
  variant,
  size,
  ...rest
}: IButton) {
  return (
    <button className={button({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
