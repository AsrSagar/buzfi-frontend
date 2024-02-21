import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaStar, 
} from "react-icons/fa";
import bigbanner01 from '../../assets/img/bigbanner01.png';
import arrow from '../../assets/img/arrow.svg';
import cat01 from '../../assets/img/cat01.png';
import cat02 from '../../assets/img/cat02.png';
import cat03 from '../../assets/img/cat03.png';
import cat04 from '../../assets/img/cat04.png';
import cat05 from '../../assets/img/cat05.png';
import cat06 from '../../assets/img/cat06.png';
import cat07 from '../../assets/img/cat07.png';
import cat08 from '../../assets/img/cat08.png';
import bigbanner02 from '../../assets/img/bigbanner02.png';


import './featuredBanner.scss';


const FeaturedBanner = () => {
    return(
        <>
            <div id="featured-banner">
                <div className="Fe-banner-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="single-fe-baner">
                                    <Link href="#">
                                        <img src={bigbanner01}alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="multy-single-cat">
                                    <div className="single-cat-head">
                                        <div className="navbar-tool">
                                            <div className="navbar-ttol-icon">
                                                <FaStar />
                                            </div>
                                            <div className="navbar-tool-text">
                                                <small>Top Category</small>
                                                <p>Electronics </p>
                                            </div>
                                        </div>
                                        <div className="see-all">
                                            <p>
                                                <small>
                                                    <img src={arrow} alt="" />
                                                </small>
                                                <Link href="#">See All</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="multy-cat-body">
                                        <div className="single-banner">
                                            <Link href="#">
                                            <img src={cat01} alt="" />
                                            <small>Music</small>
                                            </Link>
                                        </div>
                                        <div className="single-banner">
                                            <Link href="#">
                                                <img src={cat02} alt="" />
                                                <small>Laptop Accessories</small>
                                            </Link>
                                        </div>
                                        <div className="single-banner">
                                            <Link href="#">
                                                <img src={cat03} alt="" />
                                                <small>Phone Accessories</small>
                                            </Link>
                                        </div>
                                        <div className="single-banner">
                                            <Link href="#">
                                                <img src={cat04} alt="" />
                                                <small>Smart Watch</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="multy-single-cat">
                                    <div className="single-cat-head">
                                        <div className="navbar-tool">
                                            <div className="navbar-ttol-icon">
                                                <FaStar />
                                            </div>
                                            <div className="navbar-tool-text">
                                                <small>Top Category</small>
                                                <p>Home &amp; Kitchen</p>
                                            </div>
                                        </div>
                                        <div className="see-all">
                                            <p>
                                            <small>
                                                <img src={arrow} alt="" />
                                            </small>
                                            <Link href="#">See All</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="multy-cat-body">
                                        <div className="single-banner">
                                            <Link href="#">
                                                <img src={cat05} alt="" />
                                                <small>Dining</small>
                                            </Link>
                                        </div>
                                        <div className="single-banner">
                                            <Link href="#">
                                                <img src={cat06} alt="" />
                                                <small>Kitchen Accessories</small>
                                            </Link>
                                        </div>
                                    <div className="single-banner">
                                        <Link href="#">
                                            <img src={cat07} alt="" />
                                            <small>Networking </small>
                                        </Link>
                                    </div>
                                    <div className="single-banner">
                                        <Link href="#">
                                            <img src={cat08} alt="" />
                                            <small>Home Security</small>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="single-fe-baner">
                                    <Link href="#">
                                        <img src={bigbanner02} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default FeaturedBanner;
  