import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import './Home';
import Home from './Home';

function App() {

  return (
    <>
      <div className="nav-container container">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="nav-container-div container-fluid">
            <a className="navbar-brand" href="#navbar">Daryl</a>
            <div className="nav-flex-fill flex-fill"></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""><i data-feather="menu" className="menu-toggle-icon"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="nav-flex-fill flex-fill"></div>
              <ul className="navbar-ul navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginBottom: '0 !important' }}>
                <li className="nav-item-1 nav-item">
                  <a className="nav-link" href="#home"><span>01.</span> Home</a>
                </li>
                <li className="nav-item-2 nav-item">
                  <a className="nav-link" href="#about"><span>02.</span> About</a>
                </li>
                <li className="nav-item-3 nav-item">
                  <a className="nav-link" href="#experience"><span>03.</span> Experience</a>
                </li>
                <li className="nav-item-4 nav-item">
                  <a className="nav-link" href="#projects"><span>04.</span> Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
      < Home />
      </div>
    </>
  );
}

export default App;
