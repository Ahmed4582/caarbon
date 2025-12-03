import { MessageCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import useCurrency from "../../Hooks/useCurrency";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SimilarProductsSwiper from "../../Components/DComponents/SimilarProductsSwiper/SimilarProductsSwiper";
// import { useDispatch, useSelector } from "react-redux";
// import { actAddToCart } from "../../Store/Cart/actions/actAddCart";
// import { statusError, TokenNeededAction } from "../../Store/Cart/CartSlice";
// import { actGetCart } from "../../Store/Cart/actions/actGetCart";

const ProductDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { productDetails, IMG_BASE_URL } = useProductDetails({ id });

  const { products } = useSelector((state) => state.ProductSlice);

  const productcatogery = productDetails.is_available;
  const similarData = products?.filter(
    (item) => item.is_available === productcatogery
  );

  const { CURRENCY_RATES, selectedCurrency } = useCurrency();
  // const dispatch = useDispatch();

  // const { token } = useSelector((state) => state.loginSlice);
  // const { cart } = useSelector((state) => state.CartSlice);

  // const handleAddToCart = async (productId) => {
  //   if (token) {
  //     const productExists = cart
  //       .map((item) => item.product.id)
  //       .includes(productId);
  //     if (productExists) {
  //       dispatch(statusError());
  //     } else {
  //       await dispatch(actAddToCart(productId));
  //       dispatch(actGetCart()); // Fetch updated cart data
  //     }
  //   } else {
  //     dispatch(TokenNeededAction());
  //   }
  // };

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (productDetails?.images?.length > 0) {
      // تعيين الصورة الكبيرة بشكل صحيح عند تحميل تفاصيل المنتج
      const firstImage = productDetails.images[0]?.image || productDetails.images[0];
      setSelectedImage(
        typeof firstImage === "string" && firstImage.startsWith("http") 
          ? firstImage 
          : `https://92.113.27.167:7644${firstImage}`
      );
    }
  }, [productDetails]);

  const convertPrice = (priceInTRY) => {
    // Only convert if the selected currency is not TRY
    if (selectedCurrency.code === "TRY") {
      return priceInTRY;
    }
    const rate = CURRENCY_RATES[selectedCurrency.code] || 1;
    const convertedPrice = priceInTRY * rate; // Convert TRY to selected currency
    return convertedPrice.toFixed(2);
  };

  if (!productDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {productDetails.description}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Product Image */}
              <div className="space-y-4">
                {/* الصورة المختارة */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={selectedImage || productDetails.images?.[0]?.image || productDetails.images?.[0]}
                    alt={productDetails.name}
                    className="w-full h-auto max-h-[400px] object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x600?text=Car+Image";
                    }}
                  />
                </div>

                {/* معرض الصور المصغرة */}
                <div className="flex gap-2 overflow-x-auto pb-2 ">
                  {productDetails.images?.map((imageObj, index) => {
                    const imageUrl = typeof imageObj === "object" && imageObj.image
                      ? (imageObj.image.startsWith("http") ? imageObj.image : `https://92.113.27.167:7644${imageObj.image}`)
                      : (typeof imageObj === "string" && imageObj.startsWith("http") ? imageObj : `https://92.113.27.167:7644${imageObj}`);
                    return (
                      <div
                        key={imageObj?.id || index}
                        onClick={() => setSelectedImage(imageUrl)}
                        className={`cursor-pointer m-2 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                          selectedImage === imageUrl
                            ? "ring-2 ring-[#b68d33] scale-105"
                            : "hover:scale-105"
                        }`}
                      >
                        <img
                          src={imageUrl}
                          alt={`${productDetails.name} - ${index + 1}`}
                          className="w-20 h-20 object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/200x200?text=Car+Image";
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Price */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#727272]">
                    {`(PreDay) ${productDetails.cost_per_day} AED   `}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t("Description")}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {productDetails.description}
                  </p>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      // توجيه المستخدم إلى رابط واتساب مع الرسالة الجاهزة
                      window.location.href = `https://wa.me/971566030574?text=${encodeURIComponent(
                        `مرحباً، أود الاستفسار عن المنتج "${productDetails.name}" بسعر ${productDetails.cost_per_day} د.إ`
                      )}`;
                    }}
                    className={`w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg transition-colors
    ${
      !productDetails.amount || productDetails.amount === "0"
        ? "bg-gray-300 "
        : "bg-[#4c4c4c] text-white"
    }`}
                  >
                    <MessageCircle className="w-7 h-7 text-green-500" />
                    <span className="text-[#727272] text-md font-medium">
                      {t("contact")}
                    </span>
                  </button>
                </div>

                {/* Description */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[90%] mx-auto my-6">
          <SimilarProductsSwiper products={similarData} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
