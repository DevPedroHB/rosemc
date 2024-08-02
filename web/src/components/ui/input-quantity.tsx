import { Minus, Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputQuantity = tv({
  slots: {
    root: [
      "flex items-center gap-2 rounded border bg-transparent font-semibold shadow transition-all",
      "border-primary-300 hover:bg-primary-950/5 dark:border-primary-700 dark:hover:bg-primary-50/5",
    ],
    button: [
      "rounded outline-none transition-all",
      "focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-50 dark:focus-visible:ring-offset-primary-950",
      "active:brightness-90 dark:active:brightness-110",
      "disabled:cursor-not-allowed disabled:opacity-75",
    ],
    icon: "transition-all hover:text-secondary-500",
  },
  variants: {
    size: {
      sm: {
        root: "px-2 py-1 text-sm",
        icon: "size-3",
      },
      md: {
        root: "px-4 py-2",
        icon: "size-5",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IInputQuantity
  extends ComponentProps<"div">,
    VariantProps<typeof inputQuantity> {
  onIncrease: () => void;
  onDecrease: () => void;
}

export function InputQuantity({
  children,
  className,
  size,
  onDecrease,
  onIncrease,
  ...rest
}: IInputQuantity) {
  const { root, button, icon } = inputQuantity({ size });

  return (
    <div className={root({ className })} {...rest}>
      <button onClick={onDecrease} className={button()}>
        <Minus className={icon()} />
      </button>
      <span>{children}</span>
      <button onClick={onIncrease} className={button()}>
        <Plus className={icon()} />
      </button>
    </div>
  );
}
