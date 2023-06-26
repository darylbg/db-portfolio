import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ProjectPills from './subComponents/ProjectPills';
import { ExternalLink, Code } from 'react-feather';
import '../assets/css/ProjectComponent.css';

function ProjectComponent({ index, title, description, img, pills, liveLink, codeLink }) {
    const [ isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      const Styles = {
        background: 'linear-gradient(90deg, rgba(10,25,47,1) 0%, rgba(38,61,102,1) 100%)',
      }

    return(
        <div className="project-card card mb-3" id={index} style={Styles}>
            { index%2 === 0 ? (
            <div className="row g-0">
                <div className="col-md-8">
                    <div className='card-body text-start'>
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <ul>
                            {pills.map((pill, index) => (
                                <ProjectPills key={index} name={pill.name} link={pill.link} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="project-image col-md-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
                        <div className={`img-hover ${isHovered ? '' : 'd-none'}`}>
                            <Link to={liveLink} target='_blank'>
                                <div className='hover-live-link align-middle'>
                                    <ExternalLink />
                                    <span >View live</span>
                                </div>
                            </Link>
                            <Link to={codeLink} target='_blank'>
                                <div className='hover-code-link align-middle'>
                                    <Code />
                                    <span className=''>Source code</span>
                                </div>
                            </Link>
                        </div>
                    
                </div>
            </div>
            ) : (
            <div className="row g-0">
                <div className={"project-image col-md-4"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
                    <div className={`img-hover ${isHovered ? '' : 'd-none'}`}>
                        <Link to={liveLink} target='_blank'>
                            <div className='hover-live-link align-middle'>
                                <ExternalLink />
                                <span >View live</span>
                            </div>
                        </Link>
                        <Link to={codeLink} target='_blank'>
                            <div className='hover-code-link align-middle'>
                                <Code />
                                <span className=''>Source code</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className='card-body text-end'>
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <ul>
                            {pills.map((pill, index) => (
                                <ProjectPills key={index} name={pill.name} link={pill.link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
};

export default ProjectComponent