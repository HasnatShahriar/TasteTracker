import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyAddedFoodCard from '../../components/MyAddedFoodCard';
import { Helmet } from 'react-helmet-async';

const MyAddedFood = () => {

  const {user} = useContext(AuthContext);
  const[foods,setFoods] = useState([]);

  const url = `${import.meta.env.VITE_API_URL}/foods/${user?.email}`;
  useEffect (()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setFoods(data)
    })
  },[url])

  return (
    <div>
       <Helmet>
        <title>TasteTracker | My Added Food Items</title>
      </Helmet>
      {
        foods.map(food => <MyAddedFoodCard key={food._id} food={food}/>)
      }
    </div>
  );
};

export default MyAddedFood;