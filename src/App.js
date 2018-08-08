import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";

class App extends Component {

  constructor(){
    super();
    this.state = {
      speed: 1
    };
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child("react");
    const speedRef = rootRef.child("speed");
    speedRef.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
    // this.setState({
    //   speed:30
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>{this.state.speed}</h1>
        </p>
      </div>
    );
  }
}

export default App;
