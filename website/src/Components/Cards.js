import React from 'react';
import '../Cards.css'

const styles = {
        transition: 'all 1s ease-out'
    }

class Cards extends React.Component {
    constructor(){
        super();
    this.state={
        scale:1,
    }
    }
    handleClick(e) {
        if(e.target.className==="cardContent1" || e.target.className==="cardTitle1"){
            this.setState({
                scale: this.state.scale> 1 ? 1 : 1.5
            })
    }
    else if(e.target.className==='cardContent2' || e.target.className==='cardTitle2'){
        console.log('clicked2')
    }
    else if(e.target.className==='cardContent3' || e.target.className==='cardTitle3'){
        console.log('clicked3')
    }
    else if(e.target.className==='cardContent4' || e.target.className==='cardTitle4'){
        console.log('clicked4')
    }

    }

    render(){
    return(
        <div className='wrapper'>
            <div className='card1' onClick={this.handleClick.bind(this)} style={{...styles, transform: 'scale('+this.state.scale+')'}}>
                <div className="cardContent1">

                </div>
                <div className="cardTitle1">
                    About
                </div>
            </div>

            <div className="card2" onClick={this.handleClick}>
                <div className="cardContent2">

                </div>
                <div className="cardTitle2">
                    Education
                </div>
            </div>

            <div className="card3" onClick={this.handleClick}>
                <div className="cardContent3">

                </div>
                <div className="cardTitle3">
                    Experience
                </div>
            </div>

            <div className='card4' onClick={this.handleClick}>
                <div className="cardContent4">

                </div>
                <div className="cardTitle4">
                    Skills
                </div>
            </div>
        </div>
    )
    }
}

export default Cards