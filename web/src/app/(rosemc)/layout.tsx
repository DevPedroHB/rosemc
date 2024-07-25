import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import type { ReactNode } from "react";

interface IRoseMCLayout {
  children: ReactNode;
}

export default function RoseMCLayout({ children }: Readonly<IRoseMCLayout>) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
