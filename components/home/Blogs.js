import Link from "next/link";
import BlogCard from "./BlogCard";

const Blogs = ({ posts }) => {
  return (
    <div className="py-20 bg-[#F3FFFC] ">
      <div className="flex items-center justify-between cont ">
        <h2 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] w-min">
          Blog
        </h2>
        <Link href="/blog">
          <button className="font-sec  px-4 py-3 space-x-2 text-sm lg:text-base font-semibold text-brand border border-brand rounded-lg btn-hover  hover:bg-[#F3FFFC] hover:text-brand-dark">
            Read More
          </button>
        </Link>
      </div>
      <section className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-2 cont">
        {posts.map((p, i) => (
          <BlogCard key={i} post={p} />
        ))}
      </section>
    </div>
  );
};

export default Blogs;
