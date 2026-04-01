import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Multi-tenant isolation, role-based access, audit logging, and operational practices for AxiomRCM.",
};

const items = [
  {
    title: "Multi-tenant isolation",
    body: "Data is scoped by tenant so organizations only see their own claims, users, and audit events.",
  },
  {
    title: "Role-based access control",
    body: "Administrative, operational, and analyst roles map to least-privilege defaults—tune as your governance model requires.",
  },
  {
    title: "Audit-friendly actions",
    body: "Sensitive operations are designed to emit audit events so you can answer who did what, and when.",
  },
  {
    title: "Secure delivery",
    body: "Deploy behind your standard ingress controls; protect APIs with authentication and rate limiting at the edge.",
  },
];

const card =
  "rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04]";

export default function SecurityPage() {
  return (
    <div className="border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
          Security
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Built for institutional requirements
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Revenue cycle data is sensitive. AxiomRCM is architected with tenant boundaries, access control, and observability in mind—so your security and compliance partners can review with confidence.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className={card}>
              <h2 className="text-base font-bold text-gray-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Need a formal questionnaire or architecture review?{" "}
          <Link href="/contact" className="font-medium text-indigo-600 hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
