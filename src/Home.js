import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="row home">
        <div className="col-sm-12 col-md-5 home-1">
            <div className="home-image">
                <svg className="svg-image" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;"><image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" href="./assets/images/profile.jpeg" preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(4,217,255);"></stop>                            <stop offset="100%" style="stop-color: rgb(4,217,255);"></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>                  
                <svg className="svg-image-background" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;" filter="blur(20px)"><path id="blob" fill="url(#gradient)" style="opacity: 1;">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>
                    </path>
                    <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(4,217,255);"></stop>
                        <stop offset="100%" style="stop-color: rgb(4,217,255);"></stop>
                    </linearGradient>
                    </defs>
                    
                </svg>
            </div>
            <div className="home-icons" id="home">
                <ul className="home-icons-ul list-group align-middle">
                <a className="list-group-item" href="https://github.com/darylbg" target="_blank">
                    <i data-feather="github"></i>                      
                    <span className="home-icon-span">--Github</span>
                </a>
                <a className="list-group-item" href="https://www.linkedin.com/in/daryl-blough-063610173/" target="_blank">
                    <i data-feather="linkedin"></i>                      
                    <span className="home-icon-span">--Linkedin</span>
                </a>
                <a className="list-group-item" href="mailto: darylxcuf@gmail.com">
                    <i data-feather="mail"></i>          
                    <span className="home-icon-span">--Email</span>         
                </a> 
                <a className="list-group-item" href="">
                    <i data-feather="file-text"></i>
                    <span className="home-icon-span">--Resume</span>
                </a>
            </ul>
            </div>
        </div>
        <div className="col-sm-12 col-md-7 home-2">
            <div className="home-intro-div">
            <h6>Hi my name is</h6>
            </div>
            <div className="home-name-div">
            <h1 id="home-name">Daryl Blough</h1>
            </div>
            <div className="home-subtitle-div">
            <h3 id="home-subtitle">I build stuff for the web.</h3>
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
        <div className="email"><a href="">darylxcuf@gmail.com</a></div>
        <div className="arrow"></div>
    </div>
  );

}

export default Home;