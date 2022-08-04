import Image from "next/image";
import Link from "next/link";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
const HomeHero = () => {
  return (
    <div className="flex flex-col gap-10 py-20 lg:gap-20 md:items-center md:flex-row cont bg-brand ">
      <div className="order-2 md:order-1 text-white md:w-[42%] text-center md:text-start space-y-8">
        <h1 className="text-5xl font-medium lg:text-7xl">
          Happiness blooms from within
        </h1>
        <p className=" text-text-light">
          Bring clam to your place with interior plants. Growing beautiful
          plants at home has never been easier.
        </p>
        <div className="font-sec flex justify-center order-3 space-x-6 md:space-x-0 md:flex-col md:space-y-6 lg:flex-row lg:space-y-0 lg:justify-start lg:space-x-5 xl:space-x-10 md:w-[70%] lg:w-full">
          <Link href="/plants">
            <button className="flex items-center justify-center px-6 py-4 space-x-2 text-lg font-medium transition-all duration-150 ease-in-out bg-white rounded-lg md: text-brand focus:shadow-outline hover:bg-gray-200 hover:text-brand-dark">
              <span className=""> View Plants</span>
              <GiPlantsAndAnimals />
            </button>
          </Link>
          <Link href="/plants">
            <button className="flex items-center justify-center px-6 py-4 space-x-2 text-lg font-medium text-white transition-all duration-150 ease-in-out border border-white rounded-lg md: focus:shadow-outline hover:bg-white hover:text-brand-dark">
              <span className=""> Explore Blogs</span>
              <FaBlog />
            </button>
          </Link>
        </div>
      </div>
      <div className="drop-shadow-2xl drop  order-1 md:order-2 grid grid-flow-col grid-rows-4 gap-1 md:w-[58%] h-[410px] md:h-[610px] lg:h-[710px]   ">
        <div className="w-full h-full col-span-1 row-span-2 ">
          <div className="relative w-full h-full ">
            <Image
              src="/home/hero1.jpg"
              layout="fill"
              alt="test"
              objectFit="cover"
              className="rounded-tl-full "
            />
          </div>
        </div>
        <div className="col-span-1 row-span-2 ">
          <div className="relative w-full h-full ">
            <Image
              src="/home/hero2.jpg"
              layout="fill"
              alt="test"
              objectFit="cover"
              className="rounded-bl-3xl "
            />
          </div>
        </div>
        <div className="row-span-4 ">
          <div className="relative w-full h-full ">
            <Image
              src="/home/heroBig.jpg"
              layout="fill"
              alt="test"
              objectFit="cover"
              className="rounded-r-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
