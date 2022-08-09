import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-brand">
      <div className="cont ">
        <div className="flex flex-col items-center justify-between py-5 space-y-4 bg-brand-light rounded-2xl">
          <p className="text-sm xl:text-base font-sec">
            &copy; 2022 Birwua Plants
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/channel/UC0K0qZ6yYYdje_U4Wwu4WKg"
              aria-label="Youtube Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-full bg-brand-light btn-hover hover:bg-brand"
            >
              <FaYoutube className="w-5 h-5 text-red-500 lg:w-7 lg:h-7" />
            </a>
            <a
              href="https://www.instagram.com/biruwa_rare_plants/"
              aria-label="Instagram Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-full bg-brand-light btn-hover hover:bg-brand"
            >
              <FaInstagram className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
            <a
              href="https://www.facebook.com/Biruwa-Rare-plants-279016660558631/"
              aria-label="Facebook Page"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-full bg-brand-light btn-hover hover:bg-brand"
            >
              <FaFacebook className="lg:h-7 w-5 h-5 lg:w-7  text-[#3982E4] " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
