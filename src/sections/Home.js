import React, { useState, useEffect } from 'react';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import SvgComponent1 from '../components/SvgComponent1';
import SvgComponent2 from '../components/SvgComponent2';

function Home() {
    const [ isNameVisible, setIsNameVisible ] = useState(false);
    const [ isSubtitleVisible, setIsSubtitleVisible ] = useState(false);

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
            <SvgComponent1 />
            <SvgComponent2 />
            </div>
            <div className="home-icons" id="home">
                <ul className="home-icons-ul list-group align-middle">
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href="https://github.com/darylbg" target="_blank"> */}
                    <i data-feather="github"></i>                      
                    <span className="home-icon-span">--Github</span>
                {/* </a> */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href="https://www.linkedin.com/in/daryl-blough-063610173/" target="_blank"> */}
                    <i data-feather="linkedin"></i>                      
                    <span className="home-icon-span">--Linkedin</span>
                {/* </a> */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href="mailto: darylxcuf@gmail.com"> */}
                    <i data-feather="mail"></i>          
                    <span className="home-icon-span">--Email</span>         
                {/* </a>  */}
                </Link>
                <Link to="/" className="list-group-item">
                {/* <a className="list-group-item" href=""> */}
                    <i data-feather="file-text"></i>
                    <span className="home-icon-span">--Resume</span>
                {/* </a> */}
                </Link>
            </ul>
            </div>
        </div>
        <div className="col-sm-12 col-md-7 home-2">
            <div className="home-intro-div">
            <h6>Hi my name is</h6>
            </div>
            <div className="home-name-div">
            <h1 id="home-name" className={isNameVisible ? 'visible' : ''}>Daryl Blough</h1>
            </div>
            <div className="home-subtitle-div">
            <h3 id="home-subtitle" className={isSubtitleVisible ? 'visible' : ''}>I build stuff for the web.</h3>
            </div>
            <div className="home-bio-div">
            <h6 className="home-2-bio">
                I’m a software engineer specializing in building 
                (and occasionally designing) exceptional digital 
                experiences. Currently, I’m focused on building 
                accessible, human-centered products at Upstatement.
            </h6>
            </div>
        </div>
        <div className="email">
            <Link to="/">
            {/* <a href=""> */}
                darylxcuf@gmail.com
            {/* </a> */}
            </Link>
        </div>
        <div className="arrow"></div>
    </div>
  );

}

export default Home;