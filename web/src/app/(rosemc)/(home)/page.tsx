import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Home</h1>
    </div>
  );
}
