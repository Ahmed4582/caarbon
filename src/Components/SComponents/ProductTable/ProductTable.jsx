import { useState } from "react";
import Description from "../../DComponents/Description/Description";
import AdditionalInformation from "../../DComponents/AdditionalInformation/AdditionalInformation";
import Specification from "../../DComponents/Specification/Specification";

const ProductTable = () => {
  const [Tabs, setTabs] = useState("Description");
  const tabContent = {
    Description: <Description />,
    AdditionalInformation: <AdditionalInformation />,
    Specification: <Specification />,
  };

  const activeClass = `text-black font-bold border-b-2 border-[#2091F9]`;

  return (
    <div className="w-[90%] mx-auto border border-[#E4E7E9]  ">
      <div className="flex items-center gap-4 justify-center  border-b">
        <button
          onClick={() => setTabs("Description")}
          className={`font-medium text-[14px] leading-5 text-[#5F6C72] py-4 ${
            Tabs === "Description" ? activeClass : ""
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setTabs("AdditionalInformation")}
          className={`font-medium text-[14px] leading-5 text-[#5F6C72] py-4 ${
            Tabs === "AdditionalInformation" ? activeClass : ""
          }`}
        >
          Additional information
        </button>
        <button
          onClick={() => setTabs("Specification")}
          className={`font-medium text-[14px] leading-5 text-[#5F6C72] py-4 ${
            Tabs === "Specification" ? activeClass : ""
          }`}
        >
          Specification
        </button>
      </div>
      <div>{tabContent[Tabs]}</div>
    </div>
  );
};

export default ProductTable;
