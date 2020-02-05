import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Maps from "./Map"



class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Maps/>
    </div>
    );
  }
}
export default Home;