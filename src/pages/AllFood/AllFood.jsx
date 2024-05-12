// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import FoodCard from "../../components/FoodCard";

// const AllFood = () => {
//   const allFoods = useLoaderData();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter food items based on search query
//   const filteredFoods = allFoods.filter(food =>
//     food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search food by name..." className="border-2 p-2"
//       />

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">

//         {filteredFoods.map((food) => (
//           <FoodCard key={food._id} food={food} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllFood;

/////////////////////////////////////////////////////////////


import  { useState } from "react";
import { useLoaderData } from "react-router-dom"; // Importing useLoaderData
import FoodCard from "../../components/FoodCard";

const AllFood = () => {
  const allFoods = useLoaderData(); // Using useLoaderData to fetch data

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/search?foodName=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error("Error searching foods:", response.statusText);
      }
    } catch (error) {
      console.error("Error searching foods:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Food"
          className="border border-gray-300 px-4 py-2 rounded-md mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {searchResults.length > 0 ? (
          searchResults.map((food) => <FoodCard key={food._id} food={food} />)
        ) : (
          allFoods.map((food) => <FoodCard key={food._id} food={food} />)
        )}
      </div>
    </div>
  );
};

export default AllFood;
