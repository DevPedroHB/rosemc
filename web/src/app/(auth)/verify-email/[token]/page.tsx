import { jsonStringify } from "@/functions/json-stringify";

interface IVerifyEmail {
  params: {
    token: string;
  };
}

export default function VerifyEmail({ params }: IVerifyEmail) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page VerifyEmail</h1>
      <pre>{jsonStringify({ params })}</pre>
    </main>
  );
}
