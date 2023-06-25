import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectPills from './subComponents/ProjectPills';
import '../assets/css/ProjectComponent.css';

function ProjectComponent({ index, title, description, img, pills }) {

    // const [ textAlignment, setTextAlignment ] = useState('text-end');
    // const [ imgAlignment, setImgAlignment ] = useState('');

    // useEffect(() => {
    //     handleTextAlignment(index);
    //     handleImgAlignment(index);
    // }, [])

    // const handleTextAlignment = (index) => {
    //     if(index%2 === 0) {
    //         setTextAlignment('text-start');
    //     }
    // }

    // const handleImgAlignment = (index) => {
    //     if(index%2 === 0) {
    //         setImgAlignment('d-none');
    //     } else {
    //         setImgAlignment('');
    //     }
    // }

    return(
        <div className="project-card card mb-3" id={index}>
            { if( index%2)}
            <div className="row g-0">
                <div className="col-md-8">
                    <div className={`card-body ${textAlignment}`}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        <ul>
                            {pills.map((pill, index) => (
                                <ProjectPills key={index} name={pill.name} link={pill.link} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="project-image col-md-4">
                    <Link to='/'>
                        <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
                    </Link>
                </div>
            </div>

            <div className="row g-0">
                <div className="project-image col-md-4">
                    <Link to='/'>
                        <img src={require(`../assets/images/${img}`)} className="img-fluid rounded-start" alt="..."></img>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className={`card-body ${textAlignment}`}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        <ul>
                            {pills.map((pill, index) => (
                                <ProjectPills key={index} name={pill.name} link={pill.link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectComponent