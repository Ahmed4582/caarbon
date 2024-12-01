import { Swiper } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import RightArrow from "../../../assets/Svg/Arrow.svg";
import SwiperLeftArrow from "../../../assets/Svg/SwiperLeftArrow.svg";

const SwiperComponents = ({
  children,
  className,
  paginationProps,
  slidesPerView,
  breakpoints,
  spaceBetween,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={1}
        breakpoints={breakpoints}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={paginationProps}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${className} mx-auto`}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {children}

        {/* Custom Navigation Buttons - Now Always Visible */}
        <button
          ref={prevRef}
          className="absolute hidden left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:flex items-center justify-center bg-red-500 rounded-full text-white  focus:outline-none   transition-colors duration-200"
        >
          {/* <ChevronLeft className="w-6 h-6" /> */}
          <img src={SwiperLeftArrow} alt="" />
        </button>

        <button
          ref={nextRef}
          className="absolute hidden right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:flex items-center justify-center bg-red-500 rounded-full text-white focus:outline-none  transition-colors duration-200"
        >
          <img src={RightArrow} alt="" />
        </button>
      </Swiper>
    </div>
  );
};

export default SwiperComponents;

SwiperComponents.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  paginationProps: PropTypes.object,
  breakpoints: PropTypes.object,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};
