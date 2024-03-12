import React from 'react';
import './dashboard.scss';
import SidebarNavMenu from '../SidebarMenu/SidebarNavMenu';
import HeaderArea from '../headerArea/headerArea';
import chartImg from '../../assets/img/chart.png'


const Dashboard = () => {

    return(
        <>
        <div class="side-bz-nav">
          <div class="container-fluid">
            <div class="row">
              <SidebarNavMenu />
              <main class="col-md-9 col-sm-8 col-lg-10">
                <HeaderArea />
                <div class="user-statis">
                  <h3>User Statistics</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Number Of Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Logged In Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Maximum logged Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Passwor Change 90 days</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Suspicious Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Suspended Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>New Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Un Complete Users</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sales-statis mt-3">
                  <h3>Sales Statistics</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 hex-shape">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Sales Revenue</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Sales Growth Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Conversion Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Average Deal Size</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Acquisition Cost</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Sales Cycle Length</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Win Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Lifetime Value</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inventory-statis mt-3">
                  <h3>Inventory Statistics</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 hex-shape">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Most Competitive Product</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Inventory Turn Over Ratio </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Stockout Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Order fill Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Lead Time Analysis</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Stock Accuracy </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Supplier Performance Metrics </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Excess &amp; Obsolete Inventory</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="affiliate-statis mt-3">
                  <h3>Affiliate Statistics</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 hex-shape">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Click Through Rate (CTR)</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Conversion Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Earning Per Click (EPC)</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Commission Payout</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Average Order Value (AOV)</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Return On Investment </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Sub-affiliate Performance</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Life Time Value</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="marketing-statis mt-3">
                  <h3>Marketing Statistics</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 hex-shape">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Return On Investment </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Acquisition Cost </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Conversion Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Life Time Value (CLV)</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Click Through Rate</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Web Traffic &amp; Engagement</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Social Media Engagement</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Marketing Qualified Lead MQLs </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="re-celler mt-3">
                  <h3>Re Seller</h3>
                  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 hex-shape">
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Product Performance</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-2">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Inventory Turn Over Ratio</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-3">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Shipping Time &amp; Cost</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-4">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Acquisition Cost </small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-5">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Return On Investment</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-6">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Customer Life Time Value</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-7">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Supplier Performance</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col mt-3">
                      <div class="bzchart">
                        <div class="chrt-content">
                          <div class="chart-icon hex3 hex-bg-8">
                            <i class="fa fa-home"></i>
                          </div>
                          <div class="chart-cont">
                            <small>Web Traffic &amp; Conversion</small>
                            <h3>45,673</h3>
                          </div>
                        </div>
                        <div class="bz-chrt">
                          <img src={chartImg} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <footer>
          <div class="footer-content">
            <p>All right Reserved by Buzfi.com Affiliate management Version 01</p>
          </div>
        </footer>
        </>
    )
};
export default Dashboard;
  