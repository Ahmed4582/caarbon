import useForgetPassword from "../../Hooks/useForgetPassword";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const { formik } = useForgetPassword();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email to receive password reset instructions
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* Email Input */}
          <TextInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </div>

          {/* Back to Login Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Remember your password?</span>
            <Link
              to="/user/register"
              className="font-medium text-[#006400]"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
