import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Valuation Intelligence | The M&A Global Platform',
  description: 'Decision-grade valuation: data normalization, KPI forensics, multiple benchmarks, scenario modelling and board narrative alignment.'
};

const faqs = [
  { q: 'What valuation methodologies are applied?', a: 'Comparable companies, precedent transactions, DCF variants, contribution margin analytics and scenario-driven sensitivity matrices.' },
  { q: 'How do you handle early-stage entities?', a: 'Hybrid forward-looking frameworks leveraging unit economics, cohort dynamics and capital efficiency signals.' },
  { q: 'Is valuation independent?', a: 'Objective advisory stance with transparent assumptions, audit-ready model documentation and version control.' },
  { q: 'Update frequency?', a: 'Event-driven plus scheduled quarterly refresh supporting strategic reviews and board governance.' },
];

export default function BusinessValuationPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office8.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Business Valuation</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Decision-grade valuation intelligence powering capital allocation, M&A, shareholder alignment and strategic timing.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Analytical Stack</h2>
              <p className="text-neutral-600 leading-relaxed">We triangulate intrinsic and market-based signals: revenue quality diagnostics, margin durability, cash conversion cycles, reinvestment cadence and risk-adjusted growth pathways. Sensitivity mapping informs decision velocity.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Data Normalization','KPI Forensics','Multiple Benchmarks','Scenario Modelling','Sensitivity Mapping','Board Narrative'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Valuation clarity.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Strategic Outcomes</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Capital allocation discipline','Investor narrative alignment','Transaction pricing confidence','Governance transparency uplift','Scenario-informed strategy'].map(o => <li key={o}>• {o}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">FAQ</h3>
              <ul className="space-y-6">
                {faqs.map(f => (
                  <li key={f.q}>
                    <p className="font-medium text-neutral-900 text-sm mb-2">{f.q}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
