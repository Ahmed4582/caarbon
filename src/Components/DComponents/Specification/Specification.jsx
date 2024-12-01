
const Specification = () => {
  const data = {
    title: 'Specification',
    specifications: [
      { label: 'Dimension', value: '100 x 50 x 20 cm' },
      { label: 'Weight', value: '2.5 kg' },
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Color', value: 'Silver' },
    ],
  };

  return (
    <div className="p-8 sm:p-10 md:p-12 lg:p-14">
      <h1 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-6 text-[#191C1F] mb-4">
        {data.title}
      </h1>
      <div>
        {data.specifications.map((spec, index) => (
          <div key={index} className="flex justify-between text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-6 text-[#595F64] mb-3">
            <span className="font-medium">{spec.label}:</span>
            <span>{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;