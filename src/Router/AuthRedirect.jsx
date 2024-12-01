import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRedirect = ({ children }) => {
  const { token } = useSelector((state) => state.loginSlice);
  const location = useLocation();

  // If user is authenticated, redirect to previous or default page
  return token ? (
    <Navigate to={location.state?.from?.pathname || "/"} replace />
  ) : (
    children
  );
};

export default AuthRedirect;

AuthRedirect.propTypes = {
  children: PropTypes.node,
};
