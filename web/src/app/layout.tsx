import { cn } from "@/functions/cn";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | RoseMC",
    default: "RoseMC",
  },
  description: "Site oficial da rede de servidores de Minecraft RoseMC.",
};

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<ILayout>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-primary-50 font-sans text-primary-950 antialiased",
          "dark:bg-primary-950 dark:text-primary-50",
          montserrat.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors closeButton pauseWhenPageIsHidden />
        </ThemeProvider>
      </body>
    </html>
  );
}
