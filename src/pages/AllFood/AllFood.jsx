// import { useLoaderData } from "react-router-dom";
// import FoodCard from "../../components/FoodCard";


// const AllFood = () => {
//   const foods = useLoaderData();
//   console.log(foods);
//   return (
//     <div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {
//           foods.map(food => <FoodCard key={food._id} food={food} />)
//         }
//       </div>
//     </div>
//   );
// };

// export default AllFood;



import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../../components/FoodCard";

const AllFood = () => {
  const allFoods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter food items based on search query
  const filteredFoods = allFoods.filter(food =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search input field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search food by name..." className="border-2 p-2"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {/* Display filtered food items */}
        {filteredFoods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFood;
