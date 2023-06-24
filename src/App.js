import React from 'react';
// import { Link } from "react-router-dom";
import './assets/css/Style.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
      {/* < Home /> */}
      {/* < About /> */}
      {/* < Experience /> */}
      {/* < Projects /> */}
      <Footer />
      </div>
    </>
  );
}

export default App;
