import NextLink from "next/link";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const link = tv({
  base: [
    "w-fit outline-none transition-all hover:underline",
    "focus-within:underline",
    "active:brightness-90 dark:active:brightness-110",
  ],
  variants: {
    variant: {
      primary:
        "font-semibold text-secondary-500 hover:text-secondary-600 dark:hover:text-secondary-400",
      footer:
        "text-primary-400 focus-within:text-secondary-500 hover:text-secondary-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ILink
  extends ComponentProps<typeof NextLink>,
    VariantProps<typeof link> {}

export function Link({ className, variant, ...rest }: ILink) {
  return <NextLink className={link({ variant, className })} {...rest} />;
}
