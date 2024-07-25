import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_MC_API_URL: z.string().url(),
    NEXT_PUBLIC_SERVER_IP: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_MC_API_URL: process.env.NEXT_PUBLIC_MC_API_URL,
    NEXT_PUBLIC_SERVER_IP: process.env.NEXT_PUBLIC_SERVER_IP,
  },
  emptyStringAsUndefined: true,
});
