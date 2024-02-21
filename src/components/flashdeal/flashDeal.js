import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaBolt, 
} from "react-icons/fa";
import friday from '../../assets/img/friday.png';
import product01 from '../../assets/img/product01.jpg';
import product02 from '../../assets/img/product02.jpg';
import product03 from '../../assets/img/product03.jpg';
import product04 from '../../assets/img/product04.jpg';
import './flashdeal.scss';

const FlashDeal = () => {
    return(
        <>
        <section id="flash-deal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div class="flash-banner">
                        <div class="flash-icon">
                            <FaBolt />
                        </div>
                        <ul>
                            <li>
                            <p>75</p>
                            <small>Day</small>
                            </li>
                            <li>
                            <p>23</p>
                            <small>Hour</small>
                            </li>
                            <li>
                            <p>56</p>
                            <small>Min</small>
                            </li>
                            <li>
                            <p>35</p>
                            <small>Sec</small>
                            </li>
                        </ul>
                        <div class="flash-img">
                            <img src={friday} alt="" />
                        </div>
                        <div class="flash-btn">
                            <Link href="#">Buy Now</Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-12 col-lg-9">
                        <div class="flash-products">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                <div class="product0deal-icon">
                                    <FaBolt />
                                </div>
                                <div class="wish-compare-icon">
                                    <Link href="#">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    </Link>
                                    <Link href="#">
                                    <i class="fa fa-arrows-h" aria-hidden="true"></i>
                                    </Link>
                                </div>
                                <div class="product-img">
                                    <img src={product01} alt="" />
                                </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                <p>$ 775.00 <small>
                                    <del>$875.00</del>
                                    </small>
                                </p>
                                <div class="review">
                                    <ul>
                                    <li>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </li>
                                    </ul>
                                    <p>(453)</p>
                                </div>
                                </div>
                            </div>
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <FaBolt />
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#">
                                        <i class="fa fa-arrows-h" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product02} alt="" />
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small>
                                        <del>$875.00</del>
                                        </small>
                                    </p>
                                    <div class="review">
                                        <ul>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <FaBolt />
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#">
                                        <i class="fa fa-arrows-h" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product03} alt="" />
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small><del>$875.00</del></small></p>
                                    <div class="review">
                                        <ul>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <FaBolt />
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#">
                                        <i class="fa fa-arrows-h" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                <div class="product-img">
                                    <img src={product04} alt="" />
                                </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small>
                                        <del>$875.00</del>
                                        </small>
                                    </p>
                                    <div class="review">
                                        <ul>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default FlashDeal;
  