import React, { Component } from "react";
import NameInputs from "./signup/Name";
import Contact from "./signup/Contact";
import Password from "./signup/Password";
import Photo from "./signup/Photo";
import Stepper from "./signup/Stepper";

class SignUp extends Component {
  state = {
    step: 1,
  };
  render() {
    return (
      <>
        <div className="signUp">{this.displayStep()}</div>
        <Stepper />
      </>
    );
  }

  displayStep() {
    console.log(this.props);
    let step = this.props.data.step;
    switch (true) {
      case step === 0:
        return <NameInputs />;

      case step === 1:
        return <Contact />;

      case step === 2:
        return <Password />;

      case step === 3:
        return <Photo />;
      default:
        return <NameInputs />;
    }
  }
}

export default SignUp;
