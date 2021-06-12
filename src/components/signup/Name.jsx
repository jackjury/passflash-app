import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class NameInputs extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="formSectionTitle">
          <h1>What is your name?</h1>
        </div>
        <div className="form">
          <TextField id="First-Name" label="First Name" variant="outlined" />
          <TextField id="Last-Name" label="Last Name" variant="outlined" />
        </div>
      </>
    );
  }
}

export default NameInputs;
