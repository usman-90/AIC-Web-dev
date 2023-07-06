import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react'
import './App.css'
import Home from './Components/Screens/Home/Home'
import Contact from "./Components/Screens/Contact/Contact";

function App() {
  return (
    <>
     <h1><Home/></h1>
     <Contact/>
    </>
  );
}

export default App;
