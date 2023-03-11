import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const DappFooter = () => {
  return (
    <footer className="dapp-footer">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={12}
        freeMode={true}
        className="dapp-footer__info"
      >
        <SwiperSlide>
          <span>414,750</span> ETH staking across
        </SwiperSlide>
        <SwiperSlide>
        <span>2,146</span> node operations in
        </SwiperSlide>
        <SwiperSlide>
        <span>114</span> regions with node
        </SwiperSlide>
        <SwiperSlide>
        commission rate at <span>15.00%</span>
        </SwiperSlide>
      </Swiper>

      {
        /*
           <ul className="dapp-footer__info">
            <li>
              <span>414,750</span> ETH staking across
            </li>
            <li>
              <span>2,146</span> node operations in
            </li>
            <li>
              <span>114</span> regions with node
            </li>
            <li>
              commission rate at <span>15.00%</span>
            </li>
          </ul>
        */
      }
    </footer>
  )
}

export default DappFooter;
