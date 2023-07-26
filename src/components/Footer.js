import React from "react";
import { Link } from "react-router-dom";
import { GitHub, Mail, Linkedin, FileText } from "react-feather";
import "../assets/css/Style.css";

function Footer() {
  return (
    <div className="row footer">
      <div className="col-12 col-md-6 footer-icons">
        <ul className="list-group list-group-horizontal">
          <Link to="https://github.com/darylbg" target="_blank" className="list-group-item">
            <GitHub />
          </Link>
          <Link to="https://www.linkedin.com/in/daryl-blough-063610173/" target="_blank" className="list-group-item">
            <Linkedin />
          </Link>
          <Link to='mailto: darylxcuf@gmail.com' className="list-group-item">
            <Mail />
          </Link>
          <Link to="/" className="list-group-item">
            <FileText />
          </Link>
        </ul>
      </div>
      <div className="col-12 col-md-6 order-first order-md-last footer-text">
        <p>
          Designed by yours truly in <Link to='https://www.figma.com/' target="_blank">Figma</Link>, built in <Link to='https://code.visualstudio.com/' target="_blank">Visual Studio Code</Link> using <Link to='https://react.dev/' target="_blank">React</Link> with a <Link to='https://getbootstrap.com/' target="_blank">Bootstrap </Link> 
          framework, hosted on <Link to='https://pages.github.com/' target="_blank">Github Pages</Link>.  
        </p>
      </div>
    </div>
  );
}

export default Footer;
