import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Stepper from "./Stepper";
let stepIsComplete = false;

class NameInputs extends Component {
  state = {};
  render() {
    this.validateInput();
    return (
      <>
        <div className="formSectionTitle">
          <h1>What is your name?</h1>
        </div>
        <div className="form">
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            value={this.props.user.firstName}
            onChange={(e) => {
              this.setState({ ...this.state, firstName: e.target.value });
            }}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            value={this.props.user.lastName}
            onChange={(e) => {
              this.setState({ ...this.state, lastName: e.target.value });
            }}
          />
        </div>
        <Stepper
          functions={this.props.functions}
          step={this.props.step}
          currentComplete={stepIsComplete}
          updateAppState={this.updateAppState}
        />
      </>
    );
  }
  validateInput = () => {
    if (this.state.firstName && this.state.lastName) {
      stepIsComplete = true;
    }
  };
  updateAppState = () => {
    this.props.user.setName(this.state.firstName, this.state.lastName);
  };
}

export default NameInputs;
