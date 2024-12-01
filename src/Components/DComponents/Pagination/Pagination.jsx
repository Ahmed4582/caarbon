import PropTypes from "prop-types"; // Add this import

const Pagination = ({
  handlePageChange,
  currentPage,
  getPageNumbers,
  totalPages,
}) => {
  // Added props
  const i18nextLng = window.localStorage.getItem("i18nextLng");

  return (
    <>
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <svg
            className={`"w-4 h-4" ${i18nextLng === "ar" ? "" : "rotate-180"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${
                currentPage === number
                  ? "bg-[#4c4c4c] text-white"
                  : "text-[#B8860B] border  "
              }`}
          >
            {number.toString().padStart(2, "0")}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-5 h-5 flex items-center justify-center rounded-full  disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <svg
            className={`"w-4 h-4" ${i18nextLng === "ar" ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  getPageNumbers: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
