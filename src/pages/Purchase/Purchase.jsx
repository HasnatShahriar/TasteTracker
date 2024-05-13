import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";




const Purchase = () => {

  // const [quantity, setQuantity] = useState(1);

  const { user } = useContext(AuthContext)
  const food = useLoaderData();
  console.log(food);
  const navigate = useNavigate();

  const { _id, foodName, image, category,
    quantity, price, email, origin, description } = food;


  const handlePurchase = e => {
    e.preventDefault();
    if (user?.email === email) return toast.error('Action Not Permitted')


    const form = e.target;
    const name = form.name.value
    const price = parseFloat(form.price.value)
    const purchaseQuantity = parseInt(form.quantity.value)
    if (purchaseQuantity > quantity) return toast.error('Can not buy because Foods quantity is less !!!')
    if(quantity === 0) return toast.error('Item is not available')
    const buyerName = form.buyerName.value
    const buyerEmail = form.buyerEmail.value
    const date = form.date.value

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
    }

    console.log(order);

    fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        navigate('/myOrder')

        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Food Purchased Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })



    // const buyingDate = new Date().toISOString();
    // Call the onPurchase function with the purchase details
    // onPurchase({ foodName, price, quantity, buyerName, buyerEmail, buyingDate });
  };




  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Purchase Form</h2>
      <div>

      </div>
      <form onSubmit={handlePurchase}>
        <div className="flex flex-col space-y-4">
          <label className="text-lg font-semibold">Food Name:</label>
          <input type="text" name="name" className="border rounded px-4 py-2" defaultValue={foodName} />

          <label className="text-lg font-semibold">Price:</label>
          <input type="text" name="price" className="border rounded px-4 py-2" defaultValue={price} />

          <label className="text-lg font-semibold">Quantity:</label>

          <input type="number" name="quantity" className="border rounded px-4 py-2" defaultValue={quantity} />

          <label className="text-lg font-semibold">Buyer Name:</label>
          <input type="text" name="buyerName" className="border rounded px-4 py-2" defaultValue={user?.displayName} />

          <label className="text-lg font-semibold">Buyer Email:</label>
          <input type="email" name="buyerEmail" className="border rounded px-4 py-2" defaultValue={user?.email} required />

          <label className="text-lg font-semibold">Buying Date:</label>
          <input type="text" className="border rounded px-4 py-2" name="date" value={new Date().toLocaleString()} />

          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Purchase</button> */}

          <input type="submit" className="btn btn-info" value="Purchase" />
        </div>
      </form>
    </div>
  );
};

export default Purchase;