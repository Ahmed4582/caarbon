import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddProductValidation from "../Validation/AddProductValidtion";
import { useDispatch, useSelector } from "react-redux";
import { actAddProduct } from "../Store/AddProduct/actAddProduct/actAddProduct";

const useAddProduct = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState("");
  const [tags, setSelectedTags] = useState([]);
  const MAX_IMAGES = 5;
  const tagsData = useSelector((state) => state.TagSlice.tags);
  const { category } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.AddProductSlice);
  const i18nextLng = window.localStorage.getItem("i18nextLng");

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      shipping: true,
      category: "",
      government: "",
      in_stock: 1,
    },
    AddProductValidation,
    onSubmit: async (values, { resetForm }) => {
      const data = { ...values, images, tags };
      await dispatch(actAddProduct(data));
      if (loading === "fulfilled" && !error) {
        setImages([]);
        setSelectedTags([]);
        resetForm();
      }
    },
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageError("");
    if (images.length + files.length > MAX_IMAGES) {
      setImageError(t("addProduct.alerts.imageLimit", { max: MAX_IMAGES }));
      return;
    }
    setImages([...images, ...files]);
  };

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setSelectedTags(tags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...tags, tag]);
    }
  };

  const syrianGovernorates = [
    t("syrianGovernorates.Aleppo"),
    t("syrianGovernorates.Damascus"),
    t("syrianGovernorates.Daraa"),
    t("syrianGovernorates.Deir ez-Zor"),
    t("syrianGovernorates.Hama"),
    t("syrianGovernorates.Al-Hasakah"),
    t("syrianGovernorates.Homs"),
    t("syrianGovernorates.Idlib"),
    t("syrianGovernorates.Latakia"),
    t("syrianGovernorates.Quneitra"),
    t("syrianGovernorates.Raqqa"),
    t("syrianGovernorates.Rif Dimashq"),
    t("syrianGovernorates.Al-Suwayda"),
    t("syrianGovernorates.Tartus"),
  ];

  const selectClassName = `
      block w-full px-4 py-3 rounded-lg
      bg-gray-50 border-2 border-gray-200
      text-gray-700 text-sm
      transition-all duration-200
      focus:bg-white 
      hover:border-gray-300
      appearance-none
    `;

  const labelClassName = `
      block text-sm font-medium text-gray-700 mb-1.5
    `;

  return {
    handleImageChange,
    imageError,
    images,
    labelClassName,
    selectClassName,
    tagsData,
    toggleTag,
    syrianGovernorates,
    MAX_IMAGES,
    tags,
    formik,
    setImages,
    category,
    i18nextLng,
  };
};

export default useAddProduct;
