import React from 'react';

function DevIcons(props) {
    return(
        <div className="col-3">
            <i className={`devicon-${props.description}`}></i>
            <span>{props.name}</span>
        </div>
    )
};

export default DevIcons