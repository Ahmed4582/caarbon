import CheckboxInput from "../../Components/DComponents/CheckBoxInput/CheckBoxInput";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
import { useDispatch, useSelector } from "react-redux";
import OTPAlert from "../../Components/DComponents/OTPAlert/OTPAlert";
import { useEffect } from "react";
import { resetError } from "../../Store/Register/registerSlice";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const { formik } = useSignup();
  const { loading, error } = useSelector((state) => state.registerSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t("register.createAccount")}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t("register.signUpToGetStarted")}
          </p>
        </div>

        {/* Error Messages */}

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* Username Input */}
          <TextInput
            label={t("register.username")}
            name="username"
            type="text"
            placeholder={t("register.enterUsername")}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && error?.username}
          />

          {/* Email Input */}
          <TextInput
            label={t("register.email")}
            name="email"
            type="email"
            placeholder={t("register.enterEmail")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && error?.email}
          />
          {/* Phone Input */}
          <TextInput
            label={t("register.phone")}
            name="phone"
            type="text"
            placeholder={t("register.phone")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && error?.phone}
          />

          {/* Password Input */}
          <TextInput
            label={t("register.password")}
            name="password"
            type="password"
            placeholder={t("register.enterPassword")}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          {/* Confirm Password Input */}
          <TextInput
            label={t("register.confirmPassword")}
            name="confirmPassword"
            type="password"
            placeholder={t("register.reEnterPassword")}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          {/* Terms & Conditions */}
          <CheckboxInput
            label={t("register.acceptTerms")}
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
          />
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-[#b68d33] text-sm mt-1">
              {formik.errors.terms}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading === "pending"
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#b68d33] "
              } transition-colors duration-200`}
              disabled={loading === "pending"}
            >
              {loading === "pending"
                ? t("register.signingUp")
                : t("register.signUp")}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center flex items-center gap-2 justify-center text-sm">
            <span className="text-gray-600">
              {t("register.alreadyHaveAccount")}
            </span>{" "}
            <Link to="/user/login" className="font-medium text-[#006400]">
              {t("register.signIn")}
            </Link>
          </div>
        </form>

        {/* OTP Alert */}
        {loading === "fulfilled" && <OTPAlert />}
      </div>
    </div>
  );
};

export default SignUp;
