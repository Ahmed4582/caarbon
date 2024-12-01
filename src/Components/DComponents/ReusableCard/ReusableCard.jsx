import { useState } from "react";
import Heading from "../../DComponents/Heading/Heading";
import ProductCard from "../../DComponents/ProductCard/ProductCard";
import PropTypes from "prop-types";
import usePagination from "../../../Hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import { useTranslation } from "react-i18next";

const ReusableCard = ({ headingTitle, categories, products, status }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("allProduct"));
  const dir = window.localStorage.getItem("dir");

  const filteredProducts = products?.filter((product) =>
    activeTab === t("allProduct") ? true : product.category.name === activeTab
  );
  // (categories);

  const {
    currentProducts,
    getPageNumbers,
    handlePageChange,
    currentPage,
    totalPages,
  } = usePagination({ filteredProducts });

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col md:flex-row items-center justify-between ${
          status ? "hidden" : ""
        }`}
      >
        <Heading Title={headingTitle} />
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2">
            {categories?.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.name)}
                className={`font-normal text-[12px] md:text-[14px] leading-5 ${
                  activeTab === item.name
                    ? "font-bold text-[#191C1F] border-b-2 py-2 border-[#2091F9]"
                    : "text-[#5F6C72]"
                }`}
              >
                {t(item.name)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="my-4">
        {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
          <ProductCard products={currentProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg border border-gray-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5l1-1h3l1 1H17a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-700">
              لا توجد منتجات مطابقة
            </h2>
            <p className="text-gray-500 text-sm text-center mt-2">
              حاول تعديل معايير البحث للحصول على نتائج أفضل.
            </p>
          </div>
        )}
      </div>

      <div className="my-4">
        {totalPages > 0 ? (
          <Pagination
            currentPage={currentPage}
            getPageNumbers={getPageNumbers}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg border border-gray-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5l1-1h3l1 1H17a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-700">
              لا توجد صفحات للتنقل
            </h2>
            <p className="text-gray-500 text-sm text-center mt-2">
              لم يتم العثور على بيانات كافية لعرض صفحات متعددة.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableCard;

ReusableCard.propTypes = {
  headingTitle: PropTypes.string,
  categories: PropTypes.array,
  products: PropTypes.array,
  status: PropTypes.bool,
};
