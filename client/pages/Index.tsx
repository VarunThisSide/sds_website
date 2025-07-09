import { ArrowUpRight } from "lucide-react";

const FloatingDot = ({
  className,
  color = "purple-accent",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={`absolute w-[18px] h-[18px] rounded-full ${color === "white" ? "bg-white" : "bg-purple-accent"} ${className}`}
    style={{
      background: color === "white" ? "white" : "#C30EFF",
      filter: "drop-shadow(0 0 20px rgba(195, 14, 255, 0.3))",
    }}
  />
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative backdrop-blur-glass border border-glass-border rounded-[32px] ${className}`}
    style={{
      background: "rgba(255, 255, 255, 0.46)",
      backdropFilter: "blur(10px)",
    }}
  >
    {children}
  </div>
);

const LearnMoreButton = () => (
  <button
    className="relative flex items-center justify-center w-[234px] h-[72px] rounded-full text-white font-manrope text-2xl font-medium overflow-hidden group transition-all duration-300 hover:scale-105"
    style={{
      background:
        "linear-gradient(93deg, #52817F 27.81%, #56619E 70.35%, #6B4A9C 98.2%)",
    }}
  >
    <span className="relative z-10 mr-3">Learn More</span>
    <ArrowUpRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
  </button>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <FloatingDot className="top-16 right-16" />
      <FloatingDot className="top-1/3 left-8" />
      <FloatingDot className="bottom-1/3 right-20" />
      <FloatingDot className="top-1/4 right-1/4" color="white" />
      <FloatingDot className="bottom-1/4 left-1/4" color="white" />

      {/* 3D Animation - positioned decoratively */}
      <div className="absolute bottom-16 right-16 opacity-67">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a75075374eba0da4437f37f081639f47b13e9bc?width=465"
          alt="3D Animation"
          className="w-[232px] h-[255px] object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Section title */}
        <div className="text-center mb-16">
          <h1 className="text-white font-manrope text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight">
            What We Offer
          </h1>
        </div>

        {/* Main container with glass morphism background */}
        <div className="relative">
          {/* Large background glass container */}
          <div
            className="absolute inset-0 -mx-4 -my-8 backdrop-blur-glass-light border border-glass-border rounded-[64px]"
            style={{
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(6px)",
            }}
          />

          {/* Content grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-8">
            {/* Card 1 */}
            <GlassCard className="h-[325px] p-8 flex flex-col justify-center items-center text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-accent to-blue-500 rounded-full mx-auto opacity-80" />
                <h3 className="text-white font-manrope text-xl font-semibold">
                  Innovation
                </h3>
                <p className="text-gray-300 font-manrope text-sm leading-relaxed">
                  Cutting-edge solutions that push the boundaries of what's
                  possible in technology.
                </p>
              </div>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard className="h-[325px] p-8 flex flex-col justify-center items-center text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto opacity-80" />
                <h3 className="text-white font-manrope text-xl font-semibold">
                  Excellence
                </h3>
                <p className="text-gray-300 font-manrope text-sm leading-relaxed">
                  Delivering exceptional quality in every project with attention
                  to detail.
                </p>
              </div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard className="h-[325px] p-8 flex flex-col justify-center items-center text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-accent rounded-full mx-auto opacity-80" />
                <h3 className="text-white font-manrope text-xl font-semibold">
                  Support
                </h3>
                <p className="text-gray-300 font-manrope text-sm leading-relaxed">
                  Comprehensive support and guidance throughout your entire
                  journey with us.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center mt-16">
            <LearnMoreButton />
          </div>
        </div>

        {/* Academic Workshops and Sessions Section */}
        <div className="relative mt-32">
          {/* Additional floating dots for this section */}
          <FloatingDot className="absolute -left-8 top-16" color="white" />
          <FloatingDot className="absolute left-1/3 top-32" />
          <FloatingDot className="absolute right-24 bottom-16" color="white" />
          <FloatingDot className="absolute -left-16 bottom-8" />

          {/* 3D Animation - positioned decoratively */}
          <div className="absolute -left-16 bottom-16 opacity-67">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9d84450ad429eef75903baffc1860304638950?width=465"
              alt="3D Animation"
              className="w-[232px] h-[255px] object-contain"
            />
          </div>

          {/* Main container with glass morphism background */}
          <div className="relative">
            {/* Large background glass container */}
            <div
              className="absolute inset-0 -mx-4 -my-8 backdrop-blur-glass-light border border-glass-border rounded-[64px]"
              style={{
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(6px)",
              }}
            />

            {/* Content layout */}
            <div className="relative z-10 py-16 px-8">
              {/* Section title */}
              <div className="mb-16">
                <h2 className="text-white font-manrope text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight max-w-2xl">
                  Academic Workshops and Sessions
                </h2>
              </div>

              {/* Content with image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="space-y-6">
                  <p className="text-gray-300 font-manrope text-lg leading-relaxed">
                    Join our comprehensive academic workshops designed to
                    enhance your knowledge and skills in cutting-edge
                    technologies and methodologies.
                  </p>
                  <p className="text-gray-300 font-manrope text-lg leading-relaxed">
                    Our sessions cover a wide range of topics from fundamental
                    concepts to advanced applications, delivered by industry
                    experts and academic leaders.
                  </p>
                  <div className="mt-8">
                    <LearnMoreButton />
                  </div>
                </div>

                {/* Right image placeholder */}
                <div className="relative">
                  <div
                    className="w-full h-[400px] lg:h-[500px] rounded-[64px] bg-gray-400 opacity-49"
                    style={{
                      background: "rgba(196, 196, 196, 0.49)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Events Section */}
        <div className="relative mt-32">
          {/* Additional floating dots for this section */}
          <FloatingDot className="absolute left-8 -top-8" color="white" />
          <FloatingDot className="absolute right-32 top-12" />

          {/* Large image container with glass morphism */}
          <div className="relative">
            <div
              className="w-full h-[400px] lg:h-[500px] rounded-[56px] border border-glass-border"
              style={{
                background: "rgba(196, 196, 196, 0.49)",
              }}
            />

            {/* Overlay title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white font-manrope text-4xl md:text-5xl lg:text-[69px] font-bold text-center">
                Our Events
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Additional background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-accent/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-2xl" />
        <div className="absolute top-2/3 right-1/3 w-1/4 h-1/4 bg-gradient-radial from-purple-accent/10 via-transparent to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  );
}
