import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Style.css';

function Footer() {
    return (
        <div className="row footer" id="footer">
        <div className="col-12 col-md-6">
            <ul className="footer-icons list-group list-group-horizontal">
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href=""> */}
                  <i data-feather="github"></i> 
                {/* </a> */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href=""> */}
                  <i data-feather="linkedin"></i> 
                {/* </a> */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href=""> */}
                  <i data-feather="mail"></i> 
                {/* </a> */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href=""> */}
                  <i data-feather="file-text"></i> 
                {/* </a> */}
                </Link>
            </ul>
        </div>
        <div className="col-12 col-md-6 order-first order-md-last">
            <p>
                Designed by yours truly in Figma and 
                built in Visual Studio Code. Built using 
                Bootstrap framework, hosted on Heroku. 
                calibri typface
            </p>
        </div>
    </div>
    )
};

export default Footer;