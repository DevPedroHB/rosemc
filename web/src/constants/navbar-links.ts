import {
  Ban,
  HelpCircle,
  Home,
  MessageSquare,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

interface INavbarLink {
  path: string;
  icon: LucideIcon;
  label: string;
}

export const navbarLinks: INavbarLink[] = [
  {
    path: "/",
    icon: Home,
    label: "Início",
  },
  {
    path: "/store",
    icon: Store,
    label: "Loja",
  },
  {
    path: "/forum",
    icon: MessageSquare,
    label: "Fórum",
  },
  {
    path: "/help",
    icon: HelpCircle,
    label: "Ajuda",
  },
  {
    path: "/team",
    icon: Users,
    label: "Equipe",
  },
  {
    path: "/punishments",
    icon: Ban,
    label: "Punições",
  },
];
