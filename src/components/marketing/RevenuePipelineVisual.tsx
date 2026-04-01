import Image from "next/image";

const STEPS = [
  "Upload Claims",
  "AI Analysis",
  "Recoverable Revenue Identified",
  "Top Claims Prioritized",
  "Appeals Generated",
  "Revenue Recovered",
] as const;

function Connector() {
  return (
    <div className="flex justify-center py-0.5" aria-hidden>
      <svg
        className="h-5 w-5 text-indigo-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

export function RevenuePipelineVisual() {
  return (
    <div
      className={`relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-indigo-50/90 via-white to-slate-50/80 p-6 shadow-xl shadow-slate-900/[0.04] sm:min-h-[320px] sm:p-8`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-300/10 blur-3xl" />

      <div className="relative mb-6 flex items-start gap-4 border-b border-indigo-100/80 pb-5">
        <Image src="/axiom-mark.svg" alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
        <div className="min-w-0 pt-0.5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
            In-platform flow
          </p>
          <p className="mt-0.5 text-sm font-medium text-slate-600">
            From raw claims to dollars back on the books
          </p>
        </div>
      </div>

      <ol className="relative flex flex-1 flex-col justify-center gap-0">
        {STEPS.map((label, i) => (
          <li key={label}>
            <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100/50 sm:gap-4 sm:px-4 sm:py-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold tabular-nums text-white shadow-sm sm:h-9 sm:w-9 sm:text-sm ${
                  i === STEPS.length - 1
                    ? "bg-emerald-500 shadow-emerald-500/20"
                    : "bg-indigo-500 shadow-indigo-500/25"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-snug text-slate-800 sm:text-[0.95rem]">
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 ? <Connector /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
