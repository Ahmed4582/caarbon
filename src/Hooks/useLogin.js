import { useSearchParams, useNavigate } from "react-router-dom";
import LoginValidation from "../Validation/LoginValidation";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { actLogin } from "../Store/Login/actLogin/actLogin";
import { useEffect } from "react";
import { resetError } from "../Store/Login/loginSlice";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { error } = useSelector((state) => state.loginSlice);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        await dispatch(actLogin(values)).unwrap();
        resetForm();
        navigate("/");
      } catch (err) {
        console.error("Login failed:", err);
      }
    },
  });

  // useEffect(() => {
  //   if (loading === "fulfilled" && !error) {
  //     navigate("/");
  //   }
  // }, [loading, error, navigate]);

  useEffect(() => {
    dispatch(resetError()); // Reset errors on mount
  }, [dispatch]);

  return { formik, searchParams, error };
};

export default useLogin;
