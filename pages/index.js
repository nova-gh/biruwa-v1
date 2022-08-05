import Layout from "../components/common/Layout";
import Blogs from "../components/home/Blogs";
import Featured from "../components/home/Featured";
import HomeHero from "../components/home/HomeHero";
import PlantCare from "../components/home/PlantCare";
export default function Home({ args }) {
  return (
    <Layout title="Home">
      <HomeHero />
      <PlantCare />
      <Featured />
      <Blogs />
    </Layout>
  );
}
