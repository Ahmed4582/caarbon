import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import fal from "../../../assets/Svg/False.svg";
import { useDispatch, useSelector } from "react-redux";
import { actGetCart } from "../../../Store/Cart/actions/actGetCart";
import IMG_BASE_URL from "../../../API/IMG_BASE_URL";
import { actDeleteCart } from "../../../Store/Cart/actions/actDeleteCart";
import actUpdateCart from "../../../Store/Cart/actions/actUpdateCart";
import { setAddStatus } from "../../../Store/Cart/CartSlice";
import useCurrency from "../../../Hooks/useCurrency";
const CardTabel = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { CURRENCY_RATES, selectedCurrency } = useCurrency();

  const convertPrice = (priceInTRY) => {
    // Only convert if the selected currency is not TRY
    if (selectedCurrency.code === "TRY") {
      return priceInTRY;
    }
    const rate = CURRENCY_RATES[selectedCurrency.code] || 1;
    const convertedPrice = priceInTRY * rate; // Convert TRY to selected currency
    return convertedPrice.toFixed(2);
  }

  const { cart } = useSelector((state) => state.CartSlice);

  const handleUpdate = async (productId, change, productAmount, stock) => {
    if (productAmount >= stock && change === "add") {
      dispatch(setAddStatus());
      return;
    }

    if (productAmount <= 1 && change === "subtract") {
      dispatch(setAddStatus());
      return;
    }

    let updatedAmount = productAmount;

    if (change === "add") {
      updatedAmount += 1; // Increment
    } else if (change === "subtract" && productAmount > 0) {
      updatedAmount -= 1; // Decrement
    }

    try {
      await dispatch(
        actUpdateCart({ ProductId: productId, amount: updatedAmount })
      );

      dispatch(actGetCart());
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  useEffect(() => {
    dispatch(actGetCart());
  }, [dispatch]);

  return (
    <>
      <div className="md:block hidden my-10">
        <div className="mb-6 p-4">
          <h1 className="text-2xl font-semibold">{t("cart.heading")}</h1>
        </div>
        <div className="grid grid-cols-4 p-2 my-2 gap-4 bg-[#E4E7E9] text-sm font-medium text-[#475156]">
          <div className="col-span-2">{t("cart.products")}</div>
          <div>{t("cart.quantity")}</div>
          <div className="text-[12px] whitespace-nowrap">
            {t("cart.subTotal")}
          </div>
        </div>
        <div className="border-b-[1px]">
          {cart?.map((item) => (
            <div
              key={item.product.id}
              className="grid grid-cols-4 gap-4 items-center py-4 px-4"
            >
              <div className="col-span-2 flex items-center gap-4">
                <button
                  onClick={async () => {
                    await dispatch(actDeleteCart(item.product.id));
                    dispatch(actGetCart());
                  }}
                >
                  <img
                    src={fal}
                    alt={t("cart.removeItem")}
                    className="cursor-pointer"
                  />
                </button>
                <div className="relative w-20  bg-gray-100 rounded-md border flex items-center justify-center">
                  <img
                    src={`${IMG_BASE_URL}${item?.product?.images[0]}`}
                    className="w-full h-full rounded-md"
                    alt=""
                  />
                </div>

                <div>
                  <p className="md:text-[14px] text-[12px] text-gray-500">
                    {item.product.title}
                  </p>
                  <p className="text-sm font-medium">
                    {convertPrice(item.product.price)} {selectedCurrency.symbol}
                  </p>
                </div>
              </div>

              <div className="flex border md:w-[120px] w-[70px] py-4 rounded-md md:pl-4 sm:px-1 items-center">
                <button
                  onClick={() =>
                    handleUpdate(
                      item.product.id,
                      "subtract",
                      item.amount,
                      item.product.amount
                    )
                  }
                  className="flex items-center justify-center"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">
                  {String(item.amount).padStart(2, "0")}
                </span>
                <button
                  onClick={() =>
                    handleUpdate(
                      item.product.id,
                      "add",
                      item.amount,
                      item.product.amount
                    )
                  }
                  className="flex items-center justify-center rounded hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="font-medium">
                {convertPrice(item.product.price * item.amount)}
                {selectedCurrency.symbol}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardTabel;
