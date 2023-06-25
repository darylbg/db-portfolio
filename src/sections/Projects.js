import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import '../assets/css/Style.css';

function Projects() {
    // const projects = [
    //     {title: 'Project 1', description: 'App using node', img: ''},
    //     {title: 'Project 2', description: 'App using html and css', img: ''},
    //     {title: 'Project 3', description: 'App using javascript with mongo db integrattion', img: ''},
    // ]

    return (
        <div className="row text-center projects" id="projects">
           <div className="col-12">
            <h3 className="section-title">04.<span> Projects ----------------</span></h3>
           </div>
           {/* {projects.map((project, index) => {
                <ProjectComponent key={project.index} title={project.title} description={project.description} img={project.img} />
           })} */}
           <ProjectComponent />
           <div className="col-12">project 1</div>
           <div className="col-12">project 2</div> 
           <div className="col-12">project 3</div> 
        </div>
    )
};

export default Projects;