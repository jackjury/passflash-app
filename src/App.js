import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";

class App extends Component {
  state = {
    signUp: {
      step: 1,
      isComplete: false,
    },
  };
  render() {
    if (!this.state.signUp.isComplete) {
      return <SignUp data={this.state.signUp} />;
    }
  }
}

export default App;
