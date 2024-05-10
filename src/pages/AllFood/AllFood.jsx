import { useLoaderData } from "react-router-dom";
import FoodCard from "../../components/FoodCard";


const AllFood = () => {
  const foods = useLoaderData();
  console.log(foods);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          foods.map(food => <FoodCard key={food._id} food={food} />)
        }
      </div>
    </div>
  );
};

export default AllFood;