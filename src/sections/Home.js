import React, { useState, useEffect } from "react";
import "../assets/css/Style.css";
import { Link } from "react-router-dom";
import { GitHub, Mail, Linkedin, FileText } from "react-feather";
import SvgComponent1 from "../components/SvgComponent1";
import SvgComponent2 from "../components/SvgComponent2";

function Home() {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setIsNameVisible(true);
    }, 1700);

    const subtitleTimer = setTimeout(() => {
      setIsSubtitleVisible(true);
    }, 3500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="row home">
      <div className="col-sm-12 col-md-5 home-1">
        <div className="home-image">
            <img src='../assets/images/profile.jpeg'></img>
        </div>
      </div>
      <div className="col-sm-12 col-md-7 home-2">
        <div className="home-intro-div">
          <h6>Hi my name is</h6>
        </div>
        <div className="home-name-div">
          <h1 id="home-name" className={isNameVisible ? "visible" : ""}>
            Daryl Blough
          </h1>
        </div>
        <div className="home-subtitle-div">
          <h3 id="home-subtitle" className={isSubtitleVisible ? "visible" : ""}>
            I build stuff for the web.
          </h3>
        </div>
        <div className="home-icons" id="home">
          <ul className="home-icons-ul">
          <li>
            <Link to="/" className="home-resume">
              <FileText />
              <span className="home-icon-resume">Resume</span>
            </Link>
            </li>
            <li>
            <Link to="/" className="home-icon-hide">
              <GitHub />
              <span className="">Github</span>
            </Link>
            </li>
            <li>
            <Link to="/" className="home-icon-hide">
              <Linkedin />
              <span className="">Linkedin</span>
            </Link>
            </li>
            <li>
            <Link to="/" className="home-icon-hide">
              <Mail />
              <span className="">Email</span>
            </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="email">
        <Link
          to="/"
          onClick={() => (window.location = "mailto:yourmail@domain.com")}
        >
          darylxcuf@gmail.com
        </Link>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Home;
