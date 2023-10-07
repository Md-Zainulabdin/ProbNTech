"use client";
import React, { useState } from "react";
import clientTestimonial from "@/data/client";
import { PiQuotesDuotone } from "react-icons/pi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function SwiperClient() {
  const [data] = useState(clientTestimonial);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }} 
        modules={[Autoplay]}
        loop={true}
        className="swiper"
      >
        {data.map((slide) => (
          <SwiperSlide className="swiper_slide" key={slide.id}>
            <div className="w-[600px] flex flex-col items-start text-left gap-4">
              <div className="quote-symbol text-left">
                <PiQuotesDuotone className="text-6xl rotate-180 text-[#222] opacity-60" />
              </div>

              <div className="quote">
                <p className="text-lg">{slide.quote}</p>
              </div>

              <div className="client flex gap-4 mt-2">
                <div className="profile">
                  <img
                    src={slide.image}
                    alt="Profile pic"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                <div className="intro flex flex-col">
                  <h1 className="text-xl font-semibold">{slide.name}</h1>
                  <span className="text-[#555]">{slide.position}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
