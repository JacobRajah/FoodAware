import React, { Component } from 'react'
import './navigation.css';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <div className="nav">
               <p className="redirect1">FoodAware</p> 
               <p className="redirect2">Forums</p>
               <Link to={'/login'}>
                <p className="redirect3">Sign In</p>
               </Link>
            </div>
        )
    }
}

export default Nav