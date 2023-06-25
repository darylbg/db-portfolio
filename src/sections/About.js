import React from "react";
import DevIcons from "../components/DevIcons";
import '../assets/css/Style.css';

function About() {
    const languages = [
        {name: 'HTML', description: 'html5-plain'},
        {name: 'CSS', description: 'css3-plain'},
        {name: 'Javascript', description: 'javascript-plain'},
        {name: 'Node', description: 'nodejs-plain'},
        {name: 'Mysql', description: 'mysql-plain'},
        {name: 'Mongodb', description: 'mongodb-plain'},
        {name: 'React', description: 'react-plain'},
        {name: 'Jquery', description: 'jquery-plain'},
        {name: 'Github', description: 'github-original'}
    ]

    return (
        <div className="row about" id="about">
        <div className="col-12 text-center">
            <h3 className="section-title">02.<span> About ----------------</span></h3>
        </div>
        <div className="col-0 col-lg-3"></div>
        <div className="col-12 col-lg-6 about-div text-center">
            <p className="about-text">
                I am basically the best developer in the world.
                I work well in a team and as a company bitch
                as well as a hacker and it specialist. i have loads 
                of certifications and all that shit. I learn quick
                i have memorized the Bible and the dictionary.
                Puhleeeeeze hire me. some more shit about me
                that i need for this section as i am a piece of shit 
                hi fuck cunt bitch i love atmospheric black metal.
            </p>
        </div>
        <div className="col-0 col-lg-3"></div>
        <div className="col-12 text-center">
            <h5 className="devicons-header">Some technologies I am familiar with</h5>
        </div>
        <div className="col-0 col-lg-3"></div>
        <div className="row col-12 col-lg-6 text-center devicon-row">
            {languages.map((language, index) => (
                <DevIcons key={index} name={language.name} description={language.description} />
            ))}
        </div>
        <div className="col-0 col-lg-3"></div>
        </div>

    )
};

export default About;