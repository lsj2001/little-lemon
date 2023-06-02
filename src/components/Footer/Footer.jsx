import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-column">
                <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <Link to="/reservation"><li>Reservations</li></Link>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Additional Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
