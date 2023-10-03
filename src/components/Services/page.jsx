import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";

const service_card = [
  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#e1eeff]">
        <TfiWorld size={22} className="text-[#2282ff]" />
      </div>
    ),
    title: "Web Development",
    desc: `At Prob N Tech, we understand the vital role web development plays in your online business. Our dedicated team specializes in creating top-notch websites to help your business thrive online.`,
  },
  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#fceef3]">
        <AiOutlineLineChart size={30} className="text-[#ff689b]" />
      </div>
    ),
    title: "Digital Marketing",
    desc: `Digital marketing is the use of online strategies and tools to promote businesses and achieve goals such as boosting brand visibility, attracting customers, and increasing sales`,
  },
  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#e6fdfc]">
        <MdOutlineDesignServices size={30} className="text-[#3fcdc7]" />
      </div>
    ),
    title: "Graphic Design",
    desc: `Graphic design is the visual art of communication through typography, imagery, and layout, vital for creating impactful branding and marketing materials`,
  },
  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#eafde7]">
        <TbSeo size={30} className="text-[#41cf2e]" />
      </div>
    ),
    title: "Search Engine Optimization",
    desc: `SEO is the art of improving website visibility on search engines, driving organic traffic and digital success.`,
  },

  {
    icon: (
      <div className="my-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#ecebff]">
        <CiMobile1 size={30} className="text-[#8660fe]" />
      </div>
    ),
    title: "App Deveoplment",
    desc: `Graphic design is the visual art of communication through typography, imagery, and layout, vital for creating impactful branding and marketing materials`,
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full">
      <div className="services title py-[20px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
          <span className="text_gradient_pink">Services,</span> We offer 👀
        </h1>
      </div>

      <div className="services-cards w-full flex items-center justify-center flex-wrap gap-8 py-8">
        {service_card.map((item, index) => (
          <div
            className="w-[350px] p-6 borde bg-[#fbfbfb] flex flex-col items-start gap-3 rounded-md hover:translate-y-[-5px] hover:scale-[1.01] duration-300 ease-in-out shadow-md"
            key={index}
          >
            <div className="icon ">{item.icon}</div>
            <div className="title">
              <h2 className="poppins text-xl font-semibold text-[#333]">
                {item.title}
              </h2>
            </div>

            <div className="desc">
              <p
                id="services_paragraph"
                className="text-[16px] font-normal text-[#999]"
              >
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
