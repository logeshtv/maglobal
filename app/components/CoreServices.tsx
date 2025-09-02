import React from 'react';
import { Target, Handshake, Network } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'For Buyers & Investors',
    heading: 'Buy-Side Advisory',
    body: 'We identify, vet, and help you acquire businesses that align with your strategic goals. Our global network provides exclusive access to off-market opportunities.'
  },
  {
    icon: Handshake,
    title: 'For Business Owners',
    heading: 'Sell-Side Representation',
    body: 'We maximize company value by presenting you to a curated roster of qualified international buyers—managing valuation, positioning, negotiation & confidentiality end‑to‑end.'
  },
  {
    icon: Network,
    title: 'For Strategic Partnerships',
    heading: 'Strategic Investment Matching',
    body: 'We match innovative companies with the right capital & strategic partners—bridging growth-stage operators and institutional investors globally.'
  }
];

export default function CoreServices() {
  return (
    <section id="services" className="relative bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 mb-6">A Platform Built for <span className="font-medium text-neutral-700">Growth</span></h2>
          <p className="text-neutral-600 text-lg leading-relaxed font-light">We provide end-to-end advisory to ensure every transaction is strategic, seamless, and successful.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s,i) => (
            <div key={i} className="group relative flex flex-col h-full rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm transition hover:shadow-lg">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <p className="text-xs tracking-wider font-medium text-neutral-500 uppercase mb-3">{s.title}</p>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-snug">{s.heading}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base flex-grow">{s.body}</p>
              <span className="mt-6 text-neutral-400 text-xs tracking-wide uppercase">Explore →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
