import React from "react";
import "./style.css";

function ClickItem(props) {
  return (
    <p
    id={`${props.id}`}
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      //style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""} inactive`}

    >{props.title}</p>
  );
}

export default ClickItem;
