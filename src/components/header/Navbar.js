import React from 'react';
import { Link } from 'react-router-dom';
import MenuArea from './Menuarea';

import './Navbar.scss';
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <>
      <header>
        <div className='menu-logo'>
          <div className="logo-area">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <MenuArea />
        </div>
      </header>
    </>
  );
};

export default Navbar;
