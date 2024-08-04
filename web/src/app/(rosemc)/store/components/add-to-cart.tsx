"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <Card className="flex flex-col items-center gap-2">
      <h1 className="text-lg font-medium">Testando o carrinho</h1>
      <Button type="button" onClick={handleAddToCart}>
        <ShoppingCart className="size-5" />
        Adicionar ao carrinho
      </Button>
    </Card>
  );
}
