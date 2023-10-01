import Link from "next/link";

const Navbar = () => {
  return (
    // Navbar

    <nav
      className={`w-full h-[80px] md:h-[100px] fixed top-0 z-10 bg-[rgba(13,17,23,.88)] flex items-center justify-between px-[20px] sm:px-[40px] lg:px-[70px]`}
    >
      <div className="logo overflow-hidden">
        <h1 className="text-2xl md:text-3xl font-semibold text-[--primary-text-color]">
          Prob N Tech
        </h1>
      </div>
      <div className="menu flex items-center gap-6">
        <Link
          href={"/"}
          className="poppins text-lg md:text-xl font-medium hover:text-white duration-300"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="poppins text-lg md:text-xl font-medium hover:text-white duration-300"
        >
          Services
        </Link>
        <button className="poppins text-[18px] text-white font-medium bg-indigo-500 hover:bg-indigo-600 duration-300 py-[6px] px-4 rounded-full">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
