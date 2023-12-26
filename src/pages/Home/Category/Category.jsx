import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="py-9">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative mb-10">
            <img src={slide1} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Pizza
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide1} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide4} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Desserts
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <h4 className="text-3xl text-white text-center uppercase absolute bottom-0 inset-x-16">
              Pizza
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
