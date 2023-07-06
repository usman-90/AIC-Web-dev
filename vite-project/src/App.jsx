import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Home from './Components/Screens/Home/Home'
import Contact from "./Components/Screens/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Screens/About/About";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
