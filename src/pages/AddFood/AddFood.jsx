import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";




const AddFood = () => {


  const { user } = useContext(AuthContext)

  const handleAddFood = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const image = form.photo.value;
    const category = form.category.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseFloat(form.price.value);
    const origin = form.origin.value;
    const email = form.email.value;
    const name = form.name.value;
    const description = form.description.value;


    const newFood = {
      foodName,
      image,
      category,
      quantity,
      price,
      origin,
      description,
      email,
      name,
    }

    console.log(newFood);

    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/foods`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newFood)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Food Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }



  return (
    <div className="bg-blue-50 p-24 my-10">
      <Helmet>
        <title>TasteTracker | Add A Food Item</title>
      </Helmet>
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-600">Add Food Item</h2>
      <form onSubmit={handleAddFood}>
        {/* form food name & image */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Food Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Food Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Food Image</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
              <input type="text" name="category" placeholder="Food Category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
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
              <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Food Origin (Country)</span>
            </label>
            <label className="input-group">
              <input type="text" name="origin" placeholder="Country" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* User Email & name */}
        <div className="md:flex">
          <div className="form-control  md:w-1/2">
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

        {/* short description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Short Description</span>
          </label>
          <label className="input-group">
            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Add Food" className="btn btn-block bg-blue-600 text-white mt-16" />
      </form>
    </div>
  );
};

export default AddFood;