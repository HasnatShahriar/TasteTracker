import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePurchase = () => {


  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [foods, setFoods] = useState([]);

  const url = `${import.meta.env.VITE_API_URL}/food/${id}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFoods(data)
      })
  }, [url])






  return (
    <div>
      
    </div>
  );
};

export default UpdatePurchase;