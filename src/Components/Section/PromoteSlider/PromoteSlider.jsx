import { SwiperSlide } from "swiper/react";
import SwiperComponents from "../../DComponents/SwiperComponents/SwiperComponents";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PromoteSlider = () => {
  const { t } = useTranslation();
  const { products } = useSelector((state) => state.ProductSlice);

  const promotedProducts = products?.filter(
    (product) => product.is_promote === true
  );

  const i18nextLng = window.localStorage.getItem("i18nextLng");

  if (promotedProducts?.length === 0) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <p className="text-lg text-gray-500 italic">
          {t("noPromotedProducts")}
        </p>
      </div>
    );
  }

  const swiperParams = {
    spaceBetween: 16,
    autoplay: {
      delay: 3000, // Slides every 3 seconds
      disableOnInteraction: false, // Continues autoplay after user interaction
      pauseOnMouseEnter: true, // Pauses on mouse hover
    },
    loop: true, // Enables infinite loop
    speed: 800, // Transition speed in milliseconds
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  };

  return (
    <div className="w-full py-8 mt-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[95%] md:w-[90%] mx-auto">
        {/* Enhanced Header Section */}
        <div className="mb-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block">
            {t("featuredProducts")}
            <span
              className={`absolute -bottom-2 ${
                i18nextLng === "ar" ? "right-0" : "left-0"
              } w-1/2 h-1 bg-red-500 rounded-full`}
            ></span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {t("curatedProducts")}
          </p>
        </div>

        <SwiperComponents {...swiperParams}>
          {promotedProducts?.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group my-2 relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={(() => {
                        if (product?.images && product.images.length > 0) {
                          const firstImage = product.images[0];
                          if (typeof firstImage === "object" && firstImage.image) {
                            return firstImage.image.startsWith("http") 
                              ? firstImage.image 
                              : `https://92.113.27.167:7644${firstImage.image}`;
                          }
                          if (typeof firstImage === "string" && firstImage.startsWith("http")) {
                            return firstImage;
                          }
                        }
                        return "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg";
                      })()}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg";
                      }}
                    />
                  </div>

                  {/* Enhanced Promotion Badge */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-red-500 text-white text-xs md:text-sm px-3 py-1.5 rounded-full font-medium transform rotate-2 shadow-lg">
                      {t("specialOffer")}
                    </span>
                    {product.discount && (
                      <span className="bg-yellow-400 text-gray-900 text-xs md:text-sm px-3 py-1.5 rounded-full font-medium transform -rotate-2 shadow-lg">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details with Enhanced Styling */}
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 truncate group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-lg md:text-xl font-bold text-gray-900">
                        {product.price} SYP
                      </span>
                    </div>

                    {/* Stock Status with Enhanced Design */}
                    <span
                      className={`text-xs md:text-sm px-3 py-1 rounded-full font-medium ${
                        product.in_stock
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      {product.in_stock ? t("inStock") : t("outOfStock")}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay with Quick Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/details/${product.id}`}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {t("viewDetails")}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponents>
      </div>
    </div>
  );
};

export default PromoteSlider;
