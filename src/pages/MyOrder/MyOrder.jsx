import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyOrderRow from "../../components/MyOrderRow";


const MyOrder = () => {

  const { user } = useContext(AuthContext);

  const [foods,setFoods] = useState([])

  const url = `http://localhost:5000/purchase/${user?.email}`

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setFoods(data)
    })
  },[url])


  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
          Serial
        </th>
        <th>Food Image</th>
        <th>Food Name</th>
        <th>Price</th>
        <th>Buying Time</th>
        <th>Customer Name</th>
        <th>Customer Email</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        foods.map((food,index) => <MyOrderRow key={food._id} food={food} index={index}></MyOrderRow>)
      }   
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrder;