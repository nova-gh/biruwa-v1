import Layout from "../components/common/Layout";
import Blogs from "../components/home/Blogs";
import Featured from "../components/home/Featured";
import HomeHero from "../components/home/HomeHero";
import PlantCare from "../components/home/PlantCare";
import { getLatestPost } from "../lib/api";
export default function Home({ featuredPosts }) {
  return (
    <Layout title="Home">
      <HomeHero />
      <PlantCare />
      <Featured />
      <Blogs posts={featuredPosts} />
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const featuredPosts = (await getLatestPost()) ?? [];
  return {
    props: {
      featuredPosts,
    },
  };
};