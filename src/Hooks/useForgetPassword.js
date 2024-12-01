import { useFormik } from "formik";
import ForgetPasswordValidation from "../Validation/ForgetPasswordValidation";

const useForgetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetPasswordValidation,
    onSubmit: (values) => {
      // Add your password reset request logic here
    },
  });
  return { formik };
};

export default useForgetPassword;
