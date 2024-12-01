import CardTabel from "../../Components/SComponents/CardTabel/CardTabel";
import CartMobile from "../../Components/SComponents/CartMobile/CartMobile";
import TotalCart from "../../Components/SComponents/TotalCart/TotalCart";
import CartButton from "../../Components/SComponents/CartButton/CartButton";
import { useSelector } from "react-redux";
import Alert from "../../Components/DComponents/Alert/Alert";
import { t } from "i18next";
const CartPage = () => {
  const { deleteStatus, updateStatus } = useSelector(
    (state) => state.CartSlice
  );

 
  return (
    <div className=" grid xl:grid-cols-4 md:grid-col-3 grid-cols-1 gap-3  w-[90%] mx-auto  relative">
      <div className=" xl:col-span-3 md:col-span-2 col-span-1   ">
        <div className="  md:bg-white rounded-lg md:shadow  md:border">
          <CardTabel />
          <CartMobile />
          <CartButton />
        </div>
      </div>
      <TotalCart />
      {deleteStatus === "delete Successfully" ? (
        <>
          <Alert message={t("alert.deleteCart")} variant="warning" />
        </>
      ) : (
        ""
      )}
      {updateStatus === "update Successfully" ? (
        <>
          <Alert
            message={t("alert.update")}
            variant="success"
          />
        </>
      ) : (
        ""
      )}
      {updateStatus === "Limited" ? (
        <>
          <Alert
            message={t("updateError")}
            variant="warning"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartPage;
