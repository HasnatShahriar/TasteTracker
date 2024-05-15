
const MyOrderRow = ({ food, index, handleDelete }) => {
  const { _id, name, price, quantity, buyerName, buyerEmail, date, image, category, addedBy, origin, description } = food



  return (
    <tr>
      <th>
        {index + 1}
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={image} alt="Buying Food Image" />
          </div>
        </div>
      </td>
      <td>
        {name}
      </td>
      <td>
        $ {price}
      </td>
      <td>
        {date}
      </td>
      <td>{buyerName}</td>
      <td>{buyerEmail}</td>

      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
    </tr>
  );
};

export default MyOrderRow;