import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const page = tv({
  slots: {
    root: "",
    column: "flex-1 space-y-4",
  },
  variants: {
    variant: {
      primary: {
        root: "space-y-4",
      },
      columns: {
        root: "flex flex-wrap gap-4",
      },
    },
    size: {
      sm: {
        column: "max-w-sm",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface IPage extends ComponentProps<"div">, VariantProps<typeof page> {}

const { root, column } = page();

function PageRoot({ className, variant, size, ...rest }: IPage) {
  return <div className={root({ variant, size, className })} {...rest} />;
}

function PageColumn({ className, variant, size, ...rest }: IPage) {
  return <div className={column({ variant, size, className })} {...rest} />;
}

export const Page = {
  Root: PageRoot,
  Column: PageColumn,
};
