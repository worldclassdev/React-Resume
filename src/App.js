import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main'
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper" >
            <Sidebar/>
            <Main/>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;   
