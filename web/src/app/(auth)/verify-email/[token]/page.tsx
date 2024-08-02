import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verificar e-mail",
};

interface IVerifyEmail {
  params: {
    token: string;
  };
}

export default function VerifyEmail({ params }: IVerifyEmail) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page VerifyEmail</h1>
      <pre>{JSON.stringify({ params }, null, 2)}</pre>
    </main>
  );
}
