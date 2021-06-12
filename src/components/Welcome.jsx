import React, { Component } from "react";
import logoGif from "../img/Pass Flash Logo.gif";
import Button from "@material-ui/core/Button";

class Welcome extends Component {
  render() {
    return (
      <div className="welcomeImg">
        <img src={logoGif} alt="Passflash Logo" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Get Started
        </Button>
      </div>
    );
  }
}

export default Welcome;
