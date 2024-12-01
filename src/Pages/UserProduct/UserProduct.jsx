import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ReusableCard from "../../Components/DComponents/ReusableCard/ReusableCard.jsx";
import Alert from "../../Components/DComponents/Alert/Alert.jsx";
import { useTranslation } from "react-i18next";
import { actUserProduct } from "../../Store/myProducts/actUserProduct/actUserProduct.js";

const UserProduct = () => {
  const dispatch = useDispatch();
  const { userProduct, status } = useSelector(
    (state) => state.userProductSlice
  );

  useEffect(() => {
    dispatch(actUserProduct());
  }, [dispatch]);

  const { t } = useTranslation(); // Initialize i18next translation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-4">
          <ReusableCard products={userProduct} status />
        </div>
      </div>
      {status === "Archive" ? (
        <Alert
          position="bottom-left"
          message={t("alert.archived")}
          variant="success"
        />
      ) : (
        ""
      )}
      {status === "Publish" ? (
        <Alert
          position="bottom-left"
          message={t("alert.published")}
          variant="success"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProduct;
