import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";

import { actProducts } from "../Store/productSlice/actProducts/actProducts";

import { actGetAllWishlist } from "../Store/WhisList/actwishlist/actGetAllWishlist";
import { actPublish } from "../Store/myProducts/actUserProduct/actPublish";
import { actArchive } from "../Store/myProducts/actUserProduct/actArchief";
import { useTranslation } from "react-i18next";
import { actUserProduct } from "../Store/myProducts/actUserProduct/actUserProduct";
const useProductCard = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const location = useLocation();

  const i18nextLng = window.localStorage.getItem("i18nextLng");

  const handlePromote = (productId) => {
  };

  const handleArchivePublish = async (product) => {
    try {
      if (product.state === "in_archive") {
        await dispatch(actPublish(product.id)).unwrap();
      } else {
        await dispatch(actArchive(product.id)).unwrap();
      }

      await Promise.all([
        dispatch(actGetAllWishlist()),
        dispatch(actUserProduct()),
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await Promise.all([
          dispatch(actGetAllWishlist()),
          dispatch(actProducts()),
        ]);
      } catch (error) {
        console.error(t("fetch_error"), error);
      }
    };

    fetchInitialData();
  }, [dispatch, t]);

  return {
    handleArchivePublish,
    handlePromote,
    i18nextLng,
    location,
  };
};

export default useProductCard;
