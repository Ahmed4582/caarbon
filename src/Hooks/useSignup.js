import { useFormik } from "formik";
import SignUpValidation from "../Validation/SignUpValidation";
import { useDispatch, useSelector } from "react-redux";
import { actRegister } from "../Store/Register/actRegister/actRegister";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.registerSlice);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: SignUpValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        await dispatch(actRegister(values)).unwrap();
        resetForm();
        navigate("/user/login?message=register-success");
      } catch (err) {
        console.error("Registration failed:", err);
      }
    },
  });

  return { formik, error };
};

export default useSignup;
