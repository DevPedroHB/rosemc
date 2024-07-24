import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  slots: {
    root: [
      "flex w-full items-center gap-2 rounded border border-primary-300 px-4 py-2 font-medium shadow transition-all dark:border-primary-700",
      "focus-within:border-secondary-300 focus-within:ring-4 focus-within:ring-secondary-100 dark:focus-within:border-secondary-700 dark:focus-within:ring-secondary-900/20",
      "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-75",
    ],
    control: [
      "flex-1 border-0 bg-transparent p-0 placeholder-primary-400 outline-none dark:placeholder-primary-600",
      "disabled:cursor-not-allowed",
    ],
    slot: "text-primary-400 dark:text-primary-600",
  },
  variants: {
    variant: {
      ghost: {
        root: "bg-transparent",
      },
      search: {
        root: "bg-primary-50 dark:bg-primary-950 focus-within:ring-0",
      },
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});
const { root, control, slot } = input();

interface IInputRoot extends ComponentProps<"div">, VariantProps<typeof root> {}

function InputRoot({ children, className, variant, ...rest }: IInputRoot) {
  return (
    <div className={root({ variant, className })} {...rest}>
      {children}
    </div>
  );
}

interface IInputControl
  extends ComponentProps<"input">,
    VariantProps<typeof control> {}

function InputControl({ className, variant, ...rest }: IInputControl) {
  return <input className={control({ variant, className })} {...rest} />;
}

interface IInputSlot extends ComponentProps<"div">, VariantProps<typeof slot> {}

function InputSlot({ children, className, variant, ...rest }: IInputSlot) {
  return (
    <div className={slot({ variant, className })} {...rest}>
      {children}
    </div>
  );
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Slot: InputSlot,
};
