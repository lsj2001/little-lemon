import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from '../../assets/restaurant chef B.jpg';
import greekSalad from '../../assets/greek salad.jpg';
import bruchetta from '../../assets/bruchetta.svg';
import lemonessert from '../../assets/lemon dessert.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-main">
                <div className="home-left">
                    <h1 className="home-title">Little Lemon</h1>
                    <h2 className="home-desc">Chicago</h2>
                    <p className="home-desc">Discover our delicious menu and enjoy a memorable dining experience.</p>
                    <Link to="/reservation" className="home-button">Make a Reservation</Link>
                </div>
                <div className="home-right">
                    <img src={logo} alt="Restaurant" />
                </div>
            </div>
            <div className="home-specials">
                <div className="specials-header">
                    <h2 className="specials-title">Specials</h2>
                    <Link to="/menu" className="specials-button">Online Menu</Link>
                </div>
                <div className="specials-cards">
                    <div className="specials-card">
                        <img src={greekSalad} alt="Special 1" />
                        <h3 className="specials-card-title">Greek salad</h3>
                        <p className="specials-card-price">$12.99</p>
                        <p className="specials-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="specials-card-order">Order a Delivery</button>
                    </div>
                    <div className="specials-card">
                        <img src={bruchetta} alt="Special 1" />
                        <h3 className="specials-card-title">Bruchetta</h3>
                        <p className="specials-card-price">$5.99</p>
                        <p className="specials-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="specials-card-order">Order a Delivery</button>
                    </div>
                    <div className="specials-card">
                        <img src={lemonessert} alt="Special 1" />
                        <h3 className="specials-card-title">Lemon Dessert</h3>
                        <p className="specials-card-price">$5.00</p>
                        <p className="specials-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="specials-card-order">Order a Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;