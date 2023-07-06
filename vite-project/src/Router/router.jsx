import Home from "../Components/Screens/Home/Home";
import Contact from "../Components/Screens/Contact/Contact";
import About from "../Components/Screens/About/About";
import Login from "../Components/Screens/admin/Login";
import Reset from "../Components/Screens/admin/Reset";
import AdminPage from "../Components/Screens/admin/adminpg";
import Events from "../Components/Screens/Events/Events"
import { Route, Routes } from "react-router-dom";
import Events from "../Components/Screens/Events/Events";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

export default Router;
