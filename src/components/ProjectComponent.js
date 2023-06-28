import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ProjectPills from './subComponents/ProjectPills';
import { ExternalLink, Code } from 'react-feather';
import '../assets/css/ProjectComponent.css';
// import '../assets/css/ProjectComponent2.css'

function ProjectComponent({ index, title, description, img, pills, liveLink, codeLink }) {
    return(
            <div className="card mb-3 project-card">
                <div className="row g-0">
                { index%2 === 0 ? (
                    <>
                    <div className="col-md-6">
                        <div className="card-body text-start">
                            <h4 className='card-title'>{`Project ${index + 1}`}</h4>
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{description}</p>
                            <ul>
                                <li><Link>View Project</Link></li>
                                <li><Link>View Code</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 card-image">
                        <img src={require('../assets/images/ReadSky.PNG')} className="img-fluid rounded-start" alt="..."></img>
                        <div className='img-border'></div>
                    </div>
                    </>
                    ) : (
                    <>
                    <div className="col-md-6 card-image">
                        <img src={require('../assets/images/ReadSky.PNG')} className="img-fluid rounded-start" alt="..."></img>
                        <div className='img-border'></div>
                    </div>
                        <div className="col-md-6">
                        <div className="card-body text-start">
                            <h4 className='card-title'>{`Project ${index + 1}`}</h4>
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{description}</p>
                            <ul>
                                <li><Link>View Project</Link></li>
                                <li><Link>View Code</Link></li>
                            </ul>
                        </div>
                    </div>
                    </>
                    )}
                </div>
            </div>

        // <div className="project-card card mb-3" id={index} style={Styles}>
        //     { index%2 === 0 ? (
        //     <div className="row g-0">
        //         <div className="col-md-8">
        //             <div className='card-body text-start'>
        //                 <h5 className="card-title">{title}</h5>
        //                 <p className="card-text">{description}</p>
        //                 <ul>
        //                     {pills.map((pill, index) => (
        //                         <ProjectPills key={index} name={pill.name} link={pill.link} />
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="project-image col-md-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        //                 <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
        //                 <div className={`img-hover ${isHovered ? '' : 'd-none'}`}>
        //                     <Link to={liveLink} target='_blank'>
        //                         <div className='hover-live-link align-middle'>
        //                             <ExternalLink />
        //                             <span >View live</span>
        //                         </div>
        //                     </Link>
        //                     <Link to={codeLink} target='_blank'>
        //                         <div className='hover-code-link align-middle'>
        //                             <Code />
        //                             <span className=''>Source code</span>
        //                         </div>
        //                     </Link>
        //                 </div>
                    
        //         </div>
        //     </div>
        //     ) : (
        //     <div className="row g-0">
        //         <div className={"project-image col-md-4"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        //         <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
        //             <div className={`img-hover ${isHovered ? '' : 'd-none'}`}>
        //                 <Link to={liveLink} target='_blank'>
        //                     <div className='hover-live-link align-middle'>
        //                         <ExternalLink />
        //                         <span >View live</span>
        //                     </div>
        //                 </Link>
        //                 <Link to={codeLink} target='_blank'>
        //                     <div className='hover-code-link align-middle'>
        //                         <Code />
        //                         <span className=''>Source code</span>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="col-md-8">
        //             <div className='card-body text-end'>
        //                 <h5 className="card-title">{title}</h5>
        //                 <p className="card-text">{description}</p>
        //                 <ul>
        //                     {pills.map((pill, index) => (
        //                         <ProjectPills key={index} name={pill.name} link={pill.link} />
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     )}
        // </div>
        // <section style={{paddingBlock: '2rem'}}>
        //     <div className="projects container">
        //         <article className={`project ${gridTemplateAreas}`}>
        //         <div className="project__img-container">
        //             <img className="project__img" src='https://images.unsplash.com/photo-1544474560-5b2a788d024a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI3NjU2OTU&ixlib=rb-4.0.3&q=80&w=800' alt=''></img>
        //         </div>
        //         <div className="project__content grid-flow">
        //             <h3 className="project__title">E Commerce Website</h3>
        //             <ul className="project__tags flex-group" role="list">
        //             <li className="project__tag">NextJS</li>
        //             <li className="project__tag">TypeScript</li>
        //             </ul>
        //             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi reprehenderit ipsa officia dolore recusandae cumque tenetur, cupiditate est? Suscipit voluptatibus nihil, nam quisquam illo architecto laudantium perspiciatis ipsa nesciunt dolor!</p>
        //             <Link className="project__cta" to="exmaple.com" target="_blank" rel="noopener noreferrer">View project</Link>
        //         </div>
        //         </article>
        //     </div>
        //     </section>
    )
};

export default ProjectComponent