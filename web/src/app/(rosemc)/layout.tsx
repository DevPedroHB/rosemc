import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { type ReactNode } from "react";

interface IRoseMCLayout {
  children: ReactNode;
}

export default function RoseMCLayout({ children }: Readonly<IRoseMCLayout>) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl space-y-4 px-6 py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
