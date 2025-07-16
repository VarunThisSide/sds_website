import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import HeroSection from '@/components/ui/HeroSection';
import WhatWeOffer from '@/components/ui/WhatWeOffer';
export default function Home() {

  const features = [
    { src: "/icons/workshop.svg", text: "Workshops" },
    { src: "/icons/hackathon.svg", text: "Hackathons" },
    { src: "/icons/mentor.svg", text: "Mentorship" },
    { src: "/icons/project.svg", text: "Industry Projects" },
    { src: "/icons/research.svg", text: "Research Events" },
    { src: "/icons/network.svg", text: "Networking" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WhatWeOffer items={features}/>

    </div>
  );
}
