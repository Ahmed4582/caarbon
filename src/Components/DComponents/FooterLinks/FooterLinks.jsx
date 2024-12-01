import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Add this import

const FooterLinks = ({ title }) => {
  return (
    <NavLink>
      <li className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
        {title}
      </li>
    </NavLink>
  );
};

export default FooterLinks;

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired, // Specify that title is a required string
};
