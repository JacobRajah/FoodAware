import React, { Component } from 'react';
import axios from 'axios';

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
           <ul>
               {this.state.customers.map((e,i) => {
                   return(
                    <li>{e.firstName} {e.lastName}</li>
                   );
               })}
           </ul>
       )
    }
}

export default Home