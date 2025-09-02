import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    body: 'Deep dive into objectives; bespoke strategy aligned with long‑term value creation.'
  },
  {
    num: '02',
    title: 'Valuation & Marketing',
    body: 'Analytical valuation; confidential positioning to targeted global counterparts.'
  },
  {
    num: '03',
    title: 'Negotiation & Due Diligence',
    body: 'Structured negotiation, controlled disclosure & diligence orchestration.'
  },
  {
    num: '04',
    title: 'Closing & Integration',
    body: 'Execution support through signing, closing & post-transaction integration readiness.'
  }
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative py-28 bg-neutral-950"
      style={{
        backgroundImage: 'url("/office1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-6">A Seamless Path to <span className="font-medium text-neutral-300">Your Next Venture</span></h2>
          <p className="text-neutral-200 text-lg leading-relaxed font-light">Our proven four-step process is designed for clarity, efficiency, and maximum value.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(s => (
            <div key={s.num} className="relative rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 flex flex-col">
              <div className="text-sm font-medium tracking-wider text-neutral-400 mb-4">{s.num}</div>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
