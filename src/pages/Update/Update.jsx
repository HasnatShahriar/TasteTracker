import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {


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


  const handleUpdateFood = e => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.name.value;
    const image = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const email = form.email.value;
    const name = form.userName.value;
    const description = form.description.value;



    const updatedFood = { foodName, image, category, quantity, price, origin, email, name, description }
    console.log(updatedFood);

    fetch(`${import.meta.env.VITE_API_URL}/food/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedFood)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        navigate('/addedFood')
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Food Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }




  return (
    <div className="bg-blue-50 p-24 my-10">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-green-600">Update Food Item</h2>
      <form onSubmit={handleUpdateFood}>
        {/* form food name & image */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Food Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Food Name" defaultValue={foods?.foodName} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Food Image</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" defaultValue={foods?.image} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form Food Category & Quantity*/}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Food Category</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="Food Category" defaultValue={foods?.category} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder="Quantity" defaultValue={foods?.quantity} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form price & origin */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" placeholder="Price" defaultValue={foods?.price} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Food Origin (Country)</span>
            </label>
            <label className="input-group">
              <input type="text" name="origin" placeholder="Country" defaultValue={foods?.origin} className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* User Email & Name */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Add By (Email)</span>
            </label>
            <label className="input-group">
              <input type="text" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Add By (Name)</span>
            </label>
            <label className="input-group">
              <input type="text" name="userName" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* user name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Short Description</span>
          </label>
          <label className="input-group">
            <input type="text" name="description" placeholder="Short Description" defaultValue={foods?.description} className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Update Food" className="btn btn-block bg-green-600 hover:bg-green-700 text-white text-xl mt-16" />
      </form>
    </div>
  );
};

export default Update;