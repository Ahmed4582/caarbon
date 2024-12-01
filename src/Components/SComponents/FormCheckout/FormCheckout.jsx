import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import InputCheckout from '../../DComponents/InputCheckout/nputCheckout';
// import InputCheckout from '../../Components/DComponents/InputCheckout/nputCheckout';
const FormCheckout = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        country: '',
        region: '',
        city: '',
        zipCode: '',
        email: '',
        phoneNumber: '',
        shipToDifferentAddress: false,
        nameOnCard: '',
        cardNumber: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        zipCode: Yup.string().required('Zip Code is required'),
        nameOnCard: Yup.string().required('Name on card is required'),
        cardNumber: Yup.string().required('Card number is required'),
    });

    const handleSubmit = (values) => {
    };
  return (
    <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className=" gap-5 border rounded-md xl:col-span-3 md:col-span-2 col-span-1">
                        <div className="p-6  ">
                            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">User name</label>
                                    <div className="flex gap-2">
                                        <Field name="firstName" placeholder="First name" component={InputCheckout} />
                                        <Field name="lastName" placeholder="Last name" component={InputCheckout} />
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                                    <Field name="companyName" placeholder="Company Name" component={InputCheckout} />
                                </div>
                                <div className="col-span-2">
                                    <Field name="address" label="Address" placeholder="Address" component={InputCheckout} />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Country</label>
                                    <Field as="select" name="country" className="mt-1 w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </Field>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">Region/State</label>
                                    <Field as="select" name="region" className="mt-1 w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </Field>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <Field as="select" name="city" className="mt-1 w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </Field>
                                </div>
                                <div className="col-span-1">
                                    <Field name="zipCode" label="Zip Code" placeholder="Zip Code" component={InputCheckout} />
                                </div>
                                <div className="col-span-1">
                                    <Field name="email" label="Email" placeholder="Email" component={InputCheckout} />
                                </div>
                                <div className="col-span-1">
                                    <Field name="phoneNumber" label="Phone Number" placeholder="Phone Number" component={InputCheckout} />
                                </div>
                                <div className="col-span-2">
                                    <label className="flex items-center">
                                        <Field type="checkbox" name="shipToDifferentAddress" className="form-checkbox h-4 w-4 text-blue-600" />
                                        <span className="ml-2 text-sm text-gray-700">Ship to different address</span>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg p-4 border rounded-md my-8">
                                <Field name="nameOnCard" label="Name on Card" placeholder="Name on Card" component={InputCheckout} />
                                <Field name="cardNumber" label="Card Number" placeholder="Card Number" type="number" component={InputCheckout} />
                                <div className=' flex gap-3 my-4'>     
                                    <Field name="ExpiredData" label="Expired Data" placeholder="Expired Data" component={InputCheckout} />
                                    <Field name="CVC" label="CVC" placeholder="CVC" type="number" component={InputCheckout} />
                                </div>

                            </div>
                            <button type="submit" className="bg-[#2091F9] text-white p-2 rounded-md">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
  )
}

export default FormCheckout
FormCheckout.propTypes = {
    values: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        companyName: PropTypes.string,
        address: PropTypes.string,
        country: PropTypes.string,
        region: PropTypes.string,
        city: PropTypes.string,
        zipCode: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        nameOnCard: PropTypes.string,
        cardNumber: PropTypes.string,
    }),
};
