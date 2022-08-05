import Link from "next/link";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const posts = [
    {
      imgSrc: "/home/hero1.jpg",
      postSrc: "/plants",
      imgAlt: "test",
      title: "test",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt quos laudantium cum, pariatur quidem? Quod vitae ab, atque fugit, doloribus harum corporis, quam quasi unde explicabo vero sapiente quisquam!",
    },
    {
      imgSrc: "/home/hero1.jpg",
      postSrc: "#",
      imgAlt: "test",
      title: "test",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt quos laudantium cum, pariatur quidem? Quod vitae ab, atque fugit, doloribus harum corporis, quam quasi unde explicabo vero sapiente quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt quos laudantium cum, pariatur quidem? Quod vitae ab, atque fugit, doloribus harum corporis, quam quasi unde explicabo vero sapiente quisquam!",
    },
  ];
  return (
    <div className="py-20 bg-[#F3FFFC] ">
      <div className="flex items-center justify-between cont ">
        <h2 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-8 w-min">
          Blogs
        </h2>
        <Link href="/blogs">
          <button className="font-sec  px-4 py-3 space-x-2 text-sm lg:text-base font-semibold text-brand border border-brand rounded-lg btn-hover focus:shadow-outline hover:bg-[#F3FFFC] hover:text-brand-dark">
            View All
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
