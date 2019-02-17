import React, { Component } from "react";
import "./style.css";
import axios from "axios";
// var db = require("../db/models");

const Commit = (props) => {
  var action = props.current;
  function commitTo(action) {
    var action = {
      action: action
    }
    props.checkCommit();
    axios.put("/auth/updateCommit", action).then(() => {



    }).catch(err => console.log(err))

  }

  return (
    <div className={'modal display-block'/*showHideClassName*/}>
      <section className='modal-main'>
        <h2>Commit to this?</h2>
        <button className="b"
          onClick={() => commitTo(action)}
        >
          Yes
          </button>
        <button className="b "
          onClick={props.checkCommit}
        >
          No
          </button>
      </section>
    </div>
  );
};

export default Commit;
