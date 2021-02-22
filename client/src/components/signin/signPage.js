import React, { Component } from 'react'
import './signPage.css';
import axios from 'axios';

//Can store the user in the backend and access whenever

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: ''
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

    handleSumbit = (event) => {
        event.preventDefault();
        var data = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/user', data).then(res => {
            console.log(res.data)
        });
    }

    render(){
        return(
            <div className="login">
               <form onSubmit={this.handleSumbit}>
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
            </div>
        )
    }
}

export default Login