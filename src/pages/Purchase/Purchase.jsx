import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Purchase = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const navigate = useNavigate();

  const {  foodName, image, category, quantity, price, email, origin, description } = food;

  const handlePurchase = (e) => {
    e.preventDefault();
    if (user?.email === email) return toast.error("Action Not Permitted");

    const form = e.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const purchaseQuantity = parseInt(form.quantity.value);
    if (purchaseQuantity > quantity) return toast.error("Can not buy because Foods quantity is less !!!");
    if (quantity === 0) return toast.error("Item is not available");
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const date = form.date.value;

    const order = {
      name,
      price,
      purchaseQuantity,
      buyerName,
      buyerEmail,
      date,
      image,
      category,
      origin,
      description,
    };

    fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/myOrder");

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Purchased Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-md mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Purchase Form</h2>
      <form onSubmit={handlePurchase} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-semibold">Food Name:</label>
            <input type="text" name="name" className="border rounded px-4 py-2 w-full" defaultValue={foodName} />
          </div>
          <div>
            <label className="text-lg font-semibold">Price:</label>
            <input type="text" name="price" className="border rounded px-4 py-2 w-full" defaultValue={price} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-semibold">Quantity:</label>
            <input type="number" name="quantity" className="border rounded px-4 py-2 w-full" defaultValue={quantity} />
          </div>
          <div>
            <label className="text-lg font-semibold">Buying Date:</label>
            <input type="text" className="border rounded px-4 py-2 w-full" name="date" value={new Date().toLocaleString()} />
          </div>
        </div>
        <label className="text-lg font-semibold">Buyer Name:</label>
        <input type="text" name="buyerName" className="border rounded px-4 py-2 w-full" defaultValue={user?.displayName} />
        <label className="text-lg font-semibold">Buyer Email:</label>
        <input type="email" name="buyerEmail" className="border rounded px-4 py-2 w-full" defaultValue={user?.email} required />
        <input type="submit" className="bg-green-600 hover:bg-green-700 text-white text-xl btn w-full" value="Purchase" />
      </form>
    </div>
  );
};

export default Purchase;
