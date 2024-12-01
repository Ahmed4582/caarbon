import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const useCenterHeader = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const i18nextLng = window.localStorage.getItem("i18nextLng");
  const { products } = useSelector((state) => state.ProductSlice);

  // Constants
  const RESULTS_PER_PAGE = 4;

  // Memoized filtered and paginated products
const filteredProducts = useMemo(() => {
  if (!searchTerm) return [];
  return products.filter(
    (product) =>
      product.description && // Ensure product.title is defined
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [searchTerm, products]);



  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + RESULTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Total pages calculation
  const totalPages = Math.ceil(filteredProducts.length / RESULTS_PER_PAGE);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleProductSelect = (product) => {
    setSearchTerm(product.name);
    setShowDropdown(false);
    navigate(`/details/${product.id}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return {
    searchTerm,
    showDropdown,
    currentPage,
    i18nextLng,
    paginatedProducts,
    totalPages,
    handlePageChange,
    handleSearchChange,
    handleProductSelect,
    filteredProducts,
    setShowDropdown,
    setSearchTerm,
  };
};

export default useCenterHeader;
