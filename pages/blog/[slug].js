import Layout from "../../components/common/Layout";
import BlogCard from "../../components/home/BlogCard";
import { getAllPost, getPostBySlug } from "../../lib/api";
import Image from "next/image";
import DateComp from "../../components/common/DateComp";
import ReactMarkdown from "react-markdown";
const DynamicBlogPage = ({ post }) => {
  return (
    <Layout title={`Blog | ${post.title}`}>
      <div className="py-20 ">
        <section className="space-y-5 cont">
          <div className="relative flex flex-col max-w-full overflow-hidden rounded-lg shadow-lg h-80">
            <Image
              src={post.img?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={`${post.title} Thumbnail`}
            />
          </div>
          <article className="max-w-full space-y-5 prose text-gray-700">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
          <DateComp date={post.date} />
        </section>
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
    revalidate: 60,
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
