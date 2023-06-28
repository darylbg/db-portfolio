import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import '../assets/css/Style.css';
import projects from "../assets/data/projectsData";

function Projects() {
    return (
        <div className="row text-center projects" id="projects">
           <div className="col-12">
            <h3 className="section-title">04.<span> Projects ----------------</span></h3>
           </div>
           <div className="row projects-row">
            {projects.map((project, index) => (
                    <ProjectComponent key={index} index={index} title={project.title} description={project.description} img={project.img} pills={project.pills} liveLink={project.liveLink} codeLink={project.codeLink} />
            ))}
           </div>
        </div>
    )
};

export default Projects;