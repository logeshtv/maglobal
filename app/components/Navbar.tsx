"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("section")?.offsetHeight || 600;
      if (window.scrollY > heroHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'Strategic Acquisitions', href: '/services/strategic-acquisitions' },
    { label: 'Investment Advisory', href: '/services/investment-advisory' },
    { label: 'Capital Raising', href: '/services/capital-raising' },
    { label: 'Portfolio Management', href: '/services/portfolio-management' },
    { label: 'Risk Management', href: '/services/risk-management' },
    { label: 'Business Valuation', href: '/services/business-valuation' },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-neutral-300 hover:text-white tracking-wide relative group transition-all text-sm"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-500 border-b ${
        scrolled
          ? "bg-neutral-950/95 border-neutral-800/40 backdrop-blur-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="M&A Global Platform Logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-sm">
          <div className="relative group">
            <button className="flex items-center gap-1 text-neutral-300 hover:text-white tracking-wide text-sm">
              Services <ChevronDown size={16} className="transition group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300 absolute left-0 mt-4 w-72 rounded-xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-md p-4 shadow-xl">
              <ul className="space-y-1">
                {serviceLinks.map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="block rounded-md px-3 py-2 text-neutral-300 hover:bg-neutral-800/60 hover:text-white text-sm font-medium">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/security">Security</NavLink>
          <NavLink href="/download">Download</NavLink>
          <NavLink href="/faq">FAQ</NavLink>

          {/* CTA Button */}
          <a
            href="/contact"
            className="ml-6 px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-neutral-200 to-white text-neutral-900 hover:shadow-md hover:scale-105 transition-transform duration-300"
          >
            Request Access
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-300 hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 border-t border-neutral-800/40 px-6 py-4 space-y-4">
          <div>
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Services</p>
            <ul className="grid grid-cols-1 gap-1 mb-4">
              {serviceLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="block rounded-md px-3 py-2 text-neutral-300 hover:bg-neutral-800/60 hover:text-white text-sm" onClick={()=>setIsOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          {['/features','/security','/download','/faq'].map(path => (
            <a key={path} href={path} className="block text-neutral-300 hover:text-white transition" onClick={()=>setIsOpen(false)}>
              {path.replace('/','').toUpperCase()}
            </a>
          ))}
          <a
            href="/contact"
            className="block w-full text-center px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-neutral-200 to-white text-neutral-900 hover:shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setIsOpen(false)}
          >
            Request Access
          </a>
        </div>
      )}
    </nav>
  );
}
