import React from 'react'
import Home from '../Components/Screens/Home/Home'
import Contact from "../Components/Screens/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import About from "../Components/Screens/About/About";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router