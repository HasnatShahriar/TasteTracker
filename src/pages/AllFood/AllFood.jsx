import { useState } from "react";
import { useLoaderData } from "react-router-dom"; // Importing useLoaderData
import FoodCard from "../../components/FoodCard";
import { Helmet } from "react-helmet-async";

import image from '../../assets/all_food_bg.jpg'

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
      <Helmet>
        <title>TasteTracker | All Food</title>
      </Helmet>
      <section className="relative">
        {/* Banner with background image */}
        <div
          className="bg-cover bg-center h-80 flex items-center justify-center rounded-md"
          style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${image})` }}
        >
          <h1 className="text-green-500 text-xl md:text-2xl font-bold">All Foods</h1>
        </div>
      </section>
      <section>
        <h2 className="text-xl md:text-3xl font-bold mt-16 mb-4 text-center">All Categories Foods</h2>
        <p className="w-2/3 text-sm md:text-base text-center mx-auto mb-8 font-semibold">Users can explore a comprehensive array of culinary delights, ranging from delectable dishes to exotic ingredients, providing a diverse and immersive gastronomic experience</p>
      </section>
      <div className="flex items-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Food"
          className="border border-gray-300 px-4 py-2 rounded-md mr-2"
        />
        <button onClick={handleSearch} className="bg-green-600 hover:bg-green-700 text-white  px-4 py-2 rounded-md">
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
