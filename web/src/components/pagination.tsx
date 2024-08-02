"use client";

import { searchParams } from "@/functions/search-params";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ResponsivePagination, {
  type ResponsivePaginationProps,
} from "react-responsive-pagination";
import { tv } from "tailwind-variants";

const pagination = tv({
  slots: {
    root: "flex space-x-1",
    item: [
      "flex rounded border leading-none transition-all",
      "border-primary-300 hover:bg-primary-950/5 dark:border-primary-700 dark:hover:bg-primary-50/5",
    ],
    link: [
      "rounded bg-transparent px-2 py-1 text-sm outline-none transition-all",
      "focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-50 dark:focus-visible:ring-offset-primary-950",
    ],
    active: "bg-primary-950/5 dark:bg-primary-50/5",
    disabled: "cursor-not-allowed opacity-75",
  },
});

interface IPagination extends ResponsivePaginationProps {
  param?: string;
}

export function Pagination({
  onPageChange,
  param = "page",
  ...rest
}: IPagination) {
  const nextSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { root, item, link, active, disabled } = pagination();

  function handleChangePage(page: number) {
    const params = searchParams.set(
      { [param]: page.toString() },
      nextSearchParams,
    );

    router.replace(`${pathname}?${params}`, {
      scroll: false,
    });

    onPageChange(page);
  }

  return (
    <ResponsivePagination
      className={root()}
      pageItemClassName={item()}
      pageLinkClassName={link()}
      activeItemClassName={active()}
      disabledItemClassName={disabled()}
      onPageChange={handleChangePage}
      {...rest}
    />
  );
}
