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
          <button className="px-4 py-3 space-x-2 text-sm font-semibold border rounded-lg font-sec lg:text-base text-brand border-brand btn-hover hover:bg-brand/80 hover:text-white">
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
