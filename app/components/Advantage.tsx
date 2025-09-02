import React from 'react';
import { Globe2, ShieldCheck, BarChart3, Users2 } from 'lucide-react';

const differentiators = [
  { icon: Globe2, title: 'Global Network', body: 'Access to a private network of buyers, sellers & investors across 50+ countries.' },
  { icon: ShieldCheck, title: 'Confidential & Discreet', body: 'Strict confidentiality frameworks protect identity, data & intent.' },
  { icon: BarChart3, title: 'Data-Driven Insights', body: 'Valuations & strategy powered by market intelligence & advanced analytics.' },
  { icon: Users2, title: 'Dedicated Partnership', body: 'Operate as an extension of your team with end‑to‑end advisory alignment.' },
];

export default function Advantage() {
  return (
    <section id="about" className="relative bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900">Global Reach, <span className="font-medium text-neutral-700">Unmatched Expertise</span></h2>
            <p className="text-neutral-600 text-lg leading-relaxed font-light">M&A Global was founded on the principle that opportunity knows no borders. A multidisciplinary team of financial operators, sector strategists and dealmakers committed to empowering entrepreneurs and investors.</p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">We combine institutional process discipline with the agility required for middle-market and growth-stage transactions.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {differentiators.map((d,i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{d.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
