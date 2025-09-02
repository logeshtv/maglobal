import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Management Oversight | The M&A Global Platform',
  description: 'Active portfolio value creation: KPI architecture, governance cadence, performance analytics and exit readiness planning.'
};

const faqs = [
  { q: 'Do you manage active portfolios?', a: 'We orchestrate strategic oversight and optimization; execution can integrate internal or external managers.' },
  { q: 'What is your monitoring cadence?', a: 'Baseline monthly dashboards plus real-time variance alerts for critical metrics.' },
  { q: 'How do you handle underperformance?', a: 'Diagnostic root cause analysis, tactical remediation roadmap, governance alignment and KPI recalibration.' },
  { q: 'Do you cover international assets?', a: 'Yes—multi‑jurisdiction structuring considerations are integrated into portfolio strategy.' },
];

export default function PortfolioManagementPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office9.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Portfolio Management</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Active oversight to protect downside, compound strategic value creation and institutionalize governance maturity.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Value Creation Framework</h2>
              <p className="text-neutral-600 leading-relaxed">We unify strategic, operational and financial levers: pricing, margin architecture, working capital cycles, cross‑sell orchestration, digital enablement and capital allocation discipline. Transparency drives accountability.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Onboarding Diagnostics','KPI Architecture','Governance Cadence','Performance Analytics','Strategic Initiatives','Exit Readiness'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Structured oversight.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Outcome Focus</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Capital efficiency lift','Sustained margin expansion','Risk-adjusted growth allocation','Board-grade reporting discipline','Exit valuation optimization'].map(o => <li key={o}>• {o}</li>)}
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
