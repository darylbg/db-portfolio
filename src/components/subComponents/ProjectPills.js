import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/css/ProjectPills.css'

function ProjectPills({name, link}) {
    return(
        <li className="project-pills">
            <span className="badge rounded-pill text-bg-primary">
                <Link to={link} target="_blank">
                {name}
                </Link>
            </span>
        </li>
    )
};

export default ProjectPills