import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";

class App extends Component {
  state = {
    signUp: {
      step: 0,
      isComplete: false,
    },
    user: {
      firstName: null,
      lastName: null,
      setName: (first, last) => {
        console.log(`input is: ${first} ${last}`);
        this.setState({
          ...this.state,
          user: {
            ...this.state.user,
            userisok: true,
          },
          anotherthis: true,
        });
      },
      emailaddress: null,
      mobileNumber: null,
      password: null,
    },
  };
  render() {
    console.log(this.state);
    if (!this.state.signUp.isComplete) {
      return (
        <SignUp
          data={this.state.signUp}
          user={this.state.user}
          functions={this.functions}
        />
      );
    }
  }
  functions = {
    incrementStep: () => {
      this.setState({
        ...this.state,
        signUp: {
          ...this.state.signUp,
          step: this.state.signUp.step + 1,
        },
      });
    },
    decrementStep: () => {
      this.setState({
        ...this.state,
        signUp: {
          ...this.state.signUp,
          step: this.state.signUp.step - 1,
        },
      });
    },
  };
}

export default App;
