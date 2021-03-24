import React, { Component } from 'react';
import axios from 'axios';
import Nav from './navbar/navigation'
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
           <div>
                <Nav></Nav>
                <p>This is the home page</p>
           </div>
       )
    }
}

export default Home