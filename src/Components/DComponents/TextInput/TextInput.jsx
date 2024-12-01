import PropTypes from "prop-types"; // Add this import

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className={`${className} mt-1`}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  </div>
);

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired, // Add this line
  onBlur: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
};
