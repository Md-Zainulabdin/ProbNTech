"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    // Navbar

    <nav
      className={`w-full h-[80px] md:h-[100px] fixed top-0 z-10 border-b backdrop-blur-md flex items-center justify-between px-[20px] sm:px-[40px] lg:px-[70px]`}
    >
      <div className="logo overflow-hidden">
        <motion.h1
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-[--primary-text-color]"
        >
          Prob N Tech
        </motion.h1>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        className="menu items-center gap-6 hidden md:flex"
      >
        <Link
          href={"/"}
          className="poppins text-lg md:text-xl font-medium hover:text-white duration-300"
        >
          About
        </Link>
        <Link
          href={"#service"}
          className="poppins text-lg md:text-xl font-medium hover:text-white duration-300"
        >
          Services
        </Link>
        <button className="poppins text-[18px] text-white font-medium btn_gradient duration-300 py-[6px] px-4 rounded-full">
          Contact us
        </button>
      </motion.div>

      <div className="hamburger cursor-pointer md:hidden">
        <FiMenu size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
