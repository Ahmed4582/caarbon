import { Link } from "react-router-dom";
import SearchIcon from "../../../../assets/Svg/Search.svg";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import logo from "../../../../assets/imges/CRV1PNG.png";
import useCenterHeader from "../../../../Hooks/useCenterHeader";

const CenterHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { t } = useTranslation();
  const {
    currentPage,
    handlePageChange,
    handleProductSelect,
    handleSearchChange,
    paginatedProducts,
    searchTerm,
    showDropdown,
    totalPages,
    filteredProducts,
    setShowDropdown,
  } = useCenterHeader();

  
  

  return (
    <div className="bg-[#4c4c4c] border-t border-[#dddddd8d] pb-3 md:pb-0">
      <div className="py-2 xl:px-[200px] px-[20px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="lg:hidden flex items-center"></div>

            <Link className="text-white font-bold text-2xl md:text-3xl">
              <img src={logo} alt="Logo" className="w-20" />
            </Link>

            {/* Desktop Search with Dropdown */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-4 relative">
              <form className="relative">
                <input
                  type="text"
                  name="Search_Input"
                  placeholder={t("header.searchPlaceholder")}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowDropdown(searchTerm.length > 0)}
                  className="w-full h-12 px-4 pr-12 rounded-md focus:outline-none text-black"
                />
                <img
                  src={SearchIcon}
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                  alt={t("header.searchIconAlt")}
                />

                {/* Dropdown for filtered products */}
                {/* Dropdown for filtered products */}
                {showDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      paginatedProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-[60px] h-[60px]">
                              <img
                                src={`https://92.113.27.167:7644${product?.images[0]?.image}`}
                                className="w-full h-full object-cover"
                                alt={product.description}
                              />
                            </div>
                            <div>
                              <p>{product.description}</p>
                              <p>{`(PreDay) ${product.cost_per_day} AED`}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      // Display this if no results are found
                      <div className="px-4 py-2 text-center text-gray-500">
                        {t("header.noResults")}{" "}
                        {/* ترجمة النص إذا كنت تستخدم i18next */}
                      </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && filteredProducts.length > 0 && (
                      <div className="flex justify-center items-center py-2 space-x-2">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${
                              currentPage === page
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* <div className="hidden lg:flex">
              <NavigationLinks/>
            </div> */}
          </div>

          {/* Mobile Search with Dropdown */}
          <div className="lg:hidden mt-4 relative">
            <form className="relative">
              <input
                type="text"
                name="Search_Input"
                placeholder={t("header.searchPlaceholder")}
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowDropdown(searchTerm.length > 0)}
                className="w-full h-12 px-4 pr-12 rounded-md focus:outline-none text-black"
              />
              <img
                src={SearchIcon}
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                alt={t("header.searchIconAlt")}
              />

              {/* Mobile Dropdown for filtered products */}
              {showDropdown && filteredProducts.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px]">
                          <img
                            src={`https://92.113.27.167:7644${product?.images[0]?.image}`}
                            className="w-full h-full object-cover"
                            alt={product.description}
                          />
                        </div>
                        <div>
                          <p>{product.description}</p>
                          <p>{`(PreDay) ${product.cost_per_day} AED   `}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex gap-2 justify-center items-center py-2 space-x-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${
                              currentPage === page
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterHeader;

CenterHeader.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
};
