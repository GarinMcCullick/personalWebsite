import React, { Component } from "react";
import "../Projects.css";
import { FaCss3Alt, FaHtml5, FaReact, FaGithub, FaGlobe } from "react-icons/fa";
import { SiJavascript, SiNpm, SiPostman } from "react-icons/si";

class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <div className="card-wrapper">
          <div className="card">
            <img
              className="top-card1"
              src="/images/DobbsCustomsPic.png"
              alt="Dobbs Customs"
            />
            <span className="card-text-container">
              <p>
                Dobbs Customs is an app that I created for a small startup owned
                by a friend of mine. This app makes use of HTML, CSS, JS, React,
                and multiple react libraries.
              </p>

              <div>
                <a
                  href="https://dobbscustoms.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGlobe size={44} />
                </a>
                <a
                  href="https://github.com/GarinMcCullick/DobbsCustoms"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub size={44} />
                </a>
              </div>
            </span>
          </div>

          <div className="card">
            <img
              className="top-card2"
              src="/images/Recipeazy.png"
              alt="Recipeazy"
            />
            <span className="card-text-container">
              <p>
                Recipeazy is a front-end web app that myself and a few team
                members worked on in which the app gathers and shares family
                recipes. The app utilizes HTML, CSS, JS, React, Redux, and axios
                to communicate with our concurrent team’s Node API.
              </p>

              <div>
                <a
                  href="https://secret-recipes-gold.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGlobe size={44} />
                </a>
                <a
                  href="https://github.com/secretFamiltRecipiesCookbook/frontEnd"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub size={44} />
                </a>
              </div>
            </span>
          </div>

          <div className="card">
            <img
              className="top-card3"
              src="/images/AgencyPic.png"
              alt="Pintereach"
            />
            <span className="card-text-container">
              <p>
                The Agency is a new project that I am currently working on.
                Utilizing HTML5, CSS3, React, Discord OAuth2.0 API, Node.js,
                Express, and MongoDB. The Agency is an app that I'm creating for
                a small group of people (100-200) that Share interest in playing
                video games together. This app is meant to be a source for
                players in my group to track their in game stats, socialize,
                sign up for upcoming events, and keep up to date with group
                activities.
              </p>

              <div>
                <a
                  href="https://www.newworld-theagency.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGlobe size={44} />
                </a>
                <a
                  href="https://github.com/GarinMcCullick/NewWorldProject"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub size={44} />
                </a>
              </div>
            </span>
          </div>
        </div>
        <h2>Skills</h2>
        <div className="skill-bar">
          <span>
            <FaCss3Alt size={74} style={{ color: "skyblue" }} />
            <p>CSS3</p>
          </span>
          <span>
            <FaHtml5 size={74} style={{ color: "skyblue" }} />
            <p>HTML5</p>
          </span>
          <span>
            <SiJavascript size={74} style={{ color: "skyblue" }} />
            <p>Javascript</p>
          </span>
          <span>
            <FaReact size={74} style={{ color: "skyblue" }} />
            <p>React</p>
          </span>
          <span>
            <SiNpm size={74} style={{ color: "skyblue" }} />
            <p>Npm</p>
          </span>
          <span>
            <FaGithub size={74} style={{ color: "skyblue" }} />
            <p>Git / Github</p>
          </span>
          <span>
            <SiPostman size={74} style={{ color: "skyblue" }} />
            <p>Postman</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
