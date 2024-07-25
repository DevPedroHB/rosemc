import { mcApi } from "@/libs/mc-api";
import type { McApi } from "@/types/mc-api";

export async function getServerStatus(ip: string) {
  const result = await mcApi("server/status", {
    searchParams: {
      ip,
    },
    cache: "no-cache",
  }).json<McApi>();

  return result;
}
