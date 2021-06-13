import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Stepper from "./Stepper";

class Password extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="formSectionTitle">
          <h1>Great, lets set a password</h1>
          <p>
            Passwords need to be longer than 8 charectors, contain at least one
            of each the following
          </p>
          <ul>
            <li>Lower Case Letter</li>
            <li>Upper Case Letter</li>
            <li>Number</li>
            <li>Special Charector</li>
          </ul>
        </div>
        <div className="form">
          <TextField
            id="Password"
            label="Enter A Password"
            variant="outlined"
            type="password"
          />
          <TextField
            id="Email-Confirm"
            label="Confirm Password"
            variant="outlined"
            type="password"
          />
        </div>
        <Stepper functions={this.props.functions} step={this.props.step} />
      </>
    );
  }
}

export default Password;
