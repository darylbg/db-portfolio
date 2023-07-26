import React from "react";
import { Link } from "react-router-dom";
import { GitHub, Mail, Linkedin, FileText } from "react-feather";
import "../assets/css/Style.css";

function Footer() {
  return (
    <div className="row footer">
      <div className="col-12 col-md-6 footer-icons">
        <ul className="list-group list-group-horizontal">
          <Link to="/" className="list-group-item">
            {/* <a className="list-group-item" href=""> */}
            <GitHub />
            {/* </a> */}
          </Link>
          <Link to="/" className="list-group-item">
            {/* <a className="list-group-item" href=""> */}
            <Linkedin />
            {/* </a> */}
          </Link>
          <Link to="/" className="list-group-item">
            {/* <a className="list-group-item" href=""> */}
            <Mail />
            {/* </a> */}
          </Link>
          <Link to="/" className="list-group-item">
            {/* <a className="list-group-item" href=""> */}
            <FileText />
            {/* </a> */}
          </Link>
        </ul>
      </div>
      <div className="col-12 col-md-6 order-first order-md-last footer-text">
        <p>
          Designed by yours truly in <Link to='https://www.figma.com/'>Figma</Link>, built in  
           <Link> Visual Studio Code</Link> using <Link>React</Link> with a <Link>Bootstrap </Link> 
          framework, hosted on <Link>Github Pages</Link>.  
        </p>
      </div>
    </div>
  );
}

export default Footer;
