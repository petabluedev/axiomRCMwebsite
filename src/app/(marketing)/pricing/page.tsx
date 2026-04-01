import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible plans for growth and enterprise. Contact us for a quote tailored to claim volume and deployment scope.",
};

const tiers = [
  {
    name: "Growth",
    price: "Custom",
    subtitle: "For teams establishing prioritized denial operations.",
    featured: false,
    features: [
      "Core dashboard & KPI rollups",
      "Expected-value work queue",
      "Claims prioritization & explanations",
      "Standard integrations",
      "Email support",
    ],
    cta: { href: "/contact", label: "Get started" },
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "For health systems with governance, SLAs, and scale.",
    featured: true,
    features: [
      "Everything in Growth",
      "Advanced security review support",
      "Dedicated success partner",
      "Priority support channels",
      "Custom analytics & export patterns",
      "Uptime and escalation alignment",
    ],
    cta: { href: "/demo", label: "Book a demo" },
  },
];

export default function PricingPage() {
  return (
    <div className="border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
          Plans
        </div>
        <h1 className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Flexible pricing, maximum impact
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Choose the engagement that fits your organization—pricing reflects volume, integrations, and support tier.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-8 shadow-xl ${
                tier.featured
                  ? "border-indigo-200 bg-gradient-to-b from-indigo-50 to-white shadow-indigo-500/10"
                  : "border-slate-200/90 bg-white shadow-slate-900/[0.04]"
              }`}
            >
              <div className="text-sm font-medium text-gray-500">{tier.name}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-500">/ quote</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.subtitle}</p>
              <ul className="mt-8 space-y-3 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.cta.href}
                className={`mt-10 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600"
                    : "border border-slate-200 bg-white text-gray-900 shadow-md shadow-slate-900/5 hover:bg-slate-50"
                }`}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          Pricing is always finalized with your team. No hidden fees; scope is documented up front.
        </p>
      </div>
    </div>
  );
}
