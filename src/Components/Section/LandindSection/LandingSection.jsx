import im from "../../../assets/imges/WhatsApp Image 2024-11-30 at 11.40.00 PM.jpeg";
const LandingSection = () => {
  return (
    <div className=" rounded-md w-[85%] mx-auto  text-center mt-5 md:text-startborder border-red-500">
      <div className="relative w-full   overflow-hidden rounded-md shadow-md">
        <img
          src={im}
          alt=""
          className="object-cover w-full h-[420px] rounded-md "
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
