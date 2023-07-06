import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from "./Components/Screens/About/About";
import './App.css'
import Home from './Components/Screens/Home/Home'

function App() {
  return (
    <>
     <h1><Home/></h1>
     <About />
    </>
  );
}

export default App;
