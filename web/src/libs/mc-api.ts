import { env } from "@/env";
import ky from "ky";

export const mcApi = ky.create({
  prefixUrl: env.NEXT_PUBLIC_MC_API_URL,
});
