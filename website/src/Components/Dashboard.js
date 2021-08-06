import React, { Component } from 'react';
import '../App.css';
import Cards from './Cards';
import Form from './Form';
import Projects from './Projects';

class Dashboard extends Component {

    state ={ 
        showCards: true,
        showForm: false,
        showProjects: false,
    }

    handleHomeClick = () => {
        this.setState(({
            showCards: true,
            showProjects:false,
            showForm:false,
          })
          );
    }

    handleFormClick = () => {
        this.setState(({
            showForm: true,
            showCards:false,
            showProjects:false,
          })
          );
    }

    handleProjectClick = () => {
        this.setState(({
            showProjects: true,
            showCards:false,
            showForm:false,
          })
          );
    }

    render() {
        let display
        if(this.state.showForm === true){
            display = <Form />
        }else if(this.state.showCards === true) {
            display = <Cards />
        }else if(this.state.showProjects === true) {
            display = <Projects />
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
                <div className='link' onClick={this.handleProjectClick}>Projects</div>
            </div>
            <div className='contact'>
                <button className='call-to-actionBtn' onClick={this.handleFormClick}>Want to talk?</button>
                <div className='personal-info'>
               <div className='personal-left'>
                    <p>tel: (573) 680-8460</p>
                    <p>glmccullick@gmail.com</p>
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