import React from 'react';
import '../App.css';
import Cards from './Cards';

const Dashboard = () => {
    return(
        <>
        <div className='dashboard'>
            <div className='picContainer'>
                <div className='picture'>
                </div>
                <p>Hi my name is</p>
                <h3>Garin McCullick</h3>
            </div>
            
            <div className='navigation'>
                <div className='link'>About Me</div>
                <div className="link">Education</div>
                <div className="link">Experience</div>
                <div className="link">Skills</div>
            </div>
            <div className='contact'>
                <button className='call-to-actionBtn'>Want to talk?</button>
            </div>
        </div>
        <div className='right-side'>
            <Cards />
        </div>
        </>
    )
}

export default Dashboard