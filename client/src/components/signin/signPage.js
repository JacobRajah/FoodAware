import React, { Component } from 'react'
import './signPage.css';
import axios from 'axios';
import sha256 from 'js-sha256';
import { Redirect } from "react-router-dom"

//Can store the user in the backend and access whenever

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            valid: ''
        };

        this.handleChange_fName = this.handleChange_fName.bind(this);
        this.handleChange_lName = this.handleChange_lName.bind(this);
        this.handleChange_email = this.handleChange_email.bind(this);
        this.handleChange_pwd = this.handleChange_pwd.bind(this);
    }

    handleChange_fName(event) {
        this.setState({fName: event.target.value});
    }
    handleChange_lName(event) {
        this.setState({lName: event.target.value});
    }
    handleChange_email(event) {
        this.setState({email: event.target.value});
    }
    handleChange_pwd(event) {
        this.setState({password: event.target.value});
    }

    handleSumbitReg = (event) => {
        event.preventDefault();
        var hash1 = sha256.create();
        hash1.update(`${this.state.email}9018${this.state.password}`);
        
        var data = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            password: hash1.hex()
        }
        axios.post('/register', data).then(res => {
            console.log(res.data)
        });
    }

    handleSumbitSO = (event) => {
        event.preventDefault();
        var hash1 = sha256.create();
        hash1.update(`${this.state.email}9018${this.state.password}`);
        
        var data = {
            email: this.state.email,
            password: hash1.hex()
        }
        axios.post('/SSO', data).then(res => {
            this.setState({valid: res.data})
            console.log(this.state.valid)
        });
    }

    render(){
        if(this.state.valid === "validated") {
            return <Redirect to={"/home"}></Redirect>
        }
        return(
            <div className="login">
                <h1>Register</h1>
                <form onSubmit={this.handleSumbitReg}>
                    <input type="text" placeholder="First Name"
                    onChange={this.handleChange_fName}></input>
                    <input type="text" placeholder="Last Name"
                    onChange={this.handleChange_lName}></input><br></br>
                    <input type="email" placeholder="Email"
                    onChange={this.handleChange_email}></input><br></br>
                    <input type="password" placeholder="Password"
                    onChange={this.handleChange_pwd}></input><br></br>
                    <input type="submit"></input>
                </form>
                <div>{this.state.fName}</div>
                <div>{this.state.lName}</div>
                <div>{this.state.email}</div>
                <div>{this.state.password}</div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSumbitSO}>
                    <input type="email" placeholder="Email"
                    onChange={this.handleChange_email}></input><br></br>
                    <input type="password" placeholder="Password"
                    onChange={this.handleChange_pwd}></input><br></br>
                    <input type="submit"></input>
                </form>
                <div>{this.state.valid}</div>
            </div>
        )
    }
}

export default Login