import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", src: "/home" },
    { name: "Plants", src: "/plants" },
    { name: "Blog", src: "/plants" },
  ];
  return (
    <header className="py-6 text-white bg-brand">
      <div className="flex items-center justify-between cont ">
        <div className="hover:brightness-75 btn-hover">
          <Link href="/" passHref>
            <a>
              <Image src="/logo.png" alt="logo" width="183" height="111" />
            </a>
          </Link>
        </div>
        <div className="hidden space-x-12 text-xl font-medium font-sec lg:flex">
          {links.map((l, i) => (
            <Link href={l.src} key={i} passHref>
              <a>{l.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
