import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen antialiased bg-brand">
      <Navbar />
      <main className="w-full font-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
