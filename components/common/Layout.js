import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-between h-screen antialiased ">
      <Head>
        <title>{`Biruwa Plants | ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Learn about my plant collections."
        ></meta>
        <meta
          property="og:title"
          content={`Biruwa Plants | ${title}`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Learn about my plant collections."
          key="ogdesc"
        />
      </Head>
      <Navbar />
      <Toaster
        postion="top-right"
        toastOptions={{
          duration: 9000,
          success: {
            style: {
              backgroundColor: "#004F44",
              color: "white",
              fontSize: "1.2rem",
              width: "100%",
              fontWeight: "bold",
            },
          },
          error: {
            style: {
              backgroundColor: "#4F000B",
              color: "white",
              fontSize: "1.2rem",
              width: "100%",
              fontWeight: "bold",
            },
          },
        }}
      />
      <main className="flex-1 w-full mb-auto font-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
