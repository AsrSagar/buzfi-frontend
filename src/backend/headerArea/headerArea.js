import React from 'react';
import { 
  FaSearch, 
  FaMicrophone, 
  FaUser,
  FaComments,
  FaBell,
  FaLanguage
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const HeaderArea = () => {
    return(
        <>
            <div class="to-menu">
                <div class="row">
                    <div class="col-2">
                        <div class="bredcram">
                        <p>Dashboard</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="main-search">
                        <form action="action">
                            <input type="text" placeholder="Search in Buzfi ..." />
                            <button>
                            <FaSearch />
                            </button>
                        </form>
                        <button class="voice">
                            <FaMicrophone />
                        </button>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="roal">
                        <div class="rol-pic">
                            <sup>12</sup>
                            <FaUser />
                        </div>
                        </div>
                        <div class="roal">
                        <div class="rol-pic">
                            <sup>12</sup>
                            <FaGear />
                        </div>
                        </div>
                        <div class="roal">
                        <div class="rol-pic">
                            <sup>12</sup>
                            <FaComments />
                        </div>
                        </div>
                        <div class="roal">
                        <div class="rol-pic">
                            <sup>12</sup>
                            <FaBell />
                        </div>
                        </div>
                        <div class="roal">
                        <div class="rol-pic">
                            <sup>12</sup>
                            <FaLanguage />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderArea;