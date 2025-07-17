import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import ClubSlider from '@/components/Slider/ClubSlider';
import CuttingEdgeTech from '@/components/Tech/CuttingEdgeTech';



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ClubSlider />
      <CuttingEdgeTech />


    </div>
  );
}
