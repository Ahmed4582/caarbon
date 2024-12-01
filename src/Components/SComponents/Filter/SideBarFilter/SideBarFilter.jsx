import { useState } from "react";
import PropTypes from "prop-types"; // Add this import
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SidebarFilter = ({ activeFilters, onFilterChange }) => {
  const { t } = useTranslation(); // Initialize i18next translation function
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { category } = useSelector((state) => state.categorySlice);
  

  const priceRanges = [
    { label: t("priceRanges.allPrice"), value: [0, 100000000000000000000000] },
    { label: t("priceRanges.under20"), value: [0, 20] },
    { label: t("priceRanges.from20to100"), value: [20, 100] },
    { label: t("priceRanges.from100to500"), value: [100, 500] },
    { label: t("priceRanges.from500to1000"), value: [500, 1000] },
    { label: t("priceRanges.from1000to10000"), value: [1000, 10000] },
  ];

  const isFilterActive = (type, value) => {
    return activeFilters.some(
      (filter) => filter.type === type && filter.value === value
    );
  };

  const handleFilterClick = (type, value, priceValue = null) => {
    onFilterChange(type, value, priceValue);
  };

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        className="md:hidden z-[1000] fixed bottom-4 right-4 bg-[#b68d33]  text-white p-3 rounded-full shadow-lg "
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>

      {/* Sidebar Container */}
      <div
        className={`
          fixed md:relative top-0 left-0 h-full w-64 
          bg-white shadow-lg md:shadow-none
          transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
          md:transform-none transition-transform duration-200 ease-in-out
          overflow-y-auto z-40 p-4
        `}
      >
        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">
            {t("sidebar.category")}
          </h2>
          {category.map((category, index) => (
            <div key={index} className="flex items-center mb-2 gap-2">
              <input
                type="checkbox"
                id={`category-${index}`}
                checked={isFilterActive("category", category.name)}
                onChange={() => handleFilterClick("category", category.name)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <label
                htmlFor={`category-${index}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">
            {t("sidebar.priceRange")}
          </h2>
          {priceRanges.map((range, index) => (
            <div key={index} className="mb-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  checked={isFilterActive("price", range.label)}
                  onChange={() =>
                    handleFilterClick("price", range.label, range.value)
                  }
                  className="mr-2"
                />
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default SidebarFilter;

SidebarFilter.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
};
