import React from "react";
import Marquee from "react-fast-marquee";

const TrustedClient = () => {
  return (
    <div className="text-center flex flex-col gap-12 pb-8">
      <div className="cient-title">
        <h3 className="text-xl font-bold">Our trusted clients</h3>
      </div>

      <div className="client-company w-full cursor-grab">
        <Marquee
          gradient={true}
          gradientColor={[13, 17, 23]}
          speed={40}
          direction="left"
          pauseOnHover={true}
        >
          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 0.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 1.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 2.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 3.png"
              alt="company-logo"
              className="w-[50px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 4.png"
              alt="company-logo"
              className="w-[70px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 5.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 6.png"
              alt="company-logo"
              className="w-[60px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 0.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 1.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 2.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 3.png"
              alt="company-logo"
              className="w-[50px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 4.png"
              alt="company-logo"
              className="w-[70px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 5.png"
              alt="company-logo"
              className="w-[80px]"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/Assest/assest 6.png"
              alt="company-logo"
              className="w-[60px]"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedClient;
