import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Purchase = () => {

  // const [quantity, setQuantity] = useState(1);

  const handlePurchase = () => {
    // const buyingDate = new Date().toISOString();
    // Call the onPurchase function with the purchase details
    // onPurchase({ foodName, price, quantity, buyerName, buyerEmail, buyingDate });
  };


  const {user} = useContext(AuthContext)

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Purchase Form</h2>
      <div className="flex flex-col space-y-4">
        <label className="text-lg font-semibold">Food Name:</label>
        <input type="text" className="border rounded px-4 py-2" />

        <label className="text-lg font-semibold">Price:</label>
        <input type="text" className="border rounded px-4 py-2"   />

        <label className="text-lg font-semibold">Quantity:</label>
        <input type="number" className="border rounded px-4 py-2"  onChange={e => setQuantity(e.target.value)} />

        <label className="text-lg font-semibold">Buyer Name:</label>
        <input type="text" className="border rounded px-4 py-2" defaultValue={user?.name} readOnly />

        <label className="text-lg font-semibold">Buyer Email:</label>
        <input type="email" className="border rounded px-4 py-2" defaultValue={user?.email} readOnly />

        <label className="text-lg font-semibold">Buying Date:</label>
        <input type="text" className="border rounded px-4 py-2" value={new Date().toLocaleString()}  />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default Purchase;