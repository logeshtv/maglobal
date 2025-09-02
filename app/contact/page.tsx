"use client";
import React, { useState } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | The M&A Global Platform',
  description: 'Reach our team for strategic alignment, platform demonstrations, enterprise support and partnership inquiries.'
};

export default function ContactPage(){
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative py-40 text-white" style={{backgroundImage:'url(/office6.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Contact</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed font-light">Engage with our team to explore strategic alignment or request a platform demonstration.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-700 mb-2">Name</label>
                <input required className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"/>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-700 mb-2">Email</label>
                <input type="email" required className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"/>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-700 mb-2">Message</label>
                <textarea required rows={5} className="w-full resize-none rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <button type="submit" className="w-full bg-neutral-900 text-white py-3 rounded-md text-sm font-medium tracking-wide hover:bg-neutral-800 transition">{submitted ? 'Submitted' : 'Send Message'}</button>
              {submitted && <p className="text-xs text-neutral-500">We have received your inquiry. A specialist will respond shortly.</p>}
            </form>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Engagement</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">We prioritize alignment discussions with strategic buyers, investors and operators focused on disciplined inorganic growth and portfolio value creation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Response SLAs</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Standard: 1–2 business days</li>
                <li>• Priority (Enterprise): &lt; 8 business hours</li>
                <li>• Critical (Platform Availability): Immediate escalation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Regional Coverage</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">North America, EMEA and APAC transaction windows with coordinated support continuity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
