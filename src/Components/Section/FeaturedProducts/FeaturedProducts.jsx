import ReusableCard from "../../DComponents/ReusableCard/ReusableCard";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actProducts } from "../../../Store/productSlice/actProducts/actProducts";

const FeaturedProducts = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.ProductSlice);

  const getProducts = async () => {
    await dispatch(actProducts());
  };

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-5">
          <ReusableCard
            products={products}
            headingTitle={t("Product.featuredProducts")}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
