import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Headermenu from './headermenu';
import Footer from './footer';
import Topnews from './topnews';
import Sport from './sport';
import People from './people';
import Life from './life';
import Video from './video';
import Foto from './foto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="headertop">

          </div>
          <div className="headerlogo">

          </div>
          <Headermenu />
          <div className="breadcrumbs">

          </div>
        </div>

        <Topnews />
        <Sport />
        <People />
        <Life />
        <Video />
        <Foto />

        <Footer />
       
      </div>
    );
  }
}

export default App;
