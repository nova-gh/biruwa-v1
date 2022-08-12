import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Navbar = () => {
  const links = [
    { name: "Home", src: "/" },
    { name: "Plants", src: "/plants" },
    { name: "Blog", src: "/blog" },
  ];
  const router = useRouter();
  const activeRoute = router.pathname;
  const [toggle, setToggle] = useState(false);
  const handleMobileMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [toggle]);
  return (
    <header className="py-6 text-white bg-brand">
      <div className="relative z-50 flex items-center justify-between cont">
        <div className=" hover:brightness-75 btn-hover">
          <Link href="/" passHref>
            <a>
              <Image src="/logo.png" alt="logo" width={183} height={111} />
            </a>
          </Link>
        </div>
        <div className="hidden space-x-12 text-lg lg:text-xl font-sec lg:flex">
          <Link href="/" passHref>
            <a
              className={`${
                activeRoute === "/"
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Home
            </a>
          </Link>
          <Link href="/plants" passHref>
            <a
              className={` ${
                activeRoute.includes("/plants")
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal no-underline"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Plants
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a
              className={` ${
                activeRoute.includes("/blog")
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Blog
            </a>
          </Link>
        </div>
        <div className=" lg:hidden">
          <button
            className={`p-2 text-white border border-transparent rounded-md outline-none focus:border-white
            `}
            onClick={handleMobileMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-10 h-10    transition-all duration-200
                
                `}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-10 h-10 transition-all duration-200
                `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`absolute inset-y-0 inset-x-0   z-40 w-full  bg-brand flex ${
          toggle ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out `}
      >
        <div
          className={`flex flex-col items-center w-full  px-8 py-10 space-y-10 text-3xl mt-44 delay-75 ease-linear 
          ${toggle ? "opacity-100" : "opacity-0 "} 
          `}
        >
          <Link href="/" passHref>
            <a
              className={`${
                activeRoute === "/"
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Home
            </a>
          </Link>
          <Link href="/plants" passHref>
            <a
              className={` ${
                activeRoute.includes("/plants")
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal no-underline"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Plants
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a
              className={` ${
                activeRoute.includes("/blog")
                  ? "underline underline-offset-[10px] font-semibold"
                  : "text-white font-normal"
              }
              hover:scale-105 ease-in-out duration-75 transition-transform
              `}
            >
              Blog
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
