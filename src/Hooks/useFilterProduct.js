import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actProducts } from "../Store/productSlice/actProducts/actProducts";

const useFilterProduct = () => {
  const { products } = useSelector((state) => state.ProductSlice);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const handleFilterChange = (type, value, priceValue = null) => {
    setActiveFilters((prev) => {
      if (type === "price") {
        const withoutPrice = prev.filter((filter) => filter.type !== "price");
        return [...withoutPrice, { type, value, priceValue }];
      }

      if (["shipping", "inStock", "promoted"].includes(type)) {
        const exists = prev.some((filter) => filter.type === type);
        if (exists) {
          return prev.filter((filter) => filter.type !== type);
        }
        return [...prev, { type, value }];
      }

      const exists = prev.some(
        (filter) => filter.type === type && filter.value === value
      );

      if (exists) {
        return prev.filter(
          (filter) => !(filter.type === type && filter.value === value)
        );
      }

      return [...prev, { type, value }];
    });
  };

  const handleRemoveFilter = (type, value) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => !(filter.type === type && filter.value === value))
    );
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      // Preparing filters for API
      const filtersForApi = activeFilters.reduce((acc, filter) => {
        switch (filter.type) {
          case "category":
            acc.category = filter.value; // Ensure this matches your API key
            break;
          case "price":
            if (filter.priceValue) {
              const [min, max] = filter.priceValue;
              acc.min_price = min;
              acc.max_price = max;
            }
            break;
          case "tag":
            acc.tags = filter.value; // Match API key for tags
            break;
          case "shipping":
            acc.shipping = filter.value; // Match API key for shipping
            break;
          case "inStock":
            acc.in_stock = filter.value; // Match API key for stock
            break;
          case "promoted":
            acc.promoted = filter.value; // Match API key for promoted
            break;
          default:
            break;
        }
        return acc;
      }, {});

      if (searchQuery.trim() !== "") {
        filtersForApi.search = searchQuery; // Match API key for search
      }

      try {
        const response = await dispatch(actProducts(filtersForApi));
        setFilteredProducts(response.payload);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchFilteredProducts();
  }, [activeFilters, searchQuery, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    filteredProducts,
    activeFilters,
    searchQuery,
    handleFilterChange,
    handleRemoveFilter,
    handleSearchQueryChange,
  };
};

export default useFilterProduct;
