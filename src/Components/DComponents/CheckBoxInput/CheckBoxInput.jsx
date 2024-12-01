import PropTypes from "prop-types"; // Import PropTypes

const CheckboxInput = ({ label, name, checked, onChange }) => (
  <div className="flex items-center">
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-[#0F298B] border-gray-300 rounded"
    />
    <label htmlFor={name} className="ml-2 block text-sm text-[#006400] ">
      {label}
    </label>
  </div>
);

export default CheckboxInput;

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired, // Validate 'label' prop
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
