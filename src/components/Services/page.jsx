import React from "react";

const service_card = [
  {
    title: "Web Development",
    desc: `At Prob N Tech, we understand the vital role web development plays in your online business. Our dedicated team specializes in creating top-notch websites to help your business thrive online.`,
  },
  {
    title: "Digital Marketing",
    desc: `Digital marketing is the use of online strategies and tools to promote businesses and achieve goals such as boosting brand visibility, attracting customers, and increasing sales`,
  },
  {
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
          <div className="w-[350px] p-4 border bg-[#171e25] flex flex-col items-start gap-3" key={index}>
            <div className="title">
              <h2 className="poppins text-xl font-semibold text-white">{item.title}</h2>
            </div>

            <div className="desc">
                <p id="services_paragraph" className="text-[18px] font-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
