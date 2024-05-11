import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
  const food = useLoaderData();
  const { _id, foodName, image, category,
    quantity, price, origin, description,name,email} = food;
    
  console.log(food);
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg border-2 border-green-600 rounded-xl">
      <img src={image} alt='' className="w-full h-60" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{foodName}</div>
        <p className="text-gray-700 text-base mb-2">Category: {category}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        <p className="text-gray-700 text-base mb-2">Quantity: {quantity}</p>
        <p className="text-gray-700 text-base mb-2">Origin: {origin}</p>
        <p className="text-gray-700 text-base mb-2">Description: {description}</p>
        <p className="text-gray-700 text-base mb-2">Added By: {name}</p>
        <p className="text-gray-700 text-base mb-2">Email: {email}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/purchase/${_id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Purchase</button></Link>
      </div>
    </div>
  );
};

export default FoodDetails;