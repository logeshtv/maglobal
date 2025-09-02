import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Risk Management Frameworks | The M&A Global Platform',
  description: 'Holistic risk governance: taxonomy design, exposure quantification, control architecture, monitoring and incident response.'
};

const faqs = [
  { q: 'Scope of risk coverage?', a: 'Strategic, financial, operational, compliance, cyber, third‑party and market exposure domains.' },
  { q: 'Do you build risk frameworks?', a: 'Yes—risk taxonomy, appetite statement, control mapping, monitoring dashboards and escalation protocols.' },
  { q: 'Tooling approach?', a: 'Lightweight governance stack integrating existing BI plus optional specialized GRC tooling.' },
  { q: 'How is residual risk tracked?', a: 'Quantified heat mapping with periodic reassessment and mitigation ROI tracking.' },
];

export default function RiskManagementPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office10.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Risk Management</h1>
          <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-3xl mx-auto">Institutional-grade risk intelligence embedded across governance, operations and strategic execution.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Framework Layers</h2>
              <p className="text-neutral-600 leading-relaxed">We formalize governance: identification, assessment, prioritization, mitigation design, control validation and continuous monitoring. Data-driven exposure intelligence enhances resilience and capital efficiency.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Risk Taxonomy','Exposure Quantification','Control Architecture','Monitoring & Alerts','Incident Response','Continuous Improvement'].map(i => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-medium text-neutral-900 text-sm mb-1">{i}</p>
                  <div className="h-1 w-10 bg-neutral-900 mb-3" />
                  <p className="text-neutral-600 text-sm leading-relaxed">Structured mitigation.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Value Realization</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {['Reduced volatility surface','Regulatory confidence','Operational continuity assurance','Insurance leverage optimization','Strategic decision clarity'].map(o => <li key={o}>• {o}</li>)}
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
