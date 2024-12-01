import img from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import StaticBtn from "../../DComponents/StaticBtn/StaticBtn";
const Sales = () => {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4  w-[90%] mx-auto ">
      <div className="border bg-[#F2F4F5] flex items-center gap-4     rounded-[4px] p-8  ">
        <div>
          <p className="w-[120px] h-[32px] rounded-[2px] py-[6px] px-[12px] bg-[#2091F9] text-white text-[12px] font-bold leading-[20px]">
            INTRODUCING
          </p>
          <p className="w-[280px] h-[80px] font-bold text-[30px] leading-[40px]  my-4">
            Lorem ipsum dolor sit amet
          </p>
          <p className=" w-[280px] h-[48px] font-normal text-[16px] leading-[24px] text-[#475156] ">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <div className="my-2">
            <StaticBtn />
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={img}
            className="w-full h-auto max-w-[240px] max-h-[220px]"
            alt="im"
          />
        </div>
      </div>
      <div className="border flex items-center gap-4 bg-[#191C1F]    rounded-[4px] p-8  ">
        <div>
          <p className=" w-[120px] h-[32px] rounded-[2px] py-[6px] px-[12px] bg-[#EFD33D] text-[#191C1F] text-[12px] font-bold leading-[20px]">
            INTRODUCING
          </p>
          <p className=" w-[280px] h-[80px] font-bold text-[30px] leading-[40px] text-white  my-4">
            Lorem ipsum dolor sit amet
          </p>
          <p className=" w-[280px] h-[48px] font-normal text-[16px] leading-[24px] text-[#ADB7BC] ">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <div className="my-2">
            <StaticBtn />
          </div>
        </div>
        <div className="relative hidden md:block">
          <p className="absolute bg-[#2091F9] w-[96px] h-[88px] rounded-[1000px] top-[10px] py-[30px] px-[18px] text-white font-bold text-[20px] right-[10px] ]">
            Price$
          </p>
          <img
            src={img}
            className="w-full h-auto max-w-[240px] max-h-[220px]"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
