import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const card = tv({
  base: "w-full rounded bg-primary-100 p-4 shadow dark:bg-primary-900 text-primary-900 dark:text-primary-100",
});

interface ICard extends ComponentProps<"div">, VariantProps<typeof card> {}

export function Card({ className, ...rest }: ICard) {
  return <div className={card({ className })} {...rest} />;
}
