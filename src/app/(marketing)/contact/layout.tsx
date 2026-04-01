import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AxiomRCM about denial recovery, demos, and enterprise security reviews.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
