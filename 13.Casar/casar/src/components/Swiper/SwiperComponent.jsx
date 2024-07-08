import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperComponent.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const SwiperComponent = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperBanner"  
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/948a4083-3ec1-455c-8ff9-4cb376fdc320___514afccd06e7d4522c0f30aa8cf1bffc.png"
              alt="promo1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/24e074f3-0a2e-49b0-bc0d-75a1618fa3df___155dc1bf747b710c201cbca321df5055.png"
              alt="promo2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/459f9bef-9a06-4c5e-9712-0b9a93061981___19e2bb1ed23a463cf13fc9e705fb11a3.png"
              alt="promo3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/6db7dd34-5d00-4357-8c5e-11f05f79c869___d2bcf9de1fd70591d8eba1fdc8b441fd.png"
              alt="promo4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/4d0da0be-b9f8-47ea-912b-9ad809e54c60___8410fa21414181886e84f61771ddad56.png"
              alt="promo5"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/14eb6be3-1cf8-47ce-9fc3-f60a39e77aba___c0683d51fb1f2a2f526cb9ffe4475ccd.png"
              alt="promo6"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/d4c3a26b-b78c-4c6e-82bc-92fc5172037d___f45a2fa648b82e1f231ba5943505a134.png"
              alt="promo7"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeContainer">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/41f1c5e8-9648-4806-9706-3fcb645db5c3___c7319b0152029e64819ad07545e43200.png"
              alt="promo8"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
