import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

interface IFooterContact {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const footerContacts: IFooterContact[] = [
  {
    title: "Localização",
    description: "1010 Avenue, sw 54321, chandigarh",
    icon: MapPin,
  },
  {
    title: "Contato",
    description: "+55 (19) 98765-4321",
    icon: Phone,
  },
  {
    title: "Email",
    description: "email@rosemc.com.br",
    icon: Mail,
  },
];

interface IFooterFollowUs {
  id: string;
  path: string;
  logo: string;
}

export const footerFollowUs: IFooterFollowUs[] = [
  {
    id: "x",
    path: "https://x.com",
    logo: "/svgs/x.svg",
  },
  {
    id: "discord",
    path: "https://discord.gg/7Kqd5zdasu",
    logo: "/svgs/discord.svg",
  },
];

interface IFooterLink {
  title: string;
  links: {
    path: string;
    label: string;
  }[];
}

export const footerLinks: IFooterLink[] = [
  {
    title: "Produtos",
    links: [
      {
        path: "/store?tab=vips",
        label: "VIPs",
      },
      {
        path: "/store?tab=cash",
        label: "Cash",
      },
      {
        path: "/store?tab=pardons",
        label: "Perdões",
      },
    ],
  },
  {
    title: "Servidores",
    links: [
      {
        path: "/forum/servers/skywars",
        label: "SkyWars",
      },
      {
        path: "/forum/servers/bedwars",
        label: "BedWars",
      },
      {
        path: "/forum/servers/thebridge",
        label: "TheBridge",
      },
      {
        path: "/forum/servers/buildbattle",
        label: "BuildBattle",
      },
      {
        path: "/forum/servers/murder",
        label: "Murder",
      },
      {
        path: "/forum/servers/rankup",
        label: "RankUP",
      },
      {
        path: "/forum/servers/fullpvp",
        label: "FullPvP",
      },
      {
        path: "/forum/servers/factions",
        label: "Factions",
      },
      {
        path: "/forum/servers/survival",
        label: "Survival",
      },
      {
        path: "/forum/servers/criativo",
        label: "Criativo",
      },
    ],
  },
];
