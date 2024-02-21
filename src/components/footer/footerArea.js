import React from 'react';
import { Link } from 'react-router-dom';
import './footerArea.scss';
import { 
    FaFacebookF, 
    FaLinkedinIn, 
    FaInstagram, 
    FaPinterestP, 
    FaYoutube, 
    FaWhatsapp, 
    FaSkype, 
    FaSnapchatGhost, 
    FaTelegram, 
    FaTumblr, 
    FaVimeoV, 
    FaWeixin, 
    FaRedditAlien, 
    FaQuora, 
} from "react-icons/fa";

import PaymentCard from '../../assets/img/card.png'
import play from '../../assets/img/play.png'
import IOS from '../../assets/img/IOS.png'


const FooterArea = () => {
    return (
        <>
        <footer>
            <div class="footer-upper-side">
                <div class="container-fluid">
                    <div class="footer-top">
                        <div class="row">
                        <div class="col">
                            <div class="footer-menu">
                            <h3>Customer Care</h3>
                            <ul>
                                <li>
                                    <Link href="#">Help Center</Link>
                                </li>
                                <li>
                                    <Link href="#">FAQ</Link>
                                </li>
                                <li>
                                    <Link href="#">How BUZFI Works</Link>
                                </li>
                                <li>
                                    <Link href="#">Buzfi Forum</Link>
                                </li>
                                <li>
                                    <Link href="#">Buzfi Blogs</Link>
                                </li>
                                <li>
                                    <Link href="#">Buzfi Vlogs</Link>
                                </li>
                                <li>
                                    <Link href="#">Instant Chat</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="footer-menu">
                            <h3>About Buzfi</h3>
                            <ul>
                                <li>
                                    <Link href="#">Who we are</Link>
                                </li>
                                <li>
                                    <Link href="#">Management Team</Link>
                                </li>
                                <li>
                                    <Link href="#">Operation</Link>
                                </li>
                                <li>
                                    <Link href="#">Affiliate Management</Link>
                                </li>
                                <li>
                                    <Link href="#">Reseller Management</Link>
                                </li>
                                <li>
                                    <Link href="#">How We Connect</Link>
                                </li>
                                <li>
                                    <Link href="#">How We Manage</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="footer-menu">
                            <h3>Earn With Buzfi</h3>
                            <ul>
                                <li>
                                    <Link href="#">Become An Affiliate</Link>
                                </li>
                                <li>
                                    <Link href="#">Become A Seller</Link>
                                </li>
                                <li>
                                    <Link href="#">User Our CRM</Link>
                                </li>
                                <li>
                                    <Link href="#">Be A Manufacturer</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="footer-menu">
                            <h3>Remain Connected</h3>
                            <ul>
                                <li>
                                    <Link href="#">Get Newsletters </Link>
                                </li>
                                <li>
                                    <Link href="#">Remain Updated</Link>
                                </li>
                                <li>
                                    <Link href="#">Apply For A Job</Link>
                                </li>
                                <li>
                                    <Link href="#">Let Us Know Your Idea</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="footer-menu">
                                <h3>Mobile Versions</h3>
                                <Link href="#">
                                    <img src={play} alt="" />
                                </Link>
                                <Link href="#">
                                    <img src={IOS} alt="" />
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="social-media">
                        <ul>
                            <li>
                                <Link to="https://www.facebook.com/BUZFI/" target='_blank'>
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbuzficom%2Fabout%2F" target='_blank'>
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/buzfi.com.usa/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.pinterest.com/buzficom/">
                                    <FaPinterestP />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.youtube.com/channel/UCBjUKQ8X5vxwITeexQ7vTNQ">
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link href="#"><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2031 0.875H16.9609L10.9375 7.75781L18.0234 17.125H12.4766L8.12891 11.4453L3.16016 17.125H0.398438L6.83984 9.76172L0.046875 0.875H5.73437L9.66016 6.06641L14.2031 0.875ZM13.2344 15.4766H14.7617L4.90234 2.4375H3.26172L13.2344 15.4766Z" fill="#1DA1F2"/></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaWhatsapp />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaSkype />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaSnapchatGhost />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://twitter.com/Buzfi_com" target='_blank'>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 8.19922C15.7797 8.2029 14.1017 7.66589 12.7031 6.66406V13.6484C12.7027 14.942 12.3074 16.2046 11.57 17.2673C10.8326 18.3301 9.78824 19.1424 8.57667 19.5955C7.3651 20.0487 6.04406 20.1211 4.79021 19.8031C3.53636 19.4852 2.40949 18.7919 1.56031 17.8161C0.711126 16.8404 0.180115 15.6286 0.0382948 14.3428C-0.103525 13.0571 0.150607 11.7587 0.766703 10.6213C1.3828 9.48391 2.33149 8.56174 3.48589 7.97812C4.64029 7.3945 5.94536 7.17727 7.22657 7.35547V10.8672C6.64073 10.6828 6.01161 10.6882 5.42902 10.8826C4.84644 11.077 4.34018 11.4506 3.98254 11.9499C3.6249 12.4492 3.43415 13.0487 3.43755 13.6629C3.44094 14.2771 3.6383 14.8744 4.00144 15.3698C4.36458 15.8651 4.87494 16.233 5.45964 16.421C6.04434 16.609 6.67348 16.6074 7.25724 16.4165C7.841 16.2256 8.34953 15.8552 8.71021 15.3581C9.07089 14.861 9.26528 14.2626 9.26563 13.6484V0H12.7031C12.7012 0.290728 12.726 0.581017 12.7773 0.867188C12.8969 1.50508 13.1453 2.11189 13.5073 2.65054C13.8693 3.1892 14.3373 3.64837 14.8828 4C15.6593 4.51283 16.5695 4.78588 17.5 4.78516V8.19922Z" fill="#FF0050"/></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaTelegram />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://buzfi.tumblr.com/">
                                    <FaTumblr />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaVimeoV />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaWeixin />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaRedditAlien />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaQuora />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copy-right">
                    <div class="container-fluid">
                        <ul>
                        <li>
                            <Link href="#">Safe and easy payments</Link>
                        </li>
                        <li>
                            <Link href="#">Money-back policy</Link>
                        </li>
                        <li>
                            <Link href="#">On-time shipping</Link>
                        </li>
                        <li>
                            <Link href="#">After-sales protections</Link>
                        </li>
                        <li>
                            <Link href="#">Product monitoring services </Link>
                        </li>
                        <li>
                            <Link href="#">Policies and rules</Link>
                        </li>
                        <li>
                            <Link href="#">Legal Notice</Link>
                        </li>
                        <li>
                            <Link href="#">Product Listing Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Intellectual Property Protection</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Terms of Use</Link>
                        </li>
                        <li>
                            <Link href="#">Integrity Compliance</Link>
                        </li>
                        </ul>
                        <div class="payment">
                        <Link href="#">
                            <img src={PaymentCard} alt="" />
                        </Link>
                        </div>
                        <p>© 2024 <span>Buzfi</span> All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
  };
  
  export default FooterArea;