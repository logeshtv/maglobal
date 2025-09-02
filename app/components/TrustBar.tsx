import React from 'react';

export default function TrustBar() {
  const logos = ['Forbes', 'WSJ', 'TechCrunch', 'Bloomberg'];
  return (
    <section aria-label="Trust Bar" className="bg-neutral-900/95 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <p className="text-center text-xs sm:text-sm tracking-wider text-neutral-400 mb-6 uppercase font-medium">Trusted by Entrepreneurs & Investors Worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map(l => (
            <span key={l} className="text-neutral-500 text-lg sm:text-xl font-semibold tracking-wide select-none">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
