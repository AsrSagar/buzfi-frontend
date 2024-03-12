import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import FooterArea from '../../components/footer/footerArea';
import './productDetails.scss';
import sub01 from '../../assets/img/details/sub01.png';
import sub02 from '../../assets/img/details/sub02.png';
import sub03 from '../../assets/img/details/sub03.png';
import sub04 from '../../assets/img/details/sub04.png';
import sub05 from '../../assets/img/details/sub05.png';
import main from '../../assets/img/details/main.png';
import add from '../../assets/img/details/add.png';
import banner from '../../assets/img/details/banner.png';
import banner02 from '../../assets/img/details/banner02.png';
import product03 from '../../assets/img/product03.jpg';

const ProductDetails = () => {
    
    return(
        <>
        <Navbar />
        <div class="product-details">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col-lg-5">
                            <div class="product-images">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="single-pic">
                                            <img src={sub01} alt="Left View" />
                                            <img src={sub02} alt="Left View" />
                                            <img src={sub03} alt="Left View" />
                                            <img src={sub04} alt="Left View" />
                                            <img src={sub05} alt="Left View" />
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <div class="main-pic">
                                            <img src={main} alt="Main View" />
                                        </div>
                                    </div>
                                </div>
                                <div class="add-pic">
                                <div class="row">
                                    <div class="col"><Link href="#"><img src={add} alt="Left View" /></Link></div>
                                    <div class="col"><Link href="#"><img src={add} alt="Left View" /></Link></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                        <div class="row">
                            <div class="col-7">
                                <div class="product-title">
                                    <h4>Black Sneakers</h4>
                                </div>
                                <div class="rating">
                                    <p><span><i class="fa fa-star"></i>4.6</span> 8452 Ratings &amp; 2318 reviews</p>
                                </div>
                                <div class="price">
                                    <h4>$120.00 <strike>$150.00</strike> <strong>-21% Off</strong></h4>
                                </div>
                                <div class="short-detail">
                                    From sleek racing flats to burly hiking boots, there are plenty of options to keep your feet comfortable during any activity. Read on to learn how to determine the right athletic.
                                </div>
                                <div class="color">
                                    <ul>
                                        <li>Color: </li>
                                        <li><Link href="#"><img src={sub01} alt="Left View" /></Link></li>
                                        <li><Link href="#"><img src={sub02} alt="Left View" /></Link></li>
                                        <li><Link href="#"><img src={sub03} alt="Left View" /></Link></li>
                                        <li><Link href="#"><img src={sub04} alt="Left View" /></Link></li>
                                        <li><Link href="#"><img src={sub05} alt="Left View" /></Link></li>
                                    </ul>
                                </div>
                                <div class="product-count">
                                    <ul>
                                        <li><div class="pro-qty qty-control__reduce">-</div></li>
                                        <li><input type="number" name="quantity" value="1" min="1" class="qty-control__number text-center" autocomplete="off" /></li>
                                        <li><div class="pro-qty qty-control__increase">+</div></li>
                                    </ul>
                                    <button type="submit" class="btn btn-primary btn-addtocart js-open-aside" data-aside="cartDrawer">Add to Cart</button>
                                </div>
                                <div class="wishlist">
                                    <ul>
                                        <li><Link href="#"><i class="fa fa-heart"></i> ADD TO WISHLIST</Link></li>
                                        <li><Link href="#"><i class="fa fa-share"></i> SHARE</Link></li>
                                    </ul>
                                </div>
                                <div class="produt-sku">
                                    <ul>
                                        <li><p><span>SKU: </span>GM90876</p></li>
                                        <li><p><span>Categories: </span>Casual, walk, run, brand</p></li>
                                        <li><p><span>Tags: </span>gym, health, run, style</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="detail-note">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <p>Ship to</p>
                                        </div>
                                        <div class="col-lg-8">
                                            <i class="fa fa-map-marker"></i>New York
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <p>Delivery :</p>
                                        </div>
                                        <div class="col-lg-8">
                                            <p>From sleek racing flats to burly hiking boots, there are plenty of options to keep.</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <p>Delivery to:</p>
                                            
                                        </div>
                                        <div class="col-lg-8">
                                            15205 North Kierland Blvd. Suite 100. Scottsdale. AZ. 85254
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <p>Ship:</p>
                                            
                                        </div>
                                        <div class="col-lg-8">
                                            <p>Ships from :  <Link href="#">BUZFI.COM</Link> <small>Sold by :  A-z Lux</small></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <p>Color:</p>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="color">
                                                <ul>
                                                    <li><Link href="#"><img src={sub01} alt="Left View"/></Link></li>
                                                    <li><Link href="#"><img src={sub02} alt="Left View"/></Link></li>
                                                    <li><Link href="#"><img src={sub03} alt="Left View"/></Link></li>
                                                    <li><Link href="#"><img src={sub04} alt="Left View"/></Link></li>
                                                    <li><Link href="#"><img src={sub05} alt="Left View"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="not-cart-btn">
                                        <Link href="#">Add to Cart</Link>
                                        <Link href="#">Buy Now</Link>
                                        <ul>
                                            <li><input type="checkbox"/></li>
                                            <li>Add gift options</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-desc-tab">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Specification</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
                            </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                    【Camera Lens Slide Design】--Slide Lens Cover to protect the camera from Anti-hacking voyeur, preventing our privacy disclosure. Separate Lens Cutouts and the Slide Lens Cover can protect the phone lens from damage. 
                                    【Humanized Design】--The metal ring provides added security when holding the phone, and it can also use as a kickstand for hands-free viewing. Built-in metal sheets support magnetic car holders. 
                                    【Protective Perfect】--It is made of TPU material. You only need a small swipe, and all the dust can be cleaned easily. No matter how much sweat, no fingerprints will be left. A perfect case widely used for outdoor activities and travelling drop-proof and shockproof. 
                                    【Kickstand & Wallet Designed】 Built-in kickstand gives you convenience to watch videos and movies hands-free with desired comfort and stability,the iPhone case with back pocket can hold credit cards and some cashes,without having to take an extra wallet when going outside
                                    <img src={banner} alt=""/>
                                    <img src={banner02} alt=""/>
                                    <div class="view-more-btn">
                                        <Link href="#">View More</Link>
                                    </div>
                                    <div class="specification-tbl">
                                        <h5>Specification</h5>
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                <th scope="row">Features</th>
                                                <td colspan="2">From sleek racing flats to burly hiking boots, there are plenty of options to keep your feet comfortable during any activity. Read on to learn how to determine the right athletic.</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Type</th>
                                                <td colspan="2">Half-wrapped Case</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Origin</th>
                                                <td colspan="2">Made in Chaina</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Brand</th>
                                                <td colspan="2">Aioria</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Design</th>
                                                <td colspan="2">Plain,LOGO</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="product-rating">
                                        <div class="row">
                                            <div class="col">
                                            <div class="avg-rating">
                                                <h5>Ratings &amp; Reviews</h5>
                                                    <h2>4.7</h2>
                                                    <ul>
                                                        <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                        <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                        <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                        <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                        <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                    </ul>
                                                    <p>All reviews come from verified purchasers</p>
                                            </div>
                                            </div>
                                            <div class="col">
                                                <div class="rating-bar">
                                                <ul>
                                                    <li>5 <i class="fa fa-star"></i></li>
                                                    <li>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        3,940
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>4 <i class="fa fa-star"></i></li>
                                                    <li>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        3,940
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>3 <i class="fa fa-star"></i></li>
                                                    <li>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        3,940
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>2 <i class="fa fa-star"></i></li>
                                                    <li>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        3,940
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>1 <i class="fa fa-star"></i></li>
                                                    <li>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        3,940
                                                    </li>
                                                </ul> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="user-revicew-content">
                                            <h5>Reviews</h5>
                                            <div class="single-review">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row">
                                                            <div class="rev-user-img">
                                                                <img src="assets/img/details/user01.png" alt="" />
                                                            </div>
                                                        </th>
                                                        <td colspan="2">
                                                            <div class="name-stars">
                                                                <h5>Hugh Saturation <span>Feb 9, 2024 at 10:23</span></h5>
                                                                <ul>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                </ul>
                                                                <div class="rev-txt">
                                                                <p>Duis commodo, dui bibendum dignissim commodo, eros ante congue ante, sit amet eleifend nulla dolor vel velit. In mattis erat vel ipsum dictum, eulputate sapien euismod donec a purus ipsumDonec non nisl leo. Nunc vel lectus tellus.</p>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="single-review">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">
                                                        <div class="rev-user-img">
                                                            <img src="assets/img/details/user02.png" alt="" />
                                                        </div>
                                                    </th>
                                                    <td colspan="2">
                                                        <div class="name-stars">
                                                            <h5>Hugh Saturation <span>Feb 9, 2024 at 10:23</span></h5>
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <div class="rev-txt">
                                                            <p>Duis commodo, dui bibendum dignissim commodo, eros ante congue ante, sit amet eleifend nulla dolor vel velit. In mattis erat vel ipsum dictum, eulputate sapien euismod donec a purus ipsumDonec non nisl leo. Nunc vel lectus tellus.</p>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="view-more-btn">
                                            <Link href="#">View More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="related-product">
            <div class="container-fluid">
                <div class="related-prodct">
                    <h5>Related Products</h5>
                    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                        <div class="col">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#"><i class="fa fa-arrows-h" aria-hidden="true"></i></Link>
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
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#"><i class="fa fa-arrows-h" aria-hidden="true"></i></Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product03} alt=""/>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small><del>$875.00</del></small></p>
                                    <div class="review">
                                        <ul>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#"><i class="fa fa-arrows-h" aria-hidden="true"></i></Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product03} alt=""/>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small><del>$875.00</del></small></p>
                                    <div class="review">
                                        <ul>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#"><i class="fa fa-arrows-h" aria-hidden="true"></i></Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product03} alt=""/>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small><del>$875.00</del></small></p>
                                    <div class="review">
                                        <ul>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-product">
                                <div class="pro-img-icon">
                                    <div class="product0deal-icon">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                    </div>
                                    <div class="wish-compare-icon">
                                        <Link href="#">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="#"><i class="fa fa-arrows-h" aria-hidden="true"></i></Link>
                                    </div>
                                    <div class="product-img">
                                        <img src={product03} alt=""/>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <Link href="#">Apple Watch Nike SE (1st Gen) .....</Link>
                                    <p>$ 775.00 <small><del>$875.00</del></small></p>
                                    <div class="review">
                                        <ul>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                        <p>(453)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view-more-btn">
                        <Link href="#">View More</Link>
                    </div>
                </div>
            </div>
        </section>
        <FooterArea />
        </>
    );

}
export default ProductDetails;