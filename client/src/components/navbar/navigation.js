import React, { Component } from 'react'
import './navigation.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../images/Logo.png'

class Nav extends Component {
    constructor(props) {
        super()
        this.state = {
            user: {},
            SO: false
        }
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        axios.get('/user').then(res => {
            this.setState({ user: res.data });
            if(res.data !== "unset") {
                this.setState({SO: true});
            }
        })
    }

    signOut() {
        axios.get('/signout').then(res => {
            this.setState({ user: {} });
            this.setState({SO: false});
        })
    }

    render(){
        if(this.state.SO){
            return(
                <div className="nav">
                    <img src={Logo} alt=""></img>
                    <a href="/">FoodAware</a> 
                    <a href="/forum">Forums</a>
                    <div className="dropdown">
                        <button className="redirect3">Hi {this.state.user.fName}!  <FontAwesomeIcon icon={faCaretDown}/></button>
                        <div className="dropdown-select">
                            <a href="/home">Dashboard</a>
                            <a href="/">Home</a>
                            <a href="/" onClick={this.signOut}>Sign Out</a>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className="nav">
                <img src={Logo} alt=""></img> 
                <a href="/">FoodAware</a> 
                <a href="/forum">Forums</a>
                <a href="/login">Sign In</a>
            </div>
        )
    }
}

export default Nav