import React, { Component } from 'react'
import './navigation.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Nav extends Component {
    constructor(props) {
        super()
        this.state = {
            user: {},
            SO: false
        }
    }

    componentDidMount() {
        axios.get('/user').then(res => {
            this.setState({ user: res.data });
            if(res.data !== "unset") {
                this.setState({SO: true});
            }
        })
    }

    render(){
        return(
            <div className="nav">
               <p className="redirect1">FoodAware</p> 
               <p className="redirect2">Forums</p>
               {this.state.SO ? 
                <p className="redirect3">Hi {this.state.user.fName}!</p>
                :
                <Link to={'/login'}>
                    <p className="redirect3">Sign In</p>
                </Link>
               }
            </div>
        )
    }
}

export default Nav