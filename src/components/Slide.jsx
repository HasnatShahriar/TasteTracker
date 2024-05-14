import { Link } from "react-router-dom";


const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center space-y-6'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <p className="text-white ">A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually <br /> served to you at your table by a waiter or waitress.</p>
          <br />
          <Link to='/allFoods' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-700 focus:outline-none focus:bg-gray-500'>
            Go to All Foods Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;