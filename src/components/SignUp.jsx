import React, { Component } from "react";
import NameInputs from "./signup/Name";
import Contact from "./signup/Contact";
import Password from "./signup/Password";
import Photo from "./signup/Photo";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="signUp">{this.displayStep()}</div>
      </>
    );
  }

  displayStep() {
    let step = this.props.data.step;
    switch (true) {
      case step === 0:
        return (
          <NameInputs
            functions={this.props.functions}
            user={this.props.user}
            step={this.props.data.step}
          />
        );

      case step === 1:
        return (
          <Contact
            functions={this.props.functions}
            user={this.props.user}
            step={this.props.data.step}
          />
        );

      case step === 2:
        return (
          <Password
            functions={this.props.functions}
            user={this.props.user}
            step={this.props.data.step}
          />
        );

      case step === 3:
        return (
          <Photo
            functions={this.props.functions}
            user={this.props.user}
            step={this.props.data.step}
          />
        );
      default:
        return (
          <NameInputs
            functions={this.props.functions}
            user={this.props.user}
            step={this.props.data.step}
          />
        );
    }
  }
}

export default SignUp;
