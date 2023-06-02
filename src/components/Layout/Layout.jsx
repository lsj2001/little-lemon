import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import React from "react";
import './Layout.css';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;