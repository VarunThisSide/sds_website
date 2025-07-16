'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

function ImgSlider() {
   
      
  return (
    <div className="w-full flex items-center justify-center min-h-screen ">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[1282px] bg-white/7 border border-white/30 rounded-3xl p-6 backdrop-blur-md fill-white/10 stroke-white/30 shadow-lg">

        <h1 className="mb-8 text-2xl sm:text-3xl text-center font-semibold text-Black">
          Club Directory
        </h1>

        <Swiper
          className="w-full"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 80,
            stretch: -120,
            depth: 300,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
        >
          {[...Array(8)].map((_, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center w-[375px] h-[395px]"
            >
              <img
                className="rounded-xl object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[395px]"
                src={`https://swiperjs.com/demos/images/nature-${idx + 1}.jpg`}
                alt={`Nature ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-10 flex justify-center gap-2" />
      </div>
    </div>
  );
}


export default ImgSlider