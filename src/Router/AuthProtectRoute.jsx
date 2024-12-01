import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AuthProtectRoute = ({ children }) => {
  const { token } = useSelector((state) => state.loginSlice);

  // Check if the user is authenticated
  return token ? (
    children
  ) : (
    <Navigate to="/user/login?message=you-need-login" replace />
  );
};

AuthProtectRoute.propTypes = {
  children: PropTypes.node,
};

export default AuthProtectRoute;
