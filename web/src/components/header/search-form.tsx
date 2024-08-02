"use client";

import { searchParams } from "@/functions/search-params";
import { searchSchema, type SearchSchema } from "@/types/schemas/search-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";

export function SearchForm() {
  const nextSearchParams = useSearchParams();
  const params = searchParams.get<{ query: string }>(nextSearchParams);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: params.query,
    },
  });

  function handleSearch(data: SearchSchema) {
    const newParams = searchParams.set(data, nextSearchParams);

    router.push(`/search?${newParams}`);
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
          required
          {...register("query")}
        />
      </Input.Root>
    </form>
  );
}
