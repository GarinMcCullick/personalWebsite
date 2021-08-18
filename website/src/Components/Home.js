import React from 'react';
import '../Home.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineFileDone } from 'react-icons/ai'

class Home extends React.Component {
 

    render(){
    return(
        <div className='home-wrapper'>
            <div className='home-title'>
                <div className='home-name'>
                    <h1>Garin McCullick</h1>
                </div>
            </div>
            <div className='home-description'>
                <h2>Hi, I'm Garin.</h2>
                <p>A front end web developer with over 4,000 coding hours across an array of languages and libraries. Mainly I work in Javascript/React/HTML5/CSS3. I'm always looking for new and exciting projects with cool and interesting people.</p>
                <h3>Have an exciting project?</h3>
            </div>
            <div className='home-social'>
                <a href='https://github.com/GarinMcCullick'>
                    <AiFillGithub size={74} style={{color:'black'}} />
                    <p>GitHub</p>
                </a>
                <a href=''>
                    <AiOutlineFileDone size={74 } style={{color:'black'}} />
                    <p>CV</p>
                </a>
                <a href='https://www.linkedin.com/in/garin-mccullick-891a2320a/'>
                    <AiFillLinkedin size={74} style={{color:'black'}} />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
    }
}

export default Home;