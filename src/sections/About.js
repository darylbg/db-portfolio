import React from "react";
import DevIcons from "../components/DevIcons";
import "../assets/css/Style.css";

function About() {
  const languages = [
    { name: "HTML", description: "html5-plain", link: "https://html.com/" },
    {
      name: "CSS",
      description: "css3-plain",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "Javascript",
      description: "javascript-plain",
      link: "https://www.javascript.com/",
    },
    { name: "React js", description: "react-plain", link: "https://react.dev/" },
    {
      name: "Jquery",
      description: "jquery-plain",
      link: "https://jquery.com/",
    },
    {
      name: "Bootstrap",
      description: "bootstrap-plain",
      link: "https://www.mysql.com/",
    },
    {
      name: "Node js",
      description: "nodejs-plain",
      link: "https://nodejs.org/en",
    },
    {
      name: "express js",
      description: "express-original",
      link: "https://expressjs.com/",
    },
    {
      name: "Mysql",
      description: "mysql-plain",
      link: "https://www.mysql.com/",
    },
    {
      name: "Mongodb",
      description: "mongodb-plain",
      link: "https://www.mongodb.com/",
    },
    {
      name: "redux",
      description: "redux-plain",
      link: "https://redux.js.org/",
    },
    {
      name: "graph ql",
      description: "graphql-plain",
      link: "https://graphql.org/",
    },
    {
      name: "Github",
      description: "github-original",
      link: "https://github.com/",
    },
    { name: "Git", description: "git-plain", link: "https://git-scm.com/" },
  ];

  return (
    <div className="row about" id="about">
      <div className="col-12 text-center">
        <h3 className="section-title">
          02.<span> About ----------------</span>
        </h3>
      </div>
      <div className="col-0 col-lg-3"></div>
      <div className="col-12 col-lg-6 about-div text-center">
        <p className="about-text">
          I am a Full-Stack web developer with a strong foundation in front-end
          and back-end technologies. Eager to learn and grow, I am always
          looking for new opportunities to challenge myself and develop my
          skills. Seeking a challenging position where I can contribute my
          skills and enthusiasm to a team, and have a positive impact on the
          company's success by developing innovative and user-friendly web
          applications.
        </p>
      </div>
      <div className="col-0 col-lg-3"></div>
      <div className="col-0 col-lg-3"></div>
      <div className="row col-12 col-lg-6 text-center devicon-row">
        <h4 className="row text-center devicons-header">// Techstack</h4>
        {languages.map((language, index) => (
          <DevIcons
            key={index}
            name={language.name}
            description={language.description}
            link={language.link}
          />
        ))}
      </div>
      <div className="col-0 col-lg-3"></div>
    </div>
  );
}

export default About;
