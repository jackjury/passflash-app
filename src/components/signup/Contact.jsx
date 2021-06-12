import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="formSectionTitle">
          <h1>Thanks NAME, how do we contact you?</h1>
        </div>
        <div className="form">
          <TextField
            id="Email"
            label="Email Address"
            variant="outlined"
            type="email"
          />
          <TextField
            id="Email-Confirm"
            label="Confirm Email Address"
            variant="outlined"
            type="email"
          />
          <TextField
            id="Mobile"
            label="Mobile Number"
            variant="outlined"
            type="tel"
          />
        </div>
      </>
    );
  }
}

export default Contact;
