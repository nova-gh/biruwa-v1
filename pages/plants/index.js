import Layout from "../../components/common/Layout";
import PlantCard from "../../components/plants/PlantCard";
import { getAllPlants } from "../../lib/api";

const PlantIndex = ({ plants }) => {
  return (
    <Layout title="Plant">
      <div className="py-20 bg-[#F3FFFC ">
        <div className="flex items-center justify-between cont ">
          <h1 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] w-min">
            Plants
          </h1>
        </div>
        <section className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3 cont xl:grid-cols-4">
          {plants.map((p, i) => (
            <PlantCard plant={p} key={i} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default PlantIndex;

export const getStaticProps = async (params) => {
  const plants = (await getAllPlants()) ?? [];
  return {
    props: {
      plants,
      revalidate: 86400,
    },
  };
};
