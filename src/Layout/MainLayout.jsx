import { Outlet } from "react-router-dom";
import Header from "../Components/Common/Header/MainHeader/Header";
import Footer from "../Components/Common/Footer/Footer";
import Alert from "../Components/DComponents/Alert/Alert";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const MainLayout = () => {
  const { t } = useTranslation();
  const { logoutStatus } = useSelector((state) => state.loginSlice);
  const { addStatus, status, tokenNeeded } = useSelector(
    (state) => state.CartSlice
  );

  return (
    <div className="font-display relative">
      <Header />

      <div className="mt-6">
        <Outlet />
      </div>
      <Footer />

      {logoutStatus === "success" ? (
        <Alert
          message={t("alert.logoutSuccess")}
          variant="warning"
          position="bottom-left"
        />
      ) : (
        ""
      )}
      {addStatus === "add Success" ? (
        <Alert
          message={t("alert.addSuccess")}
          variant="success"
          position="bottom-left"
        />
      ) : (
        ""
      )}
      {status === "exist" ? (
        <Alert
          message={t("alert.addError")}
          variant="error"
          position="bottom-left"
        />
      ) : (
        ""
      )}
      {tokenNeeded === "Needed" ? (
        <Alert
          message={t("alert.loginToken")}
          variant="error"
          position="bottom-left"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MainLayout;
