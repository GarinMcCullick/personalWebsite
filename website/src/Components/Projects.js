import React, { Component } from 'react';
import '../Projects.css'
import { FaCss3Alt, FaHtml5, FaReact, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiPostman } from 'react-icons/si'

class Projects extends Component {
    render(){
        return(
            
            <div className='projects-wrapper'>
                <h1>Projects</h1>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='top-card1'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='top-card2'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='top-card3'>

                        </div>
                    </div>
                </div>
                <h2>Skills</h2>
                <div className='skill-bar'>
                    <span>
                        <FaCss3Alt size={74} style={{color:'skyblue'}} />
                        <p>CSS3</p>
                    </span>
                    <span>
                        <FaHtml5 size={74} style={{color:'skyblue'}} />
                        <p>HTML5</p>
                    </span>
                    <span>
                        <SiJavascript size={74} style={{color:'skyblue'}} />
                        <p>Javascript</p>
                    </span>
                    <span>
                        <FaReact size={74} style={{color:'skyblue'}} />
                        <p>React</p>
                    </span>
                    <span>
                        <FaGithub size={74} style={{color:'skyblue'}} />
                        <p>Github</p>
                    </span>
                    <span>
                        <SiPostman size={74} style={{color:'skyblue'}} />
                        <p>Postman</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default Projects