import { searchParams } from "@/functions/search-params";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface IUsePaginate<T> {
  initialItems: T[];
  perPage: number;
  total?: number;
  param?: string;
}

export function usePaginate<T>({
  initialItems,
  perPage,
  total = Math.ceil(initialItems.length / perPage),
  param = "page",
}: IUsePaginate<T>) {
  const nextSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = searchParams.get(nextSearchParams);
  const [page, setPage] = useState(Number(params[param]) || 1);

  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, initialItems.length);

  if (total !== 0 && page > total) {
    const params = searchParams.set(
      { [param]: total.toString() },
      nextSearchParams,
    );

    router.replace(`${pathname}?${params}`, {
      scroll: false,
    });

    setPage(total);
  }

  return {
    items: initialItems.slice(startIndex, endIndex),
    page,
    setPage,
    total,
  };
}
