import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import TopSelling from "../../components/TopSelling";
import NewsletterSection from "../../components/NewsletterSection";
import About from "../../components/About";





const Home = () => {
 
  return (
    <div>    
      <Helmet>
        <title>TasteTracker | Home</title>
      </Helmet>
      <Banner/>
     <TopSelling/>
     <About/>
     <NewsletterSection/>
    </div>
  );
};

export default Home;