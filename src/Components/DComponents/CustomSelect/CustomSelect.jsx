import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types"; // Add this import

const CustomSelect = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  error,
  placeholder = "Select an option",
  className = "",
  labelClassName = "",
  disabled = false,
}) => {
  const defaultLabelClass = "block text-sm font-medium text-gray-700 mb-1";
  const defaultSelectClass =
    "block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-700 focus:border-red-500 focus:ring-red-500 focus:outline-none appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed";
  const i18nextLng = window.localStorage.getItem("i18nextLng");

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className={labelClassName || defaultLabelClass}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`${defaultSelectClass} ${error ? "border-red-500" : ""}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.name || option}>
              {option.name || option}
            </option>
          ))}
        </select>
        <ChevronDown
          className={`absolute inset-y-0 ${
            i18nextLng === "ar" ? "left-0" : "right-0"
          } m-3 h-5 w-5 ${disabled ? "text-gray-400" : "text-gray-500"}`}
        />
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  error: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomSelect;
