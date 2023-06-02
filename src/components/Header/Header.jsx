import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
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
        </header>
    );
};

export default Header;