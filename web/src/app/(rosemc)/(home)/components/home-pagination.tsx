"use client";

import { Pagination } from "@/components/pagination";
import { searchParams } from "@/functions/search-params";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function HomePagination() {
  const nextSearchParams = useSearchParams();
  const params = searchParams.get<{ page: string }>(nextSearchParams);
  const [page, setPage] = useState(Number(params.page) || 1);

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded bg-primary-100 p-4 shadow dark:bg-primary-900">
      <h3 className="text-xl font-semibold">Page: {page}</h3>
      <Pagination total={100} current={page} onPageChange={setPage} />
    </div>
  );
}
