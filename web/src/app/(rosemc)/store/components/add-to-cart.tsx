"use client";

import { Button } from "@/components/ui/button";
import { makeProduct } from "@/factories/make-product";
import { useCartStore } from "@/stores/use-cart-store";
import { ShoppingCart } from "lucide-react";

export function AddToCard() {
  const { add } = useCartStore();

  function handleAddToCart() {
    const newProduct = makeProduct();

    add({
      ...newProduct,
      quantity: 1,
    });
  }

  return (
    <Button type="button" onClick={handleAddToCart}>
      <ShoppingCart className="size-5" />
      Adicionar ao carrinho
    </Button>
  );
}
