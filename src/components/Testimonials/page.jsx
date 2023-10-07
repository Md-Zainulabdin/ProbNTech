import SwiperClient from "../Swiper/page";

const Testimonials = () => {
  return (
    <div>
      <div className="title flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#333]">
          Testimonials{" "}
        </h1>
        <p className="text-lg">
          Discover What Our Satisfied Clients Have to Say About Us
        </p>
      </div>

      <div className="sliders mt-6">
        <SwiperClient />
      </div>
    </div>
  );
};

export default Testimonials;
