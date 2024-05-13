import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import TopSelling from "../../components/TopSelling";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTracker | Home</title>
      </Helmet>
      <Banner/>
      <TopSelling/>
    </div>
  );
};

export default Home;