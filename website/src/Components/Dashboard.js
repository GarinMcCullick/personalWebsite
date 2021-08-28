import React, { Component } from 'react';
import '../App.css';
import Home from './Home';
import Form from './Form';
import Projects from './Projects';
import Cv from './Cv';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { AiOutlineFileDone } from 'react-icons/ai';

class Dashboard extends Component {

    state ={ 
        showHome: true,
        showForm: false,
        showProjects: false,
        showCv:false,
    }

    handleHomeClick = () => {
        this.setState(({
            showHome: true,
            showProjects:false,
            showForm:false,
            showCv:false,
          })
          );
    }

    handleFormClick = () => {
        this.setState(({
            showForm: true,
            showHome:false,
            showProjects:false,
            showCv:false,
          })
          );
    }

    handleProjectClick = () => {
        this.setState(({
            showProjects: true,
            showHome:false,
            showForm:false,
            showCv:false,
          })
          );
    }

    handleCv = () => {
        this.setState(({
            showProjects: false,
            showHome:false,
            showForm:false,
            showCv:true,
          })
          );
    }

    render() {
        let display
        if(this.state.showForm === true){
            display = <Form />
        }else if(this.state.showHome === true) {
            display = <Home />
        }else if(this.state.showProjects === true) {
            display = <Projects />
        }else if(this.state.showCv === true) {
            display = <Cv />
        }

    return(
        <>
        <div className='dashboard'>
            <div className='picContainer'>
                <div className='picture'>
                </div>
                <p>Hi my name is</p>
                <h3>Garin McCullick</h3>
            </div>
            <div className='bottom-wrapper'>
            <div className='navigation'>
                <div className='link' onClick={this.handleHomeClick}>Home</div>
                <div className='link' onClick={this.handleProjectClick}>Projects</div>
            </div>
            <div className='contact'>
                <button className='call-to-actionBtn' onClick={this.handleFormClick}>Want to talk?</button>
                <div className='personal-info'>
               <div className='personal-left'>

                    <a href="tel:5736808460" onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
                        <span className='phone-icon'><FiPhoneCall size={28} style={{color:'green'}}/></span>
                        <p className="call-button">tel: (573) 680-8460</p>
                    </a>

                    <a href = "mailto: glmccullick@gmail.com">
                        <span className='email-icon'><BsEnvelopeOpen size={28} style={{color:'goldenrod'}}/></span>
                        <p className='email-button'>glmccullick@gmail.com</p>
                    </a>

                    <span className='Cv-link' onClick={this.handleCv}>
                    <AiOutlineFileDone size={34 } className="file-icon" style={{color:'skyblue'}} />
                    <p>CV</p>
                    </span>

               </div>
               </div>
            </div>
            </div>
        </div>
        <div className='right-side'>
            {display}
        </div>
        </>
    )
    }
}

export default Dashboard