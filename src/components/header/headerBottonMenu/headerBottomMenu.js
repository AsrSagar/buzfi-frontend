import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBars, 
  FaGraduationCap,
  FaBolt,
  FaCoffee,
  FaLeaf,
  FaGift,
  FaFreeCodeCamp,
  FaDatabase
} from "react-icons/fa";

import './headerBottomMenu.scss';

const HeaderBottomMenu = () => {
    return(
        <>
            <div className="bottom-menu">
              <div className="left-menu">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaBars /> Department (See All) 
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                <Link className="dropdown-item" href="#">Action</Link>
                                </li>
                                <li>
                                <Link className="dropdown-item" href="#">Another action</Link>
                                </li>
                                <li>
                                <Link className="dropdown-item" href="#">Something else here</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                <FaGraduationCap /> BUZFI Academy 
                            </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="right-menu">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/categories">
                            <FaBolt /> Deals 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#">
                            <FaCoffee /> Grocery &amp; Essentials 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#">
                            <FaLeaf /> Valentine's Day 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#">
                            <FaGift /> Gifts 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#">
                            <FaFreeCodeCamp /> Home &amp; Kitchen 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#">
                            <FaDatabase /> Daily Needs 
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        </>
    )
}
export default HeaderBottomMenu;