import type { Metadata } from "next";
import { Suspense } from "react";
import { HomePagination } from "./components/home-pagination";

export const metadata: Metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Home</h1>
      <div className="flex w-full justify-center p-6">
        <Suspense>
          <HomePagination />
        </Suspense>
      </div>
    </div>
  );
}
