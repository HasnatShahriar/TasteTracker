import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const TopSellingCard = ({food}) => {
  const {_id,name,price,image,category} = food
  return (
     <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-green-500">
        <img data-aos="zoom-in" data-aos-duration="1000" className="w-full h-60" src={image} alt="Food Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2 font-semibold">Category: {category}</p>
          <p className="text-green-500 text-xl font-medium">Price: ${price}</p>
        </div>
        <div className="px-6 py-4">
        <Link to={`/food/${_id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Details</button></Link>
        </div>
      </div> 
  );
};

export default TopSellingCard;