
const AdditionalInformation = () => {
  const data = {
    title: "Additional Information",
    description:
      "This is some additional information that provides more context.",
    links: [
      { label: "Link 1", url: "#" },
      { label: "Link 2", url: "#" },
      { label: "Link 3", url: "#" },
    ],
  };

  return (
    <div className="p-8 sm:p-10 md:p-12 lg:p-14">
      <h1 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-6 text-[#191C1F] mb-4">
        {data.title}
      </h1>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-6 text-[#595F64] mb-6">
        {data.description}
      </p>
      <div>
        {data.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-6 text-[#0B69FF] hover:underline mr-4"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInformation;
