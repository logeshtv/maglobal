import React from 'react';

const metrics = [
  { value: '$1.2B+', label: 'Completed Transactions' },
  { value: '7,500+', label: 'Qualified Buyers' },
  { value: '40+', label: 'Countries Represented' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="relative py-28 bg-neutral-950"
      style={{
        backgroundImage: 'url("/office2.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-6">Success by the <span className="font-medium text-neutral-300">Numbers</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m,i) => (
            <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-light text-white mb-2">{m.value}</div>
              <div className="text-neutral-500 text-sm font-medium tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
