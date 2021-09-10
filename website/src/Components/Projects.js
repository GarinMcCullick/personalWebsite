import React, { Component } from 'react';
import '../Projects.css'
import { FaCss3Alt, FaHtml5, FaReact, FaGithub, FaGlobe } from 'react-icons/fa'
import { SiJavascript, SiNpm, SiPostman } from 'react-icons/si'

class Projects extends Component {
    render(){
        return(
            
            <div className='projects-wrapper'>
                <h1>Projects</h1>
                <div className='card-wrapper'>
                    <div className='card'>
                        <img className='top-card1' src='/images/Watermyplants.png' alt='Watermyplants' />
                            <span className='card-text-container'>
                                <p>
                                    Water My Plants is an app that my team created to provide one concise place for people to store information about their plants. This app makes use of HTML, CSS, JS, React, and Axios to make api calls to a backend framework where users data is stored.
                                </p>

                                <div>
                                <a href='https://secret-recipes-gold.vercel.app/' ><FaGlobe size={44} /></a>
                                <a href='https://github.com/BuildWeekWTP/WaterMyPlants-frontend' ><FaGithub size={44} /></a>
                                </div>
                            </span>
                    </div>
                    
                    <div className='card'>
                        <img className='top-card2' src='/images/Recipeazy.png' alt='Recipeazy' />
                            <span className='card-text-container'>
                                <p>
                                    Recipeazy is a front-end web app that myself and a few team members worked on in which the app gathers and shares family recipes. The app utilizes HTML, CSS, JS, React, Redux, and axios to communicate with our concurrent team’s Node API.
                                </p>

                                <div>
                                <a href='https://secret-recipes-gold.vercel.app/' ><FaGlobe size={44} /></a>
                                <a href='https://github.com/secretFamiltRecipiesCookbook/frontEnd' ><FaGithub size={44} /></a>
                                </div>
                            </span>
                    </div>
                    
                    <div className='card'>
                        <img className='top-card3' src='/images/Pintereach.png' alt='Pintereach' />
                            <span className='card-text-container'>
                                <p>
                                    Pintereach is a old project that I am currently reworking. Utilizing HTML5, CSS3, and React. Pintereach is an app that allows users to create, store, and share articles from their favorite websites, news articles, or any other online source directly to one place.
                                </p>

                                <div>
                                <a href='https://secret-recipes-gold.vercel.app/' ><FaGlobe size={44} /></a>
                                <a href='https://github.com/pintereachBW/front-end' ><FaGithub size={44} /></a>
                                </div>
                            </span>
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
                        <SiNpm size={74} style={{color:'skyblue'}} />
                        <p>Npm</p>
                    </span>
                    <span>
                        <FaGithub size={74} style={{color:'skyblue'}} />
                        <p>Git / Github</p>
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