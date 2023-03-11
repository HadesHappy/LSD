import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/autoplay";

const HeroCurrencies = () => {

  const coins = ['BTC  $23,476.09', 'ETH  $1,647.92', 'BNB  $300.44', 'XRP  $0.3808', 'ADA  $0.3501', 'Doge  $0.08079', 'MATIC  $1.22', 'SOL $22.08', 'Dot $3.33', 'LTC $96.05', 'BTC  $23,476.09', 'ETH  $1,647.92', 'BNB  $300.44', 'XRP  $0.3808', 'ADA  $0.3501', 'Doge  $0.08079', 'MATIC  $1.22', 'SOL $22.08', 'Dot $3.33', 'LTC $96.05', ]

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={0}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000}
      loop={true}
      freeMode={true}
      slideToClickedSlide={true}
      preventClicksPropagation={false}
      preventClicks={false}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="currencies-swiper"
    >
      {
        coins.map((coin, index) => <SwiperSlide className='hero__currencies-item' key={index}>{coin}</SwiperSlide>)
      }
    </Swiper>
  )
}

export default HeroCurrencies;
