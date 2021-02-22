import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/signin/signPage'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;