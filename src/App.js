import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Main from './Main'
import Header from './Header'

class App extends Component {
  
  render() {    
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
