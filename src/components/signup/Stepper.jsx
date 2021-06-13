import React, { Component } from "react";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

class Stepper extends Component {
  render() {
    return (
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={this.props.step}
        nextButton={
          <Button
            size="small"
            onClick={() => {
              this.props.updateAppState(); // This calls the function passed in from the parent component;
              this.props.functions.incrementStep();
            }}
            disabled={this.props.step === 3 || !this.props.currentComplete}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => {
              this.props.functions.decrementStep();
            }}
            disabled={this.props.step === 0}
          >
            Back
            <KeyboardArrowLeft />
          </Button>
        }
      />
    );
  }
}

export default Stepper;
