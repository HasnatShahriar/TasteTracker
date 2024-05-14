import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FoodDetails = () => {
  const food = useLoaderData();
  const { _id, foodName, image, category,
    quantity, price, origin, description, email, name } = food;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-16 overflow-hidden shadow-lg border-2 border-green-600 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 p-6">
      <div className="w-full md:w-1/2">
        <img data-aos="zoom-in" data-aos-duration="1000" src={image} alt='' className="object-cover w-full h-64 md:ml-4 rounded-xl shadow-md" />
      </div>
      <div className="md:w-1/2 text-gray-800">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <div className="font-bold text-3xl mb-4">{foodName}</div>
          <p className="text-lg mb-2">Category: <span className="text-green-600">{category}</span></p>
          <p className="text-lg mb-2">Price: $<span className="text-green-600">{price}</span></p>
          <p className="text-lg mb-2">Quantity: <span className="text-green-600">{quantity}</span></p>
          <p className="text-lg mb-2">Origin: <span className="text-green-600">{origin}</span></p>
          <p className="text-lg mb-2">Description: <span className="text-gray-700">{description}</span></p>
          <p className="text-lg mb-2">Added By: <span className="text-green-600">{name}</span></p>
          <p className="text-lg mb-2">Email: <span className="text-green-600">{email}</span></p>
        </div>
        <div className="text-center mt-4">
          <Link to={`/purchase/${_id}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out">
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
