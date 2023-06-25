import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import '../assets/css/Style.css';

function Projects() {
    const projects = [
        {title: 'Project 1', description: 'App using node', img: 'ReadSky.PNG', liveLink: '', codeLink: '',
            pills: [
                {name: 'React', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'HTML', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'CSS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'Javascript', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'NodeJS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'}
            ]
        },
        {title: 'Project 2', description: 'App using html and css', img: 'ReadSky.PNG',
            pills: [
                {name: 'HTML', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'CSS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'Javascript', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
            ]
        },
        {title: 'Project 3', description: 'App using javascript with mongo db integration', img: 'ReadSky.PNG',
            pills: [
                {name: 'HTML', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'CSS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'Javascript', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'NodeJS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'}
            ]
        },
    ]

    return (
        <div className="row text-center projects" id="projects">
           <div className="col-12">
            <h3 className="section-title">04.<span> Projects ----------------</span></h3>
           </div>
           <div className="row projects-row">
           {projects.map((project, index) => (
                <ProjectComponent key={index} index={index} title={project.title} description={project.description} img={project.img} pills={project.pills} />
           ))}
           </div>
        </div>
    )
};

export default Projects;