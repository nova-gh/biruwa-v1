import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const d = new Date(post.date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = d.toLocaleDateString("en-US", options);
  return (
    <>
      <article className="flex flex-col w-full overflow-hidden bg-white rounded-lg shadow-lg sm:flex-row">
        <div className="relative w-full sm:h-auto h-80 sm:w-1/3">
          <Image
            src={post.img?.url}
            layout="fill"
            alt={post.img?.title ?? "test"}
            objectFit="cover"
            className=""
          />
        </div>
        <div className="flex flex-col justify-center flex-1 w-full px-6 py-10 space-y-4 sm:w-2/3 h-80">
          <h3 className="mb-3 text-xl font-semibold tracking-tight capitalize text-text-dark ">
            {post.title}
          </h3>
          <p className="w-full overflow-hidden text-gray-700 truncate whitespace-normal ">
            {post.summary}
          </p>
          <div className="flex items-center justify-between font-sec">
            <p className="text-sm leading-normal text-blue-700 ">{date}</p>
            <Link passHref href={`/blog/${post.slug}`}>
              <button className=" h-8 px-4 m-2 text-sm text-white rounded-lg btn-hover  bg-brand focus:shadow-outline hover:bg-[#F3FFFC] hover:text-brand-dark">
                Read
              </button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
