import { t } from "i18next";
import { Link } from "react-router-dom";
import { UserCircle, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/Login/loginSlice";
import { resetWishListData } from "../../../Store/WhisList/wishlistSlice";

const UserDropDown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetWishListData());
  };

  return (
    <div className="relative">
      <div className="absolute right-0 mt-2 flex flex-col w-48 bg-white shadow-lg rounded-md text-gray-700 z-50 border border-gray-200">
        {/* User Info Link */}
        <Link
          to="/userinfo"
          className=" px-4 py-2 gap-2 hover:bg-gray-100 transition-colors duration-200 flex items-center"
        >
          <UserCircle className="mr-2 h-5 w-5 text-gray-500" />
          {t("dropdown.userInfo")}
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 gap-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-b-md border-t transition-colors duration-200 flex items-center"
        >
          <LogOut className="mr-2 h-5 w-5 text-red-600" />
          {t("dropdown.logout")}
        </button>
      </div>
    </div>
  );
};

export default UserDropDown;
