import type { ReactNode } from "react";

interface IRoseMCLayout {
  children: ReactNode;
}

export default function RoseMCLayout({ children }: Readonly<IRoseMCLayout>) {
  return <main>{children}</main>;
}
