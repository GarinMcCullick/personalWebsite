import React, { Component } from 'react';
import '../Form.css'

class Form extends Component {

    state={
        fname:'',
        lname:'',
        email:'',
        phone:Number,
        message:'',
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <form className='contact-form' onSubmit={this.handleSubmit}>
                <div className='form-field'>
                    <label>
                        <p>First Name</p>
                        <br/>
                        <input onChange={this.handleChange} value={this.state.fname} name='fname' id='fname'></input>
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        <p>Last Name</p>
                        <br/>
                        <input onChange={this.handleChange} value={this.state.lname} name='lname' id='lname'></input>
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        <p>Email</p>
                        <br/>
                        <input onChange={this.handleChange} value={this.state.email} name='email' id='email'></input>
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        <p>Phone #</p>
                        <br/>
                        <input onChange={this.handleChange} type="tel" value={this.state.phone} name='phone' id='phone'></input>
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        <p>Send me a Message!</p>
                        <br/>
                        <textarea onChange={this.handleChange} value={this.state.message} name='message' id='message'></textarea>
                    </label>
                </div>
                <button>Get in Contact!</button>
            </form>
        )
    }
}

export default Form;