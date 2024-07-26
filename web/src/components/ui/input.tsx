import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  slots: {
    root: [
      "relative flex w-full items-center gap-2 rounded border border-primary-300 px-4 py-2 font-medium shadow transition-all dark:border-primary-700",
      "focus-within:border-secondary-300 focus-within:ring-4 focus-within:ring-secondary-100 dark:focus-within:border-secondary-700 dark:focus-within:ring-secondary-900/20",
      "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-75",
    ],
    control: [
      "flex-1 border-0 bg-transparent p-0 placeholder-primary-400 outline-none dark:placeholder-primary-600",
      "disabled:cursor-not-allowed",
    ],
    slot: "text-primary-400 dark:text-primary-600",
    error: "absolute -bottom-3.5 left-0 text-[.625rem] text-red-500",
  },
  variants: {
    variant: {
      ghost: {
        root: "bg-transparent",
      },
      search: {
        root: "bg-primary-50 focus-within:ring-0 dark:bg-primary-950",
      },
      footer: {
        root: "border-primary-700 bg-transparent focus-within:border-secondary-700 focus-within:ring-secondary-900/20",
      },
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});
const { root, control, slot, error } = input();

interface IInputRoot extends ComponentProps<"div">, VariantProps<typeof root> {
  message?: string;
}

function InputRoot({
  children,
  className,
  variant,
  message,
  ...rest
}: IInputRoot) {
  return (
    <div className={root({ variant, className })} {...rest}>
      {children}
      {message && <InputError>{message}</InputError>}
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

interface IInputError
  extends ComponentProps<"small">,
    VariantProps<typeof error> {}

function InputError({ children, className, variant, ...rest }: IInputError) {
  return (
    <small className={error({ variant, className })} {...rest}>
      {children}
    </small>
  );
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Slot: InputSlot,
  Error: InputError,
};
