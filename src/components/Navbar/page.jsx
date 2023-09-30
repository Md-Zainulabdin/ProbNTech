import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (

    // Navbar

    <nav className="w-full h-[90px] md:h-[120px] flex items-center justify-between px-[20px] md:px-[70px]">
      <div className="logo overflow-hidden">
        {/* <Image
          src={`/Assest/logo.png`}
          alt={`Website Logo`}
          width={120}
          height={120}
          priority
          className="w-[35px]"
        /> */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[--primary-text-color]">Prob N Tech</h1>
      </div>
      <div className="menu flex items-center gap-6 text-lg md:text-xl">
        <Link href={'/'} className="poppins hover:text-white duration-300">About</Link>
        <Link href={'/'} className="poppins hover:text-white duration-300">Services</Link>
        <button className="poppins bg-indigo-500 hover:bg-indigo-400 duration-300 py-[6px] px-4 rounded-full">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
