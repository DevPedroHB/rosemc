"use client";

import { formatPrice } from "@/functions/format-price";
import { usePaginate } from "@/hooks/use-paginate";
import { useCartStore } from "@/stores/use-cart-store";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Pagination } from "./pagination";
import { Button } from "./ui/button";
import { InputQuantity } from "./ui/input-quantity";

export function CartProducts() {
  const [parent] = useAutoAnimate();
  const { items, changeQuantity, remove } = useCartStore();

  const {
    items: products,
    page,
    setPage,
    total,
  } = usePaginate({
    initialItems: items,
    perPage: 5,
    param: "cartPage",
  });

  return (
    <div
      ref={parent}
      className="divide-y divide-primary-300 dark:divide-primary-700"
    >
      {products.map((product) => {
        return (
          <div key={product.id} className="flex items-center gap-2 py-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={480}
              className="size-16 rounded object-cover object-center"
            />
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="flex-1">{product.name}</span>
                <strong className="font-medium">
                  {product.discount > 0 && (
                    <>
                      <small className="text-xxs text-primary-600 line-through dark:text-primary-400">
                        {formatPrice(product.price)}
                      </small>{" "}
                    </>
                  )}
                  {formatPrice(product.discountedPrice!)}
                </strong>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-1 items-center gap-2">
                  <InputQuantity
                    size="sm"
                    className="text-xs"
                    onIncrease={() => changeQuantity(product.id, "increase")}
                    onDecrease={() => changeQuantity(product.id, "decrease")}
                  >
                    {product.quantity}
                  </InputQuantity>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => remove(product.id)}
                    className="text-xs"
                  >
                    <Trash2 className="size-3" />
                    Remover
                  </Button>
                </div>
                {product.discount > 0 && (
                  <small className="text-xxs uppercase text-primary-600 dark:text-primary-400">
                    {product.discount}% OFF
                  </small>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {total > 1 && (
        <div className="flex justify-center p-2">
          <Pagination
            total={total}
            current={page}
            onPageChange={setPage}
            param="cartPage"
          />
        </div>
      )}
    </div>
  );
}
