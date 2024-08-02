import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrinho",
};

export default function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Cart</h1>
    </main>
  );
}
