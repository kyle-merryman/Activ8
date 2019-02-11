import React from "react";
import React, { Component } from "react";
import "./style.css";
import Commit from "../Commit";

class DispEve extends Component {

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
    <p title={event.title}
      id={`${event.id}`}
      aria-label="click item"
      onClick={toggleOn}
      href={event.url}
      className={`${event.handleActivePassions} test click-item${event.shake ? " shake" : ""} inactive`}
    >{event.title}{event.summary}</p>
    <Commit current={"event"} visible={this.state.visible}></Commit>
    </div>
    )
  };
}

export default DispEve;