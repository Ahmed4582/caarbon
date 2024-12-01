import { useState, useEffect } from "react";
import { Info, Check, AlertTriangle, XCircle } from "lucide-react";
import PropTypes from "prop-types"; // Import PropTypes
import { useDispatch } from "react-redux";
import {
  resetLoading,
  resetLogoutStatus,
} from "../../../Store/Login/loginSlice";
import { resetAddLoading } from "../../../Store/AddProduct/AddProductSlice";

import { resetStatus } from "../../../Store/myProducts/userProductSlice";
import {
  resetAddStatus,
  resetDeleteStatus,
  resetResponse,
  resetUpdateStatus,
  statusError,
  ResetTokenNeeded
} from "../../../Store/Cart/CartSlice";

const variantStyles = {
  success: {
    background: "bg-green-100",
    border: "border-green-400",
    text: "text-green-800",
    icon: "text-green-600",
  },
  info: {
    background: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-800",
    icon: "text-blue-600",
  },
  warning: {
    background: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-800",
    icon: "text-yellow-600",
  },
  error: {
    background: "bg-red-100",
    border: "border-red-400",
    text: "text-red-800",
    icon: "text-red-600",
  },
};

const iconMap = {
  success: Check,
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
};

const Alert = ({
  variant = "info",
  message,
  duration = 3000,
  position = "bottom-left",
  className = "",
}) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const Icon = iconMap[variant];
  const styles = variantStyles[variant];

  const positionClasses = {
    "top-right": "fixed top-4 right-4",
    "top-left": "fixed top-4 left-4",
    "bottom-right": "fixed bottom-4 right-4",
    "bottom-left": "fixed bottom-4 left-4",
    "top-center": "fixed top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "fixed bottom-4 left-1/2 transform -translate-x-1/2",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(resetLoading());
      dispatch(resetLogoutStatus());
      dispatch(resetAddLoading());
      dispatch(resetStatus());
      dispatch(resetDeleteStatus());
      dispatch(statusError());
      dispatch(resetUpdateStatus());
      dispatch(resetAddStatus());
      dispatch(resetResponse());
      dispatch(ResetTokenNeeded());
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, dispatch]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        flex items-center p-4 rounded-lg border 
        z-50 shadow-lg gap-2
        ${styles.background} 
        ${styles.border} 
        ${styles.text} 
        ${positionClasses[position]}
        ${className}
        w-90 max-w-sm
        animate-fade-in-down
      `}
      role="alert"
    >
      <Icon className={`w-6 h-6 mr-3 ${styles.icon}`} />
      <div className="flex-1 text-[15px]">{message}</div>
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  variant: PropTypes.oneOf(["success", "info", "warning", "error"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center",
  ]),
  className: PropTypes.string,
  icon: PropTypes.elementType,
  duration: PropTypes.number,
};
