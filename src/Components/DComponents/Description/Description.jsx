import product from "../../../data/productDetails";

const Description = () => {
  const ShippingInformation = [
    {
      title: "Courier:",
      description: " 2 - 4 days, free shipping",
    },
    {
      title: "Local Shipping:",
      description: " up to one week, $19.00",
    },
    {
      title: "UPS Ground Shipping:",
      description: " 4 - 6 days, $29.00",
    },
    {
      title: "Unishop Global Export:",
      description: " 3 - 4 days, $39.00",
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h1 className="font-bold text-[16px] leading-6 mb-4 text-[#191C1F]">
            Description
          </h1>
          <p className="font-normal text-[14px] text-[#5F6C72] leading-5">
            {product.description}
          </p>
          <p className="font-normal text-[14px] mt-6 text-[#5F6C72] leading-5">
            {product.description}
          </p>
        </div>
        <div className="md:border-r pr-6">
          <h1 className="font-bold text-[16px] leading-6 mb-4 text-[#191C1F]">
            Feature
          </h1>
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={feature.icon} className="w-6 h-6" alt="" />
              <p className="text-sm">{feature.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-bold text-[16px] leading-6 mb-4 text-[#191C1F]">
            Shipping Information
          </h1>
          <div className="flex flex-col gap-4">
            {ShippingInformation.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <p className="text-[14px] font-medium leading-5 text-[#191C1F]">{info.title}</p>
                <p className="text-[#5F6C72] text-[14px] font-normal leading-5">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
