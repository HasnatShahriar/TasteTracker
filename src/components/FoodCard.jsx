import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FoodCard = ({ food }) => {
  const { _id, foodName, image, category, quantity, price } = food;

  return (
    <div className="overflow-hidden shadow-lg border border-green-600 rounded-xl">
      <div className="relative">
        <img data-aos="zoom-in" data-aos-duration="1000" src={image} alt="food image" className="w-full h-60 object-cover" />
        <span className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white rounded-md">{category}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="p-4">
        <h2 className="text-xl font-bold mb-2">{foodName}</h2>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> <span className="text-green-600">${price}</span></p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Quantity:</span> <span className="text-green-600">{quantity}</span></p>
        <div className="flex justify-center">
          <Link to={`/food/${_id}`}>
            <button className="bg-green-600 hover:bg-green-700 text-white  font-semibold py-2 px-4 rounded-md block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
