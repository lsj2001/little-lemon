import React from 'react';
import logo from '../../assets/Logo.svg';
import './DesktopHeader.css';
import { Link } from 'react-router-dom';

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <div className="desktop-logo">
                <Link to="/" >
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="desktop-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <Link to="/reservation"><li>Reservations</li></Link>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    );
};

export default DesktopHeader;
