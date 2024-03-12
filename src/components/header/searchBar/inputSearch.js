import React from 'react';
import './inputSearch.scss';
import { FaSearch, FaMicrophone  } from "react-icons/fa";

const InputSearch = () => {
    return(
        <>
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
        </>
    )
}
export default InputSearch;