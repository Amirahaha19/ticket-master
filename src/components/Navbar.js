import React from 'react'
import '../css/Navbar.css';
import { VscComment} from "react-icons/vsc";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <VscComment />
                <a className="lang">EN</a>
            </div>
        </nav>
    )
};

export default Navbar;