import * as Yup from "yup";

const AddProductValidation = Yup.object({
  title: Yup.string().required("Product title is required"),
  brand: Yup.string().required("Brand name is required"),
  description: Yup.string().required("Description is required"),
  governorate: Yup.string().required("Location is required"),
  regularPrice: Yup.number()
    .positive("Price must be positive")
    .required("Regular price is required"),
  salePrice: Yup.number()
    .positive("Price must be positive")
    .lessThan(
      Yup.ref("regularPrice"),
      "Sale price must be less than regular price"
    ),
  stockQuantity: Yup.number()
    .integer("Quantity must be a whole number")
    .min(0, "Quantity cannot be negative")
    .required("Stock quantity is required"),
  category: Yup.string().required("Category is required"),
});

export default AddProductValidation;
