import PropTypes from 'prop-types';
import { Field } from 'formik';

const InputCheckout = ({ field, form, label, placeholder, type = 'text', classname }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500 ${classname}`}
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="text-red-500 text-sm mt-1">{form.errors[field.name]}</div>
      )}
    </div>
  );
};

InputCheckout.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  classname: PropTypes.string,
};

export default InputCheckout;
