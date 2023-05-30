import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import sliderImage from "../../assets/images/slider.png";

import "./style.css";

export const JustSlider = () => {
  return (
    <div>
      <Carousel
        className='sliderWrapper container'
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}>
        <div className='heroImg'>
          <img src={sliderImage} alt='heroSlider' />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
      </Carousel>
    </div>
  );
};
