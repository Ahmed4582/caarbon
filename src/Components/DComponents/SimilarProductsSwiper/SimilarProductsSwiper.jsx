import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PropTypes from 'prop-types';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const SimilarProductsSwiper = ({ products }) => {
        const { t } = useTranslation();

  return (
    <div className="md:w-[90%] mx-auto my-6">
      <h3 className="text-[40px] font-bold text-center mb-6">
        {t("SimllarData")}
      </h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView:2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="similar-products-swiper"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all hover:shadow-xl h-full flex flex-col">
              <div className="relative h-56 overflow-hidden bg-gray-100">
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
                  alt={product.name || product.description}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg";
                  }}
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="md:text-[10px] xl:text-[14px] font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="lg:text-sm md:text-[10px] font-semibold text-[#727272] mb-4">
                  {product.cost_per_day} AED / يوم
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      window.location.href = `https://wa.me/971566030574?text=${encodeURIComponent(
                        `مرحباً، أود الاستفسار عن المنتج "${product.name}" بسعر ${product.cost_per_day} د.إ`
                      )}`;
                    }}
                    className={`w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg transition-colors
    ${
      !product.amount || product.amount === "0"
        ? "bg-gray-300 "
        : "bg-[#4c4c4c] text-white"
    }`}
                  >
                    <MessageCircle className="w-7 h-7 text-green-500" />
                    <span className="text-[#727272] text-md font-medium">
                      {t("contact_us")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SimilarProductsSwiper.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired
        })
      ).isRequired,
      cost_per_day: PropTypes.number.isRequired
    })
  )
};

export default SimilarProductsSwiper;
