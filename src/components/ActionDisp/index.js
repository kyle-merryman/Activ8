import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";
import Commit from "../Commit";
import "./style.css";


function ActionDisp(props) {
  return (
    <div>
    {/* <a href={props.url}> */}
    <p
      id={`${props.id}`}
      aria-label="click item"
      onClick={props.checkCommit}
      href={props.url}
      //style={{ backgroundImage: `url("${props.image}")` }}
      className={`${props.handleActivePassions} test click-item${props.shake ? " shake" : ""} inactive`}

    >
      {`${props.title} \n ${props.summary}`}
    </p>
    {props.commitStatus?<Commit checkCommit={props.checkCommit} current={props.action} visible={true} username={props.username}></Commit>:""}
    </div>
  );
}
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<ActionDisp />, container);

  export default ActionDisp;