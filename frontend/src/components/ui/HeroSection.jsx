// import Image from "next/image";
// import brainImg from "../../../assets/brain.png";

// export default function HeroSection() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-black text-white">
      
//       <div className="max-w-xl mb-10 md:mb-0">
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Advancing <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
//             Data Science
//           </span>
//           <br />
//           Excellence
//         </h1>

//         <p className="mt-6 text-lg text-gray-300">
//           Join the premier academic society dedicated to advancing data science research,
//           fostering innovation in machine learning, and building the next generation of data scientists through academic workshops, project collaboration, and academic events.
//         </p>

//         <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all text-white font-semibold">
//           GET STARTED →
//         </button>
//       </div>

//       {/* Here I have adjusted the props if brain image */}
//       <div className="flex-shrink-0">
//         <Image
//           src={brainImg}
//           alt="Brain"
//           width={400}
//           height={400}
//           className="object-contain"
//         />
//       </div>
//     </section>
//   );
// }
// /* Screenshot 2025-06-14 155454 1 */



import Image from "next/image";
import { Button } from "./button.jsx";
import brainImg from "../../../assets/brain.png";

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Advancing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
            Data Science
          </span>{" "}
          <br />
          Excellence
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Join the premier academic society dedicated to advancing data science research,
          fostering innovation in machine learning, and building the next generation of data scientists
          through workshops, collaboration, and events.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition">
            GET STARTED →
          </Button>
        </div>
      </div>

      {/* Right: Brain Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={brainImg}
          alt="Brain illustration"
          width={400}
          height={400}
          priority
          className="animate-bounce-slow object-contain"
        />
      </div>
    </section>
  );
}
