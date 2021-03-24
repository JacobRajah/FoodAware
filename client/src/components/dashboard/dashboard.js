import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../navbar/navigation'
// Logged on Dashboard for User
class Dashboard extends Component {
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
                <p>This is the users dashboard</p>
           </div>
       )
    }
}

export default Dashboard