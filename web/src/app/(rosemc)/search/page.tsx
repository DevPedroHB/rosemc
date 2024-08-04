import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface ISearch {
  searchParams: {
    query: string;
  };
}

export async function generateMetadata({
  searchParams,
}: ISearch): Promise<Metadata> {
  return {
    title: `Pesquisando por ${searchParams.query}`,
  };
}

export default function Search({ searchParams }: ISearch) {
  const { query } = searchParams;

  if (!query) {
    redirect("/");
  }

  return (
    <Page.Root>
      <Card>
        <h1 className="text-lg font-medium">Page Notification</h1>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </Card>
    </Page.Root>
  );
}
