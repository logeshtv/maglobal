import React from 'react';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-neutral-950"
      style={{
        backgroundImage: 'url("/office3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 [background:linear-gradient(120deg,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-8">Ready to Unlock Your <span className="font-medium text-neutral-300">Next Opportunity?</span></h2>
        <p className="text-neutral-200 text-lg leading-relaxed font-light mb-12">Whether you're planning an exit, expanding through acquisition, or seeking your next strategic investment—we're ready to help. Schedule a confidential consultation to align strategy with execution.</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#" className="px-10 py-4 rounded-full bg-white text-neutral-900 font-semibold tracking-wide text-sm sm:text-base transition hover:shadow-xl hover:scale-[1.02]">Schedule a Free Consultation</a>
          <a href="#" className="text-neutral-300 text-sm sm:text-base font-medium tracking-wide hover:text-white transition">Or, Contact Us Directly →</a>
        </div>
      </div>
    </section>
  );
}
