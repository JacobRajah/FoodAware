import React, { Component } from 'react';
import axios from 'axios';
import Nav from './navbar/navigation'
import Front from '../images/cover.webp'
import './home.css'
// Main generic page for non signed in
class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        axios.get('/api/customers').then(res => {
            this.setState({customers: res.data});
        })
    }

    render() {
       return(
           <div className="home">
                <Nav></Nav>
                <div className="face">
                    <img src={Front} alt="" className="front-photo"></img>
                    <div className="goal">
                        Fighting<br></br>Hunger.
                    </div>
                </div>
                <div className="stats">
                    <div className="box">
                        3000<br/>
                        <p>Grocers Connected</p>
                    </div>
                    <div className="box">
                        3000<br/>
                        <p>Grocers Connected</p>
                    </div>
                    <div className="box">
                        3000<br/>
                        <p>Grocers Connected</p>
                    </div>
                    <div className="box">
                        3000<br/>
                        <p>Grocers Connected</p>
                    </div>
                </div>
           </div>
       )
    }
}

export default Home