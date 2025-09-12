
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhatWeOffer({ items, itemsPerPage = 3 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerPage);

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const currentItems = items.slice(
    currentSlide * itemsPerPage,
    currentSlide * itemsPerPage + itemsPerPage
  );

  return (
    <section className="flex justify-center items-center py-20 bg-black text-white">
      <div className="bg-[#1A1A1A] rounded-[3rem] px-6 sm:px-10 py-14 w-full max-w-6xl text-center shadow-lg relative overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-semibold mb-0 py-5">What We Offer?</h2>
        <p className="text-gray-400 mb-10">{items.length} Offerings</p>

        {/* Cards */}
        <div className="flex justify-center items-center gap-8 mb-6 transition-all duration-500">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="w-60 h-60 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex flex-col items-center justify-center text-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.text}
                width={48}
                height={48}
                className="mb-4"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-black/50 hover:bg-black disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full bg-black/50 hover:bg-black disabled:opacity-30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentSlide
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 hover:brightness-110 hover:scale-105 transition-all duration-300 font-medium">
          Learn More →
        </button>
      </div>
    </section>
  );
}
