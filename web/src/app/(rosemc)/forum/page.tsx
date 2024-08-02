import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fórum",
};

export default function Forum() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Forum</h1>
    </div>
  );
}
