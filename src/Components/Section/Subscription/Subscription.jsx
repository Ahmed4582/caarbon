import arrow from "../../../assets/Svg/Arrow.svg";
import { useTranslation } from "react-i18next";

const Subscription = () => {
  const { t } = useTranslation();
  const i18nextLng = window.localStorage.getItem("i18nextLng");

  return (
    <div className="bg-[#4c4c4c] border-white  px-4 py-16 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-center">
          {t("subscription.title")}
        </h1>
        <p className="font-normal text-base sm:text-lg text-center text-[#ddd] opacity-75 md:w-[536px]">
          {t("subscription.description")}
        </p>
        <form className="relative w-full max-w-2xl mt-6">
          <input
            type="text"
            name=""
            placeholder={t("subscription.emailPlaceholder")}
            className="w-full h-16 rounded-[3px] focus:outline-none p-3 bg-white shadow-md"
          />
          <button
            type="submit"
            className={`flex absolute top-1/2 -translate-y-1/2 ${
              i18nextLng === "ar" ? "left-2" : "right-2"
            } items-center gap-2 bg-[#4c4c4c] px-6 py-3 rounded`}
          >
            <p className="font-bold text-base text-white">
              {t(`subscription.subscribeButton`)}
            </p>
            <img
              src={arrow}
              className={i18nextLng === "ar" ? "rotate-180" : ""}
              alt="arrow"
            />
          </button>
        </form>
        <hr className="w-[424px] bg-[#FFFFFF] opacity-[12%] mx-auto opacity-12 mt-6 hidden sm:block" />
      </div>
    </div>
  );
};

export default Subscription;
