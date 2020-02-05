import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
        <Map
         google={this.props.google} zoom={4}
         initialCenter={{
          lat: 51.509865,
          lng: -0.118092
        }}
          >


 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyASYegQUtea-hnik-mLh749REFM5DVS_iA")
})(App)