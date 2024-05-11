

const MyOrderRow = ({ food,index }) => {
  const { _id, name, price, quantity, buyerName, buyerEmail, date, image, category, addedBy, origin, description } = food
  return (
    <tr>
      <th>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
        {index+1}
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
      <td>${buyerEmail}</td>

      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyOrderRow;