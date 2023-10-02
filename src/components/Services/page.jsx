import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";

const service_card = [
  {
    icon: (
      <div className="my-4 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#d5e7ff] shadow-md shadow-[#d5e7ffad]">
        <TfiWorld size={22} className="text-[#2282ff]" />
      </div>
    ),
    title: "Web Development",
    desc: `At Prob N Tech, we understand the vital role web development plays in your online business. Our dedicated team specializes in creating top-notch websites to help your business thrive online.`,
  },
  {
    icon: (
      <div className="my-4 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#def8f7] shadow-md shadow-[#def8f798]">
        <MdOutlineDesignServices size={30} className="text-[#3fcdc7]" />
      </div>
    ),
    title: "Digital Marketing",
    desc: `Digital marketing is the use of online strategies and tools to promote businesses and achieve goals such as boosting brand visibility, attracting customers, and increasing sales`,
  },
  {
    icon: (
      <div className="my-4 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#fceef3] shadow-md shadow-[#fceef38e]">
        <AiOutlineLineChart size={30} className="text-[#ff689b]" />
      </div>
    ),
    title: "Graphic Design",
    desc: `Graphic design is the visual art of communication through typography, imagery, and layout, vital for creating impactful branding and marketing materials`,
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full">
      <div className="services title py-[20px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
          <span className="text_gradient_teal">Services,</span> We offer 👀
        </h1>
      </div>

      <div className="services-cards w-full flex items-center justify-center flex-wrap gap-6 py-8">
        {service_card.map((item, index) => (
          <div
            className="w-[350px] p-6 border border-slate-500 bg-[#171e25] flex flex-col items-start gap-3 hover:translate-y-[-15px] hover:scale-[1.02] duration-300 ease-in-out"
            key={index}
          >
            <div className="icon ">{item.icon}</div>
            <div className="title">
              <h2 className="poppins text-xl font-semibold text-white">
                {item.title}
              </h2>
            </div>

            <div className="desc">
              <p id="services_paragraph" className="text-[16px] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
