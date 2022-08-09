import Image from "next/image";
import Layout from "../../components/common/Layout";
import { getAllPlants, getPlantBySlug } from "../../lib/api";

const DynamicBlogPage = ({ plant }) => {
  return (
    <Layout title={`Blog | ${plant.name}`}>
      <div className="h-full py-20">
        <div className="flex items-center justify-between cont ">
          <h1 className="leading-relaxed text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] ">
            {plant.name}
          </h1>
        </div>
        <article className="flex flex-col justify-between gap-10 my-10 space-y-5 cont lg:flex-row">
          <div className="max-w-lg lg:max-w-full relative  bg-red-500 min-h-[400px] lg:min-h-[600px] w-full  lg:w-1/2 h-1/2 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={plant.img?.url}
              alt={plant.name}
              layout="fill"
              className=""
            />
          </div>
          <p className="w-full text-gray-700 lg:w-1/2 ">{plant.description}</p>
        </article>
      </div>
    </Layout>
  );
};

export default DynamicBlogPage;

export const getStaticProps = async ({ params }) => {
  const plant = await getPlantBySlug(params.slug);
  return {
    props: {
      plant,
    },
  };
};

export const getStaticPaths = async () => {
  const plantList = await getAllPlants();
  const paths = plantList?.map(({ slug }) => `/plants/${slug}`) ?? [];
  return {
    paths,
    fallback: false,
  };
};
