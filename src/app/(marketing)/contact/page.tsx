"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const input =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

  return (
    <div className="border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="inline-flex rounded-full border border-indigo-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
          Contact
        </div>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Let&apos;s talk about your denial volume
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Share a few details—we&apos;ll follow up by email. For fastest response, include your organization type and approximate monthly denial dollars.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04] sm:p-8"
          >
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-500">Name</label>
              <input required className={input} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-500">Work email</label>
              <input required type="email" className={input} placeholder="you@healthsystem.org" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-500">Organization</label>
              <input className={input} placeholder="Hospital or group name" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-500">Message</label>
              <textarea
                required
                rows={5}
                className={`${input} resize-none`}
                placeholder="Denial volume, payers of concern, timeline…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-500 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600"
            >
              Send message
            </button>
            {submitted ? (
              <p className="text-center text-sm text-emerald-600">
                Thanks—this demo form is front-end only; wire it to your API or email service next.
              </p>
            ) : null}
          </form>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04]">
              <h2 className="text-sm font-bold text-gray-900">Email</h2>
              <a href="mailto:hello@axiomrcm.com" className="mt-2 block text-indigo-600 hover:underline">
                hello@axiomrcm.com
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/[0.04]">
              <h2 className="text-sm font-bold text-gray-900">Already a customer?</h2>
              <p className="mt-2 text-sm text-gray-600">
                Use the application URL and credentials your organization received from AxiomRCM. This marketing
                site does not link to the customer app.
              </p>
            </div>
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-6 shadow-lg shadow-indigo-500/10">
              <h2 className="text-sm font-bold text-gray-900">15-minute intro</h2>
              <p className="mt-2 text-sm text-gray-600">
                Walk through dashboards, queue rules, and a sample EDI scoring flow.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-flex rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-600"
              >
                Open demo page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
