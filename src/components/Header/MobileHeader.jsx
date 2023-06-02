import React, { useState } from 'react';
import hamburger from "../../assets/🦆 icon _hamburger menu.svg"
import basket from "../../assets/basket .svg"
import logo from '../../assets/Logo.svg';
import './MobileHeader.css';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="mobile-header">
            <div className="left">
                <button className="menu-toggle" onClick={toggleMenu}>
                    <img src={hamburger} alt="hamburger" />
                </button>
            </div>
            <div className="center">
                <Link to="/" >
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="right">
                <img src={basket} alt="hamburger" />
            </div>
            {isMenuOpen && (
                <nav className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <Link to="/reservation"><li>Reservations</li></Link>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileHeader;
