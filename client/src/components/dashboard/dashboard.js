import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../navbar/navigation'
// Logged on Dashboard for User
class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        axios.get('/user').then(res => {
            this.setState({user: res.data});
        })
    }

    render() {
       return(
           <div>
                <Nav></Nav>
                <p>This is the users dashboard</p>
                {this.state.user !== {} && this.state.user.grocer === true ? 
                    <p>Grocer: True</p>: 
                    <p>Grocer: False</p>}
           </div>
       )
    }
}

export default Dashboard