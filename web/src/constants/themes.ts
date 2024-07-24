import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

interface ITheme {
  id: string;
  icon: LucideIcon;
  label: string;
}

export const themes: ITheme[] = [
  {
    id: "light",
    icon: Sun,
    label: "Claro",
  },
  {
    id: "dark",
    icon: Moon,
    label: "Escuro",
  },
  {
    id: "system",
    icon: Monitor,
    label: "Sistema",
  },
];
