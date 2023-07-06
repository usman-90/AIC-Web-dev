<<<<<<< HEAD
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
>>>>>>> 3d16c7ade118255004b3cbec9f74bdf97b3ba1d8
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";
import Events from "../Components/Screens/Events/Events"


const Router = () => {
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
};

export default Router;
