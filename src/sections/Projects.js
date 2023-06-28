import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import '../assets/css/Style.css';

function Projects() {
    const projects = [
        {title: 'Twitter Clone', description: 'App using node', img: 'ReadSky.PNG', liveLink: 'https://www.youtube.com/', codeLink: 'https://github.com/darylbg/db-portfolio',
            pills: [
                {name: 'React', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'HTML', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'CSS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'Javascript', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'NodeJS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'}
            ]
        },
        {title: 'Guessing Game', description: 'App using html and css', img: 'ReadSky.PNG', liveLink: 'https://www.youtube.com/', codeLink: 'https://github.com/darylbg/db-portfolio',
            pills: [
                {name: 'HTML', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'CSS', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
                {name: 'Javascript', link: 'https://create-react-app.dev/docs/adding-images-fonts-and-files/'},
            ]
        },
        {title: 'Portfolio', description: 'App using javascript with mongo db integration', img: 'ReadSky.PNG', liveLink: 'https://www.youtube.com/', codeLink: 'https://github.com/darylbg/db-portfolio',
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
            {/* <section style={{paddingBlock: '2rem'}}>
            <div className="projects container"> */}
            {projects.map((project, index) => (
                    <ProjectComponent key={index} index={index} title={project.title} description={project.description} img={project.img} pills={project.pills} liveLink={project.liveLink} codeLink={project.codeLink} />
            ))}
            {/* </div>
            </section> */}
           </div>
        </div>
    )
};

export default Projects;