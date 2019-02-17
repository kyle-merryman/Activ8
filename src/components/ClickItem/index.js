import React from "react";
import "./style.css";

function ClickItem(props) {
  //console.log("PROPS TEST: \n",props);
  return (
    <p 
      name={props.keywords}
      title={props.title}
      id={`${props.id}`}
      aria-label="click item"
      onClick={(e) => props.handleClick(props.id, e, props.keywords)}
      //style={{ backgroundImage: `url("${props.image}")` }}
      className={`${props.handleActivePassions} test click-item${props.shake ? " shake" : ""} inactive`}

    >{props.title}</p>
  );
}

export default ClickItem;
