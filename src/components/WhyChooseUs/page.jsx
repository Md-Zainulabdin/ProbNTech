import Image from "next/image";
import React from "react";

const WhyChooseUS = () => {
  return (
    <div className="w-full py-6 relative">
     <div className="icon absolute top-10 right-28">
      <img
        src="/Assest/arrow.svg"
        alt="icon"
        className="w-[50px] h-[50px] rotate-[210deg]"
      />
    </div>

      <div className="title w-full text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Why <span className="text_gradient_pink font-extrabold">Choose </span>
          Us ?
        </h1>
      </div>

      <div className="features-card w-full flex flex-col md:flex-row gap-4 py-8 mt-4">
        <div className="img w-full md:w-[40%] flex justify-center items-center">
          <Image
            src={"/Assest/growth.svg"}
            alt="Features"
            width={400}
            height={300}
            priority
          />
        </div>
        <div className="desc w-full md:w-[60%] p-6">
          <h1 className="poppins text-2xl text-[#555] font-semibold">
            Business Growth
          </h1>
          <p className="max-w-[550px] text-lg mt-3">
            Fueling your expansion journey. We fuel sustainable growth by
            identifying untapped potential, devising growth strategies, and
            executing plans that propel your business towards remarkable
            achievements
          </p>
        </div>
      </div>

      <div className="features-card w-full flex flex-col md:flex-row-reverse gap-4 py-8 mt-4">
        <div className="img w-full md:w-[40%] flex justify-center items-center">
          <Image
            src={"/Assest/team.png"}
            alt="Features"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="desc w-full md:w-[60%] p-6">
          <h1 className="poppins text-2xl text-[#555] font-semibold">
            Dedicated Consulting Team
          </h1>
          <p className="max-w-[600px] text-lg mt-3">
            Expert guidance tailored to your needs. Our seasoned consultants
            offer strategic insights and practical solutions, empowering your
            business to overcome challenges and maximize opportunities
          </p>
        </div>
      </div>

      <div className="features-card w-full flex flex-col md:flex-row gap-4 py-8 mt-4">
        <div className="img w-full md:w-[40%] flex justify-center items-center">
          <Image
            src={"/Assest/search.svg"}
            alt="Features"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="desc w-full md:w-[60%] p-6">
          <h1 className="poppins text-2xl text-[#555] font-semibold">
            Research & Solutions
          </h1>
          <p className="text-lg mt-3">
            Data-driven problem solvers at your service. We delve deep into
            market trends and customer behaviors to deliver actionable
            recommendations and innovative solutions that drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
