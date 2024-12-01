import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between font-bold p-4">
      <Link
        to={"/"}
        className="flex items-center gap-2 px-4 py-2 border-2 text-[#b68d33] rounded border-[#b68d33] "
      >
        <ArrowLeft className="w-4 h-4" />
        {t("cart.returnBtn")}
      </Link>
    </div>
  );
};

export default CartButton;
