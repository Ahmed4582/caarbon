import { useState } from "react";

const usePagination = ({ filteredProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math?.ceil(filteredProducts?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts?.slice(startIndex, endIndex);

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    handlePageChange,
    getPageNumbers,
    currentProducts,
    currentPage,
    totalPages,
  };
};

export default usePagination;
