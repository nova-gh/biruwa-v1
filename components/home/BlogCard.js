import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <>
      <article className="flex flex-col w-full overflow-hidden bg-white rounded-lg shadow-lg sm:flex-row">
        <div className="relative w-full sm:h-auto h-80 sm:w-1/3">
          <Image
            src={post.imgSrc}
            layout="fill"
            alt={post.imgAlt ?? "test"}
            objectFit="cover"
            className=""
            objectPosition=""
          />
        </div>
        <div className="flex flex-col justify-center flex-1 w-full px-6 py-10 space-y-4 sm:w-2/3 h-80">
          <h4 className="mb-3 text-xl font-semibold tracking-tight capitalize text-text-dark ">
            {post.title}
          </h4>
          <p className="w-full overflow-hidden leading-normal text-gray-700 truncate whitespace-normal ">
            {post.summary}
          </p>
          <div className="flex items-center justify-between font-sec">
            <p className="text-sm leading-normal text-blue-700 ">01/02/2020</p>
            <Link passHref href={post.postSrc ?? "#"}>
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
