import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { RevenuePipelineVisual } from "@/components/marketing/RevenuePipelineVisual";

export const metadata: Metadata = {
  title: "Revenue Recovery Intelligence",
  description:
    "Transform denial management with ML-assisted prioritization, EDI intake, and appeal-ready workflows—built for institutional revenue cycle teams.",
};

const processSteps = [
  {
    n: "01",
    title: "Discovery & analysis",
    body: "We map your denial sources, payer mix, and workflows—so implementation targets the biggest recovery levers first.",
  },
  {
    n: "02",
    title: "Configuration & rollout",
    body: "Tenant setup, RBAC, integrations, and scoring aligned to your policies. Your team trains on real queues, not slides.",
  },
  {
    n: "03",
    title: "Operate & improve",
    body: "Dashboards, work queues, and appeal analytics tighten over time. Ongoing support keeps models and playbooks current.",
  },
];

const services = [
  {
    title: "Denial intelligence",
    body: "Unified visibility into denied dollars, payer behavior, and aging—so leaders see exposure before it snowballs.",
  },
  {
    title: "ML-assisted prioritization",
    body: "Rank claims by expected recovery value so staff work the highest-impact denials first.",
  },
  {
    title: "EDI intake & scoring",
    body: "Parse 837-style files, score recoverability, and surface documentation issues before write-offs.",
  },
  {
    title: "Appeals workflow",
    body: "Draft appeal-ready narratives for high-priority claims and track outcomes by payer and category.",
  },
];

const benefits = [
  "Increased efficiency — fewer manual triage cycles",
  "Cost savings — focus effort where dollars actually move",
  "Faster decisions — ranked queues and clear next steps",
  "Scalability — multi-tenant architecture built for growth",
  "Personalization — payer and specialty-aware prioritization",
  "Adaptive playbooks — refine as denial patterns shift",
];

const testimonials = [
  {
    quote: "Our team finally works one prioritized queue instead of five spreadsheets.",
    name: "Jordan Lee",
    role: "Director of Revenue Cycle, Regional Health System",
  },
  {
    quote: "Expected-value ranking changed how we staff appeals—highest ROI first.",
    name: "Priya Nair",
    role: "VP Revenue Integrity, Multi-Specialty Group",
  },
  {
    quote: "EDI scoring caught modifier issues we were leaving on the table.",
    name: "Marcus Cole",
    role: "Manager, Payer Operations",
  },
  {
    quote: "Executive rollups match what we see in the work queue—trust went up overnight.",
    name: "Elena Ruiz",
    role: "CFO, Specialty Network",
  },
];

const faqItems = [
  {
    q: "What is AxiomRCM and who is it for?",
    a: "AxiomRCM is revenue recovery intelligence for hospitals and large practices. It helps teams prioritize denials, estimate recoverability, and run appeals with less friction.",
  },
  {
    q: "How does prioritization work?",
    a: "We combine claim and operational signals with model-assisted scoring so your queue reflects expected recovery value—not just FIFO or loudest payer.",
  },
  {
    q: "How long does implementation take?",
    a: "Timelines depend on tenant setup, integrations, and training. Many teams begin with a focused pilot queue before expanding.",
  },
  {
    q: "What about security and compliance?",
    a: "The platform is designed for multi-tenant isolation, role-based access, and audit-friendly actions. See our Security page for details.",
  },
  {
    q: "How do we get started?",
    a: "Book a demo walkthrough, talk through your denial volume and goals, and we’ll recommend a rollout path.",
  },
];

const cardClass =
  "rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04] sm:p-8";

export default function HomePage() {
  const [first, ...restSteps] = processSteps;

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-25%,rgba(99,102,241,0.14),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Institutional revenue recovery
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-bold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-[3.15rem]">
            Transform denial management with{" "}
            <span className="text-indigo-500">intelligence</span> your team can act on
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
            Harness analytics, ML-assisted prioritization, and appeal-ready workflows—so you recover more while spending less time on noise.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 shadow-md shadow-slate-900/5 transition hover:bg-slate-50 sm:w-auto"
            >
              See plans
            </Link>
            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition hover:bg-indigo-600 sm:w-auto"
            >
              Book a demo
            </Link>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Trusted by revenue cycle teams modernizing denial operations
          </p>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Process
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem]">
            Our <span className="text-indigo-500">proven</span> process
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            From assessment to adoption—how we bring AxiomRCM into your revenue cycle.
          </p>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevenuePipelineVisual />
            <div>
              <div className="text-4xl font-bold tabular-nums text-indigo-500">{first.n}</div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{first.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{first.body}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {restSteps.map((s) => (
              <div key={s.n} className={cardClass}>
                <div className="text-3xl font-bold tabular-nums text-indigo-500">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Services
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Next-generation RCM capabilities
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            Modular capabilities tailored to how your team works denials today.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className={cardClass}>
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Benefits
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience the advantage
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            Practical outcomes revenue cycle leaders care about—visibility, focus, and speed.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-sm text-gray-700 shadow-md shadow-slate-900/[0.03]"
              >
                <span className="text-emerald-500">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
                About
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                AxiomRCM helps providers close the gap between denial data and decisive action. We combine revenue cycle operations experience with modern software—so executives get trustworthy rollups and frontline teams get ranked queues.
              </p>
              <Link href="/product" className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Learn more →
              </Link>
            </div>
            <div className={`relative aspect-[4/3] overflow-hidden ${cardClass} !p-0`}>
              <Image src="/demo-preview.svg" alt="" width={800} height={600} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Plans
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Flexible pricing, maximum impact
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            Choose a path that matches your team size and governance needs—no surprise line items.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className={cardClass}>
              <div className="text-sm font-medium text-gray-500">Growth</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">Custom</div>
              <p className="mt-2 text-sm text-gray-600">For teams getting started with prioritized denial ops.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✓ Core dashboard & work queue</li>
                <li>✓ ML-assisted prioritization</li>
                <li>✓ Standard integrations</li>
                <li>✓ Email support</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 flex w-full items-center justify-center rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-gray-900 shadow-md shadow-slate-900/5 hover:bg-slate-50"
              >
                Get started
              </Link>
            </div>
            <div className="rounded-3xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-8 shadow-xl shadow-indigo-500/10 sm:p-10">
              <div className="text-sm font-medium text-indigo-600">Enterprise</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">Custom</div>
              <p className="mt-2 text-sm text-gray-600">For health systems with governance, SLAs, and scale.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-800">
                <li>✓ Everything in Growth</li>
                <li>✓ Advanced security & audit</li>
                <li>✓ Dedicated success partner</li>
                <li>✓ Priority support</li>
              </ul>
              <Link
                href="/demo"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-indigo-500 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600"
              >
                Book a demo
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">
            Pricing is tailored to claim volume and deployment scope—see full details on the{" "}
            <Link href="/pricing" className="font-medium text-indigo-600 hover:underline">
              Pricing
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            Testimonials
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our clients say
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className={cardClass}>
                <p className="text-sm leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">{t.name}</span>
                  <span className="text-gray-400"> · </span>
                  {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            FAQ
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your questions, answered
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to modernize denial recovery?
          </h2>
          <p className="mt-4 text-gray-600">
            Schedule a walkthrough with our team—it&apos;s free and tailored to your volume.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 shadow-md shadow-slate-900/5 hover:bg-slate-50"
            >
              Book a 15-min call
            </Link>
            <Link
              href="/demo"
              className="inline-flex rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:bg-indigo-600"
            >
              Full product demo
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            No obligation · Works best with revenue cycle leadership in the room
          </p>
        </div>
      </section>
    </>
  );
}
