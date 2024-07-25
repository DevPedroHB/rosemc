"use client";

import { searchSchema, type SearchSchema } from "@/types/schemas/search-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";

export function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query")?.toString();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query,
    },
  });

  function handleSearch(data: SearchSchema) {
    const urlSearchParams = new URLSearchParams(data);

    router.push(`/search?${urlSearchParams}`);
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex-1">
      <Input.Root variant="search" message={errors.query?.message}>
        <Input.Slot>
          <Search className="size-5" />
        </Input.Slot>
        <Input.Control
          type="search"
          placeholder={`Pesquisar por ...`}
          {...register("query")}
        />
      </Input.Root>
    </form>
  );
}
