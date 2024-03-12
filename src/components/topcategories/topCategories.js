import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './topCategories.scss';

import lightbulb from '../../assets/img/lightbulb-solid1.png';
import tvsolid from '../../assets/img/tv-solid1.png';
import buildingsolid from '../../assets/img/building-solid1.png';
import bowlfoodsolid from '../../assets/img/bowl-food-solid1.png';
import couchsolid from '../../assets/img/couch-solid1.png';
import babycarriagesolid from '../../assets/img/baby-carriage-solid1.png';
import volleyballsolid from '../../assets/img/volleyball-solid1.png';
import wandmagicsparklessolid1 from '../../assets/img/wand-magic-sparkles-solid1.png';
import homegarden from '../../assets/img/homegarden.png';
import brushsolid from '../../assets/img/brush-solid1.png';
import homeapplinence from '../../assets/img/homeapplinence.png';
import bag from '../../assets/img/bag.png';
import HeaderArea from '../../backend/headerArea/headerArea';
import FooterArea from '../footer/footerArea';

const TopCategories = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    };
    

    const logos = [
        { title: 'Light and Lightining', url: lightbulb, alt: 'Logo 1' },
        { title: 'Electrical Equipment', url: tvsolid, alt: 'Logo 2' },
        { title: 'School $  Office Supply', url: buildingsolid, alt: 'Logo 3' },
        { title: 'Food & Beverage', url: bowlfoodsolid, alt: 'Logo 3' },
        { title: 'Personal Care & Household', url: couchsolid, alt: 'Logo 3' },
        { title: 'Mother, Kids & Toy', url: babycarriagesolid, alt: 'Logo 3' },
    ];

    const logos2 = [
        { title: 'Sports & Entertainment', url: volleyballsolid, alt: 'Logo 1' },
        { title: 'Woman & Beauty Care', url: wandmagicsparklessolid1, alt: 'Logo 2' },
        { title: 'School $  Office Supply', url: homegarden, alt: 'Logo 3' },
        { title: 'Food & Beverage', url: brushsolid, alt: 'Logo 3' },
        { title: 'Personal Care & Household', url: homeapplinence, alt: 'Logo 3' },
        { title: 'Mother, Kids & Toy', url: bag, alt: 'Logo 3' },
    ];

    return(
        <>
        <div id="top-icon-category">
            <div class="container-fluid">
                <div class="all-top-icon-category">
                    <div class="singleico-category">
                        <div className='row'>
                            <Slider {...settings}>
                                {logos.map((logo, index) => (
                                 <div className='col-md-2' key={index}>
                                    <Link href="#">
                                        <div class="ico-single-cat">
                                            <img src={logo.url} alt={logo.alt} />
                                            <p>{logo.title}</p>
                                        </div>
                                    </Link>
                                </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='row'>
                            <Slider {...settings2}>
                                {logos2.map((logo, index) => (
                                 <div className='col-md-2' key={index}>
                                    <Link href="#">
                                        <div class="ico-single-cat">
                                            <img src={logo.url} alt={logo.alt} />
                                            <p>{logo.title}</p>
                                        </div>
                                    </Link>
                                </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default TopCategories;
  