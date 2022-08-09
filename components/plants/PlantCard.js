import Image from "next/image";
import Link from "next/link";

const PlantCard = ({ plant }) => {
  return (
    <Link href={`/plants/${plant.slug}`} passHref>
      <a>
        <div className="flex flex-col items-center w-full max-w-sm mx-auto overflow-hidden transition-all ease-in-out border shadow group-hover: h-96 hover:scale-105 hover:text-brand-light border-primary-600 rounded-xl ">
          <div className="relative w-full h-full">
            <Image
              src={plant.img?.url}
              alt={plant.name}
              layout="fill"
              className="overflow-hidden"
            />
          </div>
          <p className="min-h-[10%] my-4 text-base font-medium text-center transition-colors  2xl:text-lg text-text-dark hover:text-gray-700 ">
            {plant.name}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default PlantCard;
