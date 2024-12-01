import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { debounce } from "lodash"; // Import debounce for performance

const SearchHeader = ({
  activeFilters,
  onRemoveFilter,
  total,
  searchQuery,
  onSearchQueryChange,
}) => {
  const { t } = useTranslation();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Debounce to prevent too many updates on rapid typing
  const debouncedSearchChange = debounce((query) => {
    onSearchQueryChange(query);
  }, 300); // 300ms delay

  // Effect to trigger search as user types
  useEffect(() => {
    debouncedSearchChange(localSearchQuery);

    // Cleanup debounce on component unmount
    return () => {
      debouncedSearchChange.cancel();
    };
  }, [localSearchQuery, debouncedSearchChange]);

  // Sync local state with prop
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchQueryChange(localSearchQuery);
  };

  return (
    <div className="space-y-4 mb-6 ">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="flex-1 relative">
        <input
          type="text"
          placeholder={t("searchHeader.searchPlaceholder")}
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-2 border mr-2  border-gray-300 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <svg
            className="w-5 h-5 mr-2 text-[]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      {/* Active Filters Section */}
      <div className="flex items-center justify-between">
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">
              {t("searchHeader.activeFilters")}:
            </span>
            {activeFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => onRemoveFilter(filter.type, filter.value)}
                className="group flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                <span className="text-[#727272]">{filter.value}</span>
                <svg
                  className="w-4 h-4 text-[#727272]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span className="font-semibold mr-2">{total}</span>
          {t("searchHeader.resultsFound")}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

SearchHeader.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
  total: PropTypes.number,
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
};
