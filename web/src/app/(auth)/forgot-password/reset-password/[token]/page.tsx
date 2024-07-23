import { jsonStringify } from "@/functions/json-stringify";

interface IResetPassword {
  params: {
    token: string;
  };
}

export default function ResetPassword({ params }: IResetPassword) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page ResetPassword</h1>
      <pre>{jsonStringify({ params })}</pre>
    </main>
  );
}
