import React from 'react';
import { VscSearch } from "react-icons/vsc";

import '../css/Search.css';

const Search = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search by Event"/>
            {/* <VscSearch color="blue"/> */}
        </div>
    )
};

export default Search;