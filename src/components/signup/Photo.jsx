import React, { Component } from "react";
import placeHolderImg from "../../img/placholder.png";
import Button from "@material-ui/core/Button";

class Photo extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="formSectionTitle">
          <h1>Lovely, lets choose a photo to use on your pass</h1>
        </div>
        <div className="photoFrame">
          <img src={placeHolderImg} alt="Place Holder" />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Choose a Photo
        </Button>
      </>
    );
  }
}

export default Photo;
