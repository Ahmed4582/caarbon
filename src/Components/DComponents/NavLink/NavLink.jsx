import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, icon: Icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 rounded-[5px] p-2 transition-colors ${
        isActive
          ? " bg-[#4c4c4c] text-[#ddd] "
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{text}</span>
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
