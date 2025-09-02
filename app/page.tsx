import TrustBar from './components/TrustBar';
import CoreServices from './components/CoreServices';
import HowItWorks from './components/HowItWorks';
import Advantage from './components/Advantage';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full min-h-screen"
        style={{
          backgroundImage: 'url("/building-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral-950/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-32 text-center">
          {/* Tagline */}
          <span className="inline-block px-5 py-1.5 sm:px-6 sm:py-2 bg-neutral-900/70 text-neutral-200 text-xs sm:text-sm font-medium tracking-wider uppercase border border-neutral-700/40 backdrop-blur-sm rounded-full mb-8">
            Confidential • Secure • Exclusive
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-4">
            The M&amp;A Global Platform
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl font-light text-neutral-300 mb-8 tracking-wide">
            Where Opportunity Meets Discretion
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Our enterprise-grade digital platform streamlines complex M&amp;A 
            transactions for institutional clients. Access confidential deal flow, 
            manage sophisticated due diligence processes, and communicate securely 
            with your dedicated advisory team — all within a fortified environment.
          </p>

          {/* Footer Line */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-neutral-500 text-xs sm:text-sm font-medium tracking-wider">
            <span>ENTERPRISE SECURITY</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>INSTITUTIONAL GRADE</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>INVITATION ONLY</span>
          </div>
        </div>
      </section>
      <TrustBar />
      <section className="bg-white">
        <CoreServices />
      </section>
      <HowItWorks />
      <Advantage />
      <Metrics />
      <Testimonials />
  <FinalCTA />
    </>
  );
}
