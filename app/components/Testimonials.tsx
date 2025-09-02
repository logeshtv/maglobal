import React from 'react';

const testimonials = [
  {
    quote: 'Working with M&A Global was a transformative experience. They found the perfect strategic buyer for our tech firm and managed the entire process flawlessly. Their global reach is truly impressive.',
    author: 'Anna Chen',
    role: 'Former CEO, Innovate Solutions'
  },
  {
    quote: 'As an investor, finding quality acquisition targets is challenging. The team presented a vetted, off‑market opportunity that exceeded expectations. Best in the business.',
    author: 'Mark Davis',
    role: 'Partner, Summit Venture Capital'
  },
  {
    quote: 'The professionalism and confidentiality were second to none. They honored the legacy of my family business while securing a growth‑focused acquirer.',
    author: 'David Rodriguez',
    role: 'Former Owner, Heritage Manufacturing'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 mb-6">What Our <span className="font-medium text-neutral-700">Clients Say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t,i) => (
            <div key={i} className="relative rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm hover:shadow-md transition flex flex-col">
              <p className="text-neutral-700 text-sm leading-relaxed flex-grow">“{t.quote}”</p>
              <div className="mt-8">
                <p className="text-neutral-900 font-semibold text-sm">{t.author}</p>
                <p className="text-neutral-500 text-xs mt-1 tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
