import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Topnews from './topnews';
import Sport from './sport';
import People from './people';
import Life from './life';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="headertop">

          </div>
          <div className="headerlogo">

          </div>
          <div className="headermenu">

          </div>
          <div className="breadcrumbs">

          </div>
        </div>

        <Topnews />
        <Sport />
        <People />
        <Life />

        <Footer />
       
      </div>
    );
  }
}

export default App;
