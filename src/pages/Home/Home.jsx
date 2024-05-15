import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import TopSelling from "../../components/TopSelling";
import NewsletterSection from "../../components/NewsletterSection";
import About from "../../components/About";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <Helmet>
        <title>TasteTracker | Home</title>
      </Helmet>
      <Banner />
      <TopSelling />
      <div className="mt-10 text-center">
        <Link to='/allFoods'> <button className="bg-green-600 hover:bg-green-700 text-white text-lg  px-4 py-2 rounded-md btn  ">See All Foods</button></Link>
      </div>
      <About />
      <NewsletterSection />
    </div>
  );
};

export default Home;