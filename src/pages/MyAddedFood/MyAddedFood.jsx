import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyAddedFoodCard from '../../components/MyAddedFoodCard';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
AOS.init();

const MyAddedFood = () => {

  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  console.log(user.email);

  const url = `${import.meta.env.VITE_API_URL}/foods/${user?.email}`;
  useEffect(() => {
    axios(url, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        setFoods(res.data)
      })
  }, [url])



  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food Item has been deleted.",
                icon: "success"
              });
              const remaining = foods.filter(food => food._id !== id);
              setFoods(remaining)
            }
          })
      }
    });
  }


  return (
    <div>
      <Helmet>
        <title>TasteTracker | My Added Food Items</title>
      </Helmet>
      <section data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mt-16 mb-4 text-center">Food Items {''}
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Casual dining', 'Fast casual', 'Fine dining', 'Fast food']}
              loop={true}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="w-2/3 text-center mx-auto mb-8 font-semibold">From savory burgers to exotic sushi rolls, the top-selling restaurant favorites cater to diverse tastes and are enjoyed in eateries spanning from cozy cafes to fine dining establishments</p>
      </section>
      {
        foods.map(food => <MyAddedFoodCard key={food._id} food={food} handleDelete={handleDelete}/>)
      }
    </div>
  );
};

export default MyAddedFood;