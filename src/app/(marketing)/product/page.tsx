import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description:
    "AxiomRCM platform overview: dashboards, work queues, EDI intake, ML prioritization, appeals intelligence, and analytics.",
};

const modules = [
  {
    name: "Revenue intelligence",
    points: [
      "KPIs for denied dollars, recoverable estimates, and recovery rate",
      "Payer and time-window filters for leadership reviews",
      "Forecast bands for planning cycles",
    ],
  },
  {
    name: "Operations",
    points: [
      "Expected-value ranked work queue",
      "Prioritized claims inventory with explanations",
      "CSV batch intake for scoring and assignment",
    ],
  },
  {
    name: "EDI & scoring",
    points: [
      "837-style parse preview",
      "Model-assisted recoverability and issue detection",
      "Appeal draft generation for high-priority claims",
    ],
  },
  {
    name: "Appeals & analytics",
    points: [
      "Appeal outcomes and cycle-time views",
      "Payer performance breakdowns",
      "Exports for downstream systems",
    ],
  },
];

const card =
  "rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04] sm:p-8";

export default function ProductPage() {
  return (
    <div className="border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
          Product
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          One platform for denial intelligence and execution
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          AxiomRCM connects analytics to action: the same signals leadership sees are the signals your team works in the queue—no duplicate spreadsheets.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {modules.map((m) => (
            <div key={m.name} className={card}>
              <h2 className="text-lg font-bold text-gray-900">{m.name}</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-indigo-500">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600"
          >
            Book a demo
          </Link>
          <Link
            href="/security"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-md shadow-slate-900/5 hover:bg-slate-50"
          >
            Security overview
          </Link>
        </div>
      </div>
    </div>
  );
}
