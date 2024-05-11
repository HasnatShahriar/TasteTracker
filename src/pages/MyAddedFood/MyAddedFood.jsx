import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyAddedFoodCard from '../../components/MyAddedFoodCard';

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
      {
        foods.map(food => <MyAddedFoodCard key={food._id} food={food}/>)
      }
    </div>
  );
};

export default MyAddedFood;