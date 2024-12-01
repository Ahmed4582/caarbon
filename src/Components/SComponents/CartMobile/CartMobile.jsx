import { Minus, Plus } from "lucide-react";
import fal from "../../../assets/Svg/False.svg";
import { useDispatch, useSelector } from "react-redux";
import IMG_BASE_URL from "../../../API/IMG_BASE_URL";
import { actDeleteCart } from "../../../Store/Cart/actions/actDeleteCart";
import { actGetCart } from "../../../Store/Cart/actions/actGetCart";
import { useEffect } from "react";
import actUpdateCart from "../../../Store/Cart/actions/actUpdateCart";
import { setAddStatus } from "../../../Store/Cart/CartSlice";
import useCurrency from "../../../Hooks/useCurrency";

const CartMobile = () => {
  const { cart } = useSelector((state) => state.CartSlice);
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

  const handleDelete = async (productId) => {
    try {
      await dispatch(actDeleteCart(productId));
      dispatch(actGetCart());
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleUpdate = async (productId, change, productAmount, stock) => {
    // Check if productId is valid
    if (!productId) {
      const errorMsg = "Error: productId is undefined!";
      console.error(errorMsg);
      return;
    }

    if (productAmount >= stock && change === "add") {
      dispatch(setAddStatus());
      return; // Do not proceed if we're trying to add more than available stock
    }

    if (productAmount <= 1 && change === "subtract") {
      dispatch(setAddStatus());
      return; // Do not proceed if the product amount is already 0
    }

    let updatedAmount = productAmount;

    if (change === "add") {
      updatedAmount += 1; // Increment
    } else if (change === "subtract" && productAmount > 0) {
      updatedAmount -= 1; // Decrement
    }

    // Log the updated result

    try {
      // Dispatch the action to update the cart with the new amount
      await dispatch(
        actUpdateCart({ ProductId: productId, amount: updatedAmount })
      );

      // Refresh the cart state to reflect the update
      dispatch(actGetCart());
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  useEffect(() => {
    dispatch(actGetCart());
  }, [dispatch]);

  return (
    <div className="block md:hidden space-y-4">
      {cart?.map((item) => (
        <div
          key={item.product.id}
          className="border  shadow-md rounded-lg overflow-hidden p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-20 h-20 bg-gray-100 rounded border flex items-center justify-center">
              <img src={`${IMG_BASE_URL}${item?.product?.images[0]}`} alt="" />
            </div>
            <p className="text-sm text-gray-500">{item.product.title}</p>
            <div>
              <p className="text-sm font-medium">
                {convertPrice(item.product.price)} {selectedCurrency.symbol}
              </p>
            </div>
            <button onClick={() => handleDelete(item.product.id)}>
              <img src={fal} alt="fal" className="w-10 h-10 cursor-pointer" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center border w-32 p-2 rounded-md">
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
              <span className="w-8 text-center">
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
                className="flex items-center  justify-center rounded hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="font-medium">
              ${(item.product.price * item.amount).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMobile;
