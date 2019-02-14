import React from "react";
import "./style.css";

function ClickItem(props) {
  return (
    <p title={props.title}
      id={`${props.id}`}
      aria-label="click item"
      onClick={()=>props.handleClick(props.id)}
      //style={{ backgroundImage: `url("${props.image}")` }}
      className={`${props.handleActivePassions} test click-item${props.shake ? " shake" : ""} inactive`}

    >{props.title}</p>
  );
}
// test

export default ClickItem;
