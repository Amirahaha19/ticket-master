import React from 'react';
import Search from './Search.js';
import Account from './Account.js';
import { FiMenu } from "react-icons/fi";

import '../css/Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="header-container">
                <div className="menu">
                    <FiMenu />
                    <a className="logo">ticketmaster</a>
                    <a className="list">Events</a>
                    <a className="list">Categories</a>
                    <a className="list">Venues</a>
                    <a className="list"> FAQ</a>
                </div>
                <Search />
                <Account/>
            </div>
        </nav>
    )
};

export default Header;