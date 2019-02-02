import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="header">
      <h1>{props.header}</h1>
    </header>
  );
}

export default Header;