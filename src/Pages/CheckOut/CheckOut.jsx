import OrderSummary from "../../Components/SComponents/OrderSummary/OrderSummary";
import FormCheckout from "../../Components/SComponents/FormCheckout/FormCheckout";

const CheckOut = () => {
  return (
    <div className="  w-[90%] mx-auto p-4 grid xl:grid-cols-5 md:grid-cols-4 col-span-1 gap-3 ">
      <FormCheckout />
      <div className=" xl:col-span-2 md:col-span-2 col-span-1 ">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOut;
