import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarosuelCard from "./CarosuelCard";
// import required modules
const Carousel = ({ slides }) => {
  return (
    <div className="relative w-full ">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="my-10 "
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="px-2 ">
            <CarosuelCard s={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
