import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ProjectPills from './subComponents/ProjectPills';
import { ExternalLink, Code, ArrowRight } from 'react-feather';
import '../assets/css/ProjectComponent.css';
// import '../assets/css/ProjectComponent2.css'

function ProjectComponent({ index, title, description, img, pills, liveLink, codeLink }) {
    
    const width = window.innerWidth;
    console.log(width);

    return(
        <div className="card mb-3 project-card">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="card-body text-start">
                        <h4 className='card-title'>{`PROJECT ${index + 1}`}</h4>
                        <h3 className="card-title">{title}</h3>
                        <ul className='pills-list'>
                            {pills.map((pill, index) => (
                                <ProjectPills name={pill.name} link={pill.link} key={index} />
                            ))}  
                        </ul>
                        <p className="card-text">{description}</p>
                        <ul className='link-list'>
                            <li><Link>View Project<span><ArrowRight /></span></Link></li>
                            <li><Link>View Code<span><ArrowRight /></span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 card-image">
                    <img src={require('../assets/images/ReadSky.PNG')} className="img-fluid rounded-start" alt="..."></img>
                    <div className='img-border'></div>
                </div>
            </div>
        </div>
    )
};

export default ProjectComponent