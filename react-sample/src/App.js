import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
  constructor()
 {
   super()
   this.name="Smtechworld";
 }
  render()
   {

    return (
     
     
          <h2>Welcome to {this.name} </h2>
       
    );
  }
}

export default App;