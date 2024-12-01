import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useCurrency from "../../../Hooks/useCurrency";

const TotalCart = () => {
  const { t } = useTranslation();
  const products = useSelector(
    (state) => state.cartSlice?.cart?.data?.products || []
  );
 
  

  const { username } = useSelector((state) => state.userInfoSlice.info);

  const { cart } = useSelector((state) => state.CartSlice);
  const { CURRENCY_RATES, selectedCurrency, CURRENCY_SYMBOLS } = useCurrency();
  const validCurrencyCode = CURRENCY_RATES[selectedCurrency.code]
    ? selectedCurrency.code
    : "TRY";

    const convertPrice = (priceInTRY) => {
      // Only convert if the selected currency is not TRY
      if (selectedCurrency.code === "TRY") {
        return priceInTRY;
      }
      const rate = CURRENCY_RATES[selectedCurrency.code] || 1;
      const convertedPrice = priceInTRY * rate; // Convert TRY to selected currency
      return convertedPrice.toFixed(2);
    }
  // Assuming cart contains an array of objects like { product: { price: number }, amount: number }
  const total = cart.reduce((acc, item) => {
    const priceInSelectedCurrency = parseFloat(
      convertPrice(item.product.price)
    ); // Convert product price
    return acc + priceInSelectedCurrency * item.amount; // Multiply by amount and add to total
  }, 0);

  const currencyLabel = selectedCurrency.label || "TRY";


  const PaySubmit = () => {
    const productData = cart.map((e) => e.product);
    const productTitles = productData.map((E) => E.title);
    const productAmounts = cart.map((e) => e.amount);
    

    const message = `*مرحبا ${username}*\n
المنتجات: _${productTitles.join(", ")}_\n
الكميات: _${productAmounts.join(", ")}_\n
السعر الإجمالي: *${total} ${
  CURRENCY_SYMBOLS[validCurrencyCode]
} (${currencyLabel})*`;

const encodeMessage = encodeURIComponent(message);
const whatsappUrl = `https://web.whatsapp.com/send?phone=+905345555100&text=${encodeMessage}`;
window.open(whatsappUrl, "_blank");

  };

  return (
    <div className="xl:col-span-1 md:col-span-1">
      <div className="bg-white rounded-lg border shadow p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{t("cart.totals.title")}</h2>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="font-normal text-[16px]">
            {t("cart.totals.total")}
          </div>
          <div className="font-bold text-[16px]">
            {total.toFixed(2)} {selectedCurrency.symbol}
          </div>
        </div>

        <div className="mt-6 flex justify-between bg-[#b68d33] rounded-md">
          <button
            onClick={() => PaySubmit()}
            className="w-full items-center py-2 text-white rounded-md font-bold"
          >
            {t("cart.totals.checkout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
