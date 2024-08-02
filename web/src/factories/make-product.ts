import { faker } from "@/libs/faker";
import type { Product } from "@/types/product";

export function makeProduct(override: Partial<Product> = {}) {
  const newProduct: Product = {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    discount: faker.number.int({ min: 0, max: 10 }),
    price: Number(faker.commerce.price({ min: 1, max: 100, dec: 2 })),
    image: faker.image.url(),
    ...override,
  };

  return newProduct;
}
