import React from "react";
import React, { Component } from "react";
import "./style.css";
import Commit from "../Commit";

class DispChar(charity) extends Component {

  state = {
    visible: false
  };

  render () {

    var toggleOn = function() {
      if (this.state.visible === true) {
          this.setState({visible: false})
      } else if (this.state.visible === false) {
          this.setState({visible: true});
      } else {
          console.log("ERROR");
      }
    }

    return (
    <div>
    <p name={charity.name}
      id={`${charity.id}`}
      aria-label="click item"
      onClick={toggleOn}
      href={charity.url}
      className={`${charity.handleActivePassions} test click-item${charity.shake ? " shake" : ""} inactive`}
    >{charity.name}</p>
    <Commit current={"donate"} visible={this.state.visible}></Commit>
    </div>
    )
  };
}

export default DispChar;