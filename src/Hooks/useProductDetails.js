import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actProductDetails } from "../Store/ProductDetails/actProductDetails/actProductDetails";
import IMG_BASE_URL from "../API/IMG_BASE_URL";
const useProductDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.ProductDetailsSlice);

  const [selectedImage, setSelectedImage] = useState(
    productDetails?.images[0]
      ? `${IMG_BASE_URL}${productDetails?.images[0]}`
      : ""
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productDetails?.images[0]) {
      setSelectedImage(`${IMG_BASE_URL}${productDetails?.images[0]}`);
    }
  }, [productDetails]);

  const updateQuantity = (value) => {
    if (productDetails.in_stock && productDetails.in_stock !== "0") {
      setQuantity((prevQuantity) =>
        Math.max(
          1,
          Math.min(prevQuantity + value, parseInt(productDetails.in_stock))
        )
      );
    }
  };

  useEffect(() => {
    dispatch(actProductDetails(id));
  }, [dispatch, id]);
  return {
    selectedImage,
    updateQuantity,
    quantity,
    productDetails,
    setSelectedImage,
    IMG_BASE_URL,
  };
};
export default useProductDetails;
