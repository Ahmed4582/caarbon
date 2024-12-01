import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

const DropDown = ({ options, initialValue, onChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);
  const dropdownRef = useRef(null);
  const i18nextLng = window.localStorage.getItem("i18nextLng");

  useEffect(() => {
    // Load saved currency from localStorage on component mount
    if (type === "currency") {
      const savedCurrency = window.localStorage.getItem("selectedCurrency");
      if (savedCurrency) {
        const parsedCurrency = JSON.parse(savedCurrency);
        setSelected(parsedCurrency);
        onChange?.(parsedCurrency);
      }
    }
  }, [type, onChange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);

    // Save to localStorage if type is currency
    if (type === "currency") {
      window.localStorage.setItem("selectedCurrency", JSON.stringify(option));
      window.location.reload();
    }

    onChange?.(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1 text-white rounded transition-colors duration-200"
      >
        <span className="text-sm font-medium">{selected.code}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            i18nextLng === "ar" ? "right-[-55px]" : "right-0"
          } md:left-0 z-50 mt-1 w-36 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.code}
                onClick={() => handleSelect(option)}
                className={`
                  w-full text-left px-4 py-2 text-sm
                  ${
                    selected.code === option.code
                      ? "text-[#b68d33] bg-red-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  initialValue: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default DropDown;
