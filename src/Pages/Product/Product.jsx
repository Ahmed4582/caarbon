import SidebarFilter from "../../Components/SComponents/Filter/SideBarFilter/SideBarFilter";
import SearchHeader from "../../Components/SComponents/Filter/HeaderSideBar/HeaderSideBar";
import ReusableCard from "../../Components/DComponents/ReusableCard/ReusableCard";
import useFilterProduct from "../../Hooks/useFilterProduct";

const ProductPage = () => {
  const {
    activeFilters,
    filteredProducts,
    handleFilterChange,
    handleRemoveFilter,
    handleSearchQueryChange,
    searchQuery, // Make sure to destructure this
  } = useFilterProduct();

  return (
    <div className="min-h-screen">
      <div className="md:w-[95%] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <SidebarFilter
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onRemoveFilter={handleRemoveFilter}
          />
        </div>
        <div className="md:col-span-2 xl:col-span-4  ">
          <SearchHeader
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            total={filteredProducts.length}
            searchQuery={searchQuery} // Pass searchQuery
            onSearchQueryChange={handleSearchQueryChange}
          />
          <ReusableCard products={filteredProducts} status />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
