import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";
import Commit from "../Commit";
import "./style.css";


function ActionDisp(props) {
  return (
    <div className={!props.hide ? "displayNone" : ""}>
      <a className="links" href={props.url} target={"_blank"}>
        <div className="card">
          <div onClick={props.checkCommit} className="card-body">

            <p
              id={`${props.id}`}
              aria-label="click item"

              href={props.url}
              //style={{ backgroundImage: `url("${props.image}")` }}
              className={` box`}

            >
              {`${props.title} \n ${props.summary}`}
            </p>

          </div>
        </div>
      </a>

      {props.commitStatus ? <Commit checkCommit={props.checkCommit} current={props.action} visible={true} username={props.username}></Commit> : ""}
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<ActionDisp />, container);

export default ActionDisp;