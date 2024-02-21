import React from 'react';
import { Link } from 'react-router-dom';
import './productCategories.scss';

// import diningitem from '../../assets/img/categories/diningitem.PNG';

const ProductCategories = () => {
    return(
        <>
          <div className="product-category">
            <div className='category1'>
              <div class="container">
                <h4 class="container__title">Top Category</h4>
                <div class="main_header row">
                  <h2 class="main_header__title">Electronic Accessories </h2>
                </div>
                <div class="row pt-4">
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <Link href="#">
                        <img src="https://picsum.photos/id/1015/200/300" alt="" />
                        <div class="box__title">
                          <h6>Nature</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1077/200/300" alt="" />
                        <div class="box__title">
                          <h6>Sport</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1031/200/300" alt="" />
                        <div class="box__title">
                          <h6>Architecture</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/3/200/300" alt="" />
                        <div class="box__title">
                          <h6>Technology</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='category2'>
              <div class="container">
                <h4 class="container__title">Top Category</h4>
                <div class="main_header row">
                  <h2 class="main_header__title">Home & Kitchen </h2>
                </div>
                <div class="row pt-4">
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1015/200/300" alt="" />
                        <div class="box__title">
                          <h6>Nature</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1077/200/300" alt="" />
                        <div class="box__title">
                          <h6>Sport</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1031/200/300" alt="" />
                        <div class="box__title">
                          <h6>Architecture</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/3/200/300" alt="" />
                        <div class="box__title">
                          <h6>Technology</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='category3'>
              <div class="container">
                <h4 class="container__title">Top Category</h4>
                <div class="main_header row">
                  <h2 class="main_header__title">Home & Kitchen </h2>
                </div>
                <div class="row pt-4">
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1015/200/300" alt="" />
                        <div class="box__title">
                          <h6>Nature</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1077/200/300" alt="" />
                        <div class="box__title">
                          <h6>Sport</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/1031/200/300" alt="" />
                        <div class="box__title">
                          <h6>Architecture</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="box">
                      <a href="#">
                        <img src="https://picsum.photos/id/3/200/300" alt="" />
                        <div class="box__title">
                          <h6>Technology</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
};
export default ProductCategories;
  