import { env } from "@/env";
import { getServerStatus } from "@/http/get-server-status";

export async function OnlinePlayers() {
  const { players } = await getServerStatus(env.NEXT_PUBLIC_SERVER_IP);

  return (
    <strong className="text-4xl font-bold uppercase text-secondary-500">
      {players.now}
    </strong>
  );
}
