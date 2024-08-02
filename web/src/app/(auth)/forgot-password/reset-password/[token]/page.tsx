import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redefinir senha",
};

interface IResetPassword {
  params: {
    token: string;
  };
}

export default function ResetPassword({ params }: IResetPassword) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page ResetPassword</h1>
      <pre>{JSON.stringify({ params }, null, 2)}</pre>
    </main>
  );
}
