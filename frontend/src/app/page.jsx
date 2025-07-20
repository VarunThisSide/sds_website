"use client";

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import HeroSection from '@/components/ui/HeroSection';
// import WhatWeOffer from '@/components/ui/WhatWeOffer';

import React from 'react'
import ReactDOM from 'react-dom/client'
// import '../components/css/base.css'
// import '../components/css/embla.css'
// import '../components/css/sandbox.css'
import App from '@/components/ui/App';

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
      <App />
      <Sponsors />
      <Footer />

    </div>
  );
}
