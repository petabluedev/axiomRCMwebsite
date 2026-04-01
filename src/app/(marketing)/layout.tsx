import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNav } from "@/components/marketing/MarketingNav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-marketing",
});

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} min-h-screen bg-[#F3F4F9] font-sans text-gray-900 antialiased`}>
      <MarketingNav />
      <main className="min-h-[60vh]">{children}</main>
      <MarketingFooter />
    </div>
  );
}
