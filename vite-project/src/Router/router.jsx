<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
=======
>>>>>>> f73dad802bc4fee281dd7f95619f9bcc52d18ccb
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
<<<<<<< HEAD
import Events from '../Components/Screens/Events/Events';
=======
>>>>>>> f73dad802bc4fee281dd7f95619f9bcc52d18ccb
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";

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
        <Route path="/reset" element={<Reset />} />s
=======
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
>>>>>>> f73dad802bc4fee281dd7f95619f9bcc52d18ccb
    </Routes>
  );
};

export default Router;
