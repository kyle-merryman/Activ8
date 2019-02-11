import React from "react";
import React, { Component } from "react";
import "./style.css";
import Commit from "../Commit";

class DispPet(petition) extends Component{

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
    <p title={petition.title}
      id={`${petition.id}`}
      aria-label="click item"
      onClick={toggleOn}
      href={petition.url}
      className={`${petition.handleActivePassions} test click-item${petition.shake ? " shake" : ""} inactive`}
    >{petition.title}{petition.summary}</p>
    <Commit current={"petition"} visible={this.state.visible}></Commit>
    </div>
    )
  };
}

export default DispPet;