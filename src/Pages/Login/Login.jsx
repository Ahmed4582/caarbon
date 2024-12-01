import { useTranslation } from "react-i18next"; // Import i18next
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import CheckboxInput from "../../Components/DComponents/CheckBoxInput/CheckBoxInput";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const { formik, searchParams, error } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t("login.welcomeBack")}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t("login.signInMessage")}
          </p>
          {searchParams.get("message") === "you-need-login" && (
            <div className="mt-2 border p-2 rounded-md border-red-300 bg-red-50 text-red-500">
              <p>{t("login.needLoginMessage")}</p>
            </div>
          )}
          {searchParams.get("message") === "register-success" && (
            <div className="mt-2 border p-2 rounded-md border-green-300 bg-green-50 text-green-500">
              <p>{t("login.registrationSuccessMessage")}</p>
              <p>{t("login.loginNowMessage")}</p>
            </div>
          )}
          {error ? (
            <div className="mt-2 border p-2 rounded-md border-red-300 bg-red-50 text-red-500">
              <p>{error}</p>
            </div>
          ) : null}
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* Email Input */}
          <TextInput
            label={t("login.emailLabel")}
            name="email"
            type="email"
            placeholder={t("login.emailPlaceholder")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          {/* Password Input */}
          <TextInput
            label={t("login.passwordLabel")}
            name="password"
            type="password"
            placeholder={t("login.passwordPlaceholder")}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <CheckboxInput
              label={t("login.rememberMe")}
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#b68d33] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? t("login.signingIn") : t("login.signIn")}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">{t("login.dontHaveAccount")}</span>
            <Link to="/user/register" className="font-medium text-[#b68d33] ">
              {t("login.signUp")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
