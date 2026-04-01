import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignInLink } from "@/components/marketing/SignInLink";

export const metadata: Metadata = {
  title: "Product demo",
  description:
    "See AxiomRCM live: dashboards, EDI scoring, ML prioritization, and appeal drafts. Book access or sign in to your tenant.",
};

const checklist = [
  "Executive dashboard with recoverable exposure and payer slice",
  "Expected-value work queue ranked by impact",
  "EDI 837 parse & score with issue detection",
  "HIGH-priority appeal letter preview (exportable)",
  "Appeals analytics and claims drill-down (tenant data)",
];

export default function DemoPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-25%,rgba(99,102,241,0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Live demo
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            The main conversion experience—see AxiomRCM on real workflows
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-600">
            This is the fastest path from interest to conviction: walk the product with your denial volume in mind, then roll into a scoped pilot.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition hover:bg-indigo-600"
            >
              Sign in to the app
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-gray-800 shadow-md shadow-slate-900/5 hover:bg-slate-50"
            >
              Talk to sales first
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Already evaluating? Bring a payer mix summary—we&apos;ll map it to dashboard filters and queue rules.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What you&apos;ll see in-session
            </h2>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-emerald-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500">
              The marketing site explains the story; the authenticated app connects to your API and tenant data when configured.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/[0.06]">
            <Image src="/demo-preview.svg" alt="Product UI preview" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-xl shadow-indigo-500/10 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ready to run the full demo?
              </h2>
              <p className="mt-4 text-gray-600">
                Use your credentials to open the live workspace—dashboard, upload, claims, appeals, and analytics.
              </p>
              <SignInLink className="mt-8 inline-flex rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600">
                Launch AxiomRCM
              </SignInLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
