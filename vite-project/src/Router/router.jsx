<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 5e5e31d28752c18b8437e01da15c2bc9811a9f79
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Events from '../Components/Screens/Events/Events';
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";
<<<<<<< HEAD
=======
import Events from "../Components/Screens/Events/Events"
import NotFound from "../Components/Screens/pageNotFound/NotFound";

>>>>>>> 5e5e31d28752c18b8437e01da15c2bc9811a9f79



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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
