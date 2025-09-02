import React from 'react';

const faqs = [
  {
    q: 'What is a strategic acquisition?',
    a: 'A strategic acquisition involves purchasing a company to achieve defined business goals—expanding market share, acquiring capabilities, accelerating growth or enhancing competitive positioning.'
  },
  {
    q: 'How do you identify acquisition targets?',
    a: 'We combine mandate definition, sector intelligence, proprietary network sourcing and confidential outreach to surface off‑market, strategic-fit targets.'
  },
  {
    q: 'What are the benefits for my business?',
    a: 'Accelerated growth, diversification, defensive positioning, access to talent & IP, and long‑term enterprise value creation.'
  },
  {
    q: 'How long does the process take?',
    a: 'Typical lower to mid-market transactions run 4–9 months from target mapping to closing; integration planning begins early to compress ramp time.'
  }
];

export default function StrategicAcquisitionsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office6.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Strategic Acquisitions</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Identifying, evaluating & executing acquisition opportunities that compound long‑term enterprise value.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Approach</h2>
              <p className="text-neutral-600 leading-relaxed">We optimize each stage—mandate design, pipeline origination, valuation modelling, diligence orchestration, negotiation and integration alignment. Structured governance + data discipline reduce leakage and increase certainty of close.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Mandate Definition','Target Mapping','Confidential Outreach','Synergy Hypothesis','Valuation & Deal Structuring','Integration Blueprint'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Focused rigor for value capture.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Outcomes</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Accelerated market expansion','Capability acquisition','Capital efficiency & synergy capture','Resilient portfolio positioning','Disciplined integration planning'].map(o => <li key={o}>• {o}</li>)}
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
