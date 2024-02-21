import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homeslider.scss';

import slideraBnner1 from '../../assets/img/slider-banner.jpg';
import slideraBnner2 from '../../assets/img/slider-banner2.jpg';

const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 1500,  
    };

    const carouselItems = [
        <div className="single-homepage-slide" key={1}><img src={slideraBnner1} alt="Slide 1" /></div>,
        <div className="single-homepage-slide" key={2}><img src={slideraBnner2} alt="Slide 2" /></div>,
    ];

    return(
        <div id="hero-area">
            <div class="homepage-slides">
                <Slider {...settings}>
                    {carouselItems}
                </Slider>
            </div>
        </div>
    )
};
export default HomeSlider;
  