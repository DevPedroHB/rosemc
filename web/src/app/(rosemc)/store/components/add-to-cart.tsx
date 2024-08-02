"use client";

import { Button } from "@/components/ui/button";
import { faker } from "@/libs/faker";
import { useCartStore } from "@/stores/use-cart-store";
import { ShoppingCart } from "lucide-react";

export function AddToCard() {
  const { add } = useCartStore();

  function handleAddToCart() {
    add({
      id: faker.string.uuid(),
      name: faker.commerce.product(),
      discount: faker.number.int({ min: 0, max: 10 }),
      price: Number(faker.commerce.price({ min: 1, max: 100, dec: 2 })),
      image: faker.image.url(),
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
