import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../navbar/navigation'

class Main extends Component {
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
           </div>
       )
    }
}

export default Main