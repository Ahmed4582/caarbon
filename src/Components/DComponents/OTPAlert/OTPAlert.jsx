import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetData } from "../../../Store/Register/registerSlice";
import { useTranslation } from "react-i18next";

const OTPAlert = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.registerSlice);
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (response?.message) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate("/user/OTP-verify");
            setIsVisible(false);
            dispatch(resetData());
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [navigate, response, dispatch]);

  // Define the alert styles based on response status
  const getAlertStyles = () => {
    const baseStyles = `
      fixed top-4 right-4 z-50 
      w-90 max-w-full 
      px-6 py-4 
      rounded-lg 
      shadow-lg 
      transition-all 
      duration-300 
      animate-slide-in-right
      flex items-center
    `;

    if (response?.status === "error") {
      return `${baseStyles} bg-red-100 border-l-4 border-red-500 text-red-700`;
    }

    return `${baseStyles} bg-green-100 border-l-4 border-green-500 text-green-700`;
  };

  if (!isVisible || !response?.message) return null;

  return (
    <div className={getAlertStyles()} role="alert">
      <div className="mr-4">
        <svg
          className={`w-6 h-6 ${
            response?.status === "error" ? "text-red-500" : "text-green-500"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {response?.status === "error" ? (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </div>

      <div className="flex-1">
        <p className="text-xs">{t("register.redirectingIn", { countdown })}</p>
      </div>

      <div className="mr-4">
        <button
          className="text-xs text-[#006400] hover:text-green-700"
          onClick={() => {
            setIsVisible(false);
            dispatch(resetData());
            navigate("/user/OTP-verify");
          }}
        >
          {t("register.skip")}
        </button>
      </div>
    </div>
  );
};

export default OTPAlert;
