import type { Metadata } from "next";
import { AddToCard } from "./components/add-to-cart";

export const metadata: Metadata = {
  title: "Loja",
};

export default function Store() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Store</h1>
      <AddToCard />
    </div>
  );
}
