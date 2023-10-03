import Image from "next/image";
import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 py-8">
      <div className="about-left w-full lg:w-[40%] flex justify-center items-center overflow-hidden">
        <Image
          src={"/Assest/about.jpg"}
          alt="About us "
          width={400}
          height={500}
          priority
        />
      </div>
      <div className="about-right w-full lg:w-[60%] p-4 flex flex-col  gap-4 overflow-hidden">
        <div className="title">
          <h1 className="poppins text-3xl md:text-4xl font-bold">About Us</h1>
        </div>

        <div className="desc max-w-[600px]">
          <div className="intro text-lg">
            <span className="text-[#444] font-medium">
              Muhammad Faizan Ashraf{" "}
            </span>{" "}
            <span className="text-[#999]">Founder & CEO of </span>{" "}
            <span className="font-bold text_gradient_pink">Prob N Tech</span>
          </div>

          <div className="para mt-2 text-lg text-justify">
            <p>
              I am delighted to address you today. From the very outset of our
              journey, our core mission has been to equip businesses like yours
              with the essential tools and expertise required to thrive in the
              continually evolving digital landscape. At{" "}
              <strong>Prob N Tech</strong>, we take immense pride in our ability
              to offer a comprehensive range of consulting services, conduct
              meticulous research, and craft innovative solutions that drive
              your success.
            </p>
          </div>

          <div className="points mt-3">
            <ul className="flex flex-col gap-4">
              <li className="text-lg">
                <p>
                  {" "}
                  <span className="font-bold text-[#333]">
                    <BsChevronDoubleRight
                      className="inline-block text-pink-500 mr-1"
                      size={20}
                    />{" "}
                    Dedicated Team :{" "}
                  </span>
                  Prob N Tech boasts a team of dedicated professionals who are
                  unwaveringly committed to unlocking the full potential of
                  their clients' businesses.
                </p>
              </li>
              <li className="text-lg">
                <p>
                  {" "}
                  <span className="font-bold text-[#333]">
                    <BsChevronDoubleRight
                      className="inline-block text-pink-500 mr-1"
                      size={20}
                    />{" "}
                    Audience Engagement :{" "}
                  </span>
                  With profound expertise, Prob N Tech helps businesses connect
                  with wider audiences and foster lasting relationships in the
                  digital realm.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
