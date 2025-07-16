import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import HeroSection from '@/components/ui/HeroSection';
import WhatWeOffer from '@/components/ui/WhatWeOffer';
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />

    </div>
  );
}
