import Link from "next/link";
import Image from "next/image";
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const triplet = (e1, e2, e3) =>
  keyStr?.charAt(e1 >> 2) +
  keyStr?.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr?.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr?.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const CarosuelCard = ({ s }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <div className="h-[400px] bg-red-300 relative">
        <Image
          src={s.imgSrc}
          layout="fill"
          alt={"test"}
          objectFit="cover"
          blurDataURL={rgbDataURL(192, 192, 192)}
          placeholder="blur"
        />
      </div>
      <div className="flex items-center justify-between p-4 bg-[#F3FFFC] ">
        <p className="">{s.name}</p>
        <Link passHref href={s.src}>
          <button
            tabIndex={-1}
            className=" h-8 px-4 m-2 text-sm text-white  btn-hover rounded-lg  bg-brand hover:bg-[#F3FFFC]  hover:text-brand-dark"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarosuelCard;
