import React from 'react';
import '../Cards.css'

const styles = {
        transition: 'all 0.6s ease-out',
    }

class Cards extends React.Component {
    constructor(){
        super();
    this.state={
        about:{ //state system needs refactored for styling stuff and to keep track of state in a heirarchy such as this one.
            scaleX1:1,
            scaleY1:1,
            translateX1:1,
            translateY1:1,
            zIndex1:1,
        },
        education:{
            scaleX2:1,
            scaleY2:1,
            translateX2:1,
            translateY2:1,
            zIndex2:1,
        },
        experience:{
            scaleX3:1,
            scaleY3:1,
            translateX3:1,
            translateY3:1,
            zIndex3:1,
        },
        skills:{
            scaleX4:1,
            scaleY4:1,
            translateX4:1,
            translateY4:1,
            zIndex4:1,
        },
    }
    }
    
    handleClick(e) {
        if(e.target.className==="cardContent1" || e.target.className==="cardTitle1"){

            this.setState({
                translateX1: this.state.translateX1> 1 ? 1 : 22,
                translateY1: this.state.translateY1> 1 ? 1 : 26,
                scaleX1: this.state.scaleX1> 1 ? 1 : 3.54,
                scaleY1: this.state.scaleY1> 1 ? 1 : 2.55,
                zIndex1: this.state.zIndex1> 1 ? 1 : 100,
            })
    }
    else if(e.target.className==='cardContent2' || e.target.className==='cardTitle2'){
       
        this.setState({
            translateX2: this.state.translateX2< 1 ? 1 : -22,
            translateY2: this.state.translateY2> 1 ? 1 : 26,
            scaleX2: this.state.scaleX2> 1 ? 1 : 3.54,
            scaleY2: this.state.scaleY2> 1 ? 1 : 2.55,
            zIndex2: this.state.zIndex2> 1 ? 1 : 100,
        })
    }
    else if(e.target.className==='cardContent3' || e.target.className==='cardTitle3'){
        
        this.setState({
            translateX3: this.state.translateX3> 1 ? 1 : 22,
            translateY3: this.state.translateY3< 1 ? 1 : -24,
            scaleX3: this.state.scaleX3> 1 ? 1 : 3.54,
            scaleY3: this.state.scaleY3> 1 ? 1 : 2.55,
            zIndex3: this.state.zIndex3> 1 ? 1 : 100,
        })
    }
    else if(e.target.className==='cardContent4' || e.target.className==='cardTitle4'){
       
        this.setState({
            translateX4: this.state.translateX4< 1 ? 1 : -22,
            translateY4: this.state.translateY4< 1 ? 1 : -24,
            scaleX4: this.state.scaleX4> 1 ? 1 : 3.54,
            scaleY4: this.state.scaleY4> 1 ? 1 : 2.55,
            zIndex4: this.state.zIndex4> 1 ? 1 : 100,
        })
    }

    }

    render(){
    return(
        <div className='wrapper'>
            <div className='card1' onClick={this.handleClick.bind(this)} style={{...styles,zIndex: this.state.zIndex1, transform: 'scale('+this.state.scaleX1+','+this.state.scaleY1+') translate('+this.state.translateX1+'%,'+this.state.translateY1+'%)',}}>
                <div className="cardContent1">
                </div>
                <div className="cardTitle1">
                    About
                </div>
            </div>

            <div className="card2" onClick={this.handleClick.bind(this)} style={{...styles,zIndex: this.state.zIndex2, transform: 'scale('+this.state.scaleX2+','+this.state.scaleY2+') translate('+this.state.translateX2+'%,'+this.state.translateY2+'%)',}}>
                <div className="cardContent2">

                </div>
                <div className="cardTitle2">
                    Education
                </div>
            </div>

            <div className="card3" onClick={this.handleClick.bind(this)} style={{...styles,zIndex: this.state.zIndex3, transform: 'scale('+this.state.scaleX3+','+this.state.scaleY3+') translate('+this.state.translateX3+'%,'+this.state.translateY3+'%)',}}>
                <div className="cardContent3">

                </div>
                <div className="cardTitle3">
                    Experience
                </div>
            </div>

            <div className='card4' onClick={this.handleClick.bind(this)} style={{...styles,zIndex: this.state.zIndex4, transform: 'scale('+this.state.scaleX4+','+this.state.scaleY4+') translate('+this.state.translateX4+'%,'+this.state.translateY4+'%)',}}>
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