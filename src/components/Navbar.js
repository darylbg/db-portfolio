import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Style.css';

function Navbar() {

  const homeEl = document.getElementById('home');
  const aboutEl = document.getElementById('about');
  const experienceEl = document.getElementById('experience');
  const projectsEl = document.getElementById('projects');

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    if(targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
      });
    }

  }
    return (
        <div className="nav-container container">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="nav-container-div container-fluid">
            <Link to="/" className="navbar-brand">Daryl</Link>
            {/* <a className="navbar-brand" href="#navbar">Daryl</a> */}
            <div className="nav-flex-fill flex-fill"></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""><i data-feather="menu" className="menu-toggle-icon"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="nav-flex-fill flex-fill"></div>
              <ul className="navbar-ul navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginBottom: 0 }}>
                <li className="nav-item-1 nav-item">
                  <Link to="/" className="nav-link" onClick={handleScroll}><span>01.</span> Home</Link>
                  {/* <a className="nav-link" href="#home"><span>01.</span> Home</a> */}
                </li>
                <li className="nav-item-2 nav-item">
                  <Link to="/about" className="nav-link" onClick={handleScroll}><span>02.</span> About</Link>
                  {/* <a className="nav-link" href="#about"><span>02.</span> About</a> */}
                </li>
                <li className="nav-item-3 nav-item">
                  <Link to="/experience" className="nav-link" onClick={handleScroll}><span>03.</span> Experience</Link>
                  {/* <a className="nav-link" href="#experience"><span>03.</span> Experience</a> */}
                </li>
                <li className="nav-item-4 nav-item">
                  <Link to="/projects" className="nav-link" onClick={handleScroll}><span>04.</span> Projects</Link>
                  {/* <a className="nav-link" href="#projects"><span>04.</span> Projects</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
};

export default Navbar;