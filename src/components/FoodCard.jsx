import { Link } from "react-router-dom";


const FoodCard = ({food}) => {
  const{_id,foodName,image,category,
    quantity,price,addedBy,origin,description} = food;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-green-600 rounded-xl">
      <img src={image} alt={name} className="w-full h-60" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{foodName}</div>
        <p className="text-gray-700 text-base mb-2">Category: {category}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        <p className="text-gray-700 text-base mb-2">Quantity: {quantity}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/food/${_id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Details</button></Link>
      </div>
    </div>
  );
};

export default FoodCard;