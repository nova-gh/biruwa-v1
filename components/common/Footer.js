import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-brand">
      <div className="cont ">
        <div className="flex flex-col items-center justify-between py-5 space-y-4 bg-brand-light rounded-2xl">
          <p className="text-sm xl:text-base">&copy; 2022 Birwua Plants</p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/channel/UC0K0qZ6yYYdje_U4Wwu4WKg"
              aria-label="Youtube Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-4 rounded-full bg-brand"
            >
              <FaYoutube className="w-5 h-5 text-red-500 btn-hover lg:w-7 lg:h-7 hover:opacity-80" />
            </a>
            <a
              href="https://www.instagram.com/biruwa_rare_plants/"
              aria-label="Instagram Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-4 rounded-full bg-brand"
            >
              <FaInstagram className="w-5 h-5 btn-hover lg:w-7 lg:h-7 hover:opacity-80" />
            </a>
            <a
              href="https://www.facebook.com/Biruwa-Rare-plants-279016660558631/"
              aria-label="Facebook Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-4 rounded-full bg-brand"
            >
              <FaFacebook className="lg:h-7 w-5 h-5 lg:w-7  text-[#3982E4] btn-hover hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
