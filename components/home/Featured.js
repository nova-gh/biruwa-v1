import Link from "next/link";
import Carousel from "./Carousel";

const Featured = ({ featuredPlants }) => {
  return (
    <div className="py-20 bg-white">
      <div className="flex items-center justify-between cont">
        <h2 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-8 w-min">
          Featured
        </h2>
        <Link href="/plants">
          <button className="font-sec  lg:text-base px-4 py-3 space-x-2 text-sm font-semibold text-brand border border-brand rounded-lg btn-hover  hover:bg-[#F3FFFC] hover:text-brand-dark">
            View All
          </button>
        </Link>
      </div>
      <section className="flex mb-20 cont">
        <Carousel slides={featuredPlants} />
      </section>
    </div>
  );
};

export default Featured;
