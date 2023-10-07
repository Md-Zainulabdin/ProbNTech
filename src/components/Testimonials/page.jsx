"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiQuotesDuotone } from "react-icons/pi";
import clientTestimonial from "@/data/client";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

const Testimonials = () => {
  const [data] = useState(clientTestimonial);
  return (
    <div>
      <div className="title flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#333]">
          Testimonials{" "}
        </h1>
        <p className="text-lg">
          Discover What Our Satisfied Clients Have to Say About Us
        </p>
      </div>

      <div className="sliders mt-6">
        <Swiper spaceBetween={50} autoplay={true}>
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full border p-4">
              <div className="w-[500px] flex flex-col justify-center items-start relative">
                <div className="quote-symbol text-left">
                  <PiQuotesDuotone className="text-6xl rotate-180 text-[#222] opacity-60" />
                </div>

                <div className="quote">
                  <p>{slide.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
