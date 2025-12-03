import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import useProductCard from "../../../Hooks/useProductCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actGetCart } from "../../../Store/Cart/actions/actGetCart";

import { actProductDetails } from "../../../Store/ProductDetails/actProductDetails/actProductDetails";

const ProductCard = ({ products }) => {
  const { t } = useTranslation();
  const { location } = useProductCard();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCart());
  }, [dispatch]);

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">{t("no_products")}</p>;
  }

  return (
    <div
      className={`grid grid-cols-1 ${
        location.pathname === "/products"
          ? "lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2"
          : "xl:grid-cols-4 md:grid-cols-3"
      } gap-4`}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-[3px] relative group hover:shadow-lg transition-shadow duration-300"
        >
          {/* محتوى الكارد */}
          <div className="flex flex-col items-center p-4">
            {/* الصورة */}
            <div className="w-full overflow-hidden">
              <img
                src={
                  product?.images?.[0]?.image 
                    ? (product.images[0].image.startsWith("http") 
                        ? product.images[0].image 
                        : `https://92.113.27.167:7644${product.images[0].image}`)
                    : (typeof product?.images?.[0] === "string" && product.images[0].startsWith("http")
                        ? product.images[0]
                        : "https://via.placeholder.com/400x300?text=Car+Image")
                }
                className="w-full h-[200px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                alt={product.name || t("product_image")}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=Car+Image";
                }}
              />
            </div>

            {/* النص */}
            <div className="mb-4 text-center">
              <p className="font-normal text-[14px] text-[#191C1F] my-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-[14px] font-bold text-[#727272]">
                {` (PreDay) ${product.cost_per_day} AED`}
              </p>
            </div>

            {/* أزرار / روابط */}
            <div className="flex justify-center gap-6 items-center mt-4 space-x-2">
              <Link
                to={`/details/${product.id}`}
                onClick={() => dispatch(actProductDetails(product.id))}
                className="bg-[#4c4c4c] text-white px-4 py-2 rounded  block w-fit hover:bg-[#7d7c7c] transition-colors duration-200"
              >
                {t("details")}
              </Link>
              <div
                className={`py-2 px-4 rounded-xl border shadow-md ${
                  product.is_available ? "border-green-500" : "border-red-500"
                }`}
              >
                <p
                  className={
                    product.is_available ? "text-green-500" : "text-red-500"
                  }
                >
                  {product.is_available ? t("available") : t("not_available")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductCard;
