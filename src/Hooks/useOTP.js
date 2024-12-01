import { useFormik } from "formik";
import OTPValidation from "../Validation/OTP";
import { actOTP } from "../Store/OTPSlice/actOTP/actOTP";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.OTPSlice);
  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem("email"),
      otp: "",
    },
    validationSchema: OTPValidation,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(actOTP(values));
      if (!error) {
        window.localStorage.removeItem("email");
        navigate("/user/login?message=register-success");
        resetForm();
      }
    },
  });
  return { formik };
};

export default useOTP;
