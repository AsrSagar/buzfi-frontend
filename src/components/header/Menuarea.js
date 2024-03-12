import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaHandPointRight   } from "react-icons/fa";

import InputSearch from './searchBar/inputSearch';
import RightSideNav from './rightSideNav/rightSideNav';
import HeaderBottomMenu from './headerBottonMenu/headerBottomMenu';

const MenuArea = () => {
   return(
        <>
        <div className="menu-area">
            <div className="top-menu">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <p>
                    <small>Become a</small>
                    <Link to="/buzfi/admin">
                        <FaHandPointRight  /> Seller 
                    </Link>
                    <Link href="#">
                        <FaHandshake /> Affiliate 
                    </Link>
                  </p>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <InputSearch />
                </div>
                <div className="col-4">
                    <RightSideNav />
                </div>
              </div>
            </div>
            <HeaderBottomMenu />
          </div>
        </>
   )
}
export default MenuArea;