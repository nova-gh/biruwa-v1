import Layout from "../components/common/Layout";
import HomeHero from "../components/home/HomeHero";
import PlantCare from "../components/home/PlantCare";
export default function Home({ args }) {
  return (
    <Layout>
      <HomeHero />
      <PlantCare />
    </Layout>
  );
}
