import { useEffect, useState } from "react";
import TopSellingCard from "./TopSellingCard";



const TopSelling = () => {


  const [foods, setFoods] = useState([])
  const url = `${import.meta.env.VITE_API_URL}/purchases`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFoods(data)
      })
  }, [url])


  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-16 ">Top Selling Foods </h1>
      <p className="text-center w-2/3 mx-auto font-semibold mt-4 mb-10">Top-selling foods worldwide include pizza, hamburgers, tacos, sushi, fried chicken, pasta, ice cream, sandwiches, curry, and sushi rolls, offering diverse flavors and options for every palate</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          foods.map(food => <TopSellingCard key={food._id} food={food}/>)
        }
      </div>
    </div>
  );
};

export default TopSelling;