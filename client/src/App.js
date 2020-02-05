import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import List from './List';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
    return (
      <BrowserRouter>
        <Switch>
          <App/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;