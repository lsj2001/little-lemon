import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Reservation from "./pages/Reservation/Reservation.jsx";
import Layout from "./components/Layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
