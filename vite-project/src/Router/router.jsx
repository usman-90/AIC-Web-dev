import React from "react";
<<<<<<< HEAD

=======
>>>>>>> c8e7d83bf4ae8fbe81f88af4e3644ee6674216d0
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Events from '../Components/Screens/Events/Events';
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";
import NotFound from "../Components/Screens/pageNotFound/NotFound";




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
