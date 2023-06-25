import React from 'react';
import '../assets/css/DevIcons.css'
import { Link } from 'react-router-dom';

function DevIcons(props) {
    return(
        <div className="col-3 devicons">
            <Link to="https://github.com/darylbg" target='_blank'>
            <i className={`devicon-${props.description} colored`}></i>
            <span>{props.name}</span>
            </Link>
        </div>
    )
};

export default DevIcons