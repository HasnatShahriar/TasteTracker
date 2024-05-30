import { Map, Marker } from "pigeon-maps"
import { MdOutlineFlightLand } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";



const Maps = () => {
  return (
    <div


      className="my-20 flex justify-between  lg:flex-row flex-col items-center gap-6 container mx-auto">
      <div>

        <h2 className="lg:text-5xl text-xl font-semibold">HOW TO FIND OUR Restaurant</h2>
        <p className="font-400 mt-4">Let us be your hosts as you create cherished memories and discover <br /> the true essence of Khilkhet,Dhaka.</p>

        <div className="flex mt-6 gap-4 text-[#2c7e35]">
          <div>
            <MdOutlineFlightLand className="text-3xl mb-2"></MdOutlineFlightLand>
            <h5 className="font-500">4 KILOMETRES FROM AIRPORT</h5>
            <p className="font-400">The drive from The Airport to Restaurant Suites takes approximately 5 minutes.</p>
          </div>
          <div>
            <RiHotelLine className="text-3xl mb-2"></RiHotelLine>
            <h5 className="font-500">70 METRES FROM Khilkhet Bus-Stand</h5>
            <p className="font-400">You can Walk to find our Restaurant</p>
          </div>
        </div>
      </div>


      <Map



        defaultCenter={[23.8294, 90.4210]}
        defaultZoom={11}
        height={500}

      >
        <Marker width={200} anchor={[23.8294, 90.4210]} />
      </Map>



    </div>
  );
};

export default Maps;