import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-339px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;