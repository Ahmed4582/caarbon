import { useTranslation } from "react-i18next";
import FeaturedProducts from "../../Components/Section/FeaturedProducts/FeaturedProducts";
import Subscription from "../../Components/Section/Subscription/Subscription";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actCategory } from "../../Store/Catogries/actCategory/actCategory";
import Alert from "../../Components/DComponents/Alert/Alert";
import { actUserInfo } from "../../Store/userInfo/actUserInfo/actUserInfo.js";
import LandingSection from "../../Components/Section/LandindSection/LandingSection";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const LoginLoading = useSelector((state) => state.loginSlice.loading);
  const { token } = useSelector((state) => state.loginSlice);
  const {productDetails} = useSelector((state)=>state.ProductDetailsSlice)

  

  useEffect(() => {
    dispatch(actCategory());
    if (token) {
      dispatch(actUserInfo());
    }
  }, [dispatch, token]);
  
  return (
    <div className="relative">
      {/* <LandingSection /> */}
      <LandingSection />
      <FeaturedProducts />
      <Subscription />
      {LoginLoading === "fulfilled" ? (
        <Alert
          message={t("alert.loginSuccess")}
          variant="success"
          position="bottom-left"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
