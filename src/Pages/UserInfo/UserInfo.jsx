import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actUserInfo } from "../../Store/userInfo/actUserInfo/actUserInfo";
import { t } from "i18next";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { info, error } = useSelector((state) => state.userInfoSlice);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(actUserInfo()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">{t("userInfo.loading")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{t("userInfo.error")}</p>
      </div>
    );
  }

  if (!info) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">{t("userInfo.noInfo")}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
        <div className="bg-gradient-to-r bg-[#8b733e] p-4 sm:p-6">
          <div className="flex gap-2 flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-20 h-20 sm:w-16 sm:h-16 bg-[#b68d33] rounded-full flex items-center justify-center border-2 border-[#b68d33] flex-shrink-0">
              <span className="text-3xl sm:text-2xl font-bold text-white">
                {info?.username?.[0]?.toUpperCase() ||
                  t("userInfo.unknownInitial")}
              </span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-xl font-semibold text-white">
                {info?.username || t("userInfo.unknownUser")}
              </h2>
              <p className="text-base sm:text-sm text-white mt-1">
                {info?.email || t("userInfo.noEmail")}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#b68d33]">★</span>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {t("userInfo.phoneNumber")}
                </p>
              </div>
              <p className="text-lg font-bold text-gray-800">{info?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
