import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Download App | The M&A Global Platform Mobile',
  description: 'Install the M&A Global mobile app to create an account, browse confidential sale mandates, subscribe for access, and engage securely with our advisory team.'
};

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
                <div className="absolute flex items-center justify-center inset-0 rounded-[3rem] border border-white/10 bg-[#003366]/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)] rotate-[13deg] hover:rotate-[9deg] transition-transform duration-700 ease-out origin-bottom-left overflow-hidden group relative">
                  <Image src="/logo.png" alt="App Mobile" fill className="object-contain opacity-90 mix-blend-screen" />
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
              <p className="text-neutral-300 text-lg leading-relaxed font-light max-w-2xl">Create an account, evaluate verified businesses for sale, subscribe to unlock owner / advisor contact details, shortlist opportunities, and track progress—securely and privately.</p>
            </div>
          </div>
        </div>
        {/* Floating accents */}
        <div className="pointer-events-none select-none">
            <div className="absolute left-1/2 top-10 w-px h-40 bg-gradient-to-b from-white/30 to-transparent" />
            <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full border border-white/10 animate-pulse" />
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="relative bg-white text-neutral-900 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:58px_100%]" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Actions */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight">Install & Access</h2>
                <p className="text-neutral-600 max-w-xl leading-relaxed text-sm sm:text-base">The M&amp;A Global mobile experience provides secure access to confidential listings. Subscribe to view full dossiers, financial abstracts and initiate advisor-facilitated engagement with sellers.</p>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {/* Disabled App Store */}
                <div className="h-14 px-8 rounded-xl bg-neutral-200 text-neutral-500 font-medium text-sm tracking-wide flex items-center gap-3 border border-neutral-300 cursor-not-allowed select-none">
                  <span>App Store (Soon)</span>
                </div>
                {/* Disabled Google Play */}
                <div className="h-14 px-6 rounded-xl bg-neutral-200 text-neutral-500 font-medium text-sm tracking-wide flex items-center gap-3 border border-neutral-300 cursor-not-allowed select-none">
                  <span>Google Play (Soon)</span>
                </div>
                {/* Active APK Download */}
                <a
                  href="/maglobal.apk"
                  download
                  className="group relative h-14 px-8 rounded-xl bg-emerald-600 text-white font-semibold text-sm tracking-wide flex items-center gap-3 shadow hover:bg-emerald-500 transition"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  {/* Download Icon Placeholder */}
                  {/* <span className="w-5 h-5 inline-block" /> */}
                  <span>Download APK</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-500 leading-relaxed">
                <span className="px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200 font-medium tracking-wide">Version 1.0.0+1</span>
                <span>Checksum (SHA256) available on request.</span>
              </div>

              <p className="text-[11px] text-neutral-500 max-w-xl leading-relaxed">Enable installation from trusted sources if prompted. Always verify you obtained the file directly from our official domain. Future store releases will support automatic delta updates.</p>
            </div>

            {/* Right Column: Feature Bullets */}
            <div className="lg:col-span-5 space-y-10">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold tracking-wide mb-5">In-App Capabilities</h3>
                <ul className="space-y-4 text-sm text-neutral-600">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Browse verified businesses for sale</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Structured profile & financial abstracts</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Subscription gate for confidential data unlock</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Secure advisor messaging & inquiry routing</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Shortlist, track and compare opportunities</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Real-time update feed & status changes</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-sm">
                <h3 className="text-sm font-medium tracking-wide mb-3 text-neutral-800">Data Access Model</h3>
                <p className="text-[13px] leading-relaxed text-neutral-600">Listings surface a high-level overview by default. Subscribing unlocks extended metrics, documents and direct engagement pathways with our advisory desk subject to clearance.</p>
              </div>
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
              {t:'Offline Sync Layer',d:'Queued operations + conflict resolution for continuity.'},
              {t:'Secure Session Model',d:'Ephemeral tokens & hardened transport layers.'},
              {t:'Low Latency Feeds',d:'Edge delivery for rapid listing + status refresh.'},
              {t:'Encrypted Vault',d:'Local sandbox for sensitive cached fragments.'},
              {t:'Adaptive Theming',d:'Context-aware interface for clarity & efficiency.'},
              {t:'Intelligent Alerts',d:'Priority routing for listing changes & approvals.'},
            ].map(f=> (
              <div key={f.t} className="relative group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/15 to-transparent" />
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
