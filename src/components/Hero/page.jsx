import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-[400] py-20 md:py-28 md:text-center flex flex-col gap-6">
        <div className="sub-heading">
          <h2 className="poppins text-md sm:text-lg font-medium uppercase">
            from ideas to reality
          </h2>
        </div>

        <div className="heading">
          <h1 className="text-5xl sm:text-7xl md:text-[88px] font-bold flex flex-col gap-3">
            <span>Explore the World </span>
            <span>
              {" "}
              With <span className="text_gradient_pink">Prob N Tech</span>
            </span>
          </h1>
        </div>

        <div className="text mt-3">
          <span className="poppins shadow-sm bg-[#fbfbfb] duration-300 ease-in-out p-3 text-md sm:text-2xl rounded-md">
            Creative Minds Make Business Solutions
          </span>
        </div>

        <div className="get-started mt-6">
          <button className="text-xl btn_gradient duration-200 ease-in-out text-white font-medium px-6 md:px-10 py-2 md:py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
