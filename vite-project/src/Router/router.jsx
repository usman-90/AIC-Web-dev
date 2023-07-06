<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Events from '../Components/Screens/Events/Events';
=======
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
>>>>>>> cc862cb40c7e9d0e39b1f41a1f9122454c1bb584
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";
import Events from "../Components/Screens/Events/Events"
import { Route, Routes } from "react-router-dom";


const Router = () => {
  return (
    <Routes>
<<<<<<< HEAD

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<AdminPage/>}/>
=======
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
>>>>>>> cc862cb40c7e9d0e39b1f41a1f9122454c1bb584
    </Routes>
  );
};

export default Router;
