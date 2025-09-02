import React from 'react';

const faqs = [
  { q: 'What is investment advisory?', a: 'Expert guidance to construct, monitor and optimize capital allocation aligned to risk tolerance, liquidity needs and strategic objectives.' },
  { q: 'How are strategies tailored?', a: 'We integrate fundamental, sector & macro inputs with client mandate constraints to build resilient allocation frameworks.' },
  { q: 'What instruments do you cover?', a: 'Private & public equity, credit, structured solutions and select alternative assets within mandate limits.' },
  { q: 'How do I track performance?', a: 'Secure dashboards provide real‑time KPI, benchmark drift and variance attribution reporting.' },
];

export default function InvestmentAdvisoryPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office7.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Investment Advisory</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Personalized allocation strategies leveraging disciplined research & multi‑factor risk oversight for durable performance.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Framework</h2>
              <p className="text-neutral-600 leading-relaxed">We apply a lifecycle advisory model: discovery, mandate codification, allocation modelling, execution calibration, continuous monitoring and tactical rebalancing. Transparent performance attribution fosters trust & clarity.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Mandate Profiling','Risk Budgeting','Strategic Allocation','Tactical Overlays','Liquidity Management','Attribution & Reporting'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Institutional rigor.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Core Advantages</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Objective advisory alignment','Institutional research access','Holistic risk governance','Transparent fee structure','Adaptive tactical insights'].map(o => <li key={o}>• {o}</li>)}
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
