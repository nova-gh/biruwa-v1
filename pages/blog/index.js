import Layout from "../../components/common/Layout";
import BlogCard from "../../components/home/BlogCard";
import { getAllPost } from "../../lib/api";

const BlogIndex = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="py-20 bg-[#F3FFFC ">
        <div className="flex items-center justify-between cont ">
          <h1 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] w-min">
            Blog
          </h1>
        </div>
        <section className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-2 cont">
          {posts.map((p, i) => (
            <BlogCard key={i} post={p} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const getStaticProps = async (params) => {
  const posts = (await getAllPost()) ?? [];
  return {
    props: {
      posts,
    },
  };
};
