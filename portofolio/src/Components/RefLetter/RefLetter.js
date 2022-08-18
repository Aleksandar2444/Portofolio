import "./RefLetter.css";
import refLetter from "../../images/ref-letter.jpg";
import React, { Component } from "react";
import ModalImage from "react-modal-image";

class ReferenceLetter extends Component {
  // state = { refLetter };

  render() {
    // const { refLetter } = this.state;

    return (
      <div>
        <ModalImage
          small={refLetter}
          large={refLetter}
          className="ref_img"
          alt="Reference Letter"
        />
      </div>
    );
  }
}

export default ReferenceLetter;
