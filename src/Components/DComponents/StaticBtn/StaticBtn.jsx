import arrow from "../../../assets/Svg/Arrow.svg";
import { useTranslation } from "react-i18next";

const StaticBtn = () => {
  const { t } = useTranslation();
  const dir = window.localStorage.getItem("dir");

  return (
    <div>
      <button className="bg-red-500 px-[24px] h-[48px] items-center flex gap-4 text-white rounded-[9px]">
        {t("showBtn.shopNow")}
        <img
          src={arrow}
          className={`${dir === "rtl" ? "rotate-180" : ""}`}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default StaticBtn;
