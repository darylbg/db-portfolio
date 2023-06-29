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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin posuere, nisi id faucibus luctus, sem odio laoreet 
                dui, non dapibus justo dui sed nunc. Nullam eu justo id 
                lectus pharetra lobortis. Pellentesque tincidunt mi sed 
                justo facilisis fringilla. Vestibulum efficitur justo sed 
                turpis lacinia, non volutpat sapien bibendum. Aenean sed 
                ipsum nec metus facilisis finibus. Nullam vel massa vel 
                ex sagittis dapibus vitae in eros. Aliquam erat volutpat. 
                Fusce mollis enim a dui posuere ullamcorper. Aliquam rutrum, 
                lectus vitae consectetur tristique, justo lacus tempus orci, 
                at fermentum nisi dolor at nisi. Etiam at tellus at tellus 
                mattis aliquet. Donec lobortis semper elit eu semper. Sed 
                efficitur dui sit amet eros feugiat, non dapibus tellus 
                aliquam. Duis et ante non tortor rutrum rhoncus. Vivamus 
                rutrum lacinia nisi at tempor. Sed sagittis est et sem 
                feugiat faucibus.
            </p>
        </div>
        <div className="col-0 col-lg-3"></div>
        <h4 className="col-12 text-center devicons-header">// My Techstack
        </h4>
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