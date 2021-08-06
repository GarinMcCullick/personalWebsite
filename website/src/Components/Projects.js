import React, { Component } from 'react';
import '../Projects.css'
import { FaCss3Alt, FaHtml5, FaReact, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiPostman } from 'react-icons/si'

class Projects extends Component {
    render(){
        return(
            
            <div className='wrapper'>
                <h1>Projects</h1>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='top-card'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='top-card'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='top-card'>

                        </div>
                    </div>
                </div>
                <div className='skill-bar'>
                    <span>
                        <FaCss3Alt size={74} style={{color:'blue'}} />
                        <p>CSS3</p>
                    </span>
                    <span>
                        <FaHtml5 size={74} style={{color:'blue'}} />
                        <p>HTML5</p>
                    </span>
                    <span>
                        <SiJavascript size={74} style={{color:'blue'}} />
                        <p>Javascript</p>
                    </span>
                    <span>
                        <FaReact size={74} style={{color:'blue'}} />
                        <p>React</p>
                    </span>
                    <span>
                        <FaGithub size={74} style={{color:'blue'}} />
                        <p>Github</p>
                    </span>
                    <span>
                        <SiPostman size={74} style={{color:'blue'}} />
                        <p>Postman</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default Projects