import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/imges/CRV1PNG.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { t } = useTranslation();

  const { category } = useSelector((state) => state.categorySlice);

  return (
    <div className="bg-[#4c4c4c] text-white  sm:px-[200px] py-12 p-3  ">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        <div className="col-span-1 flex items-center justify-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-32" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
