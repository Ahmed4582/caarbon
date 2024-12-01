import { useEffect, useState } from "react";
import { actProducts } from "../Store/productSlice/actProducts/actProducts";
import { useDispatch } from "react-redux";

const CURRENCY_RATES = {
  USD: 0.02896,
  TRY: 1, // Example rate: 1 USD = 31.89 TRY
};

const CURRENCY_SYMBOLS = {
  USD: "$",
  TRY: "₺",
};
const useCurrency = () => {
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    symbol: "$",
  });

  useEffect(() => {
    const storedCurrency = window.localStorage.getItem("selectedCurrency");
    if (storedCurrency) {
      try {
        const parsedCurrency = JSON.parse(storedCurrency);
        setSelectedCurrency({
          code: parsedCurrency.code || "USD",
          symbol: CURRENCY_SYMBOLS[parsedCurrency.code] || "$"
        });
        dispatch(actProducts());
      } catch (error) {
        console.error("Error parsing stored currency:", error);
      }
    }
  }, []);

  // Convert price to selected currency

  return { selectedCurrency, CURRENCY_RATES, CURRENCY_SYMBOLS };
};

export default useCurrency;
