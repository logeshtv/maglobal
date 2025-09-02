"use client";
import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-24 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid gap-16 md:gap-12 md:grid-cols-4 mb-16">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="M&A Global" width={42} height={42} className="object-contain" />
              <span className="text-white font-semibold tracking-wide">M&A Global</span>
            </div>
            <p className="text-sm leading-relaxed">Connecting buyers and sellers of businesses worldwide.</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['About Us','#services','Explore Listings','Blog / Insights'].map(l => (
                <li key={l}><a href={l.startsWith('#')?l:'#'} className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              {['Privacy Policy','Terms of Service','Disclaimer'].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wide text-sm">Get Market Insights</h4>
              <p className="text-sm leading-relaxed mb-5">Subscribe for the latest M&A trends & opportunities.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
                <input type="email" required placeholder="Enter your email..." className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/10" />
                <button type="submit" className="rounded-full bg-white text-neutral-900 font-semibold text-sm px-6 py-3 hover:shadow-lg transition">Subscribe</button>
              </form>
            </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 text-center text-xs tracking-wide">© 2025 M&A Global. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
