import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from "react-router-dom";
import './assets/css/Style.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      </div>
    </>
  );
}

export default App;
