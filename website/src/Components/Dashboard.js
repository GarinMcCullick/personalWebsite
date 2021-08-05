import React, { Component } from 'react';
import '../App.css';
import Cards from './Cards';
import Form from './Form';

class Dashboard extends Component {

    state ={
        showForm: false,
    }

    handleHomeClick = () => {
        this.setState(({
            showForm: false,
          })
          );
    }

    handleFormClick = () => {
        this.setState(({
            showForm: true,
          })
          );
    }

    render() {
        let display
        if(this.state.showForm){
            display = <Form />
        }else {
            display = <Cards />
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
            
            <div className='navigation'>
                <div className='link' onClick={this.handleHomeClick}>Home</div>
                <div className='link'>About Me</div>
                <div className="link">Education</div>
                <div className="link">Experience</div>
                <div className="link">Skills</div>
            </div>
            <div className='contact'>
                <button className='call-to-actionBtn' onClick={this.handleFormClick}>Want to talk?</button>
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