import { SwiperSlide } from "swiper/react";
import SwiperComponents from "../../DComponents/SwiperComponents/SwiperComponents";
import { useSelector } from "react-redux";
// const iMG_BASE_URL = "https://92.113.27.167:9999";
const ShopSlider = () => {
  const { category } = useSelector((state) => state.categorySlice);
  

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <SwiperComponents
          spaceBetween={6}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {category?.map((e, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 rounded-[15px] cursor-pointer xl:py-[24px] xl:px-[25px] w-[80%] md:w-full  mx-auto">
                <div className="gap-4">
                  <div className="xl:w-[148px] text-center mx-auto w-[100px] p-4">
                    <img src={e?.image} alt="icon" className=" w-full" />
                  </div>
                  <div>
                    <h1 className=" mx-auto p-4 text-[16px] font-normal  text-center  leading-[24px] text-[#212746]">
                      {e.name}
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponents>
      </div>
    </div>
  );
};

export default ShopSlider;
