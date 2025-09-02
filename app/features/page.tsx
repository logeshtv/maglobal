import React from 'react';
import type { Metadata } from 'next';
import { Workflow, ShieldCheck, Layers, LineChart, Cpu, Users } from 'lucide-react';

// Professional restructured features page with timeline, metrics band, narrative, technical specs columns & side CTA
export default function FeaturesPage(){
  const coreFeatures = [
    { icon: <Workflow className="w-5 h-5" />, title: 'Deal Origination', desc: 'Curated sourcing graph, signal scoring & target enrichment feeding qualified pipeline velocity.' },
    { icon: <Layers className="w-5 h-5" />, title: 'Diligence Workspaces', desc: 'Isolated, encrypted data rooms with granular role segmentation & immutable audit fabric.' },
    { icon: <LineChart className="w-5 h-5" />, title: 'Advanced Analytics', desc: 'Valuation, synergy & scenario engines with real-time KPI telemetry overlays.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Compliance Guardrails', desc: 'Policy driven workflow gating, approval routing & exception escalation traceability.' },
    { icon: <Cpu className="w-5 h-5" />, title: 'Automation Layer', desc: 'Event-driven orchestration for notifications, reminders & dataset harmonization.' },
    { icon: <Users className="w-5 h-5" />, title: 'Collaboration Fabric', desc: 'Encrypted messaging, contextual notes, version lineage & structured decision logs.' },
  ];

  const principles = [
    'Security-first zero trust posture',
    'Composable API-centric design',
    'Deterministic performance & auditability',
    'Minimal cognitive load UX',
    'Scalable multi-tenant isolation',
    'Data integrity & lineage transparency'
  ];

  const technical = [
    { title: 'Infrastructure', points: ['Multi-AZ + edge CDN','Containerized micro-cores','Autoscaling compute policy','Observability pipeline','Encrypted object storage'] },
    { title: 'Data & Intelligence', points: ['Streaming event bus','Change data capture','Delta compression feeds','Semantic search indexing','Anomaly detection hooks'] },
    { title: 'Security Layer', points: ['mTLS internal services','Just-in-time credentials','Hardware backed keys','Continuous posture scans','Policy-based authorization'] },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 relative">
      {/* HERO */}
      <section className="relative py-36 sm:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_65%)]" />
        <div className="absolute -right-40 -top-32 w-[46rem] h-[46rem] bg-gradient-to-br from-neutral-700/40 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-8">Enterprise Feature Stack</h1>
            <p className="text-neutral-300 text-lg leading-relaxed font-light mb-10">Unified lifecycle execution: sourcing, diligence, valuation analytics, integration governance and continuous portfolio intelligence—composed with precision control & audit transparency.</p>
          </div>
          {/* Metrics Band */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4 border-t border-white/10">
            {[{k:'99.99%',v:'Uptime SLA'},{k:'50+',v:'Data Connectors'},{k:'24/7',v:'Monitoring'},{k:'500K+',v:'Secured Docs'}].map(m=> (
              <div key={m.k} className="pt-6">
                <p className="text-2xl font-semibold text-white tracking-tight">{m.k}</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-1">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative py-28 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:48px_100%]" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-14">Lifecycle Orchestration Flow</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <div className="grid md:grid-cols-6 gap-10">
              {['Origination','Screening','Diligence','Valuation','Approval','Integration'].map((stage,i)=> (
                <div key={stage} className="relative flex flex-col items-start md:items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-900 text-white text-xs font-semibold tracking-wide shadow group-hover:scale-105 transition">{i+1}</div>
                  <p className="mt-4 text-sm font-medium tracking-wide text-neutral-900">{stage}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 max-w-[10rem] md:text-center">Controlled handoffs & gated checkpoints</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURE GRID + NARRATIVE SIDE PANEL */}
      <section className="relative py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 content-start">
            {coreFeatures.map(f => (
              <div key={f.title} className="group relative rounded-2xl bg-white border border-neutral-200 p-7 shadow-sm overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neutral-900/5 to-transparent transition" />
                <div className="flex items-center gap-3 mb-4 text-neutral-900">
                  <div className="w-9 h-9 rounded-md bg-neutral-900 text-white flex items-center justify-center shadow">{f.icon}</div>
                  <h3 className="text-sm font-semibold tracking-wide">{f.title}</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-neutral-600 pr-2">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">Platform Narrative</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">The platform composes structured workflow objects, secure collaboration primitives and streaming telemetry into a coherent operating fabric. Every transaction artifact obtains provenance, permission context and analytical enrichment—enabling faster, higher confidence decisions.</p>
            </div>
            <div className="rounded-2xl bg-neutral-900 text-neutral-100 p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_70%)]" />
              <h3 className="text-lg font-light mb-4">Enterprise Differentiation</h3>
              <ul className="space-y-3 text-xs tracking-wide text-neutral-300">
                <li>Precision access boundaries with traceable entitlement lineage</li>
                <li>Deterministic state transitions enabling governance automation</li>
                <li>Data model extensibility without schema migration friction</li>
                <li>Vertical integration of valuation analytics & workflow metadata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE PRINCIPLES / TECH SPECS */}
      <section className="relative py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Architecture Principles</h2>
              <ul className="space-y-3 text-sm text-neutral-600">
                {principles.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-[12px] leading-relaxed text-neutral-500">Principles inform daily implementation: code review checklists, design review scoring and production change gating reference the same foundational criteria.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-500 uppercase mb-6">Technical Specifications</h3>
              <div className="grid md:grid-cols-3 gap-6 relative">
                {technical.map(col => (
                  <div key={col.title} className="relative rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-7 shadow-sm">
                    <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-4">{col.title}</p>
                    <ul className="space-y-3 text-[12px] text-neutral-600">
                      {col.points.map(pt => <li key={pt} className="flex gap-2"><span className="mt-1 inline-block w-1 h-1 rounded-full bg-neutral-400" />{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
