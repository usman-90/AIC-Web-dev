import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Events from '../Components/Screens/Events/Events';
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";



const Router = () => {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
  );
};

export default Router;
