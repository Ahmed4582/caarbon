import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../../assets/Svg/Home.svg";
import arrowright from "../../../assets/Svg/Arrowright.svg";

const Breadcrumb = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // تحديث المسارات عند تغيير المسار الحالي
  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/paymentsuccessful"
    ) {
      setBreadcrumbs([]);
    } else {
      // إضافة المسار الجديد إلى القائمة إذا لم يكن مكررًا
      setBreadcrumbs((prev) => {
        if (!prev.includes(location.pathname)) {
          return [...prev, location.pathname];
        }
        return prev;
      });
    }
  }, [location]);

  // دالة لتحديث الـ breadcrumbs عند الرجوع إلى مسار سابق
  const handleBreadcrumbClick = (path) => {
    // احتفظ فقط بالمسارات التي تسبق أو تطابق المسار الذي تم النقر عليه
    const updatedBreadcrumbs = breadcrumbs.filter(
      (breadcrumb) =>
        breadcrumb === path ||
        breadcrumbs.indexOf(breadcrumb) < breadcrumbs.indexOf(path)
    );
    setBreadcrumbs(updatedBreadcrumbs);
  };

  return (
    <div
      className={`bg-red-50 w-[90%] mx-auto mt-6 py-4 px-6 rounded-md ${
        location.pathname === "/paymentsuccessful" ? "hidden" : ""
      }`}
    >
      <nav className="text-sm">
        <ol className="list-reset flex text-gray-600">
          {/* Home Link */}
          <li className="flex items-center gap-2">
            <img src={home} alt="home" />
            <Link
              to="/"
              className={`text-gray-500 mt-1 hover:text-gray-800 ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
              onClick={() => setBreadcrumbs([])} // تفريغ المسارات عند العودة للصفحة الرئيسية
            >
              Home
            </Link>
            <img src={arrowright} alt="" className="mt-1" />
          </li>

          {/* Dynamic Breadcrumbs */}
          {breadcrumbs.map((path, index) => {
            const isCurrent = location.pathname === path;
            const pathName = path.split("/").pop();

            return (
              <li key={path} className="flex items-center">
                {/* Link for each breadcrumb */}
                <Link
                  to={path}
                  className={`mx-2 mt-1 ${
                    isCurrent ? "text-red-500 font-semibold"  : "hover:text-gray-800"
                  }`}
                  onClick={() => handleBreadcrumbClick(path)}
                >
                  {pathName}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <img src={arrowright} alt="" className="mt-1" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
