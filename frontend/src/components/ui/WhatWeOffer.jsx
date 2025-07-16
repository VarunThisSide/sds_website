export default function WhatWeOffer() {
  return (
    <section className="flex justify-center items-center py-20 bg-black text-white">
      <div className="bg-[#1A1A1A] rounded-[3rem] p-10 w-full max-w-5xl text-center shadow-lg relative overflow-hidden">
        <h2 className="text-3xl font-semibold mb-10">What We Offer</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Add icon/text if needed */}
            </div>
          ))}
        </div>

        {/* Gradient Button */}
        <div className="mt-10">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 hover:brightness-110 hover:scale-105 transition-all duration-300 font-medium">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}
