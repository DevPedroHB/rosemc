import { jsonStringify } from "@/functions/json-stringify";

interface ISearch {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Search({ searchParams }: ISearch) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Search</h1>
      <pre>{jsonStringify({ searchParams })}</pre>
    </div>
  );
}
