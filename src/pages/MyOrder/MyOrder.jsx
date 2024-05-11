import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyOrderRow from "../../components/MyOrderRow";
import Swal from "sweetalert2";


const MyOrder = () => {

  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([])

  const url = `http://localhost:5000/purchase/${user?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFoods(data)
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
          fetch(`${import.meta.env.VITE_API_URL}/purchase/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              foods.map((food, index) => <MyOrderRow key={food._id} food={food} index={index} handleDelete={handleDelete}></MyOrderRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;