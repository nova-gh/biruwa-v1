import Layout from "../components/common/Layout";
import Blogs from "../components/home/Blogs";
import ContactForm from "../components/home/ContactForm";
import Featured from "../components/home/Featured";
import HomeHero from "../components/home/HomeHero";
import PlantCare from "../components/home/PlantCare";
import { getLatestPlants, getLatestPost } from "../lib/api";
export default function Home({ featuredPosts, featuredPlants }) {
  return (
    <Layout title="Home">
      <HomeHero />
      <PlantCare />
      <Featured featuredPlants={featuredPlants} />
      <Blogs posts={featuredPosts} />
      <ContactForm />
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const featuredPosts = (await getLatestPost()) ?? [];
  const featuredPlants = (await getLatestPlants()) ?? [];

  return {
    props: {
      featuredPosts,
      featuredPlants,
    },
    revalidate: 60,
  };
};