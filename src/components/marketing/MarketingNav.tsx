"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AxiomLogo } from "@/components/branding/AxiomLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function MarketingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-slate-200/90 bg-white/90 px-3 py-2.5 shadow-xl shadow-slate-900/[0.06] backdrop-blur-md sm:px-5">
        <AxiomLogo
          variant="light"
          href="/"
          size={36}
          linkProps={{ onClick: () => setOpen(false) }}
        />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200/80"
                    : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-700 lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-5xl rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-slate-900/10 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-xl bg-indigo-500 px-3 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
