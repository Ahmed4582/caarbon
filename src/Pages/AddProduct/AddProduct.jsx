import { Plus, X, Upload, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import useAddProduct from "../../Hooks/useAddProduct";
import CustomSelect from "../../Components/DComponents/CustomSelect/CustomSelect";
import Alert from "../../Components/DComponents/Alert/Alert";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const { t } = useTranslation();
  const {
    MAX_IMAGES,
    formik,
    handleImageChange,
    imageError,
    images,
    labelClassName,
    selectClassName,
    syrianGovernorates,
    toggleTag,
    setImages,
    category,
    tagsData,
    tags,
  } = useAddProduct();
  const { loading } = useSelector((state) => state.AddProductSlice);

  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:w-[80%] mx-auto">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold">{t("addProduct.title")}</h1>
            <p className="mt-2 text-red-400">{t("addProduct.subtitle")}</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="p-8 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Upload size={20} className="text-red-500" />
                  {t("addProduct.images.title")}
                </h2>
                <span className="text-sm text-gray-500">
                  {t("addProduct.images.uploadCount", {
                    count: images.length,
                    max: MAX_IMAGES,
                  })}
                </span>
              </div>

              {imageError && (
                <div className="rounded-lg bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <X className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{t(imageError)}</p>
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg
                            transition-all duration-200 hover:border-red-500 hover:bg-red-50/50 ${
                              images.length >= MAX_IMAGES
                                ? "opacity-50 pointer-events-none border-gray-200"
                                : "border-gray-300"
                            }`}
              >
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex gap-2 text-sm text-gray-600">
                    <label
                      className={`relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500
                                   focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500
                                   transition-colors duration-200 ${
                                     images.length >= MAX_IMAGES
                                       ? "cursor-not-allowed"
                                       : ""
                                   }`}
                    >
                      <span>{t("addProduct.images.upload")}</span>
                      <input
                        type="file"
                        multiple
                        className="sr-only"
                        onChange={handleImageChange}
                        accept="image/*"
                        disabled={images.length >= MAX_IMAGES}
                      />
                    </label>
                    <p className="pl-1">{t("addProduct.images.dragDrop")}</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {t("addProduct.images.requirements", { max: MAX_IMAGES })}
                  </p>
                </div>
              </div>

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {images.map((image, index) => (
                    <div key={index} className="relative group h-[150px]">
                      <div className="aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <button
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg
                                 hover:bg-red-600 transition-colors duration-200"
                        onClick={() =>
                          setImages(images.filter((_, i) => i !== index))
                        }
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Plus size={20} />
                {t("addProduct.basicInfo.title")}
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextInput
                  label={t("addProduct.basicInfo.productTitle")}
                  name="name"
                  placeholder={t(
                    "addProduct.basicInfo.productTitlePlaceholder"
                  )}
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && formik.errors.name}
                />
              </div>

              <div>
                <label className={labelClassName}>
                  {t("addProduct.basicInfo.description")}
                </label>
                <textarea
                  name="description"
                  rows="4"
                  className={`${selectClassName} resize-none`}
                  placeholder={t("addProduct.basicInfo.descriptionPlaceholder")}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.description}
                  </div>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <DollarSign size={20} className="text-red-500" />
                {t("addProduct.pricing.title")}
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <TextInput
                  label={t("addProduct.pricing.salePrice")}
                  name="price"
                  placeholder={t("addProduct.pricing.salePricePlaceholder")}
                  type="number"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.price && formik.errors.price}
                />
                <TextInput
                  label={t("addProduct.pricing.stockQuantity")}
                  name="in_stock"
                  placeholder={t("addProduct.pricing.stockQuantityPlaceholder")}
                  type="number"
                  value={formik.values.in_stock}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.in_stock && formik.errors.in_stock}
                />
              </div>
            </div>

            <CustomSelect
              label={t("addProduct.location.title")}
              name="government"
              value={formik.values.governorate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={syrianGovernorates.map((governorate) => ({
                value: governorate,
                name: t(`${governorate.toLowerCase().replace(/\s+/g, "")}`),
              }))}
              error={formik.touched.governorate && formik.errors.governorate}
              placeholder={t("addProduct.location.placeholder")}
            />

            {/* Categories and Tags */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Plus size={20} className="text-red-500" />
                {t("addProduct.categoriesAndTags.title")}
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <CustomSelect
                  label={t("addProduct.categoriesAndTags.category")}
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  options={category}
                  error={formik.touched.category && formik.errors.category}
                  placeholder={t(
                    "addProduct.categoriesAndTags.categoryPlaceholder"
                  )}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {t("addProduct.categoriesAndTags.tags")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tagsData.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => toggleTag(tag.name)}
                      className={`px-4 py-2 text-sm rounded-full border-2 transition-all duration-200
                              ${
                                tags.includes(tag.name)
                                  ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                                  : "border-gray-200 text-gray-700 hover:border-red-500 hover:text-red-500"
                              }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className={`px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 border border-transparent rounded-lg
                           text-sm font-medium text-white focus:outline-none focus:ring-2
                           focus:ring-offset-2 focus:ring-red-500 transition-all duration-200
                           ${
                             !formik.isValid || formik.isSubmitting
                               ? "opacity-50 cursor-not-allowed"
                               : "hover:from-red-600 hover:to-red-700"
                           }`}
                >
                  {formik.isSubmitting
                    ? t("addProduct.buttons.publishing")
                    : t("addProduct.buttons.publish")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {loading === "success" && (
        <Alert
          message={t("addProduct.alerts.success")}
          position="bottom-left"
          variant="success"
        />
      )}
    </div>
  );
};

export default AddProduct;
