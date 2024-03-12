import React from 'react';
import { Link } from 'react-router-dom';
import './productCategories.scss';
import Navbar from '../../components/header/Navbar';
import FooterArea from '../../components/footer/footerArea';

import arrowIcon from '../../assets/img/arrow.svg';
import cate01 from '../../assets/img/categories/cate01.png';
import cate02 from '../../assets/img/categories/cat02.png';
import cate03 from '../../assets/img/categories/cat03.png';
import cate04 from '../../assets/img/categories/cat04.png';
import cate05 from '../../assets/img/categories/cat05.png';
import cate06 from '../../assets/img/categories/cat06.png';
import rg01 from '../../assets/img/categories/rg01.png';
import rg02 from '../../assets/img/categories/rg02.png';
import rg03 from '../../assets/img/categories/rg03.png';
import rg04 from '../../assets/img/categories/rg04.png';
import rg05 from '../../assets/img/categories/rg05.png';
import rg06 from '../../assets/img/categories/rg06.png';
const ProductCategories = () => {
    return(
        <>
          <Navbar />
          <section class="top-category">
            <div class="container-fluid">
              <div class="featured-section">
                <div class="category-title">
                  <div class="single-cat-head">
                    <div class="navbar-tool">
                      <div class="navbar-ttol-icon">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <div class="navbar-tool-text">
                        <small>Top Category</small>
                        <p>Electronics </p>
                      </div>
                    </div>
                    <div class="see-all">
                      <p>
                        <small><img src={arrowIcon} alt="" /></small>
                        <Link href="#">See All</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="category-content">
                  <div class="row">
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate01} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate02} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate03} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate04} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate05} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <Link href="#">
                                <img src={cate06} alt="" />
                                <div class="content">
                                    <p>Gadgets Item</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="regular-category">
            <div class="container-fluid">
              <div class="regular-cat-content">
                <div class="category-title">
                  <div class="single-cat-head">
                    <div class="navbar-tool">
                      <div class="navbar-ttol-icon">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <div class="navbar-tool-text">
                        <small>Top Category</small>
                        <p>Electronics </p>
                      </div>
                    </div>
                    <div class="see-all">
                      <p>
                        <small><img src={arrowIcon} alt="" /></small>
                        <Link href="#">See All</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <div class="col">
                      <div class="regular-card">
                        <Link href="#">
                          <img src={rg02} alt="" />
                          <div class="cat-content">
                            <p>Laptop Accessories </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col">
                      <div class="regular-card">
                        <Link href="#">
                          <img src={rg03} alt="" />
                          <div class="cat-content">
                            <p>iPhone and Phone </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <div class="col">
                      <div class="regular-card">
                        <Link href="#">
                          <img src={rg04} alt="" />
                          <div class="cat-content">
                            <p>Regular Gadget Items</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col">
                        <div class="regular-card">
                            <Link href="#">
                                <img src={rg05} alt="" />
                                <div class="cat-content">
                                    <p>Kitchen Items</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="regular-card">
                            <Link href="#">
                                <img src={rg06} alt="" />
                                <div class="cat-content">
                                    <p>Brand Laptops</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="regular-card">
                            <Link href="#">
                                <img src={rg01} alt="" />
                                <div class="cat-content">
                                    <p>Spund </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section class="regular-category">
              <div class="container-fluid">
                  <div class="regular-cat-content">
                      <div class="category-title">
                          <div class="single-cat-head">
                                <div class="navbar-tool">
                                  <div class="navbar-ttol-icon">
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                  </div>
                                  <div class="navbar-tool-text">
                                      <small>Top Category</small>
                                      <p>Electronics </p>
                                  </div>
                              </div>
                              <div class="see-all">
                                <p>
                                  <small><img src={arrowIcon} alt="" /></small>
                                  <Link href="#">See All</Link>
                                </p>
                              </div>
                            </div>
                      </div>
                      <div class="row">
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                      <img src={rg02} alt="" />
                                      <div class="cat-content">
                                          <p>Laptop Accessories </p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          <div class="col">
                            <div class="regular-card">
                              <Link href="#">
                                <img src={rg03} alt="" />
                                <div class="cat-content">
                                  <p>iPhone and Phone </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div class="col">
                            <div class="regular-card">
                              <Link href="#">
                                <img src={rg04} alt="" />
                                <div class="cat-content">
                                  <p>Regular Gadget Items</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div class="col">
                            <div class="regular-card">
                              <Link href="#">
                                <img src={rg05} alt="" />
                                <div class="cat-content">
                                  <p>Kitchen Items</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                      <img src={rg06} alt="" />
                                      <div class="cat-content">
                                          <p>Brand Laptops</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          <div class="col">
                            <div class="regular-card">
                              <Link href="#">
                                  <img src={rg01}alt="" />
                                  <div class="cat-content">
                                      <p>Spund </p>
                                  </div>
                              </Link>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section class="regular-category">
              <div class="container-fluid">
                  <div class="regular-cat-content">
                      <div class="category-title">
                        <div class="single-cat-head">
                          <div class="navbar-tool">
                            <div class="navbar-ttol-icon">
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="navbar-tool-text">
                              <small>Top Category</small>
                              <p>Electronics </p>
                            </div>
                          </div>
                          <div class="see-all">
                            <p>
                              <small><img src={arrowIcon} alt="" /></small>
                              <Link href="#">See All</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                            <div class="regular-card">
                                <Link href="#">
                                    <img src={rg02} alt="" />
                                    <div class="cat-content">
                                        <p>Laptop Accessories </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="col">
                          <div class="regular-card">
                            <Link href="#">
                              <img src={rg03} alt="" />
                              <div class="cat-content">
                                <p>iPhone and Phone </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="col">
                          <div class="regular-card">
                            <Link href="#">
                              <img src={rg04} alt="" />
                              <div class="cat-content">
                                <p>Regular Gadget Items</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="col">
                          <div class="regular-card">
                            <Link href="#">
                              <img src={rg05} alt="" />
                              <div class="cat-content">
                                <p>Kitchen Items</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="col">
                          <div class="regular-card">
                            <Link href="#">
                              <img src={rg06} alt="" />
                              <div class="cat-content">
                                <p>Brand Laptops</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="col">
                          <div class="regular-card">
                            <Link href="#">
                              <img src={rg01} alt="" />
                              <div class="cat-content">
                                <p>Spund </p>
                              </div>
                            </Link> 
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
          <section class="regular-category">
              <div class="container-fluid">
                  <div class="regular-cat-content">
                      <div class="category-title">
                          <div class="single-cat-head">
                                <div class="navbar-tool">
                                  <div class="navbar-ttol-icon">
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                  </div>
                                  <div class="navbar-tool-text">
                                      <small>Top Category</small>
                                      <p>Electronics </p>
                                  </div>
                              </div>
                              <div class="see-all">
                                      <p>
                                        <small><img src="assets/img/arrow.svg" alt="" /></small>
                                        <Link href="#">See All</Link>
                                      </p>
                                  </div>
                            </div>
                      </div>
                      <div class="row">
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                      <img src={rg02} alt="" />
                                      <div class="cat-content">
                                          <p>Laptop Accessories </p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                      <img src={rg03} alt="" />
                                      <div class="cat-content">
                                          <p>iPhone and Phone </p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                      <img src={rg04} alt="" />
                                      <div class="cat-content">
                                          <p>Regular Gadget Items</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          
                          <div class="col">
                              <div class="regular-card">
                                  <Link href="#">
                                    <img src={rg05} alt="" />
                                    <div class="cat-content">
                                        <p>Kitchen Items</p>
                                    </div>
                                  </Link>
                              </div>
                          </div>
                          
                          <div class="col">
                              <div class="regular-card">
                                <Link href="#">
                                  <img src={rg06} alt="" />
                                  <div class="cat-content">
                                    <p>Brand Laptops</p>
                                  </div>
                                </Link>
                              </div>
                          </div>
                          
                          <div class="col">
                            <div class="regular-card">
                              <Link href="#">
                                <img src={rg01} alt="" />
                                <div class="cat-content">
                                  <p>Spund </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
          </section>
          <FooterArea />
        </>
    )
};
export default ProductCategories;
  