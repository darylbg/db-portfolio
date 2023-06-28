import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/css/ProjectPills.css'

function ProjectPills({name, link}) {
    return(
        <li className="project-pills">
            <span className="badge text-bg-secondary">
                <Link to={link} target="_blank">
                {name}
                </Link>
            </span>
        </li>
    )
};

export default ProjectPills