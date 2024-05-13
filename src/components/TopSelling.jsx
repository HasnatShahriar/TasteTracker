
import { useLoaderData } from 'react-router-dom';

const TopSelling = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3>this is top selling</h3>
    </div>
  );
};

export default TopSelling;