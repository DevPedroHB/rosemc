export interface McApi {
  status: string;
  online: boolean;
  motd: string;
  motd_extra: MotdExtra[];
  motd_formatted: string;
  favicon: string;
  error: string;
  players: Players;
  server: Server;
  last_online: string;
  last_updated: string;
  duration: number;
}

interface MotdExtra {
  text: string;
}

interface Players {
  max: number;
  now: number;
}

interface Server {
  name: string;
  protocol: number;
}
