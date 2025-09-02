import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | The M&A Global Platform',
  description: 'Answers to common questions about platform access, security, onboarding, integrations and pricing for The M&A Global Platform.'
};

const faqs = [
  { q: 'Who is the platform built for?', a: 'Strategic buyers, financial sponsors, corporate development teams and founders pursuing disciplined M&A.' },
  { q: 'Can I export diligence data?', a: 'Yes—role filtered exports with immutable logging for compliance evidence.' },
  { q: 'How quickly can we onboard?', a: 'Typical onboarding completes inside one week including role design and data room initialization.' },
  { q: 'Is support available globally?', a: 'Follow-the-sun coverage with prioritized SLAs for enterprise tiers.' },
  { q: 'Do you integrate with existing tools?', a: 'Open API layer and pre-built connectors for selected CRM, ERP and analytics systems.' },
  { q: 'What is your pricing model?', a: 'Modular subscription aligned to active deals, user tiers and optional advanced analytics modules.' },
];

export default function FAQPage(){
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office7.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">Concise answers to common platform, process and security questions.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ul className="space-y-12">
            {faqs.map(item => (
              <li key={item.q} className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <h3 className="text-base font-semibold text-neutral-900 mb-3">{item.q}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
