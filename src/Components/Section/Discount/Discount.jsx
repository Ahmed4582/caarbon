import StaticBtn from "../../DComponents/StaticBtn/StaticBtn";

const Discount = () => {
  return (
    <>
      <div className="bg-[#F3DE6D] py-6">
        <h1 className="font-bold text-[14px] leading-5 text-[#2091F9] text-center">
          COMPUTER & ACCESSORIES
        </h1>
        <h1 className="font-bold text-[32px] leading-10 text-[#191C1F] text-center">
          32% Discount
        </h1>
        <p className="font-normal text-[16px] leading-6 text-center text-[#475156]">
          For all ellectronics products
        </p>
        <div>
          <p className="font-bold text-[16px] py-2 leading-5 text-[#191C1F] text-center">
            Offers ends in:
          </p>
          <div className="text-center bg-[#FFFFFF] py-[6px] px-[12px] w-[90%] mx-auto">
            <p>Ends Of Data You choose</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <StaticBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
