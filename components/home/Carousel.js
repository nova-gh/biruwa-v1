import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="px-5 mySwiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="my-10 ">
            <div className="relative h-[400px] w-full flex flex-col drop-shadow-md">
              <Image
                src={s.src}
                layout="fill"
                alt={"test"}
                objectFit="cover"
                className="overflow-hidden rounded-3xl"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
