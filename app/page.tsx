'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ROICalculator from './components/ROICalculator';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const CrystalCore = dynamic(() => import('./components/CrystalCore'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        className="h-40 w-40 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 67, 0.15), transparent 70%)',
        }}
      />
    </div>
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-grid" style={{ background: '#080808' }}>
      <Navbar />

      {/* Hero with 3D Background */}
      <div className="relative">
        <CrystalCore />
        <HeroSection />
      </div>

      {/* Section Divider */}
      <div className="section-divider mx-6" />

      <FeaturesSection />

      <div className="section-divider mx-6" />

      <ROICalculator />

      <div className="section-divider mx-6" />

      <PricingSection />

      <div className="section-divider mx-6" />

      <CTASection />

      <Footer />
    </div>
  );
}
