import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer";


const Main = () => {
  return (
    <div>
      <div className="container max-w-6xl mx-auto">
        <Navbar />
        <div className="min-h-[calc(100vh-339px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;