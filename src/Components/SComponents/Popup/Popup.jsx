import PropTypes from "prop-types";
import { X, Star, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { actProductDetails } from "../../../Store/ProductDetails/actProductDetails/actProductDetails";
import { useEffect } from "react";

const Popup = ({ isOpen, id, onClose }) => {
  const dispatch = useDispatch();
  const { productDetails, loading, error } = useSelector(
    (state) => state.ProductDetailsSlice
  );

  useEffect(() => {
    if (isOpen) {
      dispatch(actProductDetails(id));
    }
  }, [dispatch, id, isOpen]);

  if (!isOpen) return null;


  // Render error state
  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-red-500 text-lg mb-4">
            Failed to load product details
          </p>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Render product details
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto grid md:grid-cols-2 gap-6 relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Product Image */}
        <div className="md:sticky top-0 self-start">
          <img
            src={productDetails?.images?.[0]?.image || "/placeholder-image.png"}
            alt={productDetails?.name || "Product Image"}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          {/* Additional Images Thumbnails */}
          <div className="flex gap-2 mt-4">
            {productDetails?.images?.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded cursor-pointer opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {productDetails?.name}
          </h2>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-red-500">
              {productDetails?.price} SYP
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(productDetails?.rating || 0)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                ({productDetails?.rating || 0})
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {productDetails?.description}
          </p>

          {/* Additional Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Category:</strong> {productDetails?.category}
            </div>
            <div>
              <strong>Stock:</strong> {productDetails?.stock} items available
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center">
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
