import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SwiperParts.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { CartButton } from '../CartButton/CartButton';

export const SwiperParts = ({
  title,
  catItems,
  numSlides,
  classSwiper,
  image,
  mySwiper,
  buttonNeeded,
}) => {
  return (
    <section>
      <div className="flexContainer">
        {image && <img src={image} alt="icon" className="imageIcon" />}
        <h1 className="sectionTitle">{title}</h1>
      </div>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={numSlides}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        className={'mySwiper ' + mySwiper}
      >
        {catItems &&
          catItems.map((item) => (
            <SwiperSlide>
              <div key={item.id} className={'SwiperContainer ' + classSwiper}>
                {item.discount && <p className="discount">{item.discount}</p>}
                {item.interest && <p className="interest">{item.interest}</p>}
                <img src={item.image} alt={item.name} />
                {item.brand && <p className="brand">{item.brand}</p>}
                <p className="SwiperName">{item.name}</p>

                {item.originalPrice && (
                  <p className="originalPrice">{item.originalPrice}</p>
                )}
                {item.price && <p className="price">{item.price}</p>}

                {buttonNeeded && <CartButton />}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
