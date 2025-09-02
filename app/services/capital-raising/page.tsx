import React from 'react';

const faqs = [
  { q: 'What capital solutions do you support?', a: 'Equity, growth capital, structured debt, recapitalizations and select alternative instruments.' },
  { q: 'How do you help secure funding?', a: 'Narrative positioning, investor mapping, data room curation, diligence readiness and negotiation support.' },
  { q: 'Timeline for capital raising?', a: 'Typical processes span 3–6 months depending on complexity and capital stack composition.' },
  { q: 'Industry specialization?', a: 'Diversified, with focus on tech-enabled services, manufacturing, distribution and lower mid‑market platforms.' },
];

export default function CapitalRaisingPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office8.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Capital Raising</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Structuring and sourcing optimal capital stacks to accelerate scalable expansion and strategic optionality.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Process Architecture</h2>
              <p className="text-neutral-600 leading-relaxed">We engineer readiness: narrative calibration, financial modelling, KPIs normalization, investor segmentation, diligence staging and closing momentum management. Investor confidence derives from clarity & defensibility.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Capital Strategy','Investor Mapping','Data Room Readiness','Outbound Engagement','Term Sheet Analysis','Closing & Compliance'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Structured execution.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Why It Works</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Investor-aligned storytelling','Credible metrics & KPIs','Efficient diligence sequencing','Competitive tension leverage','Optimal structure optimization'].map(o => <li key={o}>• {o}</li>)}
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
