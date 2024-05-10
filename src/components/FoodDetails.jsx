import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
  const food = useLoaderData();
  const{_id,name,image,category,
    quantity,price,addedBy,origin,description} = food;
  console.log(food);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-green-600 rounded-xl">
    <img src={image} alt={name} className="w-full h-60" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base mb-2">Category: {category}</p>
      <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
      <p className="text-gray-700 text-base mb-2">Quantity: {quantity}</p>
      <p className="text-gray-700 text-base mb-2">Origin: {origin}</p>
      <p className="text-gray-700 text-base mb-2">Description: {description}</p>
      <p className="text-gray-700 text-base mb-2">Added By: {addedBy.name}</p>
    </div>
  </div>
  );
};

export default FoodDetails;