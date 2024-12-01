import { useState, useEffect, useRef } from "react";
import User from "../../../assets/Svg/User.svg";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ShoppingCart } from "lucide-react";
import UserDropDown from "../../SComponents/UserDropDown/Dropdownmenue";
import { useSelector } from "react-redux";
import { t } from "i18next";

const NavigationLinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { token } = useSelector((state) => state.loginSlice);
  const location = useLocation();
  const { cart } = useSelector((state) => state.CartSlice);
  const cartLength = cart?.length || 0;

 

  

 

  return (
    <div className="flex items-center gap-3 md:w-[180px] relative">
      {/* <Link
        to="cart"
        className="inline-flex items-center justify-center relative"
      >
        <div className="relative">
          <ShoppingCart className="w-8 h-8 text-white" />
          {cartLength > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
              rounded-full w-5 h-5 flex items-center justify-center"
            >
              {cartLength}
            </span>
          )}
        </div>
      </Link> */}

      {/* {token ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex gap-1 items-center justify-center"
          >
            <img src={User} className="w-7 h-7" alt="User" />
            <ChevronDown
              className={`transform transition-transform duration-200 mt-2 h-4 w-4 text-white gap-2 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && <UserDropDown />}
        </div>
      ) : (
        <Link
          to={"/user/login"}
          className="text-white border p-6 py-2 rounded-md"
        >
          <p>{t("loginBtn")}</p>
        </Link>
      )} */}
    </div>
  );
};

export default NavigationLinks;
