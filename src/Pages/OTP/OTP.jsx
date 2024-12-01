import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import useOTP from "../../Hooks/useOTP";
import { useEffect } from "react";
import { resetError } from "../../Store/OTPSlice/OTPSlice";
import { useTranslation } from "react-i18next";

const OTP = () => {
  const { t } = useTranslation();
  const { formik } = useOTP();
  const { loading, error } = useSelector((state) => state.OTPSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t("enter_otp")}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{t("otp_description")}</p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* OTP Input */}
          <TextInput
            label={t("one_time_password")}
            name="otp"
            type="text"
            placeholder={t("enter_otp")}
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && formik.errors.otp}
          />

          {/* Error Message */}
          {error && error.non_field_errors && (
            <div className="text-red-500 text-sm mt-2">
              {error.non_field_errors[0]}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={loading === "pending" ? true : false}
            >
              {loading === "pending" ? t("verifying") : t("verify_otp")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
