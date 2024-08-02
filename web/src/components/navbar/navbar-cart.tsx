"use client";

import { formatPrice } from "@/functions/format-price";
import { useCartStore } from "@/stores/use-cart-store";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { CartProducts } from "../cart-products";
import { Button } from "../ui/button";
import { NavbarNavigationMenu } from "./navbar-navigation-menu";

export function NavbarCart() {
  const { total, length, clear } = useCartStore();
  const router = useRouter();

  return (
    <NavbarNavigationMenu.Item>
      <NavbarNavigationMenu.Trigger>
        <ShoppingCart className="size-5" />
        <small className="flex items-center justify-center rounded bg-secondary-600 px-1 py-0.5 text-xxs dark:bg-secondary-400">
          {length}
        </small>
      </NavbarNavigationMenu.Trigger>
      <NavbarNavigationMenu.Content
        align="right"
        className="w-full max-w-sm space-y-2"
      >
        <div className="flex items-center justify-between gap-2">
          <h6 className="text-nowrap font-semibold">
            Carrinho{" "}
            <small className="text-xs text-primary-600 dark:text-primary-400">
              {length} itens
            </small>
          </h6>
          <Button type="button" variant="ghost" size="sm" onClick={clear}>
            <Trash2 className="size-4" />
            Limpar carrinho
          </Button>
        </div>
        <CartProducts />
        <div className="flex items-center justify-between gap-2">
          <strong className="font-semibold">Total: {formatPrice(total)}</strong>
          <Button
            type="button"
            size="sm"
            className="text-primary-50"
            onClick={() => router.push("/store/cart")}
          >
            <ShoppingCart className="size-4" />
            Finalizar compra
          </Button>
        </div>
      </NavbarNavigationMenu.Content>
    </NavbarNavigationMenu.Item>
  );
}
