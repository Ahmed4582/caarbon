import * as Yup from "yup";

const OTPValidation = Yup.object({
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

export default OTPValidation;
