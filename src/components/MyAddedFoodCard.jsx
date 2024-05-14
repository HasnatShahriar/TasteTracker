import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MyAddedFoodCard = ({ food }) => {
  const { _id, foodName, image, price, description } = food;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden shadow-lg border-2 border-green-600 rounded-xl my-6">
      <div>
        <img data-aos="zoom-in" data-aos-duration="1000" src={image} alt='food image' className="w-96 h-60" />
      </div>
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl mb-2">{foodName}</div>
        <p className="text-gray-700 text-base mb-2 font-bold">Description: <span className="text-gray-500">{description}</span></p>
        <p className="text-gray-700 text-base mb-2 font-bold">Price: <span className="text-green-600">${price}</span></p>
        <div className="px-6 py-4">
          <Link to={`/update/${_id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MyAddedFoodCard;






