export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-yellow-400/30 to-transparent blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute inset-0 [background:radial-gradient(circle_at_15%_35%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Phone Mock */}
            <div className="relative lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="relative w-72 h-[34rem] [perspective:1200px]">
                <div className="absolute flex items-center justify-center inset-0 rounded-[3rem] border border-white/10 bg-[#003366]/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)] rotate-[13deg] hover:rotate-[9deg] transition-transform duration-700 ease-out origin-bottom-left overflow-hidden group">
                  <img src="/logo.png" alt="App Mobile" className="w-50 h-auto opacity-90 mix-blend-screen" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#003366_0%,transparent_60%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#003366]/70 to-transparent">
                    <p className="text-sm font-medium tracking-wide">Real-time Secure DealFlow</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Intro */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Download The Platform App</h1>
              <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-2xl">Execute diligence, monitor KPIs and coordinate workstreams anywhere. Performance tuned, encrypted, offline tolerant sync layers.</p>
            </div>
          </div>
        </div>
        {/* Floating accents */}
        <div className="pointer-events-none select-none">
            <div className="absolute left-1/2 top-10 w-px h-40 bg-gradient-to-b from-white/30 to-transparent" />
            <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full border border-white/10 animate-pulse" />
        </div>
      </section>

      {/* DOWNLOAD CTA (White) */}
      <section className="relative bg-white text-neutral-900 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:52px_100%]" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex flex-wrap items-center gap-5">
              <a href="#" className="group relative h-14 px-8 rounded-xl bg-neutral-900 text-white font-semibold text-sm tracking-wide flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">App Store</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-400 to-yellow-300 transition" />
              </a>
              <a href="#" className="group relative h-14 px-8 rounded-xl bg-neutral-900 text-white font-semibold text-sm tracking-wide flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Google Play</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-400 to-yellow-300 transition" />
              </a>
              <a href="#" className="h-14 px-8 rounded-xl bg-white text-neutral-900 font-semibold text-sm tracking-wide flex items-center hover:bg-neutral-100 transition border border-neutral-300">Secure APK</a>
              <div className="flex items-center gap-4 ml-2">
                <div className="w-20 h-20 rounded-lg bg-neutral-900 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[repeating-linear-gradient(45deg,#fff_0,#fff_2px,transparent_2px,transparent_4px)]" />
                </div>
                <div className="text-[11px] leading-relaxed text-neutral-600 max-w-[8rem]">Scan for instant install & SSO provisioning.</div>
              </div>
            </div>
            <p className="text-neutral-500 text-xs max-w-xl leading-relaxed">APK provided for enterprise distribution / restricted geos. Validate checksum before install. Store builds deliver automatic integrity & delta updates.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h2 className="text-lg font-semibold tracking-wide mb-4">Why Mobile Matters</h2>
              <p className="text-sm leading-relaxed text-neutral-600">Responsive notifications, biometric MFA and offline resilience ensure decision velocity and secure continuity across time zones.</p>
              <ul className="mt-6 space-y-2 text-[12px] text-neutral-600">
                <li>• Encrypted local vault</li>
                <li>• Optimized data usage</li>
                <li>• Real-time push orchestration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Dark) */}
      <section className="relative py-28 bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.07),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-12">Mobile Capability Set</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {t:'Offline Sync Layer',d:'Transactional queue + conflict resolution ensures continuity.'},
              {t:'Biometric MFA',d:'Device-native secure enclave leveraged for frictionless auth.'},
              {t:'Low Latency Feeds',d:'Delta compression + edge caching for sub-second updates.'},
              {t:'Encrypted Vault',d:'Locally sandboxed sensitive artifact container.'},
              {t:'Adaptive Dark Mode',d:'Context aware theme optimizing readability & battery.'},
              {t:'Real-time Alerts',d:'Push orchestration with priority routing controls.'},
            ].map(f=> (
              <div key={f.t} className="relative group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/15 to-transparent" />
                <h3 className="text-sm font-semibold tracking-wide mb-2 text-white relative z-10">{f.t}</h3>
                <p className="text-[11px] leading-relaxed text-neutral-300 relative z-10">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
