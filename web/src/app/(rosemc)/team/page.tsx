import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe",
};

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Team</h1>
    </div>
  );
}
