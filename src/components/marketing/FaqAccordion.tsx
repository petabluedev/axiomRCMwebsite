"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/[0.04]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-gray-900 transition hover:bg-slate-50/80 sm:px-6 sm:py-5"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="shrink-0 text-gray-400">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="border-t border-slate-100 px-5 pb-5 pt-0 text-sm leading-relaxed text-gray-600 sm:px-6">
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
