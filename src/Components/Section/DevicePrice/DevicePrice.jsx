import im from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import StaticBtn from "../../DComponents/StaticBtn/StaticBtn";
const DevicePrice = () => {
  return (
    <div className="flex my-4 items-center bg-[#FFE7D6] p-8 rounded-lg w-[90%] mx-auto">
      <div className="flex-1">
        <div className="text-sm font-[700] rounded-[2px] text-white py-[6px] px-[12px] w-[156px] bg-[#2091F9] mb-2">
          SAVE UP TO $Price
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Device Price</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div>
          <StaticBtn />
        </div>
      </div>

      <div className="relative flex-1 md:flex items-center justify-center max-w-xs hidden ">
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFCEAD] p-2 rounded-full border-2 border-white shadow-lg">
          <span className="text-gray-800 text-xl font-semibold">$</span>
        </div>
        <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-lg  ">
          <img src={im} alt="Device" className="w-96 h-64 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default DevicePrice;
