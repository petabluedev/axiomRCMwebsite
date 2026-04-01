import Link from "next/link";
import { AxiomLogo } from "@/components/branding/AxiomLogo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Overview" },
      { href: "/demo", label: "Live demo" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "mailto:hello@axiomrcm.com", label: "hello@axiomrcm.com", external: true },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/security", label: "Security & compliance" },
      { href: "/contact", label: "Request access" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-white text-gray-600">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <AxiomLogo variant="light" href="/" size={32} />
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Revenue recovery intelligence for hospitals and large practices. Prioritize denials, model recoverability, and ship appeals faster.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((item) => (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a href={item.href} className="text-gray-600 hover:text-indigo-600">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="text-gray-600 hover:text-indigo-600">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} AxiomRCM. All rights reserved. Customer application access is provided
          directly by AxiomRCM—not linked from this marketing site.
        </div>
      </div>
    </footer>
  );
}
