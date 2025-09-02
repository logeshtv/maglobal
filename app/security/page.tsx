import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security & Compliance | The M&A Global Platform',
  description: 'Zero-trust architecture, encryption, monitoring and compliance automation securing institutional M&A workflows end to end.'
};
import { Shield, Lock, KeyRound, Activity, Server, RefreshCcw } from 'lucide-react';

export default function SecurityPage(){
  const layers = [
    { icon:<Lock className="w-4 h-4" />, title: 'Authentication', desc: 'OIDC + device binding + optional hardware key step-up for privileged actions.' },
    { icon:<KeyRound className="w-4 h-4" />, title: 'Authorization', desc: 'Policy + attribute based enforcement; least privilege derivation automation.' },
    { icon:<Shield className="w-4 h-4" />, title: 'Data Security', desc: 'Envelope & field encryption, tokenization, secret rotation orchestration.' },
    { icon:<Server className="w-4 h-4" />, title: 'Infrastructure', desc: 'Immutable builds, signed artifacts, runtime drift detection & patch cadence.' },
    { icon:<Activity className="w-4 h-4" />, title: 'Monitoring', desc: 'Structured event pipeline, anomaly detection signals, threat intel feeds.' },
    { icon:<RefreshCcw className="w-4 h-4" />, title: 'Resilience', desc: 'Multi-AZ replication, chaos validation, RPO & RTO guardrails.' },
  ];

  const compliance = ['SOC 2 Type II alignment','ISO 27001 mapping','GDPR data rights orchestration','Data residency zoning','Vendor risk assessments','Continuous control monitoring'];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* HERO */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.07),transparent_70%)]" />
        <div className="absolute -left-40 -top-32 w-[46rem] h-[46rem] bg-gradient-to-br from-neutral-600/30 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Security & Compliance</h1>
          <p className="text-neutral-300 max-w-3xl mx-auto text-lg leading-relaxed font-light">Defense-in-depth architecture embedding zero-trust controls, continuous assurance and evidentiary transparency across the transaction lifecycle.</p>
        </div>
      </section>

      {/* THREAT MODEL STRIP */}
      <section className="relative bg-neutral-900 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10 grid sm:grid-cols-3 gap-10">
          {[{k:'0',l:'Critical CVEs Unpatched'},{k:'<15m',l:'Median Patch Deploy'},{k:'24/7',l:'Security Monitoring'}].map(item => (
            <div key={item.l} className="flex flex-col">
              <p className="text-3xl font-semibold tracking-tight text-white">{item.k}</p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 font-medium">{item.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAYERS GRID */}
      <section className="relative py-28 bg-neutral-50 text-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {layers.map(l => (
              <div key={l.title} className="group relative rounded-2xl bg-white border border-neutral-200 p-7 shadow-sm overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neutral-900/5 to-transparent transition" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-neutral-900 text-white flex items-center justify-center shadow">{l.icon}</div>
                  <h3 className="text-sm font-semibold tracking-wide">{l.title}</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-neutral-600 pr-1">{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-5">Control Philosophy</h2>
              <p className="text-sm leading-relaxed text-neutral-600">Controls are codified, composable and continuously verifiable. Telemetry enriched events unify audit, monitoring and anomaly detection. Security posture shifts from reactive remediation to proactive prevention.</p>
            </div>
            <div className="rounded-2xl bg-neutral-900 text-neutral-100 p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_70%)]" />
              <h3 className="text-lg font-light mb-4">Operational Safeguards</h3>
              <ul className="space-y-3 text-xs tracking-wide text-neutral-300">
                <li>Credentialless build & deploy pipeline</li>
                <li>Secret rotation automation & drift detection</li>
                <li>Continuous dependency provenance scanning</li>
                <li>Incident response runbooks with simulation cadence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE + DATA LIFECYCLE */}
      <section className="relative py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-24">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Compliance Posture</h2>
              <ul className="space-y-3 text-sm text-neutral-600">
                {compliance.map(c => <li key={c}>• {c}</li>)}
              </ul>
              <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-[12px] leading-relaxed text-neutral-500">Independent assessment cadence + continuous control validation instrumentation ensure audit readiness without operational drag.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-500 uppercase mb-6">Data Protection Lifecycle</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {['Ingest','Classify','Encrypt','Monitor','Purge'].map(stage => (
                  <div key={stage} className="relative rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 text-center shadow-sm">
                    <p className="font-medium text-neutral-900 mb-2 text-sm tracking-wide">{stage}</p>
                    <div className="h-1 w-8 bg-neutral-900 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Global Assurance Statement */}
          <div className="rounded-2xl bg-neutral-900 text-neutral-100 p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="text-xl font-light mb-4">Global Assurance</h3>
              <p className="text-sm leading-relaxed text-neutral-300">Security is an engineering system, not a bolt-on feature. We continuously tune signals, evolve controls and retire attack surface. Stakeholders gain durable confidence through transparency, automation and resilience.</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-semibold tracking-tight">0</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 font-medium">P1 Incidents YTD</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-semibold tracking-tight">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 font-medium">Encryption Coverage</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-semibold tracking-tight">&lt;15m</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1 font-medium">Median Patch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
