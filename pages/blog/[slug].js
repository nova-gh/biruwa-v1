import Layout from "../../components/common/Layout";
import BlogCard from "../../components/home/BlogCard";
import { getAllPost, getPostBySlug } from "../../lib/api";

const DynamicBlogPage = ({ post }) => {
  const d = new Date(post.date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = d.toLocaleDateString("en-US", options);
  return (
    <Layout title={`Blog | ${post.title}`}>
      <div className="py-20 ">
        <div className="flex items-center justify-between cont ">
          <h1 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] ">
            {post.title}
          </h1>
        </div>
        <article className="my-10 cont">
          <p className="text-gray-700">{post.summary}</p>
          <p className="text-sm text-blue-700 ">{date}</p>
        </article>
      </div>
    </Layout>
  );
};

export default DynamicBlogPage;

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = async () => {
  const postList = await getAllPost();
  const paths = postList?.map(({ slug }) => `/blog/${slug}`) ?? [];
  return {
    paths,
    fallback: false,
  };
};
